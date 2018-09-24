import IMovieApi from './IMovieApi'
import ISerieApi from './ISerieApi'

export default interface IVideo {
  id: string
  path?: string
  api: ISerieApi | IMovieApi
}
