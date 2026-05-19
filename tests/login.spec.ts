import { test, expect } from '@playwright/test';

test('Login exitoso en la plataforma', async ({ page }) => {

  // Navegar al sitio
  await page.goto('https://qalab.invertebrado.co');

  // Ingresar credenciales
  await page.getByPlaceholder('Usuario').fill('qatester');
  await page.getByPlaceholder('Contraseña').fill('N9j^u9&Hm@dz2Kcs');

  // Click en iniciar sesión
  await page.getByRole('button', { name: /ingresar|login|iniciar sesión/i }).click();

  // Validar que navega correctamente al inicio
  await expect(page).toHaveURL(/dashboard|home|inicio/i);

  // Validación adicional opcional:
  // verificar que exista algún elemento visible del home
  // await expect(page.getByText('Bienvenido')).toBeVisible();

});