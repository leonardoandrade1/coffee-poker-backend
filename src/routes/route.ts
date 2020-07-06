import { Router, Request, Response } from "express";

import RoomController from "../controller/room.controller";

class Route {
    public router: Router;

    constructor() {
        this.router = Router();
        this.router.get("/", (req: Request, res: Response) => {
            res.status(200).json({
                root: "Api root.",
            });
        });

        this.router.use("/room", RoomController.routes());
    }
}

export default new Route().router;
