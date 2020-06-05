const products = [
    {
        id:1, 
        title: 'Product 1', 
        img: 'ph_product.png'
    },
    {
        id:2, 
        title: 'Product 2', 
        img: 'ph_product.png'
    },
    {
        id:3, 
        title: 'Product 3', 
        img: 'ph_product.png'
    },
    {
        id:4, 
        title: 'Product 4', 
        img: 'ph_product.png'
    },
    {
        id:5, 
        title: 'Product 5', 
        img: 'ph_product.png'
    },
    {
        id:6, 
        title: 'Product 6', 
        img: 'ph_product.png'
    },
    {
        id:7, 
        title: 'Product 7', 
        img: 'ph_product.png'
    },
    {
        id:8, 
        title: 'Product 8', 
        img: 'ph_product.png'
    },
    {
        id:9, 
        title: 'Product 9', 
        img: 'ph_product.png'
    },
    {
        id:10, 
        title: 'Product 10', 
        img: 'ph_product.png'
    },
    {
        id:11, 
        title: 'Product 11', 
        img: 'ph_product.png'
    },
    {
        id:12, 
        title: 'Product 12', 
        img: 'ph_product.png'
    }
]

export default class ProductsService {
    all() {
        return products;
    }
}

export const productsService = new ProductsService()