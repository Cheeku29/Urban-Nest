const User = require("../models/user.js");

module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email });

    // register method hashes password and saves user
    const registeredUser = await User.register(user, password);

    //   automatically log in the user after registration
    req.login(registeredUser, (err) => {
      if (err) return next(err);

      req.flash("success", "Welcome! Your account has been created.");
      res.redirect("/listings"); // redirect to home or wherever
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

module.exports.renderLogin = (req, res) => {
  res.render("users/login.ejs");
};
module.exports.login = (req, res) => {
  req.flash("success", `Welcome back, ${req.user.username}!`);

  const redirectUrl = res.locals.redirectUrl || "/listings"; // fallback
  delete req.session.redirectUrl; // clean up session after redirect
  res.redirect(redirectUrl);
};
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "You have logged out successfully.");
    res.redirect("/listings");
  });
};
