import { Controller, Get } from '@nestjs/common'
import { AdminModel } from '../db/admin/admin.model'
import { Admin } from './utils/admin.decorator'

@Controller('/')
export class AdminController {
  /**
   * 检查是否已经登录，返回管理员账号信息
   */
  // /api/
  @Get('/')
  async index (@Admin() admin: AdminModel): Promise<string> {
    return admin.username
  }
}