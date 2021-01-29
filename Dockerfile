# What image do you want to start building on?
FROM node:latest
# FROM node:15.4.0

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/app

# Tell your container where your app's source code will live
WORKDIR /src/app

# What source code do you want to copy, and where to put it?
COPY . /src/app

# Does your app have any dependencies that should be installed?
RUN npm install

# What port will the container talk to the outside world with once created?
EXPOSE 3001

# How do you start your app?
# CMD [ "npm", "start", "build", "db:seed" ]
CMD [ "npm", "run", "docker:start" ]