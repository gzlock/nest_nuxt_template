import {
  Body,
  Controller,
  NotFoundException,
  Post,
  Req,
  Res,
} from '@nestjs/common'
import { AdminModel } from '../db/admin/admin.model'
import { Request, Response } from 'express'

@Controller('/admin/login')
export class LoginController {
  // /api/login
  @Post('/')
  async index (
    @Body('username') username: string,
    @Body('password') password: string,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    // console.log('登录', { username, password })
    const admin = await AdminModel.scope('simple')
      .findOne({ where: { username, password } })
    if (!admin)
      throw new NotFoundException('找不到对应的账号')
    res.cookie('admin', admin.id.toString(),
      { signed: true, httpOnly: true, maxAge: 900000 })
    res.send('ok')
  }
}