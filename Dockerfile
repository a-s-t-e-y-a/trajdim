# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json pnpm-lock.yaml* ./

# Install PNPM globally
RUN npm install -g pnpm

# Install app dependencies using PNPM
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Run prisma generate
RUN npx prisma generate

# Expose port 3000 to the outside world
EXPOSE 5000

# Command to run the application
CMD ["npm", "run", "dev"]

