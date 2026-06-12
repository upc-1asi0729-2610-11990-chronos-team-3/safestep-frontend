import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export class SecurityEvent implements BaseEntity<string> {
  private _id: string;
  private _type: string;
  private _description: string;
  private _createdAt: string;

  get id(): string { return this._id; }
  set id(value: string) { this._id = value; }
  get type(): string { return this._type; }
  set type(value: string) { this._type = value; }
  get description(): string { return this._description; }
  set description(value: string) { this._description = value; }
  get createdAt(): string { return this._createdAt; }
  set createdAt(value: string) { this._createdAt = value; }

  constructor(securityEvent: { id: string; type: string; description: string; createdAt: string }) {
    this._id = securityEvent.id;
    this._type = securityEvent.type;
    this._description = securityEvent.description;
    this._createdAt = securityEvent.createdAt;
  }
}
