var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27018/course,localhost:27017,localhost:27019", function(err, db) {
    if (err) throw err;

    var documentNumber = 0;
    function insertDocument() {

        db.collection("repl").insert({ 'documentNumber' : documentNumber++ }, function(err, doc) {
            if (err) throw err;
            console.log(doc);
        });

        console.log("Dispatched insert");
        setTimeout(insertDocument, 1000);
    }

    insertDocument();
});
