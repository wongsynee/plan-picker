import { Interval } from './enums'

export interface IAction<P> {
  type: string;
  payload: P;
}

export interface IData {
  interval?: Interval;
  paymentCount: number;
}