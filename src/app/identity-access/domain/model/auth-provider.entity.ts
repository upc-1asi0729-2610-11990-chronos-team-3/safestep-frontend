import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export class AuthProvider implements BaseEntity<string> {
  private _id: string;
  private _name: string;
  private _enabled: boolean;

  get id(): string { return this._id; }
  set id(value: string) { this._id = value; }
  get name(): string { return this._name; }
  set name(value: string) { this._name = value; }
  get enabled(): boolean { return this._enabled; }
  set enabled(value: boolean) { this._enabled = value; }

  constructor(authProvider: { id: string; name: string; enabled: boolean }) {
    this._id = authProvider.id;
    this._name = authProvider.name;
    this._enabled = authProvider.enabled;
  }
}
