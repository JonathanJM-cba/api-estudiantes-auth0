/**
 * Autenticacion y Autorización con Auth0
 */

/**
 * Scopes
 * read:estudiantes
 * write: estudiantes
 */

import { auth, requiredScopes } from "express-oauth2-jwt-bearer";
import dotenv from "dotenv";

dotenv.config();

const AUDIENCE_AUTH = process.env.AUTH0_AUDIENCE;
const BASE_URL = process.env.AUTH0_DOMAIN;

export const checkJwt = auth({
  audience: AUDIENCE_AUTH,
  issuerBaseURL: BASE_URL,
  tokenSigningAlg: "RS256",
});

//Helper para válidar los scopes en cada

export const checkScopes = (scopes: string[]) => requiredScopes(scopes);
