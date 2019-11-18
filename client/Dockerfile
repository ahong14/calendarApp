FROM node:8
WORKDIR /app/src/client
ADD ./ ./
RUN npm install --silent
EXPOSE 3000
CMD [ "npm" , "run" , "start" ]