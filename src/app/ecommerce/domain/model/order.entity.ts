import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export class Order implements BaseEntity<string> {
  private _id: string;
  private _userId: string;
  private _total: number;
  private _status: string;
  private _items: string[];
  private _createdAt: string;

  constructor(order: { id: string; userId: string; total: number; status: string; items: string[]; createdAt: string }) {
    this._id = order.id;
    this._userId = order.userId;
    this._total = order.total;
    this._status = order.status;
    this._items = [...order.items];
    this._createdAt = order.createdAt;
  }

  get id(): string { return this._id; }
  set id(value: string) { this._id = value; }
  get userId(): string { return this._userId; }
  set userId(value: string) { this._userId = value; }
  get total(): number { return this._total; }
  set total(value: number) { this._total = value; }
  get status(): string { return this._status; }
  set status(value: string) { this._status = value; }
  get items(): string[] { return this._items; }
  set items(value: string[]) { this._items = value; }
  get createdAt(): string { return this._createdAt; }
  set createdAt(value: string) { this._createdAt = value; }
}
