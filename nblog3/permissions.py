from rest_framework.permissions import BasePermission


class IsPublicPost(BasePermission):

    def has_object_permission(self, request, view, object):
        return bool(object.is_public)


class IsSuperUser(BasePermission):

    def has_object_permission(self, request, view, object):
        return bool(request.user.is_superuser)
