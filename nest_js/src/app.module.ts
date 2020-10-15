import { Module } from '@nestjs/common'
import { DbModule } from './db/db.module'
import { AdminModule } from './admin/admin.module'
import { RedisModule } from 'nestjs-redis'

@Module({
  imports: [
    RedisModule.register({
      host: '127.0.0.1',
      port: 6379,
      password: 'Redis密码',
    }),
    DbModule,
    AdminModule,
  ],

})
export class AppModule {}
