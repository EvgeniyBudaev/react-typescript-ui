from rest_framework.renderers import JSONRenderer


class UTF8CharsetJSONRenderer(JSONRenderer):
    charset = 'utf-8'
