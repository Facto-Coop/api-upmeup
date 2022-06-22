import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './common/modules/database/database.module';
import { GraphQLModule as GraphQL } from './common/modules/graphql/graphql.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CompanyOffersModule } from './company-offers/company-offers.module';
import { UsersOffersModule } from './users-offers/users-offers.module';
import { SoftskillsModule } from './softskills/softskills.module';
import { SectorsModule } from './sectors/sectors.module';

@Module({
  imports: [
    DatabaseModule,
    GraphQL,
    UsersModule,
    AuthModule,
    CompanyOffersModule,
    UsersOffersModule,
    SoftskillsModule,
    SectorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
