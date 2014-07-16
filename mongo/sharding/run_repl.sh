mongod --replSet rs1 --logpath "1.log" --dbpath ~/Sites/data/rs1 --port 27017 --fork
mongod --replSet rs1 --logpath "2.log" --dbpath ~/Sites/data/rs2 --port 27018 --fork
mongod --replSet rs1 --logpath "3.log" --dbpath ~/Sites/data/rs3 --port 27019 --fork
