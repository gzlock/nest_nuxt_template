import * as core from 'express-serve-static-core'
import * as Session  from 'express-session'

declare interface NetEaseResponse<T> {
  res_code: number
  res_msg: string
  data: T
}

declare interface NetEaseListData<T> {
  current_page: number
  page_size: number
  total_page: number
  total_count: number
  columns: NetEaseColumnItem[]
  res: T[]
}

declare interface NetEaseColumnItem {
  name: string
  key: string
  sort?: string
}

declare interface PendingQuote {
  id: number
  name: string
  expect_end_at: string
  formatted_quote_deadline: string
}

declare interface ConfirmQuote {
  id: number //项目id，随时会变，不能作为索引
  name: string //项目名称
  can_modify: boolean
  supplier_quote_price: string //报价总金额
  expect_end_at: string //预计发布日期
}

declare interface Making {
  id: number //项目id，随时会变，不能作为索引
  name: string //项目名称
  planner_names: string // 策略人名称，多个名称用，(全角逗号)分割
  expect_end_at: string //预计发布日期
  product_identifier: string //所属产品
  supplier_quote_price: string //报价总金额
  settle_price: string //最终结算金额
}

declare interface ReviewQuote extends Making {}

declare interface Settled extends Making {}

declare const enum SystemConfigKey {
  init = 'init',
}