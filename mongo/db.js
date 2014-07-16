var MongoClient = require('mongodb').MongoClient;


// Find One
/*
MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
  if(err) throw err;

  var query = { "grade": 100 };

  db.collection('grades').findOne(query, function(err, doc) {
    if(err) throw err;
    null;
    console.log(doc);

    db.close();
  });
});
*/
// Find Many
/*
MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
  if(err) throw err;

  var query = { "grade": 100 };

  var cursor = db.collection('grades').find(query);

  cursor.each(function(err, doc) {  // .each(do in chunks) .toArray(shoul get all data at once)
    if(err) throw err;

    if(doc == null) {
      return db.close();
    }

    console.dir(doc.student + " got a good grade!");

  });
});
*/

// Field Projection
MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
  if(err) throw err;

  var query = { "grade": 100 };
  var queryGtLt = {"student": "Joe", "grade": {'$gt': 80,'$lt': 95}};
  var projection = {"student": 1, "_id": 0};

  db.collection('grades').find(queryGtLt, projection).toArray(function(err,docs) {
    if(err) throw err;

    docs.forEach(function (doc) {
      console.dir(doc);
      console.dir(doc.student + " got a good grade!");
    });

    db.close();
  });
});
