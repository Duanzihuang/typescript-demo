interface Entity{
    title:string;
}

interface Product extends Entity{
    price:number;
}

let product = <Product>{
    title:'aaa',
    price:12
};

console.log(product)