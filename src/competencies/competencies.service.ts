/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompetenceDto } from './dto/create-competence.dto';
import { Competencies, CompetencieDocument } from './models/competence';

@Injectable()
export class CompetenciesService {
  constructor(
    @InjectModel(Competencies.name)
    private competenceModel: Model<CompetencieDocument>,
  ) {}

  async findCompetencies(): Promise<Competencies[]> {
    try {
      return this.competenceModel.find();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async getCompetenceById(_id: string): Promise<Competencies> {
    return this.competenceModel.findOne({ _id });
  }

  /**
   * Create new Competence
   **/
  createCompetence(competenciesDto: CreateCompetenceDto): Promise<Competencies> {
    const createdItem = new this.competenceModel(competenciesDto);
    return createdItem.save() as any;
  }
}
