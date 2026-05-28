A RELAX UNISEX SALON — Website Deployment Package
===================================================

REQUIREMENTS
------------
- Node.js 18 or higher
- npm (comes with Node.js)

SETUP & DEPLOYMENT
------------------
1. Upload the contents of this ZIP to your server.

2. Install the only dependency (Express):
      npm install

3. Start the server:
      npm start
   
   The website will be available at http://localhost:3000

4. To run on a different port, set the PORT environment variable:
      PORT=8080 npm start

USING A PROCESS MANAGER (recommended for production)
------------------------------------------------------
Install PM2 globally once:
      npm install -g pm2

Start the app with PM2:
      pm2 start server.js --name "a-relax-salon"

Make it restart on server reboot:
      pm2 startup
      pm2 save

NGINX REVERSE PROXY (optional)
-------------------------------
If you want to serve on port 80/443 via Nginx, add this to your Nginx config:

   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }

FILE STRUCTURE
--------------
  server.js       — Node.js/Express server that serves the static site
  package.json    — Node.js project file
  public/         — Built static website files (HTML, CSS, JS, images)
    index.html
    assets/

SUPPORT
-------
Contact: 9979644417
Address: FF-28 Fortune Gateway, Old Chhani Rd, Vadodara, Gujarat 390024
