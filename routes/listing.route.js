import express from "express";

// import controllers
import { getListings } from "../controllers/listing.controller.js";

const router = express.Router();

// get listings
router.get("/get-listings", getListings);

export default router;
