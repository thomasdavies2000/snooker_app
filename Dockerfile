# pull official base image
FROM --platform=linux/aarch64  python:3.10 

ARG TENSORFLOW_VERSION=v2.9.1
# set working directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# add and install requirements
COPY ./requirements.txt .
RUN pip install -r requirements.txt
RUN apt-get update && apt-get install ffmpeg libsm6 libxext6  -y
# add app
COPY . .

# run server
CMD python manage.py run -h 0.0.0.0