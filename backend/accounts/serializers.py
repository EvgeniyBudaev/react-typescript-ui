from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model


User = get_user_model()


class UserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        ref_name = "_user"
        fields = ('id', 'first_name', 'last_name', 'phone_number', 'is_active',
                  'is_staff', 'is_admin', 'is_superuser', 'email', 'password')
