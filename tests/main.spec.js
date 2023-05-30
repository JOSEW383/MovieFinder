import { test, expect } from "@playwright/test";

const URL = "http://localhost:5173/";

test("Search movie", async ({ page }) => {
  // Open the page and check the title
  const MOVIE_NAME = "Batman v Superman: Dawn of Justice";
  await page.goto(URL);
  await expect(page).toHaveTitle("Movie Finder");

  // Find the first input and type given movie name
  const inputName = page.locator('//div[@class="movie-search-form"]//input[@name="movieName"]');
  await inputName.fill(MOVIE_NAME);
  await page.click(".movie-search-form button");

  // Check the movie list
  await page.waitForSelector('//div[@class="movie-card"]//a');
  const movieCard = page.locator('//div[@class="movie-card"]//a');
  await expect(movieCard).toHaveCount(3);

  // Click on the first movie card
  const page2Promise = page.waitForEvent('popup');
  await movieCard.first().click()
  const page2 = await page2Promise;

  // Check the movie details on the new page
  await page2.getByRole('button', { name: 'Aceptar todo' }).click();
  const movieDetails = page2.locator('//*[@role="combobox"]');
  let  movieDetailsText = await movieDetails.inputValue();
  movieDetailsText = movieDetailsText.slice(0, -5);

  // verify the movie name is the same
  expect(movieDetailsText).toBe(MOVIE_NAME);
});