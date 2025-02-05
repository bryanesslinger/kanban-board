import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  //Check if the user exists
  const user = await User.findOne({ where: { username } });
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  //Validate password using bcrypt
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

const secretKey = process.env.JWT_SECRET_KEY || '';


  // Generate JWT token with an expiration time
  const token = jwt.sign({username}, secretKey, { expiresIn: '1h' } );

  // Return the JWT token
  return res.json({ token });
};

const router = Router();


router.post('/login', login);

export default router;
