import { test, expect } from '@playwright/test';

test.only('test ui login', async ({ page }) => {
  await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
  await page.getByRole('img', { name: 'Logo Placeholder' }).click();
  await page.getByRole('heading', { name: 'Login dengan E-mail Perusahaan' }).click();
  await page.getByText('Atau').click();
});

test.only('test kondisi dmn uname dan pw tidak diisi', async ({ page }) => {
  await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
  await page.getByRole('button', { name: 'login Login' }).click();
  await page.getByText('kolom wajib diisi').first().click();
  await page.getByText('kolom wajib diisi').nth(1).click();
});
test.only('test kondisi dmn uname diisi sedangkan pw tidak', async ({ page }) => {
  await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
  await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).click();
  await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).fill('dimasdhiyaulhaq390@gmail.com');
  await page.getByRole('button', { name: 'login Login' }).click();
  await page.getByText('kolom wajib diisi').click();
});
test.only('test kondisi dmn ketika pw diisi sedangkan uname tidak', async ({ page }) => {
  await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
  await page.getByRole('textbox', { name: 'Masukkan password' }).click();
  await page.getByRole('textbox', { name: 'Masukkan password' }).fill('12456Aa!');
  await page.getByRole('button', { name: 'login Login' }).click();
  await page.getByText('kolom wajib diisi').click();
});
test.only('test kondisi dmn pw dan uname diisi tetapi uname diisi dengan salah', async ({ page }) => {
  await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
  await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).click();
  await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).fill('dimasdhiyaulhaq390@ggmail.com');
  await page.getByRole('textbox', { name: 'Masukkan password' }).click();
  await page.getByRole('textbox', { name: 'Masukkan password' }).fill('123456Aa!');
  await page.getByRole('button', { name: 'login Login' }).click();
  await page.getByRole('heading', { name: 'Akun Tidak Terdaftar' }).click();
  await page.getByRole('button', { name: 'Lanjutkan' }).click();
  await page.getByRole('heading', { name: 'Registrasi' }).click();
});
  test.only('test kondisi dmn uname dan pw dan uname diisi dengan benar', async ({ page }) => {
  await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
  await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).click();
  await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).fill('dimasdhiyaulhaq390@gmail.com');
  await page.getByRole('textbox', { name: 'Masukkan password' }).click();
  await page.getByRole('textbox', { name: 'Masukkan password' }).fill('123456Aa!');
  await page.getByRole('button', { name: 'login Login' }).click();
  await page.getByRole('heading', { name: 'Dashboard' }).click();
});