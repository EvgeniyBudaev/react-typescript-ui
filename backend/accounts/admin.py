from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext as _

from .models import UserAccount


class UserAdmin(BaseUserAdmin):
    list_display = ('email', 'firstName', 'lastName', 'phoneNumber',
                    'last_login', 'data_joined', 'is_active')
    list_display_links = ('email',)
    readonly_fields = ('last_login', 'data_joined')
    ordering = ('email',)
    filter_horizontal = ()
    list_filter = ()
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal Info'), {'fields': ('firstName', 'lastName',
                                         'phoneNumber')}),
        (
            _('Permissions'),
            {'fields': ('is_active', 'is_staff', 'is_admin', 'is_superuser')}
        ),
        (_('Important dates'), {'fields': ('last_login',)})
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2')
        }),
    )


admin.site.register(UserAccount, UserAdmin)
