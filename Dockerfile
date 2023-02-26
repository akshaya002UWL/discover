FROM node:lts

WORKDIR /usr/src/app

RUN npm install 

RUN chown -Rh node:node /usr/src/app

USER node

EXPOSE 3000

#CMD [ "sh", "-c", "npm install && npm run start" ]

#FOR PROD
 CMD [ "sh", "-c", "npm install && npm run build" ]
