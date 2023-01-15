import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { decode, verify } from 'jsonwebtoken';
import jwks from 'jwks-rsa';

export const withAuthorization = (next: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (process.env.NODE_ENV === 'production') {
      try {
        // extract accessToken from req.headers
        const accessToken = req.headers.authorization.replace('Bearer ', '');
        validateAccessToken(accessToken);
      } catch (e) {
        return res.status(401).json({ message: 'authorization failed' });
      }
    }

    next(req, res);
  };
};

const validateAccessToken = async (accessToken: string) => {
  // get public key from jwks
  const {
    header: { kid },
  } = decode(accessToken, { complete: true });
  const jwksClient = jwks({
    jwksUri: process.env.AUTH0_JWKS_URI,
    rateLimit: true,
    cache: true,
    jwksRequestsPerMinute: 5,
  });
  const signingKey = await jwksClient.getSigningKey(kid);

  // verify accessToken
  verify(accessToken, signingKey.getPublicKey(), {
    audience: process.env.AUTH0_AUDIENCE,
    issuer: process.env.AUTH0_ISSUER,
    algorithms: ['RS256'],
  });
};
