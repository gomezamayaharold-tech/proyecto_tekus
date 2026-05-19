import { test, expect } from '@playwright/test';

test('Validar información de multimedia', async ({ page }) => {

  await page.goto('https://qalab.invertebrado.co');

  // Username
  await page.locator('input[type="text"]').fill('qatester');

  // Password
  await page.locator('input[type="password"]').fill('N9j^u9&Hm@dz2Kcs');

  // Click login
  await page.getByRole('button', {
    name: /iniciar sesión/i
  }).click();

  // Esperar navegación
  await page.waitForLoadState('networkidle');

  // Ir a multimedia
  await page.goto('https://qalab.invertebrado.co/screens/multimedia');

  // Validaciones
  await expect(page.getByText(/peso del archivo/i)).toBeVisible();

  await expect(page.getByText(/identificador/i)).toBeVisible();

  await expect(page.getByText(/descripción/i)).toBeVisible();

  await expect(page.getByText(/previsualización/i)).toBeVisible();

});