import { Model, Table, Column, AutoIncrement, PrimaryKey, AllowNull, Length, CreatedAt, UpdatedAt, BelongsTo, ForeignKey } from "sequelize-typescript"
import { User } from "./User"

@Table({
    tableName: "Feed"
})
export class Feed extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    ID? : number

    @AllowNull(false)
    @ForeignKey(() => User)
    @BelongsTo(() => User)
    @Column
    UserID! : number

    @Length({
        msg: "A feed post must be between 1 and 356 characters long.",
        min: 1,
        max: 356
    })
    @Column
    Content! : string

    @CreatedAt
    @Column
    CreatedAt! : Date

    @UpdatedAt
    @Column
    UpdatedAt! : Date
}