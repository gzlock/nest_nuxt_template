import { Controller, Get } from '@nestjs/common'
import { AdminModel } from '../db/admin/admin.model'
import { MyRedisService } from '../redis/my.redis.service'

@Controller('/')
export class ExampleController {
  constructor (private readonly myRedisService: MyRedisService) {}

  // db query
  @Get('db')
  async db (): Promise<any> {
    // return {count:1, rows:[...]}
    return AdminModel.scope('simple').findAndCountAll()
  }

  // redis set and get
  @Get('redis')
  async redis (): Promise<any> {
    await this.myRedisService.set('a', 'hello')
    const res: any[] = []
    res.push(await this.myRedisService.get('a'))
    await this.myRedisService.set('a', null)
    res.push(await this.myRedisService.get('a', { defaultValue: 'no value' }))

    await this.myRedisService.set('b', { a: 1, b: '2' })
    res.push(await this.myRedisService.get('b'))
    // return [ 'hello', 'no value', {a:1,b:'2'} ]
    return res
  }
}
