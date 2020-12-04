import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import cookieParser from 'cookie-parser'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  app.use(cookieParser(process.env.COOKIE_SECRET ?? 'COOKIE_SECRET'))
  await app.listen(3001)
}

bootstrap()
