const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { zodiacs } = require('../data/zodiacs');

describe('zodiacs routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiacs should return list of all zodiac signs name and dates', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => {
      return { dates: zodiac.dates, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiacs/:id should return single zodiac', async () => {
    const res = await request(app).get('/zodiacs/2');
    const aries = {
      id: '2',
      name: 'aries',
      dates: 'Mar 21 - Apr 19',
      symbol: 'Ram',
    };
    expect(res.body).toEqual(aries);
  });

  afterAll(() => {
    pool.end();
  });
});
