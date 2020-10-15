import { Injectable } from '@nestjs/common'
import { SystemConfigModel } from './system-config.model'
import { SystemConfigKey } from '../../type'

@Injectable()
export class SystemConfigService {
  constructor () {}

  async get<T> (key: SystemConfigKey, defaultValue: T = null): Promise<T> {
    const data = await SystemConfigModel.findByPk(key)
    if (data) return data.value as T
    return defaultValue
  }

  async set<T> (key: SystemConfigKey, value: T): Promise<boolean> {
    return SystemConfigModel.upsert({ key, value })
  }
}