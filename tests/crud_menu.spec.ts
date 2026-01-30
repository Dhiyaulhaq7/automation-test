// import { test, expect } from '@playwright/test';

// test.only('test tambah main menu tanpa mengisi nama dan url', async ({ page }) => {
//   await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).click();
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).fill('dimasdhiyaulhaq390@Gmail.com');
//   await page.getByRole('textbox', { name: 'Masukkan password' }).click();
//   await page.getByRole('textbox', { name: 'Masukkan password' }).fill('123456Aa!');
//   await page.getByRole('button', { name: 'login Login' }).click();
//   await page.getByRole('button', { name: 'settings Settings' }).click();
//   await page.getByRole('link', { name: 'menu Menu' }).click();
//   await page.getByRole('heading', { name: 'Admin Menu' }).click();
//   await page.getByRole('button', { name: 'add_circle Tambah Baru' }).click();
//   await page.getByRole('button', { name: 'Simpan' }).click();
//   await page.getByText('Validation error Validation').click();
//   await page.getByRole('heading', { name: 'Validation error' }).click();
//   await page.getByRole('button', { name: 'Tutup' }).click();
// });

// test.only('test tambah main menu tanpa mengisi nama dan sudah mengisi url', async ({ page }) => {
//   await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).click();
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).fill('dimasdhiyaulhaq390@gmail.com');
//   await page.getByRole('textbox', { name: 'Masukkan password' }).click();
//   await page.getByRole('textbox', { name: 'Masukkan password' }).fill('123456Aa!');
//   await page.getByRole('button', { name: 'login Login' }).click();
//   await page.getByRole('button', { name: 'settings Settings' }).click();
//   await page.getByRole('link', { name: 'menu Menu' }).click();
//   await page.getByRole('button', { name: 'add_circle Tambah Baru' }).click();
//   await page.getByRole('textbox', { name: 'Route URL' }).click();
//   await page.getByRole('textbox', { name: 'Route URL' }).fill('/');
//   await page.getByRole('textbox', { name: 'Route URL' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Route URL' }).fill('/L');
//   await page.getByRole('textbox', { name: 'Route URL' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Route URL' }).fill('/Latihan2');
//   await page.getByRole('button', { name: 'Simpan' }).click();
//   await page.getByRole('heading', { name: 'Validation error' }).click();
//   await page.getByRole('button', { name: 'Tutup' }).click();
// });

// test.only('test tambah menu dengan mengisi nama tanpa mengisi url', async ({ page }) => {
//   await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).click();
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).fill('dimasdhiyaulhaq390@gmail.com');
//   await page.getByRole('textbox', { name: 'Masukkan password' }).click();
//   await page.getByRole('textbox', { name: 'Masukkan password' }).fill('123456A');
//   await page.getByRole('button', { name: 'visibility' }).click();
//   await page.getByRole('textbox', { name: 'Masukkan password' }).click();
//   await page.getByRole('textbox', { name: 'Masukkan password' }).fill('123456Aa!');
//   await page.getByRole('button', { name: 'login Login' }).click();
//   await page.getByRole('button', { name: 'settings Settings' }).click();
//   await page.getByRole('link', { name: 'menu Menu' }).click();
//   await page.getByRole('button', { name: 'add_circle Tambah Baru' }).click();
//   await page.getByRole('textbox', { name: 'Nama Menu' }).click();
//   await page.getByRole('textbox', { name: 'Nama Menu' }).fill('Latihan3');
//   await page.getByRole('button', { name: 'Simpan' }).click();
//   await page.getByRole('heading', { name: 'Menu Berhasil Dibuat' }).click();
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.locator('.flex.items-center.justify-between.px-4.py-2.bg-gray-100').click();
// });

