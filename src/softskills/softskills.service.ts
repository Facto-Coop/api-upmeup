import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Softskill, SoftskillDocument } from './models/softskills';

@Injectable()
export class SoftskillsService {
  constructor(
    @InjectModel(Softskill.name) private sfskModel: Model<SoftskillDocument>,
  ) {}

  async findAllSoftSkills(): Promise<Softskill[]> {
    try {
      return this.sfskModel.find();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  // softSkill by ID
  async getSkillbyId(_id: string): Promise<Softskill> {
    return this.sfskModel.findOne({ _id });
  }
}
