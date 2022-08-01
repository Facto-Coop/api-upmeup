import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompetenciesResolver } from './competencies.resolver';
import { CompetenciesService } from './competencies.service';
import { Competencies, CompetenceSchema } from './models/competence';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Competencies.name,
        schema: CompetenceSchema,
      },
    ]),
  ],
  providers: [CompetenciesService, CompetenciesResolver],
})
export class CompetenciesModule {}
