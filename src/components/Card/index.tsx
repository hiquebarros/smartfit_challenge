import { CardSchedule, Container } from "./styles"
import forbidden_fountain from "../../assets/icons/forbidden-fountain.png"
import forbidden_lockerroom from "../../assets/icons/forbidden-lockerroom.png"
import partial_fountain from "../../assets/icons/partial-fountain.png"
import partial_lockerroom from "../../assets/icons/partial-lockerroom.png"
import recommended_mask from "../../assets/icons/recommended-mask.png"
import recommended_towel from "../../assets/icons/recommended-towel.png"
import required_lockerroom from "../../assets/icons/required-lockerroom.png"
import required_mask from "../../assets/icons/required-mask.png"
import required_towel from "../../assets/icons/required-towel.png"

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

  interface ICardProps {
    data: ILocation
  }

  const formatParagraph = (data: string) => {
    let stringArray = data.slice(4, -5).split(";")
    let arr1 = stringArray[0].slice(0, -7) + ";"
    let arr2 = stringArray[1].replace("<br>", " ") + "."

    return arr1 + arr2
  }

const Card = ({data}: ICardProps) => {
    
    return (
        <Container open={data.opened}>
            <div className="card-header">
              {data.opened ? (<h5>Aberto</h5>) : (<h5>Fechado</h5>)}
                <h2>{data.title}</h2>
                <p>{formatParagraph(data.content)}</p>
            </div>
            <div className="card-icons">
            {data.mask == "required" ? (<img src={required_mask}/>) : (<img src={recommended_mask}/>)}
            {data.towel == "required" ? (<img src={required_towel}/>) : (<img src={recommended_towel}/>)}
            {data.fountain == "partial" ? (<img src={partial_fountain}/>) : (<img src={forbidden_fountain}/>)}
            {data.locker_room == "allowed" ? (<img src={required_lockerroom}/>) : data.locker_room == "partial" ? (<img src={partial_lockerroom}/>) : (<img src={forbidden_lockerroom}/>)}
            </div>
            <div className="card-schedules">
              
              {!!data.schedules && data.schedules.map(item => {
                return (
                <CardSchedule key={Math.random()}>
                  <h3>{item.weekdays}</h3>
                  <h5>{item.hour}</h5>
                </CardSchedule>
                )
              })}
            </div>
        </Container>
    );
}

export default Card;