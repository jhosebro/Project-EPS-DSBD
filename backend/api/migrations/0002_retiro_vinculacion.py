# Generated by Django 4.1.3 on 2022-11-16 21:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Retiro',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField()),
            ],
            options={
                'db_table': 'retiro',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Vinculacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField()),
            ],
            options={
                'verbose_name_plural': 'vinculaciones',
                'db_table': 'vinculacion',
                'managed': False,
            },
        ),
    ]
