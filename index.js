const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const { productList, categoryItems } = require('./mockStore/ProductData')
const {getDataWithRandomDelay} = require("./helpers/getDataWithRandomDelay");
const app = express()
app.use(cors())

const root = {
    getProducts: async () => {
        return await getDataWithRandomDelay(productList)
    },
    getProduct: (arg) => productList.map(i => i.products).flat().find(product => product.id === arg.id),
    getCategories: () => categoryItems,
    getCategory: (arg) => productList.find(i => i.category === arg.category).products,
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
}))

app.listen(4001, () => console.log('Сервер стартанул на 4001 порту'))
