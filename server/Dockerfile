FROM node:8
WORKDIR /app/src/server
ADD ./ ./
RUN npm install --silent
EXPOSE 4000
CMD [ "node" , "app.js"]