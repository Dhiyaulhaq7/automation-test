// import { test, expect } from '@playwright/test';

// test.only('test login tanpa mengisi uname/email dengan kondisi password terinput', async ({ page }) => {
//   await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
//   await page.getByRole('textbox', { name: 'Masukkan password' }).click();
//   await page.getByRole('textbox', { name: 'Masukkan password' }).fill('123456Aa!');
//   await page.getByRole('button', { name: 'login Login' }).click();
//   await page.getByText('kolom wajib diisi').click();
// });
// test.only('test login tanpa mengisi password dengan kondisi email terinput', async ({ page }) => {
//   await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).click();
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).fill('dimasdhiyaulhaq390@gmail.com');
//   await page.getByRole('button', { name: 'login Login' }).click();
//   await page.getByText('kolom wajib diisi').click();
// });
//   test.only('test login tanpa mengisi password dan uname', async ({ page }) => {
//   await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
//   await page.getByRole('button', { name: 'login Login' }).click();
//   await page.getByText('kolom wajib diisi').first().click();
//   await page.getByText('kolom wajib diisi').nth(1).click();
// });

// test.only('test login password salah dengan kondisi uname benar', async ({ page }) => {
//   await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).click();
//   await page.waitForTimeout(700);
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).fill('dimasdhiyaulhaq390@gmail.com');
//     await page.waitForTimeout(700);
//   await page.getByRole('textbox', { name: 'Masukkan password' }).click();
//     await page.waitForTimeout(700);
//   await page.getByRole('textbox', { name: 'Masukkan password' }).fill('123456Aa!!');
//     await page.waitForTimeout(700);
//   await page.getByRole('button', { name: 'login Login' }).click();
//     await page.waitForTimeout(700);
//   await page.locator('h1').filter({ hasText: 'Password salah. Anda memiliki' }).click();
//     await page.waitForTimeout(700);
//   await page.getByRole('button', { name: 'Mengerti' }).click();
// });
// test.only('test login uname salah dengan kondisi password benar', async ({ page }) => {
//   await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).click();
//     await page.waitForTimeout(700);
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).fill('dimasdhiyaulhaqq@gmail.com');
//     await page.waitForTimeout(700);
//   await page.getByRole('textbox', { name: 'Masukkan password' }).click();
//     await page.waitForTimeout(700);
//   await page.getByRole('textbox', { name: 'Masukkan password' }).fill('123456Aa!');
//     await page.waitForTimeout(700);
//   await page.getByRole('button', { name: 'login Login' }).click();
//     await page.waitForTimeout(700);
//   await page.getByRole('heading', { name: 'Akun Tidak Terdaftar' }).click();
//     await page.waitForTimeout(700);
//   await page.getByRole('button', { name: 'Lanjutkan' }).click();
//     await page.waitForTimeout(700);
//   await page.locator('div').filter({ hasText: 'Registrasi' }).nth(5).click();
// });
//   test.only('test login dengan uname benar dan password benar', async ({ page }) => {
//   await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).click();
//     await page.waitForTimeout(700);
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).fill('dimasdhiyaulhaq390@gmail.com');
//     await page.waitForTimeout(700);
//   await page.getByRole('textbox', { name: 'Masukkan password' }).click();
//     await page.waitForTimeout(700);
//   await page.getByRole('textbox', { name: 'Masukkan password' }).fill('123456Aa!');
//    await page.waitForTimeout(700);
//   await page.getByRole('textbox', { name: 'Masukkan password' }).press('Enter');
//     await page.waitForTimeout(700);
//   await page.getByRole('button', { name: 'login Login' }).click();
//     await page.waitForTimeout(700);
//   await page.getByRole('heading', { name: 'Dashboard' }).click();
// });