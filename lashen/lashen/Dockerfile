# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm i -f

# Copy the app files to the working directory
COPY . .  

# Expose the port the app runs o
EXPOSE 8000

# Command to run your application
CMD ["npm", "start"]
