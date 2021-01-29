import * as jwt from "jsonwebtoken";
export type AuthenticationData = {
  id: string;
};
export function generateToken(payload: AuthenticationData): string {
  return jwt.sign(payload, process.env.JWT_KEY as string, {
    expiresIn: "1d",
  });
}
export function getTokenData(token: string): AuthenticationData {
  return jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData;
}