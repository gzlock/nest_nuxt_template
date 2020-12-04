import { Module } from '@nestjs/common'
import { DbModule } from './db/db.module'
import { AdminModule } from './admin/admin.module'
import { RedisModule } from './redis/redis.module'

@Module({
  imports: [
    DbModule,
    RedisModule,
    AdminModule,
  ],
})
export class AppModule {}
