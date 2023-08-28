module.exports = { 
    port: 3500,
    db: {
        mongo: { 
            uri: "mongodb://localhost:27017/ondc-seller"
        }
    },
    basePath: '/ondc-seller-app/api/'
}