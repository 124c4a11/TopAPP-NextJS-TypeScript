import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IRatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
  error?: FieldError;
}
