from rest_framework import serializers

from uploader.models import File


class FileSerializer(serializers.ModelSerializer):
    # file = serializers.FileField(max_length=None, allow_empty_file=False)

    class Meta:
        model = File
        # fields = ('id', 'file')
        fields = '__all__'
