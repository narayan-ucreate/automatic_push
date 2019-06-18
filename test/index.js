
const sequelize_fixtures = require('sequelize-fixtures');
const models = require('./../models/index');

const { createUser, updateUser} = require('./../services/users');
const assert = require('assert');
describe('User Services', () => {
    before(() => {
        sequelize_fixtures.loadFile('fixtures/State.json', models)
    })
    const updateInfo = {
        userName: 'Narayan',
        phone: '1234567895',
        email : 'narayan1@gmail.com',
        stateId : 1
       };
    it('Create User', () => {
       const response = createUser(updateInfo);
       assert.ok(response);
    });
    it('Update User', async () => {
        const userInfo = await createUser(updateInfo);
          const updateinfo = updateUser(updateInfo, userInfo.id);
          assert.ok(updateinfo);
    });
    after(() => {
       setTimeout(() => {
        models.sequelize.sync({
                force: true
            });
       }, 5000);
    })
});