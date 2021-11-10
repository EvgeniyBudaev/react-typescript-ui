from django.test import TestCase, Client
from django.contrib.auth import get_user_model
from django.urls import reverse

User = get_user_model()


class AdminSiteTests(TestCase):

    def setUp(self):
        self.client = Client()
        self.admin_user = User.objects.create_superuser(
            first_name='John',
            last_name='Doe',
            phone_number='89998887766',
            email='test@gmail.com',
            password='test12345',
        )
        self.client.force_login(self.admin_user)
        self.admin_user = User.objects.create_user(
            first_name='John',
            last_name='Doe',
            phone_number='89998887766',
            email='test@gmail.com',
            password='test12345',
        )

    # def test_users_listed(self):
    #     """Test that users are listed on user page."""
    #     url = reverse('admin:core_user_changelist')
    #     res = self.client.get(url)
    #
    #     self.assertContains(res, self.user.first_name)
    #     self.assertContains(res, self.user.last_name)
    #     self.assertContains(res, self.user.phone_number)
    #     self.assertContains(res, self.user.email)

    def test_create_user_page(self):
        """Test that the create user page works"""
        url = reverse('admin:core_user_add')
        res = self.client.get(url)

        self.assertEqual(res.status_code, 200)
