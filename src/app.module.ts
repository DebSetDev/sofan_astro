import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ZodiacModule } from './zodiac/zodiac.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),

      playground: true,
    }),
    ZodiacModule,
  ],
})
export class AppModule {}
