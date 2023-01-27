# from base image node
FROM node:18-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copying all the files from your file system to container file system
COPY package.json .

# install all dependencies
RUN npm install --production

# copy oter files as well
COPY ./ .

#expose the port
EXPOSE 3070

# command to run when intantiate an image
CMD ["npm","dev"]