export interface BaseResponse {}

export interface BaseResource<TId = string | number> {
  id: TId;
}
