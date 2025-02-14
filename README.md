

# 🔥 Next JS + TailwindCSS Boilerplate 🔥
## Spesification
- NextJS v14.0.4
- React v18
- React-dom v18
- Jest v29.7.0
- Typescript v5
- Tailwindcss v3.3.0


## Installation
Menggunakan NodeJs versi 20 (LTS)

- Jika menggunakan `yarn`
>yarn install

- Atau menggunakan `npm` 
>npm install  

## Menjalankan development server
Sebelum menjalankan development server, copas dahulu file `.env.example` ke file `.env.local` sebagai file enviroment variable di [Next JS](https://nextjs.org). Untuk detail penjelasan enviroment variable di [Next Js](https://nextjs.org), bisa di cek di -> [Enviroment Variable](https://nextjs.org/docs/basic-features/environment-variables). Development server secara default, dijalankan di port `3000`

- Jika menggunakan `yarn`
>yarn run dev

- Atau menggunakan `npm` 
>npm run dev  

## Menjalankan Unit Testing dengan Jest
Di boilerplate sudah terinstall [Jest](https://jestjs.io) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) yang digunakan untuk melakukan unit testing. Untuk membuat file test, ditaruh di directory `__test__` dengan format struktur folder mengikuti struktur di root project folder.

- Jika menggunakan `yarn`
>yarn run test

- Atau menggunakan `npm` 
>npm run test  

## Build aplikasi
- Jika menggunakan `yarn`
>yarn run build

- Atau menggunakan `npm` 
>npm run build  



Di boilerplate juga sudah terkonfigurasi `Eslint + Prettier` dan akan dijalankan ketika pre-commit.
