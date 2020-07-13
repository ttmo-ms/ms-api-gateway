import { GraphQLInt } from 'graphql'


export interface QueryInterval {
  first: number
  after: number
}

const queryInterval = {
  first: { type: GraphQLInt, defaultValue: 0, description: 'Offset start line.' },
  after: { type: GraphQLInt, defaultValue: 0, description: 'Count after on start line.' },
}

export {
  queryInterval,
}
