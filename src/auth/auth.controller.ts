import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthInputDto } from './dto/auth.input.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('login')
  @ApiOperation({ summary: 'Hacer el login del usuario.' })
  @ApiBody({ type: AuthInputDto })
  async login(
    @Body() authInputDto: AuthInputDto
  ) {
    return await this.authService.login(authInputDto);
  }
}
