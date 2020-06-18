FROM mhart/alpine-node:12

COPY . /home/node/birthdaygreeter

RUN cd /home/node/birthdaygreeter && npm config set registry=http://registry.npm.taobao.org && npm install --production

WORKDIR /home/node/birthdaygreeter

CMD ["npm", "start"]
