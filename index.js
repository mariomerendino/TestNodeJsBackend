import express from 'express'
import bodyParser from 'body-parser'
import { setupRoutes } from './routes.js'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});

setupRoutes(app);

