import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sector, SectorSchema } from './models/sector';
import { SectorsResolver } from './sectors.resolver';
import { SectorsService } from './sectors.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Sector.name,
        schema: SectorSchema,
      },
    ]),
  ],
  providers: [SectorsService, SectorsResolver],
})
export class SectorsModule {}
