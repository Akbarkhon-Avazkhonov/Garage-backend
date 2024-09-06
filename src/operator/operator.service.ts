import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class OperatorService {
  constructor(
    // private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async login(name: string, password: string) {
    if (name != process.env.OPERATOR_NAME) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    if (!(await bcrypt.compare(password, process.env.OPERATOR_PASSWORD))) {
      throw new HttpException('Wrong password', HttpStatus.UNAUTHORIZED);
    }
    const payload = { sub: 1, name: name };
    return {
      access_token: await this.jwtService.signAsync(payload),
      name: name,
      role: 'operator',
    };
  }
}
