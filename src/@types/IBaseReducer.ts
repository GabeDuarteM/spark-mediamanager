import { IBaseAction } from "./IBaseAction"

export type IBaseReducer<T> = (state?: T, action?: IBaseAction) => T
