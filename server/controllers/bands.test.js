beforeEach(() => {
  const results = [{"id":1,"name":"Bald Cypress","description":"Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.","email":"epettitt0@photobucket.com","genreId":10},{"id":2,"name":"Fissidens Moss","description":"Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.","email":"sdei1@posterous.com","genreId":1},{"id":3,"name":"Muntingia","description":"Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.","email":"rjosefs2@jugem.jp","genreId":2},{"id":4,"name":"Kidneyshape Dot Lichen","description":"Donec vitae nisi.","email":"kdinsell3@hexun.com","genreId":7},{"id":5,"name":"Woolly Sedge","description":"Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.","email":"sbelcham4@deliciousdays.com","genreId":1}]
});

describe('Band routes', () => {
  beforeAll(() => {
    let config = {
      use_env_variable: development,
    };

    jest.mock('./bands');
  });

  test('Expect getBands to be called', () => {
    const { getBands, getOneBand } = require('./bands');
    getBands.mockImplementation(() => {
      return results;
    })

    expect(getBands()).toBeArray();
  });
});