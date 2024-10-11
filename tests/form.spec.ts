import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "入力フォーム" }).click();
  await page.getByRole("heading", { name: "入力フォーム" }).click();
  await expect(page).toHaveURL("http://localhost:3000/form");
});

test("フォーム操作のテスト", async ({ page }) => {
  await page.goto("http://localhost:3000/form");
  await page.getByRole("textbox", { name: /1人目/ }).fill("太郎");
  await page.getByRole("textbox", { name: /2人目/ }).fill("二郎");
  await page.getByRole("button", { name: "シャッフル" }).click();
  await expect(page.getByRole("status", { name: "結果" })).toHaveText(
    /(太郎→二郎)|(二郎→太郎)/
  );
});
