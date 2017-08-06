import IVideo from "./IVideo"
export default interface IMovie extends IVideo {
  tagline: string
  released: string
}
