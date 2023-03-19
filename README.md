# TO DO App

A Full-stack application for tracking tasks. Front-end is bulit with react. (<a href="https://github.com/tomicilija/to-do_backend" target="blank">Back-end source code</a>) 

## How to run app on local machine

<b>First we need to setup backend application using Docker images:</b>
<br /> 
Download Postgres database image

```bash
docker pull ilija17/to-do_backend:db
```

Download NodeJs image

```bash
docker pull ilija17/to-do_backend:apis
```

<br />
<b>Run Docker containers:</b>
<br />
Run Postgres database container

```bash
docker run --name pg -e POSTGRES_PASSWORD=admin -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=to-do -p 35000:5432 -d ilija17/to-do_backend:db
```

Run NodeJs container

```bash
docker run --name api -e DATABASE_URL=postgres://postgres:admin@postgres:5432/to-do -e NODE_ENV=dev -e PORT=5000 --link pg:postgres -p 5050:5000 -d ilija17/to-do_backend:apis
```


<br />
<b>Clone and Run client:</b>

Clone repo

```bash
git clone https://github.com/tomicilija/to-do_frontend.git
```

Move to folder

```bash
cd .\to-do_frontend\
```

Install dependencies

```bash
npm install
```

Run the App

```bash
npm start
```


<br /> <br /> <br />
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
