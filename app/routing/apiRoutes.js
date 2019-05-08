var friends = require("../data/friends.js")
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);

    });
    app.post("/api/friends", function (req, res) {
        var bestfriend = {
            name: "",
            photo: "",
            fdiff: 1000,
        };
        var user = req.body;
        var userscores = user.scores;
        console.log({ "user.scores": user.scores });
        var diff = 0;
        for (var i = 0; i < friends.length; i++) {
            diff = 0;
            for (var u = 0; u < friends[i].scores[u]; u++) {

                diff += Math.abs(parseInt(userscores[u]) - parseInt(friends[i].scores[u]));

                if (diff <= bestfriend.fdiff) {
                    bestfriend.name = friends[i].name;
                    bestfriend.photo = friends[i].photo;
                    bestfriend.fdiff = diff;

                }
            }

        }
        friends.push(user)
        res.json(bestfriend);


    });
}