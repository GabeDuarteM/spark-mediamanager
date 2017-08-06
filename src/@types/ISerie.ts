import ISerieIds from "./ISerieIds"
import IVideo from "./IVideo"

export default interface ISerie extends IVideo {
  airs: {
    day: string
    time: string
    timezone: string
  }
  ids: ISerieIds
  network: string
  country: string
  first_aired: string
  status: "returning series" | "in production" | "planned" | "canceled" | "ended"
  aired_episodes: number
}
