from rest_framework import viewsets, filters
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import generics
from django.http import HttpResponse
from wsgiref.util import FileWrapper
import magic
import os
from corsheaders.defaults import default_headers
from django.http import FileResponse, StreamingHttpResponse
from django.utils.encoding import escape_uri_path  # кириллица в имени файла

from uploader.models import File
from store.models import Product
from .filters import ProductFilter
from .serializers import FileSerializer, ProductSerializer
from .pagination import Pagination


class FileViewSet(viewsets.ModelViewSet):
    """API для работы с файлами."""
    queryset = File.objects.all()
    serializer_class = FileSerializer
    permission_classes = (AllowAny,)


class ProductViewSet(viewsets.ModelViewSet):
    """API для работы с продуктами."""
    queryset = Product.objects.all()
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter,
                        filters.SearchFilter)
    filterset_class = ProductFilter
    ordering = ('price',)
    ordering_fields = ('price',)
    pagination_class = Pagination
    permission_classes = (AllowAny,)
    search_fields = ('title',)
    serializer_class = ProductSerializer


class FileDownloadListAPIView(generics.ListAPIView):

    def get_mime_type(self, file):
        """
        Get MIME by reading the header of the file
        """
        initial_pos = file.tell()
        file.seek(0)
        mime_type = magic.from_buffer(file.read(1024), mime=True)
        file.seek(initial_pos)
        return mime_type

    def get(self, request, id, format=None):
        queryset = File.objects.get(id=id)
        file_handle = queryset.file.path
        document = open(file_handle, 'rb')
        file_type = self.get_mime_type(queryset.file.file)
        # response = HttpResponse(FileWrapper(document), content_type=file_type)

        # response = HttpResponse(FileWrapper(document), headers={
        #     'Content-Type': f'application/vnd.ms-excel',
        #     'Content-Disposition': 'attachment; filename="foo.xls"',
        # })
        # response.headers[
        #     'Content-Disposition'] = 'attachment; filename="%s"' % queryset.file.file

        # response = HttpResponse(content_type='application/creole')

        # filename = "sample.creole"
        # response.headers[
        #     'Content-Disposition'] = 'attachment; filename={}'.format(filename)
        # return response

        # response = HttpResponse(FileWrapper(document), content_type=file_type)
        # response['Content-Disposition'] = 'Attachment; filename="%s"' % queryset.file.file

        response = HttpResponse(FileWrapper(document),
                                     content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="foo.xls"'
        return response
