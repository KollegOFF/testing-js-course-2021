FROM ubuntu:20.04
ENV PROJECT=Integration

RUN sudo apt update
RUN sudo apt install nodejs

RUN	git clone --depth=50 https://github.com/Flexberry/testing-js-course-2021.git /integration-src && \
  cd /integration-src/$PROJECT

RUN npm install
RUN npx json-server ./src/db.json

EXPOSE 3000