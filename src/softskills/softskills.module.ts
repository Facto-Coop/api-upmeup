import { Module } from '@nestjs/common';
import { SoftskillsService } from './softskills.service';
import { SoftskillsResolver } from './softskills.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Softskill, SoftskillSchema } from './models/softskills';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Softskill.name,
        schema: SoftskillSchema,
      },
    ]),
  ],
  providers: [SoftskillsService, SoftskillsResolver],
})
export class SoftskillsModule {}
