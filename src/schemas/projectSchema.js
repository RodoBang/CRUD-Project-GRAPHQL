// schemas/projectSchema.js
const { gql } = require('apollo-server');

const typeDefs = gql`
    type Project {
        _id: ID!
        name: String!
        description: String!
        startDate: String!
        endDate: String!
        status: String!
        budget: Float!
    }

    input ProjectInput {
        name: String!
        description: String!
        startDate: String!
        endDate: String!
        status: String!
        budget: Float!
    }

    type Query {
        projects: [Project]!
        projectById(_id: ID!): Project
    }

    type Mutation {
        createProject(
            name: String!,
            description: String!,
            startDate: String!,
            endDate: String!,
            status: String!,
            budget: Float!
        ): Project!

        updateProject(_id: ID!, projectData: ProjectInput!): Project!

        deleteProject(_id: ID!): Project!
    }
`;

module.exports = typeDefs;
