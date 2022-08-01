import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CompetenciesService } from './competencies.service';
import { CreateCompetenceDto } from './dto/create-competence.dto';
import { Competencies } from './models/competence';

@Resolver()
export class CompetenciesResolver {
  constructor(private competenciesService: CompetenciesService) {}

  @Query((returns) => [Competencies])
  async getCompetencies() {
    return this.competenciesService.findCompetencies();
  }

  /**
   * Competence By ID
  */
  @Query((returns) => Competencies)
  async getCompetence(@Args('id') id: string) {
    return this.competenciesService.getCompetenceById(id);
  }

  /**
   * Mutation: Create new Competence resolver
   */
  @Mutation((returns) => Competencies)
  async createCompetence(
    @Args('competenciesDto') competenciesDto: CreateCompetenceDto,
  ): Promise<Competencies> {
    return this.competenciesService.createCompetence(competenciesDto);
  }
}
