import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export class Notification implements BaseEntity<string> {
  private _id: string;
  private _type: string;
  private _title: string;
  private _message: string;
  private _isActive: boolean;
  private _isRead: boolean;
  private _createdAt: string;

  get id(): string { return this._id; }
  set id(value: string) { this._id = value; }
  get type(): string { return this._type; }
  set type(value: string) { this._type = value; }
  get title(): string { return this._title; }
  set title(value: string) { this._title = value; }
  get message(): string { return this._message; }
  set message(value: string) { this._message = value; }
  get isActive(): boolean { return this._isActive; }
  set isActive(value: boolean) { this._isActive = value; }
  get isRead(): boolean { return this._isRead; }
  set isRead(value: boolean) { this._isRead = value; }
  get createdAt(): string { return this._createdAt; }
  set createdAt(value: string) { this._createdAt = value; }

  constructor(notification: { id: string; type: string; title: string; message: string; isActive: boolean; isRead: boolean; createdAt: string }) {
    this._id = notification.id;
    this._type = notification.type;
    this._title = notification.title;
    this._message = notification.message;
    this._isActive = notification.isActive;
    this._isRead = notification.isRead;
    this._createdAt = notification.createdAt;
  }
}
