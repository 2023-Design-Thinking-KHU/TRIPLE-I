from django.urls import include, path
from rest_framework import routers
from .views import PortfolioViewSet
from .download import download_weights_csv
router = routers.DefaultRouter()
router.register(r'portfolio', PortfolioViewSet, basename='portfolio')

app_name = 'portfolio'

urlpatterns = [
    path('', include(router.urls)),
    path('download_weights/', download_weights_csv, name='download_weights_csv'),
]
