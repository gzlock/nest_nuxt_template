import { Module } from '@nestjs/common'
import { RedisService } from './redis.service'
import { RedisModule as RModule } from 'nestjs-redis'

@Module({
  imports: [
    RModule.register({
      url: process.env.REDIS_URL ?? 'redis://:REDIS_PASSWORD@127.0.0.1:6379/0',
    }),
  ],
  providers: [RedisService],
})
export class RedisModule {

}