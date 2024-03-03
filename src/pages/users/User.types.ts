// src/pages/users/User.types.ts
export interface Attempt {
    label: 'Authenticated' | 'Wrong password' | 'Expired token';
    attemptedAt: string;
    color: '#D4EDDA' | '#FFCCCB' | '#FFF8DC';
  }
  