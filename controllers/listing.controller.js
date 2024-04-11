import Listing from "../models/listing.model.js";

// get listings
export const getListings = async (req, res, next) => {
  try {
    const listings = await Listing.find().sort("-1").limit(12);
    return res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};
