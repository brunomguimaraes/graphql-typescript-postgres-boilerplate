# GraphQL + TypeScript + PostgresSQL + Apollo Server Boilerplate
I was tired of doing everything from scratch everytime, so i build this boilerplate since it's my favorite 2020's backend stack(Typescript+Postgres+GraphQL+Apollo Server). 

## Requirements
- NodeJS v12.16.3

## Step by step:
### Installation 
`yarn install` or just `yarn`

<!---## Without Docker--->
### Set up dotenv(.env)
- Create `.env` file
- Set env variables

##### default:
```
POSTGRES_USER=user
POSTGRES_PASSWORD=root
POSTGRES_DB=database
```

### Migrate

`yarn migrate:up`

### Generate types
Run `yarn dev`, open another terminal window and run `generate:types`

### Run

`yarn dev`

### Build

`yarn build`
