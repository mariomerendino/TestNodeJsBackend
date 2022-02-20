
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient()

export const setupRoutes = (app) => {
  app.get('/', async (request, response) => {
    let user_count = await prisma.user.count();

    console.log(user_count)
    response.json(
      {
        info: 'Node.js, Express, Prisma and Postgres API server',
        user_count: `There are ${user_count} users`
      }
    )
  })
}