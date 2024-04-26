<h3>How to start</h3>
<br/>
<h5>Docker</h5>
<ul type="1">
  <li>run <code style="color : red">npm install</code></li>
  <li>create .env file and add DATABASE_URL="postgresql://root:pass@pgdb:5432/nextcrud?schema=public"</li>
  <li>docker run <code style="color : red">docker-compose up -d --build</code> (dockerfile run in dev mode)</li>
</ul>
<br/>
<h5>npm run dev</h5>
<ul type="1">
  <li>run <code style="color : red">npm install</code></li>
  <li>create .env file and add DATABASE_URL="postgresql://user:pass@url:port/yourdatabasae?schema=public"</li>
  <li>create database from previous bullet</li>
  <li>run <code style="color : red">npx prisma migrate dev</code> for create table</li>
  <li>npm run dev</li>
</ul>
