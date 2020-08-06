# GraphQL + TypeScript + PostgresSQL + Apollo Server Boilerplate
I was tired of doing everything from scratch everytime, so i build this boilerplate since it's my favorite 2020's backend stack(Typescript+Postgres+GraphQL+Apollo Server using docker). 

## Requirements
- NodeJS v12.16.3
- Docker v2.3.0.4

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
