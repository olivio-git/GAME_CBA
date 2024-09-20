import request from "supertest";
import { describe, it, expect } from "vitest";
import dotenv from "dotenv";
dotenv.config();

describe("Server is Ready", () => {
  it("Server port", async () => {
    const response = await request(`http://localhost:${process.env.PORT}`).get(
      "/",
    );
    expect(response.status).toBe(200);
  });
});
