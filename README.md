<h3>How to start</h3>
<br/>
<h5>Docker</h5>
<ul type="1">
  <li>run npm install</li>
  <li>create .env file and add DATABASE_URL="postgresql://root:pass@pgdb:5432/nextcrud?schema=public"</li>
  <li>docker run docker-compose up -d --build(dockerfile run in dev mode)</li>
</ul>
<br/>
<h5>npm run dev</h5>
<ul type="1">
  <li>npm install</li>
  <li>create .env file and add DATABASE_URL="postgresql://user:pass@url:port/yourdatabasae?schema=public"</li>
  <li>create database from 2. </li>
  <li>run <span style="color: red;">npx prisma migrate dev</span>span> for create table</li>
  <li>npm run dev</li>
</ul>
