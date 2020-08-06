# GraphQL + TypeScript + PostgresSQL + Apollo Server Boilerplate
I was tired of doing everything from scratch everytime, so i build this boilerplate since it's my favorite 2020's backend stack(Typescript+Postgres+GraphQL+Apollo Server using docker). 

<p align="center">
  <img src="https://i.imgur.com/aYycQBm.png" align="center" width="160" height="160" />
  <img src="https://i.imgur.com/4uxbL65.png" align="center" width="160" height="160" />
  <img src="https://i.imgur.com/MLjSw2C.png" align="center" width="160" height="160" />
  <img src="https://i.imgur.com/l3CKuud.png" align="center" width="160" height="160" />
  <img src="https://i.imgur.com/Lfl7EIS.png" align="center" width="160" height="160" />
</p>

## Requirements
- NodeJS v12.16.3
- Docker v2.3.0.4
- Postgres v2.3.5 

## Step by step:
### Installation 
`yarn install` or just `yarn`

### Set up dotenv(.env)
- Create `.env` file
- Set env variables

##### my defaults(create your own!):
```
POSTGRES_USER=docker
POSTGRES_PASSWORD=docker
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=database
POSTGRES_PORT=54320
```
### Create docker container
`docker-compose up -d`

### Create DB(migrations)

`yarn migrate:up`

### Generate types
Run `yarn dev`, open another terminal window and run `yarn generate:types`

### Run

`yarn dev`

### Build

`yarn build`
