import http from './http';
import type { AuthTokens, RegisterPayload, LoginPayload, ChangePasswordPayload } from './auth.types';

export const register = async (payload: RegisterPayload): Promise<AuthTokens> => {
  const { data } = await http.post<AuthTokens>('/auth/register', payload);
  return data;
};

export const login = async (payload: LoginPayload): Promise<AuthTokens> => {
  const { data } = await http.post<AuthTokens>('/auth/login', payload);
  return data;
};

export const changePassword = async (payload: ChangePasswordPayload): Promise<void> => {
  await http.post('/auth/change-password', payload);
};
