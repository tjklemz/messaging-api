# Code and Coffee
A sample API with database.

## Install
`npm install`

You might need to manually specify `python2.7`:
e.g. `npm install --python=python2.7`

## Database

You can create the database using the included `create-db.psql` file.
Then, export the appropriate environment variables:
```bash
export PGUSER=postgres
export PGHOST=localhost
export PGPASSWORD=mysecretpassword
export PGDATABASE=code_and_coffee
export PGPORT=5432
```

## Start
`npm start` or `npm watch` (for live reloading on file changes)

## Querying API

Create User:
```bash
curl -sSf -X POST localhost:3000/users \
  -H 'Content-Type: application/json' \
  -d '{ "name": "Bob", "password": "yoyo" }'
```

Get Users:
`curl -sSf -X GET localhost:3000/users`

Note: You can pipe these to the `jq` tool (`brew install jq` on macOS) for better
formatting.