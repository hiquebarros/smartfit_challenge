import { useEffect, useState } from "react";
import axios from "axios";

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
  schedules: Array<ISchedule>
  title: string
  towel: string
  fountain: string
}

interface IResponse {
  current_country_id: number
  locations: ILocation[]
  wp_total: number
  total: number
  success: true
}

function useFetch(url: string) {
  const [data, setData] = useState<IResponse>({} as IResponse);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(prev => {
      return !prev
    });
    
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  return { data, loading, error };
}

export default useFetch;