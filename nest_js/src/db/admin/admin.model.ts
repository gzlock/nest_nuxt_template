import { AllowNull, Column, Model, Table } from 'sequelize-typescript'

@Table({
  scopes: {
    simple: {
      attributes: ['id', 'username', 'level'],
    },
  },
})
export class AdminModel extends Model<AdminModel> {

  @AllowNull(false)
  @Column({ comment: '管理员账号' })
  username: string

  @AllowNull(false)
  @Column({ comment: '密码' })
  password: string

  @AllowNull(false)
  @Column({ comment: '账号级别，0优先级最高' })
  level: number
}