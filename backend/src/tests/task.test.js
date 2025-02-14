const request = require("supertest");
const app = require("../server");

describe("Task API", () => {
  it("should create a new task", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .send({ title: "Test Task", description: "This is a test" });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test Task");
  });
});
