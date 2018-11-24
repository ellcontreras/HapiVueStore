'use strict'

const Hapi = require('hapi')

var products = [
    {
        id: 1,
        name: 'Hola'
    },
    {
        id: 2,
        name: 'World'
    }
]

var count = 2;

const server = Hapi.server({
    host: 'localhost',
    port: '8081'
})

server.route({
    method: 'GET',
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    },
    path: '/api/products/all',
    handler: (request, h) => {
        return products
    }
})

server.route({
    method: 'POST',
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    },
    path: '/api/products/insert',
    handler: (request, h) => {
        let product = {
            id: ++count,
            name: request.payload.name
        }

        products.push(product)

        return product
    }
})

async function start() {
    try {
        await server.start()
    } catch (err) {
        console.log(err)
        process.exit(1)
    }

    console.log('Server running at: ', server.info.uri)
}

start()
