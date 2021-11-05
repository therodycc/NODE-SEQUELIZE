import { Router } from "express";
import userController from "../controllers/User";

class UsersRoutes {
  public router: Router = Router();
  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/", userController.get);
    this.router.get("/:id", userController.getOne);
    this.router.post("/", userController.create);
    this.router.put("/:id", userController.update);
    this.router.delete("/:id", userController.delete);
  }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;
