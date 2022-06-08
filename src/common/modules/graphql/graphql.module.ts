/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GraphQLModule as GraphQL } from '@nestjs/graphql';

@Module({
	imports: [
		GraphQL.forRoot({
			autoSchemaFile: 'src/schema.gql',
			cors: {
				origin: '*',
				credentials: true,
			},
			sortSchema: true,
			playground: true,
			introspection: true,
			debug: true,
		}),
	],
	providers: [],
	exports: [],
})
export class GraphQLModule {}
