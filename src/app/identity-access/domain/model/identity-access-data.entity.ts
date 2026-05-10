import { AuthProvider } from './auth-provider.entity';
import { UserProfile } from './user-profile.entity';

export interface IdentityAccessData {
  sampleUser: UserProfile;
  authProviders: AuthProvider[];
  passwordRules: string[];
  securityEvents?: Array<{
    id: string;
    type: string;
    description: string;
    createdAt: string;
  }>;
  notifications?: Array<{
    id: string;
    type: string;
    title: string;
    message: string;
    isActive: boolean;
    isRead: boolean;
    createdAt: string;
  }>;
}
