import {
  Column,
  DataType,
  Index,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'

@Table({ timestamps: false })
export class SystemConfigModel extends Model<SystemConfigModel> {
  @Index('key')
  @PrimaryKey
  @Column
  key: string

  @Column({ type: DataType.JSON })
  value: any
}