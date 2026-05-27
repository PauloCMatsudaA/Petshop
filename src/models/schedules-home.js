import { url } from "../services/api-config";
import dayjs from "dayjs";


import { homeLoad } from "../services/home-load";

export async function hoursLoad() {
  const hours = await fetch(`${url.baseUrl}/schedules`).then((response) =>
    response.json(),
  );

  return hours;
}

document.addEventListener("DOMContentLoaded", await homeLoad());
