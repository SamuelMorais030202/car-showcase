import { MouseEventHandler } from "react";

export interface ICustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface ISearchBarProps {
  setManuFacturer: (searchManufacturer: string) => void;
  setModel: (searchModel: string) => void;
}

export interface ISearchManufacturerProps {
  selected: string;
  setSelected: (manufacturer : string) => void;
}

export interface ICarCardProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface ICardDetailsProps {
  isOpen: boolean
  closeModel: () => void;
  car: ICarCardProps;
}

export interface IFilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface IHomeProps {
  searchParams: IFilterProps;
}

export interface IOptionProps {
  title: string;
  value: string;
}

export interface ICustomFilterProps<T> {
  title: string;
  options: IOptionProps[];
  setFilter: (slected: T) => void;
} 

export interface IShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}