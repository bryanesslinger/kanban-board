import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // Get the token from the authorization header
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY || '') as JwtPayload;

    // Attach the user data to the request object
    req.user = decoded;

    // Pass control to the next middleware
    next();
    return;
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
};