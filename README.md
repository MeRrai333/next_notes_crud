<p>This project used NextJS Prisma and Postgresql</p>

<h3>How to start</h3>
<br/>
<h4>Docker</h4>
<ul type="1">
  <li>docker run <code style="color : red">docker-compose up -d postgres</code> for create database container</li>
  <li>docker run <code style="color : red">docker-compose up -d next-notes --build</code> for create web container</li>
</ul>
<br/>
<h4>npm run dev</h4>
<ul type="1">
  <li>run <code style="color : red">npm install</code></li>
  <li>edit .env file and add DATABASE_URL="postgresql://user:pass@url:port/yourdatabasae?schema=public"</li>
  <li>create database from previous bullet</li>
  <li>run <code style="color : red">npx prisma migrate dev</code> for create table</li>
  <li>npm run dev</li>
</ul>
