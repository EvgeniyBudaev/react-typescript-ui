from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from rest_framework import generics
from django.http import HttpResponse
from wsgiref.util import FileWrapper

from uploader.models import File
from .serializers import FileSerializer


class FileViewSet(viewsets.ModelViewSet):
    """API для работы с файлами."""
    queryset = File.objects.all()
    serializer_class = FileSerializer
    permission_classes = (AllowAny,)


class FileDownloadListAPIView(generics.ListAPIView):

    def get(self, request, id, format=None):
        queryset = File.objects.get(id=id)
        file_handle = queryset.file.path
        document = open(file_handle, 'rb')
        response = HttpResponse(FileWrapper(document), content_type='application/msword')
        response['Content-Disposition'] = 'attachment; filename="%s"' % queryset.file.name
        return response