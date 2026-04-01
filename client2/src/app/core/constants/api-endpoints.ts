export const API_BASE_URL = 'http://localhost:5000';

export const API_ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
  },
  events: '/api/events',
} as const;
