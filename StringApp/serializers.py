from rest_framework import serializers
from StringApp.models import Classic

class ClassicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classic
        fields = '__all__'