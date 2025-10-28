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

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("./listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing does not exist.");
    res.redirect("/listings");
  }
  res.render("./listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
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

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing does not exist.");
    res.redirect("/listings");
  }
  let originalImg = listing.image.url;
  originalImg = originalImg.replace("/upload", "/upload/w_250");

  res.render("./listings/edit.ejs", { listing, originalImg });
};

((module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  // update basic info
  Object.assign(listing, req.body.listing);

  // update geometry only if location/country changed
  if (listing.isModified("location") || listing.isModified("country")) {
    listing.geometry = {
      type: "Point",
      coordinates: await getCoordinates(listing.location, listing.country),
    };
  }

  // update image if a new one is uploaded
  if (req.file) {
    listing.image = { url: req.file.path, filename: req.file.filename };
  }

  await listing.save();
  req.flash("success", "Listing Updated Successfully!");
  res.redirect(`/listings/${id}`);
}),
  (module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect(`/listings`);
  }));
