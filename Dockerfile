FROM node
WORKDIR containershome
COPY . . 
RUN npm i
CMD ["node","server.js"]
