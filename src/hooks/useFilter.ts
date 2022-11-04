import { useEffect, useState, useContext } from "react";
import { FilterContext } from "../providers/contexts/filterContext";

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

interface IResponse {
  current_country_id: number
  locations: Array<ILocation>
  wp_total: number
  total: number
  success: true
}

function useFilter(data: IResponse) {

  const { showClosed, morningGyms, afternoonGyms, nightGyms, setNightgGyms, setAfternoonGyms, setMorningGyms } = useContext(FilterContext);

    data.locations && data.locations.map((item) => {
  

        if (item.schedules) {
          item.schedules.map((schedule) => {
  
            let opening = parseInt(schedule.hour.slice(0, 2))
            let closing = parseInt(schedule.hour.slice(-3, -1))
  
            if (closing > 18) {
              setNightgGyms(prev => [...prev, item])
            }
            if (closing > 12) {
              setAfternoonGyms(prev => [...prev, item])
            }
            if (closing <= 12) {
              setMorningGyms(prev => [...prev, item])
            }
          })
        }
      
    })

  
  let nonRepeatedMorningGyms = morningGyms.filter(function (item, pos) {
    return morningGyms.indexOf(item) == pos;
  })

  let nonRepeatedAfternoonGyms = afternoonGyms.filter(function (item, pos) {
    return afternoonGyms.indexOf(item) == pos;
  })

  let nonRepeatedNightGyms = nightGyms.filter(function (item, pos) {
    return nightGyms.indexOf(item) == pos;
  })


  return { nonRepeatedMorningGyms, nonRepeatedAfternoonGyms, nonRepeatedNightGyms }
}

export default useFilter;