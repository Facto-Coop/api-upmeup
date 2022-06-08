import { Args, Query, Resolver } from '@nestjs/graphql';
import { Softskill } from './models/softskills';
import { SoftskillsService } from './softskills.service';

@Resolver()
export class SoftskillsResolver {
  constructor(private readonly ssService: SoftskillsService) {}

  @Query((returns) => [Softskill])
  async getSoftskills() {
    return this.ssService.findAllSoftSkills();
  }

  // Softskill By ID
  @Query((returns) => Softskill)
  async getSkill(@Args('id') id: string) {
    return this.ssService.getSkillbyId(id);
  }
}
