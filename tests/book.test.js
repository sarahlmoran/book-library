const { expect } = require("chai");
const request = require("supertest");
const { Book } = require("../src/models");
const app = require("../src/app");

describe("/books", () => {
    before(async () => Book.sequelize.sync({ force: true}));

    beforeEach(async () => {
        await Book.destroy({ where: {} });
    });

    describe("with no records in the database", () => {
        describe("POST /books", () => {
            it("creates a new book in the database", async () => {
                const response = await  request(app).post("/books").send({
                    title: "The Hobbit",
                    author:"J.R.R Tolkien",
                    genre:"Fantasy",
                    ISBN:"987654321",
                });
                const newBookRecord = await Book.findByPk(response.body.id, {
                    raw: true,
                });

                expect(response.status).to.equal(200);
                expect(response.body.title).to.equal("The Hobbit");
                expect(newBookRecord.title).to.equal("The Hobbit");
                expect(newBookRecord.author).to.equal("J.R.R Tolkien");
                expect(newBookRecord.genre).to.equal("Fantasy");
                expect(newBookRecord.ISBN).to.equal("987654321");
            });
        });
    });
}); 