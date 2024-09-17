import { describe, expect, it } from "vitest";
import request from "supertest";
import { faker } from "@faker-js/faker";

describe("User services", () => {
  it("User service create", async () => {
    const response = await request("http://localhost:3001/v1/")
      .post("user/create")
      .send({
        fullName: faker.person.fullName(),
        email: faker.internet.email(),
        age: faker.person.age(),
      });
    const text = await response.data.message;
    expect(response.status).toBe(200);
    expect(text).toBe("User created successfull!");
  });
});
