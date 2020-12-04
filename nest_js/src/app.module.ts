import { Module } from '@nestjs/common'
import { DbModule } from './db/db.module'
import { AdminModule } from './admin/admin.module'
import { MyRedisModule } from './redis/my.redis.module'

@Module({
  imports: [
    DbModule,
    MyRedisModule,
    AdminModule,
  ],
})
export class AppModule {}
