declare global {
  namespace Express {
    interface Request {
      admin: {
        id: string;
        role: role;
      };
    }
  }
}

export {};
