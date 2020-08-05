# GraphQL + TypeScript + PostgresSQL + Apollo Server Boilerplate
I was tired of doing everything from scratch everytime, so i build this boilerplate since it's my favorite 2020's backend stack(Typescript+Postgres+GraphQL+Apollo Server using docker)

## Requirements
- NodeJS v12.16.3
- Docker v2.3.0.4

## Step by step:
### Installation 
`yarn install`
### Set up dotenv(.env)
- Create `.env` file
- Set env variables

##### default:
```
POSTGRES_USER=docker
POSTGRES_PASSWORD=docker
POSTGRES_HOST=0.0.0.0
POSTGRES_DB=todo
POSTGRES_PORT=54320
```

### Create docker container 
`docker-compose up -d`

### Seed the database(optional)
`yarn seed`

### Run
`yarn dev`

### Production
`yarn start`

