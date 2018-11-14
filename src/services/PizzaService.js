import fs from "fs"

export function Lire(){
    const pizzas = fs.readFileSync('src/storage/pizzas.json');
    return JSON.parse(pizzas);
}