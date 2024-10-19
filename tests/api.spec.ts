import { expect, test } from "@playwright/test";

test("api", async ({ request }) => {
  const result = await request.get("http://localhost:3001/api/hello");
  expect(result.ok()).toBeTruthy();
});
