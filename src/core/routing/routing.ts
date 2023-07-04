import express, { Application } from "express";
import { usersRouter } from "../../feature/user/presentation/";

export const configureRoutes = (app: Application) => {
  const router = express.Router();
  router.use("/user", usersRouter);
  app.use("/api", router);
};
