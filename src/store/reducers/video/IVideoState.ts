import { EVideoType } from '../../../@types/EVideoType'
import IVideo from '../../../@types/IVideo'

export default interface IVideoState {
  animes: IVideo[]
  movies: IVideo[]
  series: IVideo[]
  visibilityFilter: EVideoType
}
