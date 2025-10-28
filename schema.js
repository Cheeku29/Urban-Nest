const Joi = require("joi");

const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().min(3).max(100).required().messages({
      "string.empty": "Title is required",
      "string.min": "Title must be at least 3 characters",
      "string.max": "Title cannot exceed 100 characters",
    }),
    description: Joi.string().min(10).max(1000).required().messages({
      "string.empty": "Description is required",
      "string.min": "Description must be at least 10 characters",
      "string.max": "Description cannot exceed 1000 characters",
    }),
    image: Joi.string().messages({
      "string.uri": "Image must be a valid URL",
    }),
    price: Joi.number().required().min(1).messages({
      "number.base": "Price must be a number",
      "number.min": "Price must be at least 1",
      "any.required": "Price is required",
    }),
    country: Joi.string().required().messages({
      "string.empty": "Country is required",
    }),
    location: Joi.string().required().messages({
      "string.empty": "Location is required",
    }),
  }).required(),
});

const reviewSchema = Joi.object({
  review: Joi.object({
    comment: Joi.string().min(5).max(500).required().messages({
      "string.empty": "Comment is required",
      "string.min": "Comment must be at least 5 characters",
      "string.max": "Comment cannot exceed 500 characters",
    }),
    rating: Joi.number().required().min(1).max(5).messages({
      "number.base": "Rating must be a number",
      "number.min": "Rating must be at least 1",
      "number.max": "Rating cannot be more than 5",
      "any.required": "Rating is required",
    }),
  }).required(),
});

module.exports = { listingSchema, reviewSchema };
