
const res = require('supertest');
const app = require('./server.js');

describe('Test the root', () => {
  test('It should respond to the GET method', (done) => {
    res(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('Route testing for Bands', () => {
  test('testing GET one band', (done) => {
    console.log('check');
    res(app)
      .get('/api/bands')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('testing GET all bands', (done) => {
    res(app)
      .get('/api/bands')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('Route testing for Blogs', () => {
  test('testing route for GET all blogs by a band', (done) => {
    res(app)
      .get('/api/blogs/1')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('testing route for POST a blog', () => {
    const data = {
      name: 'something',
      description: 'yada yada',
      post: 'yada yada yada',
      bandId: 1,
    };

    return res(app)
      .post('/api/blogs/1')
      .send(data)
      .expect(201)
      .then((response) => {
        expect(response.statusCode).toBe(201);
      });
  });

  test('testing route for GET a single post', (done) => {
    res(app)
      .get('/api/blogs/post/1')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('testing route for PUT a single post', (done) => {
    res(app)
      .put('/api/blogs/post/1')
      .then((response) => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });
});

describe('Route testing for Genre', () => {
  test('testing GET route for genres', (done) => {
    res(app)
      .get('/api/genres/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('Route testing for Login', () => {
  test('testing route for login', (done) => {
    const data = {
      name: 'Hello'
    }
    res(app)
      .post('/api/login')
      .send(data)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
