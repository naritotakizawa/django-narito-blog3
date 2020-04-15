import os
from setuptools import find_packages, setup

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
README_PATH = os.path.join(BASE_DIR, 'README.md')
README = open(README_PATH, 'r', encoding='utf-8').read()

setup(
    name='django-narito-blog3',
    version='1.0',
    description='simple blog',
    long_description=README,
    long_description_content_type='text/markdown',
    author='Narito Takizawa',
    author_email='toritoritorina@gmail.com',
    url='https://github.com/naritotakizawa/django-narito-blog3/',
    packages=find_packages(exclude=('tests','project')),
    install_requires=('djangorestframework', 'pillow'),
    include_package_data=True,
    license='MIT',
)