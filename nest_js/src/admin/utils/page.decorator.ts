import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { AdminModel } from '../../db/admin/admin.model'
import lodash from 'lodash'

export const Page = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): number => {
    const req = ctx.switchToHttp().getRequest()
    const page = lodash.toSafeInteger(req.query['page'])
    return page > 0 ? page - 1 : page
  },
)