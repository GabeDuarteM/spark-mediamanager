import IVideoApi from "./IVideoApi"

export default interface ISerieApi extends IVideoApi {
  number_of_episodes: number
  number_of_seasons: number
  seasons: Array<{
    air_date: string
    episode_count: number
    id: number
    poster?: string
    season_number: number
  }>
}
