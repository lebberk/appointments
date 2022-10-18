import { PrismaClient } from 'database'

declare const global: { prisma: PrismaClient }
let prisma: PrismaClient

// eslint-disable-next-line turbo/no-undeclared-env-vars
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma