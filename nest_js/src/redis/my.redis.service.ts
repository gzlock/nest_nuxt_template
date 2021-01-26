import { Injectable } from '@nestjs/common'
import { RedisService } from 'nestjs-redis'
import IORedis from 'ioredis'

declare function Prepare<T> (value: string): T;

interface RedisOptionParams<T> {
  prepare?: typeof Prepare
  defaultValue?: T
}

@Injectable()
export class MyRedisService {
  public readonly client: IORedis.Redis

  constructor (
    private readonly redisService: RedisService,
  ) {
    // @ts-ignore
    this.client = this.redisService.getClient()
  }

  async get<T> (
    key: string,
    defaultValue: T = null,
  ): Promise<T> {
    const value = await this.client.get(key)
    if (value) {
      try {
        return JSON.parse(value)
      } catch (e) {
        return value as any
      }
    }
    return defaultValue
  }

  async set (key: string, value: any): Promise<void> {
    if (value) {
      await this.client.set(
        key, JSON.stringify(value))
    } else {
      await this.client.del(key)
    }
  }
}