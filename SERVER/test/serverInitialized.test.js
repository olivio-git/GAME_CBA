const request = require("supertest");
const { describe, it, expect } = require("vitest");

describe("Server is Ready", () => {
  it("Server port", async () => {
    const response = await request(`http://localhost${process.env.PORT}`).get(
      "/",
    );
    expect(response.status).toBe(200);
  });
});
