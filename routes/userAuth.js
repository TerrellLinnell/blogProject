var User = require('../models/user');
var Location = require ('../models/location');


module.exports = function (app, passport) {

app.post('/login', function (req, res, next) {passport.authenticate('local-login', function (err, user, info) {
  if (err) {
    console.log(err);
    return next(err);
  } if (!user) {
    console.log('No user found');
    return res.json(info)
  }
  req.login(user, function (err) {
    if (err) {
      return next(err);
    }
    return res.json(user)
    })
  })(req, res, next)
});

app.post('/signup', function (req, res, next) {
  passport.authenticate('local-signup', function (err, user, info) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
        if (!user) {
        res.json({message: 'that username is already taken'})
      } else {
        res.json(user);
      }
    }
  })(req, res, next)
});

app.get('/profile', isLoggedIn, function (req, res) {
  console.log(req.user);
  if(req.user) {
    User.findById(req.user._id)
    .populate('location')
    .exec(function (err, data) {
      console.log(data);
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  } else {
    res.json({user: null});
  }
})

app.post('/Update', isLoggedIn, function (req, res) {
  User.findById(req.user._id, function (err, user) {
    if (err) {
      req.flash('updateMessage', 'Update Falied: Failed to Find User.');
      res.redirect('/profile');
      console.log(err);
    } else {
      var location = new Location();
      location.city = req.body.city;
      location.state = req.body.state;
      location.zip = req.body.zip;

      location.save(function (err, location) {
        if (err) {
          console.log(err);
          req.flash('updateMessage', 'Update Failed: Failed to Save Location.')
          res.redirect('/profile');
        }
        user.location = location._id;
        user.role = req.body.role;
        user.save(function (err, data) {
          if (err) {
            req.flash('updateMessage', 'Update Failed: Failed to Save the User.')
            res.redirect('/profile');
          }
          req.flash('updateMessage', 'Updated User')
          res.redirect('/profile');
        });
      });
    }
  });
});

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

function isLoggedIn (req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.json({message: "Not logged in."});
  }
};
