import { Controller, Get } from '@nestjs/common'

@Controller('/home')
export class HomeController {
  // /api/home
  @Get('/')
  async index () {}
}