from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import FileViewSet, FileDownloadListAPIView, ProductViewSet

router = DefaultRouter()
router.register('files', FileViewSet, basename='files')
router.register('products', ProductViewSet, basename='products')

urlpatterns = [
    path('v1/', include(router.urls)),
    path('v1/auth/', include('djoser.urls')),
    path('v1/auth/', include('djoser.urls.jwt')),
    path('v1/download/<int:id>/', FileDownloadListAPIView.as_view())
]
