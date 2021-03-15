import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import path from 'path';

import resolvers from './resolvers';
import typeDefs from './typeDefs';

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(bodyParser.json());
server.applyMiddleware({ app });

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file or main.css file!
  app.use(express.static(path.join(__dirname, 'client')));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
  });
}

const port = process.env.PORT || 4000;
app.listen({ port });
