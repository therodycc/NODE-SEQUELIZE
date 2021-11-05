import { Request, Response } from "express";
import User from "../models/user.model";


class UserController {
    get(req: Request, res: Response) {

        User.findAll()
            .then(data => {
                res.status(200).json({ msg: 'Users data', data })
            })
            .catch(err => {
                res.status(500).json(err)
            })

    }

    create(req: Request, res: Response) {
        try {

            const { name, email, password } = req.body;
            const user = {
                name: name,
                email: email,
                password: password
            };

            // Save user in database
            User.create(user)
                .then(data => {
                    res.json({ msg: "User created", data });
                })
                .catch(err => {
                    res.status(500).send({
                        message: err?.message || "Some error occurred while creating the Book."
                    });
                });
        } catch (error) {
            res.json(error);
        }
    }

    getOne(req: Request, res: Response) {
        User.findByPk(req.params.id)
            .then(data => {
                if (!data) return res.json({ msg: 'User not exist' })
                res.status(200).json({ msg: `User ${req.params.id}$`, data })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    update(req: Request, res: Response) {
        try {

            const { name, email, password } = req.body;
            const id = req.params.id
            const user = {
                name: name,
                email: email,
                password: password
            };

            // Save user in database
            User.update(user, {
                where: {
                    id
                }
            })
                .then(data => {
                    res.json({ msg: "User updated", data });
                })
                .catch(err => {
                    res.status(500).send({
                        message: err?.message || "Some error occurred while updating the user."
                    });
                });
        } catch (error) {
            res.json(error);
        }
    }

    delete(req: Request, res: Response) {
        const id = req.params.id
        User.destroy({
            where: {
                id
            }
        })
            .then(data => {
                res.json({ msg: "User deleted", data });
            })
            .catch(err => {
                res.status(500).send({
                    message: err?.message || "Some error occurred while deleting the user."
                });
            });
    }

}

const userController = new UserController();
export default userController;
