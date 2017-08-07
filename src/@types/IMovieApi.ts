import ICollection from "./ICollection"
import IVideoApi from "./IVideoApi"

export default interface IMovieApi extends IVideoApi {
  adult: boolean
  belongs_to_collection?: ICollection
  tagline?: string
}
