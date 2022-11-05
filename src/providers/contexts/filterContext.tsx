import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { FilterProviderData, FilterProviderProps, ILocation } from "../interfaces";

export const FilterContext = createContext<FilterProviderData>({} as FilterProviderData);

export const FilterProvider = ({ children }: FilterProviderProps) => {

    const [shiftState, setShiftState] = useState<string>('none')
    const [showClosed, setShowClosed] = useState(false)
    const [filteredData, setFilteredData] = useState<ILocation[]>([]);

    const morningGyms: ILocation[] = []
    const afternoonGyms: ILocation[] = []
    const nightGyms: ILocation[] = []

    const fetchData = () => {
        axios
          .get("https://test-frontend-developer.s3.amazonaws.com/data/locations.json")
          .then((response) => {
            filterShifts(response.data.locations)
          })
          .catch((err) => {
            console.log(err);
          })
             
    }

    const filterClosed = (data: ILocation[]) => {
        if(!showClosed){
            const filtered = data.filter(item => {
                return item.opened
            })
            return filtered
        } else {
            return data
        }
    }

    const filterShifts = (data:ILocation[]) => {

        const newData = filterClosed(data)

        newData && newData.map((item) => {

            if (item.schedules) {
                item.schedules.map((schedule) => {
                    let opening = parseInt(schedule.hour.slice(0, 2))
                    let closing = parseInt(schedule.hour.slice(-3, -1))
                    if (closing < 12) {
                        morningGyms.push(item)
                    }
                    if (closing <= 18) {
                        afternoonGyms.push(item)
                    }
                    if (closing > 18) {
                        nightGyms.push(item)
                    }
                })
            }
        })

        if(shiftState === "none") {
            setFilteredData(data)
        } else {
            if(shiftState === "manhã"){
                let return1 =  morningGyms.filter(function (item, pos) {
                    return morningGyms.indexOf(item) == pos;
                })
                setFilteredData(return1)
            }
            if(shiftState === "tarde"){
                let return2 =  afternoonGyms.filter(function (item, pos) {
                    return afternoonGyms.indexOf(item) == pos;
                })
                setFilteredData(return2)
            }
            if(shiftState === "noite"){
                let return3 =  nightGyms.filter(function (item, pos) {
                    return nightGyms.indexOf(item) == pos;
                })
                setFilteredData(return3)
            }
        }
      }

    return (
        <FilterContext.Provider value={{ shiftState, setShiftState, showClosed, setShowClosed, fetchData, filteredData, setFilteredData}}>
            {children}
        </FilterContext.Provider>
    );
}