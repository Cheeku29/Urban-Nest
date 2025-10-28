const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utilities/wrapAsync.js");
const Listing = require("../models/listings.js");
const Review = require("../models/review.js");
const mongoose = require("mongoose");
const reviewController = require("../controllers/reviews.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

// Reviews POST route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);

//Review Delete route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.deleteReview)
);

module.exports = router;
