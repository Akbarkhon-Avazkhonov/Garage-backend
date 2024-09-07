import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    login(body: {
        name: string;
        password: string;
    }): Promise<{
        access_token: string;
        name: string;
        role: string;
    }>;
}
