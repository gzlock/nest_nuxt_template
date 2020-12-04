import { Module, OnModuleInit } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { SystemConfigModel } from './system-config/system-config.model'
import { SystemConfigService } from './system-config/system-config.service'
import { AdminModel } from './admin/admin.model'
import { SystemConfigKey } from '../type'

@Module({
  imports: [
    SequelizeModule.forRoot({
      host: process.env.DB_HOST ?? '127.0.0.1',
      port: 5432,
      dialect: 'postgres',
      database: process.env.DB_USER ?? 'DB_USER',
      username: process.env.DB_USER ?? 'DB_USER',
      password: process.env.DB_PASSWORD ?? 'DB_PASSWORD',
      autoLoadModels: true,
      synchronize: true,
      retry: { max: 1 },
      define: {
        freezeTableName: true,
      },
      timezone: '+08:00',
      // logging: false,
    }),
    SequelizeModule.forFeature([
      SystemConfigModel,
      AdminModel,
    ]),
  ],
  exports: [
    SequelizeModule,
    SystemConfigService,
  ],
  providers: [SystemConfigService],
})
export class DbModule implements OnModuleInit {
  constructor (
    private readonly systemConfigService: SystemConfigService,
  ) {}

  async onModuleInit (): Promise<any> {
    const initTime = await this.systemConfigService.get(SystemConfigKey.init, 0)
    if (initTime == 0) {
      await Promise.all([
        AdminModel.create(
          { username: 'admin', password: 'admin', level: 0 }),
        this.systemConfigService.set(SystemConfigKey.init, Date.now()),
      ])
    }
  }
}