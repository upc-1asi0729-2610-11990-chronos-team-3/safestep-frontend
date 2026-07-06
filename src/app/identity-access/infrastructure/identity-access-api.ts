import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { environment } from '../../../environments/environment';
import { UserProfilesApiEndpoint } from './user-profiles-api-endpoint';
import { AuthProvidersApiEndpoint } from './auth-providers-api-endpoint';
import { SecurityEventsApiEndpoint } from './security-events-api-endpoint';
import { NotificationsApiEndpoint } from './notifications-api-endpoint';
import { UserProfile } from '../domain/model/user-profile.entity';
import { AuthProvider } from '../domain/model/auth-provider.entity';
import { SecurityEvent } from '../domain/model/security-event.entity';
import { Notification } from '../domain/model/notification.entity';
import {
  AuthenticatedUserResponse,
  LogoutRequest,
  MessageResponse,
  SignedUpUserResponse,
  SignInRequest,
  SignUpRequest,
} from './authentication.resources';
import { ProfileResource, UpdateProfileRequest } from './profile.resources';

@Injectable({ providedIn: 'root' })
export class IdentityAccessApi extends BaseApi {
  private readonly userProfilesEndpoint: UserProfilesApiEndpoint;
  private readonly authProvidersEndpoint: AuthProvidersApiEndpoint;
  private readonly securityEventsEndpoint: SecurityEventsApiEndpoint;
  private readonly notificationsEndpoint: NotificationsApiEndpoint;

  constructor(http: HttpClient) {
    super();
    this.http = http;
    this.userProfilesEndpoint = new UserProfilesApiEndpoint(http);
    this.authProvidersEndpoint = new AuthProvidersApiEndpoint(http);
    this.securityEventsEndpoint = new SecurityEventsApiEndpoint(http);
    this.notificationsEndpoint = new NotificationsApiEndpoint(http);
  }

  private readonly http: HttpClient;
  private readonly baseUrl = environment.platformProviderApiBaseUrl;

  signIn(username: string, password: string): Observable<AuthenticatedUserResponse> {
    const payload: SignInRequest = { username, password };
    return this.http.post<AuthenticatedUserResponse>(`${this.baseUrl}/authentication/sign-in`, payload);
  }

  signUp(username: string, password: string): Observable<SignedUpUserResponse> {
    const payload: SignUpRequest = { username, password };
    return this.http.post<SignedUpUserResponse>(`${this.baseUrl}/authentication/sign-up`, payload);
  }

  logout(refreshToken: string): Observable<MessageResponse> {
    const payload: LogoutRequest = { refreshToken };
    return this.http.post<MessageResponse>(`${this.baseUrl}/authentication/logout`, payload);
  }

  getMyProfile(): Observable<ProfileResource> {
    return this.http.get<ProfileResource>(`${this.baseUrl}/profiles/me`);
  }

  updateMyProfile(profile: UpdateProfileRequest): Observable<ProfileResource> {
    return this.http.put<ProfileResource>(`${this.baseUrl}/profiles/me`, profile);
  }

  getUserProfiles(): Observable<UserProfile[]> { return this.userProfilesEndpoint.getAll(); }
  getAuthProviders(): Observable<AuthProvider[]> { return this.authProvidersEndpoint.getAll(); }
  getSecurityEvents(): Observable<SecurityEvent[]> { return this.securityEventsEndpoint.getAll(); }
  getNotifications(): Observable<Notification[]> { return this.notificationsEndpoint.getAll(); }
  createUserProfile(profile: UserProfile): Observable<UserProfile> { return this.userProfilesEndpoint.create(profile); }
  updateUserProfile(profile: UserProfile, id: string): Observable<UserProfile> { return this.userProfilesEndpoint.update(profile, id); }
  deleteUserProfile(id: string): Observable<void> { return this.userProfilesEndpoint.delete(id); }
  updateAuthProvider(provider: AuthProvider, id: string): Observable<AuthProvider> { return this.authProvidersEndpoint.update(provider, id); }
  deleteNotification(id: string): Observable<void> { return this.notificationsEndpoint.delete(id); }
}
