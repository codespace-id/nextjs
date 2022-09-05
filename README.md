

# 🔥 Next JS + TailwindCSS Boilerplate 🔥
## Spesification
- NextJS v12.2.5
- React Query v4.2.3
- React Query DevTools v4.2.3
- Axios v0.27.2
- Framer-motion v7.2.1
- React v18.2.0
- React-dom v18.2.0
- React-error-boundary v3.1.4
- React-hook-form v7.34.
- Jest v29.0.2
- Typescript v4.8.2
- Tailwindcss v3.1.8


## Installation
Menggunakan NodeJs versi 16 (LTS)

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
