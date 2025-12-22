import jwt from "jsonwebtoken";
interface JwtPayload {
  id: number;
  username: string;
  iat: number;
  exp: number;
}

const SECRET = process.env.JWT_SECRET || "qwerty123";

export function signJwt(payload: object) {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" });
}

export function verifyJwt(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
  } catch {
    return null;
  }
}
