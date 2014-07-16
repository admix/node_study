var MongoClient = require('mongodb').MongoClient,
    request = require('request');

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
  if(err) throw err;

  /* importing JSON data from Reddit. Do it only once, when you need to import some data to your own DB
  request('http://www.reddit.com/r/technology/.json', function(error, res, body) {
    if(!error && res.statusCode == 200) {
      var obj = JSON.parse(body);

      var stories = obj.data.children.map(function(story) {return story.data;});

      db.collection('reddit').insert(stories, function(err, data) {
        if(err) throw err;

        console.dir(data);

        db.close();
      });
    };
  });
  */
  var query = {"num_comments":{'$gt':20}};
  var cur = db.collection('reddit').find(query);
    cur.each(function(err,docs) {
      if(err) throw err;

      if(docs == null) return db.close();

      console.log(docs.author);

      db.close();
    });

});
