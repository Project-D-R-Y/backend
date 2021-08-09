import { Table, Model, Column, AutoIncrement, NotNull, Length, IsEmail, CreatedAt, UpdatedAt } from "sequelize-typescript"

@Table
export class User extends Model {
    @Column
    @AutoIncrement
    ID? : number

    @Column
    @NotNull
    @Length({
        msg: "Your username must be between 1 and 48 characters long.",
        min: 1,
        max: 48
    })
    Username! : string

    @Column
    @NotNull
    @IsEmail
    Email! : string

    @Column
    @NotNull
    Password! : string

    @Column
    @CreatedAt
    CreatedAt! : Date

    @Column
    @UpdatedAt
    UpdatedAt! : Date
}