declare module "express" {
  export interface Request {
    user?: {
      id: number;
      name: string;
      email: string;
      status: boolean;
      createdAt: Date | null;
      updatedAt: Date | null;
    };
    tokenJti?: string;
    tokenExp?: number;
  }
}
