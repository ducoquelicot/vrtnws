FROM python:3.7-buster

RUN adduser --disabled-password ec2-user

WORKDIR /home/ec2-user

COPY requirements.txt requirements.txt
RUN python3 -m venv venv
RUN venv/bin/pip install --upgrade pip
RUN venv/bin/pip install -r requirements.txt
RUN venv/bin/pip install gunicorn pymysql
RUN venv/bin/pip install gunicorn[gevent]
RUN venv/bin/pip install flask

COPY app app
RUN mkdir app/uploads
COPY migrations migrations
COPY server.py config.py boot.sh ./
RUN chmod +x boot.sh

ENV FLASK_APP server.py

RUN chown -R ec2-user:ec2-user ./
USER ec2-user

EXPOSE 5000
ENTRYPOINT ["./boot.sh"]