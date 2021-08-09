import { Table, Column, AutoIncrement, NotNull, Length, Not, IsEmail, CreatedAt, UpdatedAt } from "sequelize-typescript"

@Table
export class User {
    @Column
    @AutoIncrement
    id? : number

    @Column
    @NotNull
    @Length({
        msg: "Your username must be between 1 and 48 characters long.",
        min: 1,
        max: 48
    })
    username! : string

    @Column
    @NotNull
    @IsEmail
    email! : string

    @Column
    @NotNull
    password! : string

    @Column
    @CreatedAt
    createdAt! : Date

    @Column
    @UpdatedAt
    updatedAt! : Date
}