// test.only('test tambah main menu dengan mengisi nama dan url', async ({ page }) => {
//   await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).click();
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).fill('dimasdhiyaulhaq390@gmail.com');
//   await page.getByRole('textbox', { name: 'Masukkan password' }).click();
//   await page.getByRole('textbox', { name: 'Masukkan password' }).fill('123456Aa!');
//   await page.getByRole('button', { name: 'login Login' }).click();
//   await page.getByRole('button', { name: 'settings Settings' }).click();
//   await page.getByRole('link', { name: 'menu Menu' }).click();
//   await page.getByRole('button', { name: 'add_circle Tambah Baru' }).click();
//   await page.getByRole('textbox', { name: 'Nama Menu' }).click();
//   await page.getByRole('textbox', { name: 'Nama Menu' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Nama Menu' }).fill('Latihan4');
//   await page.getByRole('textbox', { name: 'Route URL' }).click();
//   await page.getByRole('textbox', { name: 'Route URL' }).fill('');
//   await page.getByText('Tidak perlu diisi jika menu').click();
//   await page.getByRole('button', { name: 'Simpan' }).click();
//   await page.getByRole('heading', { name: 'Menu Berhasil Dibuat' }).click();
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.locator('.flex.items-center.justify-between.px-4.py-2.bg-gray-100').click();
// });

// test.only('test tambah menu serta tambah fitur icon', async ({ page }) => {
//   await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).click();
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).fill('dimasdhiyaulhaq390@gmail.com');
//   await page.getByRole('textbox', { name: 'Masukkan password' }).click();
//   await page.getByRole('textbox', { name: 'Masukkan password' }).fill('123456Aa!');
//   await page.getByRole('button', { name: 'login Login' }).click();
//   await page.getByRole('button', { name: 'settings Settings' }).click();
//   await page.getByRole('link', { name: 'menu Menu' }).click();
//   await page.getByRole('button', { name: 'add_circle Tambah Baru' }).click();
//   await page.getByRole('textbox', { name: 'Nama Menu' }).click();
//   await page.getByRole('textbox', { name: 'Nama Menu' }).fill('latihan4');
//   await page.getByRole('checkbox', { name: 'Icon' }).click();
//   await page.locator('input[name="icon"]').click();
//   await page.getByText('account balance wallet').click();
//   await page.locator('span').filter({ hasText: 'account_balance_wallet' }).click();
//   await page.getByRole('button', { name: 'Simpan' }).click();
//   await page.getByRole('heading', { name: 'Menu Berhasil Dibuat' }).click();
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.getByText('account_balance_wallet').click();
// });

// test.only('test hapus icon dengan kondisi checkbox dicentang', async ({ page }) => {
//   await page.goto('https://dev-elegal.kopnus.com:9004/auth/login');
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).click();
//   await page.getByRole('textbox', { name: 'cth: email@kopnus.com' }).fill('dimasdhiyaulhaq390@gmail.com');
//   await page.getByRole('textbox', { name: 'Masukkan password' }).click();
//   await page.getByRole('textbox', { name: 'Masukkan password' }).fill('123456Aa!');
//   await page.getByRole('button', { name: 'login Login' }).click();
//   await page.getByRole('button', { name: 'settings Settings' }).click();
//   await page.getByRole('link', { name: 'menu Menu' }).click();
//   await page.getByRole('button', { name: 'add_circle Tambah Baru' }).click();
//   await page.getByRole('textbox', { name: 'Nama Menu' }).click();
//   await page.getByRole('textbox', { name: 'Nama Menu' }).fill('latihan');
//   await page.getByRole('checkbox', { name: 'Icon' }).click();
//   await page.locator('input[name="icon"]').click();
//   await page.getByText('account balance', { exact: true }).click();
//   await page.getByText('account_balance account_balance Hapus').click();
//   await page.getByText('Hapus').click();
//   await page.getByRole('button', { name: 'Simpan' }).click();
//   await page.getByRole('heading', { name: 'Menu Berhasil Dibuat' }).click();
//   await page.getByRole('button', { name: 'OK' }).click();
// });