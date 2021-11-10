from django.test import TestCase
from django.contrib.auth import get_user_model

User = get_user_model()


class ModelTests(TestCase):

    def test_create_user_with_email_successful(self):
        """Test creating a new user with an email is successful."""
        first_name = 'John'
        last_name = 'Doe'
        phone_number = '89998887766'
        email = 'test@gmail.com'
        password = 'test12345'
        user = User.objects.create_user(
            first_name=first_name,
            last_name=last_name,
            phone_number=phone_number,
            email=email,
            password=password
        )

        self.assertEqual(user.first_name, first_name)
        self.assertEqual(user.last_name, last_name)
        self.assertEqual(user.phone_number, phone_number)
        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))
