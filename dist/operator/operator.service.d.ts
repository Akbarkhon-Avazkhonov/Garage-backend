import { JwtService } from '@nestjs/jwt';
export declare class OperatorService {
    private jwtService;
    constructor(jwtService: JwtService);
    login(name: string, password: string): Promise<{
        access_token: string;
        name: string;
        role: string;
    }>;
}
