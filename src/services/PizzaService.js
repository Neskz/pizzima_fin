import fs from "fs"

export function Lire(){
    const pizzas = fs.readFileSync('src/storage/pizzas.json');
    return JSON.parse(pizzas);
}

export function Ecrire(){
    
    fs.writeFileSync('src/storage/pizzas.json', pizzas)
}