import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthInputDto } from './dto/auth.input.dto';
import * as bcrypt from 'bcrypt';
import { user } from '../common/user'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor (
    private readonly jwtService: JwtService,
  ) {}

  async login(authInputDto: AuthInputDto) {
    if( authInputDto.userName !== user.userName) {
      throw new UnauthorizedException('Invalid username');
    }

    const isPasswordValid = await bcrypt.compare(authInputDto.password, user.password);

    if(!isPasswordValid) {
      throw new UnauthorizedException('Invalid password'); 
    }

    const payload = { userName: user.userName};

    const token = await this.jwtService.signAsync(payload);

    return { token }
  }
}
