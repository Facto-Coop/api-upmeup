import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sector, SectorDocument } from './models/sector';

@Injectable()
export class SectorsService {
  constructor(
    @InjectModel(Sector.name) private sectorModel: Model<SectorDocument>,
  ) {}

  async findAllSectors(): Promise<Sector[]> {
    try {
      return this.sectorModel.find();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  // Sectors by ID
  async getSectorId(_id: string): Promise<Sector> {
    return this.sectorModel.findOne({ _id });
  }
}
