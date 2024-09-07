import { OperatorService } from './operator.service';
export declare class OperatorController {
    private readonly operatorService;
    constructor(operatorService: OperatorService);
    login(body: {
        name: string;
        password: string;
    }): Promise<{
        access_token: string;
        name: string;
        role: string;
    }>;
}
