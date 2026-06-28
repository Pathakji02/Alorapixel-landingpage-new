import { test, expect } from '@playwright/test';

test('verify all pages', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle(/AloraPixel | Premium Digital Experience/);
  await page.screenshot({ path: 'home.png' });

  await page.goto('http://localhost:3000/about');
  await expect(page).toHaveTitle(/About AloraPixel | Our Story & Vision/);
  await page.screenshot({ path: 'about.png' });

  await page.goto('http://localhost:3000/services');
  await expect(page).toHaveTitle(/Services | High-End Digital Solutions/);
  await page.screenshot({ path: 'services.png' });

  await page.goto('http://localhost:3000/contact');
  await expect(page).toHaveTitle(/Contact AloraPixel | Start Your Project/);
  await page.screenshot({ path: 'contact.png' });
});
