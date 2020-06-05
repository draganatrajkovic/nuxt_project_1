const products = [
    {
        id:1, 
        title: 'RFBA', 
        ligthSource: '12.4"Hx31"Lx5"D',
        productQuallity: 'Bronze',
        img: 'product_01.png',
        diffuserType: 'Acrylic',
        material: 'Stainless Steel'
    },
    {
        id:2, 
        title: 'RFBA', 
        ligthSource: '12.4"Hx31"Lx5"D',
        productQuallity: 'Bronze',
        img: 'product_02.png',
        diffuserType: 'Acrylic',
        material: 'Stainless Steel'
    },
    {
        id:3, 
        title: 'RFBA', 
        ligthSource: '12.4"Hx31"Lx5"D',
        productQuallity: 'Bronze',
        img: 'product_03.png',
        diffuserType: 'Acrylic',
        material: 'Stainless Steel'
    },
    {
        id:4, 
        title: 'RFBA', 
        ligthSource: '12.4"Hx31"Lx5"D',
        productQuallity: 'Bronze',
        img: 'product_04.png',
        diffuserType: 'Acrylic',
        material: 'Stainless Steel'
    },
    {
        id:5, 
        title: 'RFBA', 
        ligthSource: '12.4"Hx31"Lx5"D',
        productQuallity: 'Bronze',
        img: 'product_05.png',
        diffuserType: 'Acrylic',
        material: 'Stainless Steel'
    },
    {
        id:6, 
        title: 'RFBA', 
        ligthSource: '12.4"Hx31"Lx5"D',
        productQuallity: 'Bronze',
        img: 'product_06.png',
        diffuserType: 'Acrylic',
        material: 'Stainless Steel'
    },
    {
        id:7, 
        title: 'RFBA', 
        ligthSource: '12.4"Hx31"Lx5"D',
        productQuallity: 'Bronze',
        img: 'product_07.png',
        diffuserType: 'Acrylic',
        material: 'Stainless Steel'
    },
    {
        id:8, 
        title: 'RFBA', 
        ligthSource: '12.4"Hx31"Lx5"D',
        productQuallity: 'Bronze',
        img: 'product_08.png',
        diffuserType: 'Acrylic',
        material: 'Stainless Steel'
    },
    {
        id:9, 
        title: 'RFBA', 
        ligthSource: '12.4"Hx31"Lx5"D',
        productQuallity: 'Bronze',
        img: 'product_09.png',
        diffuserType: 'Acrylic',
        material: 'Stainless Steel'
    },
    {
        id:10, 
        title: 'RFBA', 
        ligthSource: '12.4"Hx31"Lx5"D',
        productQuallity: 'Bronze',
        img: 'product_10.png',
        diffuserType: 'Acrylic',
        material: 'Stainless Steel'
    },
    {
        id:11, 
        title: 'RFBA', 
        ligthSource: '12.4"Hx31"Lx5"D',
        productQuallity: 'Bronze',
        img: 'product_11.png',
        diffuserType: 'Acrylic',
        material: 'Stainless Steel'
    },
    {
        id:12, 
        title: 'RFBA', 
        ligthSource: '12.4"Hx31"Lx5"D',
        productQuallity: 'Bronze',
        img: 'product_12.png',
        diffuserType: 'Acrylic',
        material: 'Stainless Steel'
    }
]

export default class ProductsService {
    all() {
        return products;
    }
}

export const productsService = new ProductsService()