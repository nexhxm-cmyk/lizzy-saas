import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/authMiddleware';
export declare const getCourses: (req: Request, res: Response) => Promise<void>;
export declare const getCourseById: (req: Request, res: Response) => Promise<void>;
export declare const createCourse: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=courseController.d.ts.map