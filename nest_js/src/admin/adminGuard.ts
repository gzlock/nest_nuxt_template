import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate (context: ExecutionContext): boolean {
    // console.log('管理员守卫')
    const req = context.switchToHttp().getRequest()
    return !!req['admin']
  }
}