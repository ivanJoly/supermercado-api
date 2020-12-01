const app = require('../../app');
const createUsers = require('./suites/create.users.integration');

describe('Main', () => {
  afterAll(async () => {
    await app.mainDBRepository.disconnect();
  });
  createUsers();

});
