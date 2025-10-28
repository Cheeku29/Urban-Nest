const mongoose = require("mongoose");
const Review = require("./review.js"); // make sure path is correct
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  image: {
    filename: { type: String, default: "listingimage" },
    url: {
      type: String,
      required: [true, "Image URL is required"],
      default:
        "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=1000&auto=format&fit=crop&q=60",
      set: (v) =>
        v === ""
          ? "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=1000&auto=format&fit=crop&q=60"
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      default: [77.1025, 28.7041],
      required: true,
    },
  },
});

// Cascade delete reviews when a listing is deleted
listingSchema.post("findOneAndDelete", async function (listing) {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
