import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Working with NESTjs and GraphQL! :)';
  }
}
