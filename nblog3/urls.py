from django.urls import path
from . import views

app_name = 'nblog3'

urlpatterns = [
    path('api/posts/', views.PostList.as_view(), name='post_list'),
    path('api/posts/<int:pk>/', views.PostDetail.as_view(), name='post_detail'),
    path('api/categories/', views.CategoryList.as_view(), name='category_list'),
    path('', views.Top.as_view(), name='top'),
    path('<path:path>', views.Top.as_view(), name='top_sub'),
]
