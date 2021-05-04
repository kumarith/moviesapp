// Http API Unit testing - Demonstration with Supertest
const request = require("supertest");
const app = require("./server");
describe("GET / ", () => {
  test("It should respond with an matching movie of Chaos", async () => {
    const response = await request(app).get("/movie/1");
    expect(response.body).toEqual([{"id":10,"title":"Chaos Walking","language":"dutch","rating":7.3,"plot":"Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency","poster":"https://m.media-amazon.com/images/M/MV5BYTcxYTk3MWQtZThlMS00ZjQ0LTg0NjktNGVkNWM2MTAyYWJmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg","location":"US","overview":"Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality, where all inner thoughts are seen and heard by everyone."}]);
    expect(response.statusCode).toBe(200);
  });
});