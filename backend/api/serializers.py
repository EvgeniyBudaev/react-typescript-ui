from rest_framework import serializers

from uploader.models import File
from store.models import Product


class FileFieldSerializer(serializers.FileField):

    def to_representation(self, value):
        file_value = super(FileFieldSerializer, self).to_representation(value)
        data = {'value': file_value, 'size': value.size, 'path': value.path}
        return data


class FileSerializer(serializers.ModelSerializer):
    file = FileFieldSerializer()

    class Meta:
        model = File
        fields = ('file',)


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('id', 'title', 'slug', 'price', 'image', 'date_created')
        read_only_fields = ('id',)
        lookup_field = 'slug'
