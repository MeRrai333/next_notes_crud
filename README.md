<p>This project used NextJS Prisma and Postgresql</p>

<h3>How to start</h3>
<br/>
<h5>Docker</h5>
<ul type="1">
  <li>docker run <code style="color : red">docker-compose -f docker-compose-db.yml up -d</code> for create database</li>
  <li>docker run <code style="color : red">docker-compose up -d --build</code></li>
  <li>if occour error can't reach database in next-notes-crud container just restart docker-compose</li>
</ul>
<br/>
<h5>npm run dev</h5>
<ul type="1">
  <li>run <code style="color : red">npm install</code></li>
  <li>edit .env file and add DATABASE_URL="postgresql://user:pass@url:port/yourdatabasae?schema=public"</li>
  <li>create database from previous bullet</li>
  <li>run <code style="color : red">npx prisma migrate dev</code> for create table</li>
  <li>npm run dev</li>
</ul>
