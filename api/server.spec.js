const server = require('./server');
const request = require('supertest');
const db = require('../data/dbConfig.js');

describe('server.js', ()=> {
    test('should be testing the env', ()=> {
       expect(process.env.DB_ENV).toBe('testing'); 
    })

    
    describe('POST /', ()=> {
        it('should create a new user', async()=> {
            let user = {name: "Logan"}
            const res = await request(server).post('/').send(user)
            expect(res.body).toEqual({success: 'user added to database'})
        })
        it('should return 201', async()=> {
            let user = {name: "Logan"}
            const res = await request(server).post('/').send(user)
            expect(res.status).toBe(201);
        })
        
    })


    beforeEach(async ()=> {
            await db('users').truncate();
        })


    describe('DELETE /', ()=> {
        it('should return a 202', async()=> {
            let user = {name: "Lilo"}
            const res = await request(server).delete('/').send(user)
            expect(res.status).toEqual(202)
        })
        it('should delete the user', async()=> {
            let user = {name: "Lilo"}
            const res = await request(server).delete('/').send(user)
            expect(res.body).toEqual({message: "user has been deleted"})
        })
        
    })
})