import { createContext, ReactNode, useEffect, useState } from "react";
import * as React from 'react'

interface FilterProviderProps {
    children: ReactNode;
}

interface FilterProviderData {
    search: boolean,
    shiftState: string | undefined,
    setSearch: React.Dispatch<React.SetStateAction<boolean>>
    setShiftState: React.Dispatch<React.SetStateAction<string | undefined>>
    showClosed: any
    setShowClosed: any
    morningGyms: ILocation[]
    afternoonGyms: ILocation[]
    nightGyms: ILocation[]
    setMorningGyms: React.Dispatch<React.SetStateAction<ILocation[]>>
    setAfternoonGyms: React.Dispatch<React.SetStateAction<ILocation[]>>
    setNightgGyms: React.Dispatch<React.SetStateAction<ILocation[]>>
}

interface ISchedule {
    weekdays: string
    hour: string
  }
  
  interface ILocation {
    content: string
    id: number
    locker_room: string
    mask: string
    opened: boolean
    schedules: ISchedule[]
    title: string
    towel: string
    fountain: string
  }

export const FilterContext = createContext<FilterProviderData>({} as FilterProviderData);

export const FilterProvider = ({ children }: FilterProviderProps) => {
    const [ shiftState, setShiftState ] = useState<string>()
    const [ search, setSearch ] = useState<boolean>(false)
    const [ showClosed, setShowClosed ] = useState(false)
    const [morningGyms, setMorningGyms] = useState<ILocation[]>([]);
    const [afternoonGyms, setAfternoonGyms] = useState<ILocation[]>([]);
    const [nightGyms, setNightgGyms] = useState<ILocation[]>([]);

    return (
        <FilterContext.Provider value={{search, shiftState, setSearch, setShiftState, showClosed, setShowClosed, morningGyms, afternoonGyms, nightGyms, setMorningGyms, setAfternoonGyms, setNightgGyms}}>
            {children}
        </FilterContext.Provider>    
    );
};