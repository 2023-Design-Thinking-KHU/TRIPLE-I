from django.urls import include, path
from rest_framework import routers
from .views import PortfolioViewSet

router = routers.DefaultRouter()
router.register(r'portfolio', PortfolioViewSet, basename='portfolio')

app_name = 'portfolio'

urlpatterns = [
    path('', include(router.urls)),
]
