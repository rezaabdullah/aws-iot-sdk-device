
WORKDIR /thing/index.js

RUN npm install

START node thing/index.js