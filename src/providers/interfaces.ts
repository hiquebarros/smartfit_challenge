import { ReactNode } from "react";

export interface FilterProviderProps {
  children: ReactNode;
}

export interface FilterProviderData {
  shiftState: string | undefined;
  setShiftState: React.Dispatch<React.SetStateAction<string>>;
  showClosed: boolean;
  setShowClosed: React.Dispatch<React.SetStateAction<boolean>>;
  filteredData: ILocation[];
  setFilteredData: React.Dispatch<React.SetStateAction<ILocation[]>>;
  fetchData: () => void;
}

export interface ISchedule {
  weekdays: string;
  hour: string;
}

export interface ILocation {
  content: string;
  id: number;
  locker_room: string;
  mask: string;
  opened: boolean;
  schedules: ISchedule[];
  title: string;
  towel: string;
  fountain: string;
}
