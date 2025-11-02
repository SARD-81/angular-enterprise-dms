export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  avatar?: string;
  roles: string[];
  permissions: string[];
  department?: string;
  jobTitle?: string;
  phoneNumber?: string;
  isActive: boolean;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserRequest {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  roles: string[];
  department?: string;
  jobTitle?: string;
  phoneNumber?: string;
}

export interface UpdateUserRequest {
  firstName?: string;
  lastName?: string;
  roles?: string[];
  department?: string;
  jobTitle?: string;
  phoneNumber?: string;
  isActive?: boolean;
}

export interface UserRole {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  isSystemRole: boolean;
  createdAt: Date;
}

export interface UserPermission {
  id: string;
  name: string;
  description: string;
  module: string;
  action: string;
}