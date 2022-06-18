'use strict';
const { app } = require('../src/server'); // destructing assignment 
const supertest = require('supertest');
const mockRequest = supertest(app);



const { db } = require('../src/models/index');

// before any of the test create a connection
beforeAll(async () => {
    await db.sync();
});

describe('Web server', () => {
    // Check if 404 is handled 

    it('Should respond with 404 status on an invalid route', async () => {
        const response = await mockRequest.get('/foo');
        expect(response.status).toBe(404);
    });

    // test if can create a food
    it('can add a person', async () => {
        const response = await mockRequest.post('/food').send({
            foodName: 'pizza',
            foodIngread: 'cheeas'
        });
        expect(response.status).toBe(201);
    });

    // test if can read
    it('can get all food', async () => {
        const response = await mockRequest.get('/food');
        expect(response.status).toBe(200);

    });

    
    it('can update a record', async () => {
        const response = await mockRequest.put('/food/1');
        expect(response.status).toBe(201);
    });
  
    it('can delete a record', async () => {
        const response = await mockRequest.delete('/food/1');
        expect(response.status).toBe(204);
    });
});






afterAll(async () => {
    await db.drop();
});