import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateUserInput } from './dto/inputs/update-user.input';
import { UpdateUserSkillInput } from './dto/inputs/update-userSkills.input';
import { User, UserDocument } from './models/user';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private uModel: Model<UserDocument>) {}

  async findAll() {
    try {
      return await this.uModel.find({}).sort({ name: 1 });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  /**
   * Get User By User Logged ID
   * @param _id
   * @returns
  */
  async getUsersList(): Promise<User[]> {
    try {
      return this.uModel.find();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  /**
   * Get User By UserID
   * @param _id
   * @returns
   */
  async getUserById(_id: string): Promise<User> {
    return this.uModel.findOne({ _id });
  }

  /**
   * Create new User
   **/
  createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdItem = new this.uModel(createUserDto);
    return createdItem.save() as any;
  }

  /**
   * Update User Info (except skills).
   * @param _id
   * @param updateUserInput
   * @returns
   */
  updateUser(_id: string, updateUserInput: UpdateUserInput) {
    return this.uModel.findByIdAndUpdate(_id, updateUserInput);
  }

  /**
   * Update Only 'valors' values
   * @param _id
   * @param updateUserSkillInput
   * @returns
   */
  updateUserSkills(_id: string, updateUserSkillInput: UpdateUserSkillInput) {
    return this.uModel.findByIdAndUpdate(_id, updateUserSkillInput);
  }

  /*
  async findByLogin(UserDTO: LoginDTO) {
    const { email, password } = UserDTO;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new HttpException('user doesnt exists', HttpStatus.BAD_REQUEST);
    }
    if (await bcrypt.compare(password, user.password)) {
      return this.sanitizeUser(user);
    } else {
      throw new HttpException('invalid credential', HttpStatus.BAD_REQUEST);
    }
  }
  */
}
