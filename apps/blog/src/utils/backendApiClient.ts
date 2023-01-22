import { ApolloClient, InMemoryCache } from '@apollo/client';
import axios, { AxiosRequestConfig } from 'axios';

type Auto0TokenRequest = {
  client_id: string;
  client_secret: string;
  audience: string;
  grant_type: string;
};
type Auto0TokenResponse = {
  data: {
    access_token: string;
    expires_in: number;
    token_type: string;
  };
};

const getBackendApiAccessToken = async () => {
  const config: AxiosRequestConfig<Auto0TokenRequest> = {
    url: 'https://dev-ftds0lm7.us.auth0.com/oauth/token',
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    data: {
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      audience: process.env.AUTH0_AUDIENCE,
      grant_type: 'client_credentials',
    },
  };
  const res = await axios.request<Auto0TokenRequest, Auto0TokenResponse>(config);
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    data: { access_token },
  } = res;

  return access_token;
};

let backendApiClient: ApolloClient<any> | null = null;

export const getBackendApolloClient = async () => {
  if (!backendApiClient) {
    const accessToken = await getBackendApiAccessToken();
    backendApiClient = new ApolloClient({
      uri: process.env.BACKEND_API_URL,
      cache: new InMemoryCache(),
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
  }

  return backendApiClient;
};
