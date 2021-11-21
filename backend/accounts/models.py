from django.db import models
from django.contrib.auth.models import (AbstractBaseUser, PermissionsMixin,
                                        BaseUserManager)


class UserAccountManager(BaseUserManager):
    def create_user(self, firstName, lastName, phoneNumber,
                    email, password=None, **extra_fields):
        """Creates and saves a new user"""
        if not email:
            raise ValueError('User must have an email address')
        user = self.model(
            firstName=firstName,
            lastName=lastName,
            phoneNumber=phoneNumber,
            email=self.normalize_email(email),
            password=password,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, firstName, lastName, phoneNumber, email,
                         password=None):
        """Creates and saves a new super user"""
        user = self.create_user(
            firstName=firstName,
            lastName=lastName,
            phoneNumber=phoneNumber,
            email=email,
            password=password
        )

        user.is_admin = True
        user.is_staff = True
        user.is_active = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    """Custom user model that supports using email instead of username"""
    firstName = models.CharField(max_length=255)
    lastName = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    phoneNumber = models.CharField(max_length=50)

    data_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now_add=True)
    last_logout = models.DateTimeField(null=True, blank=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ('firstName', 'lastName', 'phoneNumber')

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True
