# Step 1: Use official Node.js image
FROM node:18-alpine AS builder

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy rest of the source code and build the app
COPY . .
RUN npm run build

# Step 5: Use a lightweight web server to serve the built app
FROM nginx:alpine

# Step 6: Copy the build output to Nginx's public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Step 7: Copy custom nginx config (optional but recommended)
# Uncomment the next line if you have a custom nginx.conf file
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Step 8: Expose port 80 and start Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
