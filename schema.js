const {buildSchema} = require('graphql')

const schema = buildSchema(`
    enum ECategory {
        clothesAndShoes
        householdGoods
        electronics
        householdAppliances
        goodsForChildren
        constructionAndRenovation
        furniture
        pharmacy
        hobbiesAndCreativity
    }

    type Product {
        id: Int
        name: String
        description: String
        category: ECategory
        price: Int
        quantityOfGoods: Int
        productRating: Float
        image: String
    }

    type CategoryItem {
        id: Int
        type: ECategory
        name: String
        image: String
    }
    
  type ProductsByCategory {
       category: ECategory
       products: [Product]
    }

    type Query {
        getProducts: [ProductsByCategory]
        getProduct(id: Int): Product 
        getCategories: [CategoryItem]
        getCategory(category: ECategory): [Product]
    }
    
`)

module.exports = schema
