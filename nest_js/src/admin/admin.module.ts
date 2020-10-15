import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AdminController } from './admin.controller'
import { HomeController } from './home/home.controller'
import { LoginController } from './login.controller'
import { AdminMiddleware } from './admin.middleware'

@Module({
  controllers: [
    HomeController,
    LoginController,
    AdminController,
  ],
})
export class AdminModule implements NestModule {
  configure (consumer: MiddlewareConsumer): any {
    consumer
      .apply(AdminMiddleware)
      .exclude('/login')
      .forRoutes('/')
  }
}