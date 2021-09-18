from django_filters import rest_framework as df_filters

from store.models import Product


class CharFilterInFilter(df_filters.BaseInFilter, df_filters.CharFilter):
    pass


class ProductFilter(df_filters.FilterSet):
    price = df_filters.RangeFilter()

    class Meta:
        model = Product
        fields = ('price',)
