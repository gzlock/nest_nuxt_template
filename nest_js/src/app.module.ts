import { Module } from '@nestjs/common'
import { DbModule } from './db/db.module'
import { AdminModule } from './admin/admin.module'

@Module({
  imports: [
    DbModule,
    AdminModule,
  ],

})
export class AppModule {}
