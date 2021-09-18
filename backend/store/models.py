from django.db import models


class Product(models.Model):
    """Модель продукта."""
    title = models.CharField(max_length=200, null=True, blank=True,
                             verbose_name='Наименование товара')
    price = models.DecimalField(max_digits=8, decimal_places=2, null=True,
                                blank=True, verbose_name='Цена')
    slug = models.SlugField(max_length=255, unique=True,
                            verbose_name='URL продукта')
    image = models.ImageField(null=True, blank=True,
                              upload_to='photos/%Y/%m/%d/',
                              default='/placeholder.png',
                              verbose_name='Изображение продукта')
    date_created = models.DateTimeField(auto_now_add=True, db_index=True,
                                        verbose_name='Дата создания')

    class Meta:
        ordering = ['date_created']
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'

    def __str__(self):
        return self.title
