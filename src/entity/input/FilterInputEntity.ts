import { GraphQLInt, GraphQLInputObjectType, GraphQLNonNull } from 'graphql'


export interface FilterInput {
  first: number
  after: number
}

const FilterInputEntity = new GraphQLInputObjectType({
  name: 'Filter',
  fields: {
    first: { type: GraphQLNonNull(GraphQLInt), description: 'Offset start line.' },
    after: { type: GraphQLNonNull(GraphQLInt), description: 'Count after on start line.' },
  },
})

export {
  FilterInputEntity,
}
