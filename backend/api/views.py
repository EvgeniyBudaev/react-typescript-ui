from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from rest_framework import generics
from django.http import HttpResponse
from wsgiref.util import FileWrapper
import magic

from uploader.models import File
from .serializers import FileSerializer


class FileViewSet(viewsets.ModelViewSet):
    """API для работы с файлами."""
    queryset = File.objects.all()
    serializer_class = FileSerializer
    permission_classes = (AllowAny,)


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
        response = HttpResponse(FileWrapper(document), content_type=file_type)
        # print("[response]", response)
        headers = {
            'Content-Disposition': 'attachment; filename="%s"' % queryset.file.file,
        }
        print("headers", headers)
        response.headers['Content-Disposition'] = 'attachment; filename="%s"' % queryset.file.file
        print("[Disposition]", response)
        return response
