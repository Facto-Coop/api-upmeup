import { Args, Query, Resolver } from '@nestjs/graphql';
import { Sector } from './models/sector';
import { SectorsService } from './sectors.service';

@Resolver()
export class SectorsResolver {
  constructor(private sectorsService: SectorsService) {}

  @Query((returns) => [Sector])
  async getSectors() {
    return this.sectorsService.findAllSectors();
  }

  // Sectors By ID
  @Query((returns) => Sector)
  async getSector(@Args('id') id: string) {
    return this.sectorsService.getSectorId(id);
  }
}
