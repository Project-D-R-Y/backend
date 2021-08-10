import { Table, Model, Column, AutoIncrement, Length, IsEmail, CreatedAt, UpdatedAt, PrimaryKey, Unique, AllowNull, HasMany, Scopes } from "sequelize-typescript"
import { DataType } from "sequelize-typescript"
import { Feed } from "./Feed"

@Scopes(() => ({
    public: {
        attributes: ['ID', 'Username', 'CreatedAt', 'UpdatedAt']
    }
}))
@Table
export class User extends Model {
    @AutoIncrement
    @PrimaryKey
    @HasMany(() => Feed, {
        foreignKey: "UserID",
        as: "Feed_Posts"
    })
    @Column
    ID? : number

    @Unique
    @AllowNull(false)
    @Length({
        msg: "Your username must be between 1 and 48 characters long.",
        min: 1,
        max: 48
    })
    @Column
    Username! : string

    @Unique
    @AllowNull(false)
    @IsEmail
    @Column(DataType.TEXT)
    Email! : string

    @AllowNull(false)
    @Column
    Password! : string

    @CreatedAt
    @Column
    CreatedAt! : Date

    @UpdatedAt
    @Column
    UpdatedAt! : Date
}