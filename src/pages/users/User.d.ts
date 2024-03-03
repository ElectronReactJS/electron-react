// src/pages/users/User.types.ts
export interface Attempt {
  label: 'Authenticated' | 'Wrong password' | 'Expired token'
  attemptedAt: string
  color: '#D4EDDA' | '#FFCCCB' | '#FFF8DC'
}

export interface User {
    id: string
    userName: string
    createdAt: string
    updatedAt: string
  }
