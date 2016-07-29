var History = Parse.Object.extend("History");
var historyArray = [];
var historyMap = {};
exports.home = function(req, res) {
    var currentUser = Parse.User.current();
    var user = null;
    if (currentUser) {
        currentUser.fetch().then(function(fetchedUser){
            user = {};
            user['username'] = fetchedUser.getUsername();
            res.render('home', {user: user})
        }, function(error){
            console.error(error);
        });
    }
    else {
        res.render('login');
    }

};

exports.login = function(req, res) {
    var currentUser = Parse.User.current();
    if (currentUser) {
        res.redirect("/");
    }
    else {
        res.render('login');
    }
};

exports.loginSubmit = function(req, res) {
    Parse.User.logIn(req.body.username,req.body.password).then(function() {
            // Login succeeded, redirect to homepage.
            // parseExpressCookieSession will automatically set cookie.
            res.redirect("/");
        },
        function(error) {
            // Login failed, redirect back to login form.
            res.redirect("/login");
        });
};
exports.historyPost = function(req, res) {
    var historyValue = req.body.message;
    //Save the value from phone to database
    console.log(req);
    console.log(res);
    var historyData = new History();
    historyData.set("history",historyValue);
    historyData.save(null, {
        success: function(result) {
            res.status(200).end();
            //res.send('OK');
        },
        error: function(result, error) {
            res.status(404).end();
            //alert('Failed to create new object, with error code: ' + error.message);
        }
    });


};
exports.history = function(req, res) {

    var currentUser = Parse.User.current();
    var user = null;
    if (currentUser) {
        currentUser.fetch().then(function(fetchedUser){
            user = {};
            user['username'] = fetchedUser.getUsername();
            res.render('history', {user: user})
        }, function(error){
            console.error(error);
        });
    }
    else {
        res.render('login');
    }



};
exports.schedule = function(req, res) {
    var currentUser = Parse.User.current();
    var user = null;
    if (currentUser) {
        currentUser.fetch().then(function(fetchedUser){
            user = {};
            user['username'] = fetchedUser.getUsername();
            res.render('schedule', {user: user})
        }, function(error){
            console.error(error);
        });
    }
    else {
        res.render('login');
    }


};
exports.signup = function(req, res) {
    var currentUser = Parse.User.current();
    if (currentUser) {
        res.redirect("/");
    }
    else {
        res.render('signup');
    }
};

exports.signupSubmit = function(req, res) {
    Parse.User.signUp(req.body.username,req.body.password, {'email': req.body.email,'phone': req.body.phone}).then(function() {
            Parse.User.logOut();
            res.redirect("/login");
        },
        function(error) {
            res.redirect("/signup");
        });
};

exports.logout = function(req, res) {
    Parse.User.logOut();
    res.redirect('/');
};
