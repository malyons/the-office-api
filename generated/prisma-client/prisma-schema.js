module.exports = {
        typeDefs: /* GraphQL */ `type AggregateEpisode {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateSeason {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Episode {
  id: ID!
  title: String!
  year: Int!
  season: Season!
  summary: String!
}

type EpisodeConnection {
  pageInfo: PageInfo!
  edges: [EpisodeEdge]!
  aggregate: AggregateEpisode!
}

input EpisodeCreateInput {
  title: String!
  year: Int!
  season: SeasonCreateOneInput!
  summary: String!
}

type EpisodeEdge {
  node: Episode!
  cursor: String!
}

enum EpisodeOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  year_ASC
  year_DESC
  summary_ASC
  summary_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EpisodePreviousValues {
  id: ID!
  title: String!
  year: Int!
  summary: String!
}

type EpisodeSubscriptionPayload {
  mutation: MutationType!
  node: Episode
  updatedFields: [String!]
  previousValues: EpisodePreviousValues
}

input EpisodeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EpisodeWhereInput
  AND: [EpisodeSubscriptionWhereInput!]
  OR: [EpisodeSubscriptionWhereInput!]
  NOT: [EpisodeSubscriptionWhereInput!]
}

input EpisodeUpdateInput {
  title: String
  year: Int
  season: SeasonUpdateOneRequiredInput
  summary: String
}

input EpisodeUpdateManyMutationInput {
  title: String
  year: Int
  summary: String
}

input EpisodeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  year: Int
  year_not: Int
  year_in: [Int!]
  year_not_in: [Int!]
  year_lt: Int
  year_lte: Int
  year_gt: Int
  year_gte: Int
  season: SeasonWhereInput
  summary: String
  summary_not: String
  summary_in: [String!]
  summary_not_in: [String!]
  summary_lt: String
  summary_lte: String
  summary_gt: String
  summary_gte: String
  summary_contains: String
  summary_not_contains: String
  summary_starts_with: String
  summary_not_starts_with: String
  summary_ends_with: String
  summary_not_ends_with: String
  AND: [EpisodeWhereInput!]
  OR: [EpisodeWhereInput!]
  NOT: [EpisodeWhereInput!]
}

input EpisodeWhereUniqueInput {
  id: ID
}

type Location {
  id: ID!
  name: String!
  description: String!
  season(where: SeasonWhereInput, orderBy: SeasonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Season!]
}

type LocationConnection {
  pageInfo: PageInfo!
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  name: String!
  description: String!
  season: SeasonCreateManyInput
}

type LocationEdge {
  node: Location!
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LocationPreviousValues {
  id: ID!
  name: String!
  description: String!
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
  AND: [LocationSubscriptionWhereInput!]
  OR: [LocationSubscriptionWhereInput!]
  NOT: [LocationSubscriptionWhereInput!]
}

input LocationUpdateInput {
  name: String
  description: String
  season: SeasonUpdateManyInput
}

input LocationUpdateManyMutationInput {
  name: String
  description: String
}

input LocationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  season_every: SeasonWhereInput
  season_some: SeasonWhereInput
  season_none: SeasonWhereInput
  AND: [LocationWhereInput!]
  OR: [LocationWhereInput!]
  NOT: [LocationWhereInput!]
}

input LocationWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createEpisode(data: EpisodeCreateInput!): Episode!
  updateEpisode(data: EpisodeUpdateInput!, where: EpisodeWhereUniqueInput!): Episode
  updateManyEpisodes(data: EpisodeUpdateManyMutationInput!, where: EpisodeWhereInput): BatchPayload!
  upsertEpisode(where: EpisodeWhereUniqueInput!, create: EpisodeCreateInput!, update: EpisodeUpdateInput!): Episode!
  deleteEpisode(where: EpisodeWhereUniqueInput!): Episode
  deleteManyEpisodes(where: EpisodeWhereInput): BatchPayload!
  createLocation(data: LocationCreateInput!): Location!
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  createSeason(data: SeasonCreateInput!): Season!
  updateSeason(data: SeasonUpdateInput!, where: SeasonWhereUniqueInput!): Season
  updateManySeasons(data: SeasonUpdateManyMutationInput!, where: SeasonWhereInput): BatchPayload!
  upsertSeason(where: SeasonWhereUniqueInput!, create: SeasonCreateInput!, update: SeasonUpdateInput!): Season!
  deleteSeason(where: SeasonWhereUniqueInput!): Season
  deleteManySeasons(where: SeasonWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  episode(where: EpisodeWhereUniqueInput!): Episode
  episodes(where: EpisodeWhereInput, orderBy: EpisodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Episode]!
  episodesConnection(where: EpisodeWhereInput, orderBy: EpisodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EpisodeConnection!
  location(where: LocationWhereUniqueInput!): Location
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  season(where: SeasonWhereUniqueInput!): Season
  seasons(where: SeasonWhereInput, orderBy: SeasonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Season]!
  seasonsConnection(where: SeasonWhereInput, orderBy: SeasonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SeasonConnection!
  node(id: ID!): Node
}

type Season {
  id: ID!
  title: String!
  year: Int!
  summary: String!
}

type SeasonConnection {
  pageInfo: PageInfo!
  edges: [SeasonEdge]!
  aggregate: AggregateSeason!
}

input SeasonCreateInput {
  title: String!
  year: Int!
  summary: String!
}

input SeasonCreateManyInput {
  create: [SeasonCreateInput!]
  connect: [SeasonWhereUniqueInput!]
}

input SeasonCreateOneInput {
  create: SeasonCreateInput
  connect: SeasonWhereUniqueInput
}

type SeasonEdge {
  node: Season!
  cursor: String!
}

enum SeasonOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  year_ASC
  year_DESC
  summary_ASC
  summary_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SeasonPreviousValues {
  id: ID!
  title: String!
  year: Int!
  summary: String!
}

input SeasonScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  year: Int
  year_not: Int
  year_in: [Int!]
  year_not_in: [Int!]
  year_lt: Int
  year_lte: Int
  year_gt: Int
  year_gte: Int
  summary: String
  summary_not: String
  summary_in: [String!]
  summary_not_in: [String!]
  summary_lt: String
  summary_lte: String
  summary_gt: String
  summary_gte: String
  summary_contains: String
  summary_not_contains: String
  summary_starts_with: String
  summary_not_starts_with: String
  summary_ends_with: String
  summary_not_ends_with: String
  AND: [SeasonScalarWhereInput!]
  OR: [SeasonScalarWhereInput!]
  NOT: [SeasonScalarWhereInput!]
}

type SeasonSubscriptionPayload {
  mutation: MutationType!
  node: Season
  updatedFields: [String!]
  previousValues: SeasonPreviousValues
}

input SeasonSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SeasonWhereInput
  AND: [SeasonSubscriptionWhereInput!]
  OR: [SeasonSubscriptionWhereInput!]
  NOT: [SeasonSubscriptionWhereInput!]
}

input SeasonUpdateDataInput {
  title: String
  year: Int
  summary: String
}

input SeasonUpdateInput {
  title: String
  year: Int
  summary: String
}

input SeasonUpdateManyDataInput {
  title: String
  year: Int
  summary: String
}

input SeasonUpdateManyInput {
  create: [SeasonCreateInput!]
  update: [SeasonUpdateWithWhereUniqueNestedInput!]
  upsert: [SeasonUpsertWithWhereUniqueNestedInput!]
  delete: [SeasonWhereUniqueInput!]
  connect: [SeasonWhereUniqueInput!]
  disconnect: [SeasonWhereUniqueInput!]
  deleteMany: [SeasonScalarWhereInput!]
  updateMany: [SeasonUpdateManyWithWhereNestedInput!]
}

input SeasonUpdateManyMutationInput {
  title: String
  year: Int
  summary: String
}

input SeasonUpdateManyWithWhereNestedInput {
  where: SeasonScalarWhereInput!
  data: SeasonUpdateManyDataInput!
}

input SeasonUpdateOneRequiredInput {
  create: SeasonCreateInput
  update: SeasonUpdateDataInput
  upsert: SeasonUpsertNestedInput
  connect: SeasonWhereUniqueInput
}

input SeasonUpdateWithWhereUniqueNestedInput {
  where: SeasonWhereUniqueInput!
  data: SeasonUpdateDataInput!
}

input SeasonUpsertNestedInput {
  update: SeasonUpdateDataInput!
  create: SeasonCreateInput!
}

input SeasonUpsertWithWhereUniqueNestedInput {
  where: SeasonWhereUniqueInput!
  update: SeasonUpdateDataInput!
  create: SeasonCreateInput!
}

input SeasonWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  year: Int
  year_not: Int
  year_in: [Int!]
  year_not_in: [Int!]
  year_lt: Int
  year_lte: Int
  year_gt: Int
  year_gte: Int
  summary: String
  summary_not: String
  summary_in: [String!]
  summary_not_in: [String!]
  summary_lt: String
  summary_lte: String
  summary_gt: String
  summary_gte: String
  summary_contains: String
  summary_not_contains: String
  summary_starts_with: String
  summary_not_starts_with: String
  summary_ends_with: String
  summary_not_ends_with: String
  AND: [SeasonWhereInput!]
  OR: [SeasonWhereInput!]
  NOT: [SeasonWhereInput!]
}

input SeasonWhereUniqueInput {
  id: ID
}

type Subscription {
  episode(where: EpisodeSubscriptionWhereInput): EpisodeSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  season(where: SeasonSubscriptionWhereInput): SeasonSubscriptionPayload
}
`
      }
    