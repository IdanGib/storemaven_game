FROM node:16-alpine
WORKDIR /app
COPY . . 
WORKDIR /app/server
RUN npm install
EXPOSE 4000
CMD ["npm", "start"]