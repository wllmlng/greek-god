const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const GodType = new GraphQLObjectType({
  name: "GodType",
  // wrapped in a function to create a thunk
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    description: { type: GraphQLString },
    // remember the GraphQLList will return us an array of domains
    domains: { type: new GraphQLList(GraphQLString) }
  })
});

module.exports = GodType;