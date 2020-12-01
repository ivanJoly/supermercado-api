const request = require('supertest');
const app= require("../../../app")
const version="v1"
module.exports = () => describe('POST create User', () => {
    it("Happy path",(done)=>{
        const body={
            password:"2132223",
            userName:"naaaame",
            firstName:"psaaeape",
            lastName:"argaaento",
            email:"juadnaaaasd@juan.com",
            role:"isAdmin"
        }
        request(app)
        .post(`/api/${version}/users`)
        .send(body)
        .then((res)=>{

            expect(res.statusCode).toBe(201)
            done()
        })
    })

    it("Error by  user exists",(done)=>{
        const body={
            password:"2132223",
            userName:"naaaame",
            firstName:"psaaepe",
            lastName:"argaaento",
            email:"juadnaaasd@juan.com",
            role:"isAdmin"
        }
        request(app)
        .post(`/api/${version}/users`)
        .send(body)
        .then((res)=>{

            expect(res.statusCode).toBe(409)
            done()
        })

        it("Error because not input",(done)=>{
            const body={
                password:"2132223",
                userName:"naaaame",
                firstName:"psaaepe",
                role:"isAdmin"
            }
            request(app)
            .post(`/api/${version}/users`)
            .send(body)
            .then((res)=>{
    
                expect(res.statusCode).toBe(500)
                done()
            })})
    })
    
    
});
