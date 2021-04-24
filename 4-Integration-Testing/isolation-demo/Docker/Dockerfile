FROM ubuntu:20.04
EXPOSE 3000
ENV PROJECT=4-Integration-Testing/isolation-demo

RUN apt-get -y update
RUN apt-get -y install nodejs
RUN apt-get -y install npm
RUN apt-get -y install git

RUN npm install -g json-server

RUN	git clone https://github.com/Flexberry/testing-js-course-2021.git /integration-src

ENTRYPOINT ["json-server", "--host", "0.0.0.0", "--watch"]

CMD ["/integration-src/4-Integration-Testing/isolation-demo/src/db.json"]