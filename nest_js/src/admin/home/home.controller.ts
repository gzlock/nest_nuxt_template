import { Controller, Get } from '@nestjs/common'

@Controller('/admin/home')
export class HomeController {
  // /api/home
  @Get('/')
  async index (): Promise<string> {
    return 'admin home page'
  }
}