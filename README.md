# Stotles work sample assignment

## Getting started

This sample codebase consists of a separate client & server code.

It's set up in a simple way to make it as easy as possible to start making changes,
the only requirement is having recent versions of `node` & `npm` installed.

This is not a production ready configuration (nor production ready code),
it's only set up for easy development, including live reload.

To run the client bundler:

```
cd client
npm install
npm run dev
```

The processed code will be available at http://localhost:3001

To start the server:

```
cd server
npm install
npm run dev
```

The server will be available at http://localhost:3000 - the page is automatically configured
to use the assets served by vite on port 3001.

You should see something similar to this page:

![Search page](./screenshot.png)

### Disabling/Enabling TypeScript

If you prefer to completely disable TypeScript for a file, add `// @ts-nocheck` on the first line.
If on the other hand you'd like to enable strict type checking, modify `tsconfig.json` according to your needs.

Note that you can import plain JavaScript files that won't be fully typechecked.

### Browsing the database

You should start by looking at the migration in `./migrations` folder.
If you prefer to browse the DB using SQL, you can use the sqlite command line (just run `sqlite3 ./db.sqlite3`)
or any other SQL client that supports sqlite.

If for any reason the database becomes unusable, you can rebuild it using `./reset_db.sh` script`.

## The task

All the instructions are available [here](https://www.notion.so/stotles/Full-stack-software-engineer-work-sample-assignment-ae7c64e08f2a42a097d16cee4bc661fc).

Progress made in the assignment: I have completed the warm-up changes (compulsory) from the notion page. Since I haven't really worked with a similar setup before, it took e a bit of time to get my head around typescript, postgres and apis defined this way to interact with the DB. I got there in the end but I used up the 3h time so I was not able to get to the "task" mentioned on the notion page.
How I would have done it if I had more time:
- Create a new endpoint similar to the /api/records, could be /api/buyers and build the necessary logic: DB query on the server/src/server/main.ts file, the BuyerDto type in server/src/server/api_types.ts can be reused in this case as the data structure for the buyers. Then on client/src/Api.ts I would define the SearchBuyerResponse structure similar to what is already done for SearchRecordsResponse. The I would create a new Api method in that client/src/Api.ts file called searchBuyers with the path /api/buyers similarly to what is already implemented for /api/records also with POST method and JSON response.
- Frontend changes: I would also create a new tsx file under client/scr/ named BuyerSearchFilters.tsx to display the dropdown with the buyers from the DB retrieved with the new method I explained above /api/buyers, similarly to what is already done for client/src/RecordSearchFilters.tsx
- An additional item would be unit testing for the above.
