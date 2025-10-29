const Listing = require("../models/listings.js");
const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});

async function getCoordinates(location, country) {
  try {
    const response = await client.geocode({
      params: {
        address: `${location}, ${country}`,
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
    });
    const { lat, lng } = response.data.results[0].geometry.location;
    return [lng, lat];
  } catch (err) {
    console.error("Geocoding failed:", err.message);
    // fallback to Delhi
    return [77.1025, 28.7041];
  }
}

// Show all listings
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index", { allListings });
};

// Render new listing form
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new");
};

// Show a specific listing
module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "author" },
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing does not exist.");
    return res.redirect("/listings");
  }

  res.render("listings/show", { listing });
};

// Create a new listing
module.exports.createListing = async (req, res) => {
  const coords = await getCoordinates(
    req.body.listing.location,
    req.body.listing.country
  );
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = {
    url: req.file.path,
    filename: req.file.filename,
  };
  newListing.geometry = {
    type: "Point",
    coordinates: coords,
  };
  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

// Render edit form
module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing does not exist.");
    return res.redirect("/listings");
  }

  let originalImg = listing.image.url.replace("/upload", "/upload/w_250");
  res.render("listings/edit", { listing, originalImg });
};

// Update listing
module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  Object.assign(listing, req.body.listing);

  if (listing.isModified("location") || listing.isModified("country")) {
    listing.geometry = {
      type: "Point",
      coordinates: await getCoordinates(listing.location, listing.country),
    };
  }

  if (req.file) {
    listing.image = { url: req.file.path, filename: req.file.filename };
  }

  await listing.save();
  req.flash("success", "Listing Updated Successfully!");
  res.redirect(`/listings/${id}`);
};

// Delete listing
module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
