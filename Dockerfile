FROM python:3.7-alpine

RUN adduser -D ec2-user

WORKDIR /home/ec2-user

RUN apk add --no-cache --virtual .build-deps gcc musl-dev
RUN pip install cython
RUN apk del .build-deps gcc musl-dev

COPY requirements.txt requirements.txt
RUN python -m venv venv
RUN pip install --upgrade pip
RUN venv/bin/pip install -r requirements.txt
RUN venv/bin/pip install gunicorn

COPY app app
COPY migrations migrations
COPY server.py config.py boot.sh ./
RUN chmod +x boot.sh

ENV FLASK_APP server.py

RUN chown -R ec2-user:ec2-user ./
USER ec2-user

EXPOSE 5000
ENTRYPOINT ["./boot.sh"]