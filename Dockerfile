FROM python:3.6-alpine

RUN adduser -D ec2-user

WORKDIR /home/server

COPY Pipfile Pipfile
RUN pip install --user pipenv
RUN pipenv install
RUN pipenv shell
RUN pipenv install gunicorn

COPY app app
COPY migrations migrations
COPY server.py config.py boot.sh ./
RUN chmod +x boot.sh

ENV FLASK_APP server.py

RUN chown -R ec2-user:ec2-user ./
USER ec2-user

EXPOSE 5000
ENTRYPOINT ["./boot.sh"]