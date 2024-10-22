const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/projectSchema');
const resolvers = require('./resolvers/projectResolver');

const startServer = async () => {
    try{
        await mongoose.connect('mongodb+srv://jorobanuelosga:Rodo1234@cluster0.3x6ac.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
            useNewUrlParser : true,
            useUnifiedTopology: true,
        });
        const server = new ApolloServer({ typeDefs, resolvers });
        server.listen().then(({ url}) =>{
            console.log(`🚀 Server ready at ${url}`);
        });
    }catch(err){
        console.error('Error al iniciar el servidor', err);
    }
};

startServer();