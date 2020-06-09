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
    },

    // {
    //     //api product example
    //     ID:"1227",
    //     fws_title:"AGB",
    //     fws_sku:"AGB",
    //     fws_slug:"agb",
    //     fws_url:"https://asllighting.com/product/agb/",
    //     fws_image:"https://asllighting.com/wp-content/uploads/2020/01/AGB-6-200x200.png",
    //     pa_wattage:"11691,11692,11693,11694,11695,11696",
    //     pa_delivered-loumens:"11703,11704,11705,11706,11707,11708",
    //     product_cat:"13674,11748,11749,11750",
    //     pa_lens-filter:"11741",
    //     pa_base-filter:"11742",
    //     pa_special-options-accessories:"11737,11738",
    //     pa_special-options-technology:"11732,11733,11734,11735,11736",
    //     product_locations:"11747",
    //     pa_voltage:"11726,11728,11727,11729",
    //     fws_id:"12608"
    // }
]

export default class ProductsService {
    all() {
        return products;
    }
}

export const productsService = new ProductsService()