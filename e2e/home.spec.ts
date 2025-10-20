import { test, expect } from '@playwright/test';

test('home shows PhotoFlow', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('PhotoFlow')).toBeVisible();
});

