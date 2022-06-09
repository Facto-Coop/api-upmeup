/* eslint-disable prettier/prettier */
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UpdateUserSkillInput } from './dto/inputs/update-userSkills.input';
import { User } from './models/user';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly uService: UsersService) {}

  @Query((returns) => [User])
  async getUsers(): Promise<User[]> {
    return await this.uService.findAll();
  }

  // User By ID
  @Query((returns) => User)
  async getUser(@Args('id') id: string) {
    return await this.uService.getUser(id);
  }

  /**
   * Mutation: Update Value 'valors' when click "save" in profile modal.
   */
  @Mutation(() => User, { name: 'updateUserSkills' })
  async updateSkillsUser(
    @Args('id') _id: string,
    @Args({ name: 'input', type: () => UpdateUserSkillInput }) input: UpdateUserSkillInput,
  ) {
    return await this.uService.updateUserSkills(_id, input);
  }
}