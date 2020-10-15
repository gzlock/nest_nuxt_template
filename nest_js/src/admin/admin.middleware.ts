import { ForbiddenException, Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response } from 'express'
import { AdminModel } from '../db/admin/admin.model'

@Injectable()
export class AdminMiddleware implements NestMiddleware {

  async use (req: Request, res: Response, next: () => void): Promise<any> {
    let admin: AdminModel
    // console.log('中间件', JSON.stringify(req.signedCookies, null, 4))
    const adminId = req.signedCookies['admin']
    if (adminId) {
      admin = await AdminModel.scope('simple')
        .findOne({ where: { id: adminId } })
    }
    if (!admin)
      throw new ForbiddenException('请登录')
    req['admin'] = admin
    next()
  }

}