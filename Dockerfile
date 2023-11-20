FROM node
WORKDIR app-home
COPY . . 
RUN npm i
CMD ["node","server.js"]
