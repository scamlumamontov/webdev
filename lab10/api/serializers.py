from rest_framework import serializers

class ProductSerialize(serializers.Serializer): # From object to Json (lame)
    name = serializers.CharField(max_length=100)
    price = serializers.FloatField()
    description = serializers.CharField(default="No description", max_length=500)
    count = serializers.IntegerField(default=0)
    is_active = serializers.BooleanField(default=1)
    category_id = serializers.IntegerField(default=1)


"""
class ProductSerialize2(serializers.Serializer): #Makes model from dict
    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'description')
"""