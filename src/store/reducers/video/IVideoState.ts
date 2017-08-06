import IMovie from "../../../@types/IMovie"
import ISerie from "../../../@types/ISerie"

export default interface IVideoState {
  animes: ISerie[]
  movies: IMovie[]
  series: ISerie[]
}
