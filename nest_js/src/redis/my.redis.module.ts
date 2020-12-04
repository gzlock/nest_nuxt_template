import { Module } from '@nestjs/common'
import { MyRedisService } from './my.redis.service'
import { RedisModule } from 'nestjs-redis'

@Module({
  imports: [
    RedisModule.register({
      url: process.env.REDIS_URL ?? 'redis://:REDIS_PASSWORD@127.0.0.1:6379/0',
    }),
  ],
  exports: [MyRedisService],
  providers: [MyRedisService],
})
export class MyRedisModule {

}