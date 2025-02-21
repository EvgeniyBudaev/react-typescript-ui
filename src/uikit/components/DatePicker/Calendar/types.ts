import type { CalendarProps } from "react-calendar";

type TCalendarValuePiece = Date | null;

export type TCalendarValue = TCalendarValuePiece | [TCalendarValuePiece, TCalendarValuePiece];

export type TCalendarProps = {
  locale?: string;
  maxDate?: Date;
  minDate?: Date;
  onChange?: (date: Date) => void;
  value?: TCalendarValue;
} & CalendarProps;
