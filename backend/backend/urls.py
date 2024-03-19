
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('api/',include('api.urls')),
    path('profile/',include('Profile.urls')),
    path('predict_disease/',include('model.urls')),
]
# http://127.0.0.1:8000/predict_disease/predict