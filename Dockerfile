FROM node:10.15.3 as production
WORKDIR /app

COPY package*.json ./
RUN npm install && npm install --only=dev

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]


FROM production as dev

COPY docker/dev-entrypoint.sh /usr/local/bin/

ENTRYPOINT ["dev-entrypoint.sh"]
CMD ["npm", "run", "watch"]
