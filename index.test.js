const request = require('supertest');
const app = require('./index');

describe('Simple Node.js routes', () => {
  test('GET / should return "hallo index"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('hallo index');
  });

  test('GET /greet should return "hello greet"', async () => {
    const res = await request(app).get('/greet');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('hello greet');
  });
});