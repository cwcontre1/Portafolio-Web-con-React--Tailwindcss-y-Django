# Generated by Django 3.2.16 on 2024-04-08 06:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contact',
            options={'ordering': ('-date_created',)},
        ),
    ]
