import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
export declare class AdminService {
    private readonly prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(name: string, password: string): Promise<{
        access_token: string;
        name: string;
        role: string;
    }>;
}
