import { DataTypes } from "sequelize";
import sequelize from "../db/connection";





const user = sequelize.define(
    "user", // Model name
    {
        // Model attributes
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 3
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE
        }
    },
    {
        // Options
        timestamps: true,
        underscored: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

export default user;