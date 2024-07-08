# fastify-vite-typescript-boilerplate

Boilerplate for using [@fastify/vite](https://fastify-vite.dev/) with Typescript.

It was difficult for me to figure out how to use [@fastify/vite](https://fastify-vite.dev/) with TypeScript. Especially how to organize the code, the two separate `tsconfig.json` files, and when to call `tsc` vs `vite build`. Through a lot of trial and error I have arrived at this solution.

Please browse through this repo and read the code to see what I did. I hope it is helpful to you.

## Usage

To start the application in development mode, execute `npm start`.

To build for production, execute `npm run build`. After that, to run in production mode, execute `npm run start:prod`.
