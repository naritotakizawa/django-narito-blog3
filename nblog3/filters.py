from django.db.models import Q
from rest_framework import filters


class IsPublicOrSuperAll(filters.BaseFilterBackend):

    def filter_queryset(self, request, queryset, view):
        if request.user.is_superuser:
            return queryset
        else:
            return queryset.filter(is_public=True)


class PostSearch(filters.BaseFilterBackend):

    def filter_queryset(self, request, queryset, view):
        keyword = request.query_params.get('keyword', None)
        if keyword:
            queryset = queryset.filter(
                Q(title__icontains=keyword) | Q(lead_text__icontains=keyword) | Q(main_text__icontains=keyword))

        category = request.query_params.get('category', None)
        if category:
            queryset = queryset.filter(category=category)

        return queryset
