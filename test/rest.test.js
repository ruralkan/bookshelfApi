
//import  request  from 'supertest';
import {expect} from 'chai';
const request = require('supertest');



//import  request  from 'supertest';
import server from '../bin/server';

describe('Our first test', () => {
    it('Should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('Books API Tests',()=>{
    it('it should response with a json object of all the books', (done) => {
        request(server)
            .get('/api/books')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            //.expect(200)
            .end((err, res) => {
                if (err) {
                  return done(err);
                }
                console.log(res.body.book[0]);

                expect(res.body.book).to.be.an('array');
                expect(res.body.book[0]).to.have.a.property('title');
                expect(res.body.book[0]).to.have.a.property('author');
                expect(res.body.book[0]).to.have.a.property('genre');
                expect(res.body.book[0]).to.have.a.property('description');
                expect(res.body.book[0]).to.have.a.property('read');
                done();
              });
    });

    it('should list a SINGLE book on /books/<id> GET ', (done) => {
        request(server)
            .get('/api/books/5d3a42fb0c22a31b627fe7f9')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) {
                  return done(err);
                }
                console.log(res.body.book);

                expect(res.body.book).to.be.a('object');
                expect(res.body.book).to.have.a.property('title');
                expect(res.body.book).to.have.a.property('author');
                expect(res.body.book).to.have.a.property('genre');
                expect(res.body.book).to.have.a.property('description');
                expect(res.body.book).to.have.a.property('read');
                done();
              });
    });

    it('should list error if book dont exist on /books/<id> GET ', (done) => {
        request(server)
            .get('/api/books/5d3a508060f2ea2c446cc5ef')
            .set('Accept', 'application/json')
            .expect('Content-Type', "text/html; charset=utf-8")
            .expect(404,done)
    });

    it('404 everything else', async () => {
        request(server)
            .get('/foo/bar')
            .expect(404)
    });

    it('should save a book', (done) => {
        request(server)
        .post('/api/books')
        .send({ title: 'Pulp Fiction', description: 'Test the rest post', genre: 'Drama', author: 'Tarantino', read: "true"})
        .expect(201)
        .end((err, res) => {
            if (err) {
              return done(err);
            }
            expect(res.body).to.be.a('object');
            expect(res.body).to.have.a.property('title');
            expect(res.body.title).to.equal('Pulp Fiction');
            expect(res.body).to.have.a.property('author');
            expect(res.body).to.have.a.property('description');
            done();
          });
    });

    it('should delete a SINGLE book on /books/<id> DELETE ', (done) => {
        request(server)
            .delete('/api/books/5d3a508060f2ea2c446cc5ef')
            .set('Accept', 'application/json')
            .expect(204)
            .end((err, res) => {
                if (err) {
                  return done(err);
                }
                expect(res.body.book).to.be.an('undefined');
                done();
              });
    })

    it('If book not exist get 204 error /books/<id> DELETE', () => {
        request(server)
            .delete('/api/books/5d3a444a6cff711c70013fe3')
            .set('Accept', 'application/json')
            .expect(204)
    })

})
