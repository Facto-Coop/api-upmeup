import { Injectable } from '@nestjs/common';
// import { Payload } from 'src/types/payload';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  /* constructor(private userService: UserService) {}

  async signPayload(payload: Payload) {
    return sign(payload, process.env.SECRET_KEY, { expiresIn: '7d' });
  }*/
}
