import dayjs from "dayjs";
import RelativeTime from "dayjs";
export function nowDay(){
    const now = dayjs().format("YYYY-MM-DD")
    return now
}
export function nowTime(){
    const now = dayjs().format("HH:mm")
    
    return now
}