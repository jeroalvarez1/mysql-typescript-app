/* Este sirve para decir cuales son los modulos que van a arrancar, es el archivo principal, el archivo que arranca la app */
import { App } from "./app";

async function main() {
    const app = new App(3000);
    await app.listen();
}

main();