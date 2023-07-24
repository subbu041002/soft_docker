FROM node:18-alpine
COPY . .
RUN npm install
RUN yarn install --production
CMD ["node", "app/src/index.js"]
EXPOSE 3000


