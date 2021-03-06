# Generated by Django 3.2.7 on 2021-11-21 05:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=200, null=True, verbose_name='Наименование товара')),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=8, null=True, verbose_name='Цена')),
                ('slug', models.SlugField(max_length=255, unique=True, verbose_name='URL продукта')),
                ('image', models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to='photos/%Y/%m/%d/', verbose_name='Изображение продукта')),
                ('date_created', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='Дата создания')),
            ],
            options={
                'verbose_name': 'Продукт',
                'verbose_name_plural': 'Продукты',
                'ordering': ['date_created'],
            },
        ),
    ]
