const Review = require("../models/review.js");
const Listing = require("../models/listings.js");
const mongoose = require("mongoose");

module.exports.createReview = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();

  res.redirect(`/listings/${listing._id}`);
};

module.exports.deleteReview = async (req, res) => {
  const { id, reviewId } = req.params;

  await Listing.findByIdAndUpdate(id, {
    $pull: { reviews: new mongoose.Types.ObjectId(reviewId) },
  });

  await Review.findByIdAndDelete(reviewId);

  res.redirect(`/listings/${id}`);
};
