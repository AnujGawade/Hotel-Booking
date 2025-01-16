import express from "express";
import Hotel from "../models/Hotel.js";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotel,
  countByCity,
  countByType,
  getHotelRooms,
} from "../controllers/hotel.js";
import { verifyIsAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyIsAdmin, createHotel);

router.put("/:id", verifyIsAdmin, updateHotel);

router.delete("/:id", verifyIsAdmin, deleteHotel);

router.get("/find/:id", getHotel);

router.get("/", getAllHotel);

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);

router.get("/room/:id", getHotelRooms);

export default router;
