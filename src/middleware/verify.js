/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import { verify } from 'jsonwebtoken';

export default function(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json('Access denied, No token provided');

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json('Invalid token!');
  }
}
