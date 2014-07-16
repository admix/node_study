var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
  if(err) throw err;

  var query = { "title": { "$regex": "^Mike" } };
  var projection = {"title":1,"_id":0};

  var cursor = db.collection('reddit').find(query, projection);;

  cursor.each(function(err, doc) {  // .each(do in chunks) .toArray(shoul get all data at once)
    if(err) throw err;

    if(doc == null) {
      return db.close();
    }

    console.dir(doc.title);

  });
});
