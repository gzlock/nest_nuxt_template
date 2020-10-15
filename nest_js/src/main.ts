import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import cookieParser from 'cookie-parser'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  app.use(cookieParser('v6wP1FxuOU0xT53z'))
  await app.listen(3001)
}

bootstrap()
