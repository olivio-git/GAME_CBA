import { describe, expect, it } from "vitest";
import request from "supertest";
import { faker } from "@faker-js/faker";

describe("User services", async () => {
  const fullName = faker.person.fullName();
  let userResponse = null;
  it("User service create", async () => {
    const response = await request("http://localhost:3001/v1/")
      .post("user/create")
      .send({
        fullName,
        email: faker.internet.email(),
        age: Math.floor(Math.random() * 120),
      });
    userResponse = await response.body.user;
    const text = await response.body.message;
    expect(response.status).toBe(200);
    expect(text).toBe("User created successfull!");
  });

  it("User service get user by id", async () => {
    const response = await request("http://localhost:3001/v1/").get(
      "user/" + userResponse._id,
    );
    const text = await response.body.message;
    const userDataResponse = await response.body.user;
    expect(response.status).toBe(200);
    expect(text).toBe("User get successfull!");
    expect(userDataResponse.fullName).toBe(userResponse.fullName);
  });
  it("User service update data", async () => {
    const response = await request("http://localhost:3001/v1/")
      .put("user/" + userResponse._id)
      .send({
        fullName: faker.person.fullName(),
        email: faker.internet.email(),
        age: Math.floor(Math.random() * 120),
      });
    const text = await response.body.message;
    expect(response.status).toBe(200);
    expect(text).toBe("User update successfull!");
  });
  it("User service delete by id", async () => {
    const response = await request("http://localhost:3001/v1/").delete(
      "user/" + userResponse._id,
    );
    const text = await response.body.message;
    expect(response.status).toBe(200);
    expect(text).toBe("User delete successfull!");
  });
});
