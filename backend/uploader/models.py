from django.db import models


class File(models.Model):
    """Модель файла."""
    name = models.CharField(max_length=999)
    file = models.FileField(default="", upload_to='files')
    encodedData = models.TextField()
