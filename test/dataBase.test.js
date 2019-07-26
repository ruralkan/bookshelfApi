/*
var expect = require('chai').expect
 var mongoose = require('mongoose');

describe('Test models and database CRUD operations', function() {
  var Book;

  beforeEach(function(done) {
    mongoose.connect('mongodb://localhost/bookAPI');
    mongoose.connection.once('connected', () => {
      //mongoose.connection.db.dropDatabase();

      require('../dataBase/schemas/Book').registerModels();
      // This is the right model because ^registerModels set it up for us.
      Book = mongoose.model('book');
      done();
    });
  });

  afterEach(function(done) {
    mongoose.disconnect();
    done();
  });

  describe('Lifecycle', function() {

    it('should not save without title', function(done) {
      var book = new Book({
        author: "alex1"
      });
      book.save(function(err) {
        expect(err).to.exist
          .and.be.instanceof(Error)
          .and.have.property('message', 'book validation failed: title: Path `title` is required.');
        done();
      });
    });

    it('should save with title', function(done) {
        var book = new Book({
            title: "Testing database",
            author: "alex1",
            Description: 'Test the rest post',
            genre: 'Drama',
            read: "true"
        });
        book.save(done);
    });

    it('Should retrieve data from test database', function(done) {
        //Look up the 'Mike' object previously saved.
        Book.find({title: 'Testing database'}, (err, title) => {
          if(err) {done( err);}
          expect(title).to.exist
          done();
        });
    });
  });

});
*/
