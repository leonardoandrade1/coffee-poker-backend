import { Router, Request, Response } from "express";

import RoomService from "../service/room.service";

class RoomController {
    private router = Router();

    constructor() {
        this.routes();
    }

    public routes(): Router {
        this.router.post("/", this.createRoom);
        this.router.get("/", this.findAllRooms);
        this.router.get("/:id", this.getRoomByID);
        return this.router;
    }

    private async createRoom(req: Request, res: Response): Promise<Response> {
        const { ownerName } = req.params;

        const room = await RoomService.createAnonymousRoom(ownerName);
        return res.status(201).json(room);
    }

    private async getRoomByID(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const room = await RoomService.findRoomById(id);

        return res.status(200).json(room);
    }

    private async findAllRooms(req: Request, res: Response): Promise<Response> {
        return res.json(await RoomService.findAllRooms());
    }
}

export default new RoomController();
