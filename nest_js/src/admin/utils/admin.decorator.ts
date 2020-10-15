import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { AdminModel } from '../../db/admin/admin.model'

export const Admin = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): AdminModel => {
    const req = ctx.switchToHttp().getRequest()
    return req['admin']
  },
)