import { Table, Model, Column, AutoIncrement, NotNull, Length, IsEmail, CreatedAt, UpdatedAt, PrimaryKey, Unique, AllowNull } from "sequelize-typescript"
import { DataType } from "sequelize-typescript"

@Table
export class User extends Model {
    @AutoIncrement
    @PrimaryKey
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