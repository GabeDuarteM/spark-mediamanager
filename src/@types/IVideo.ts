import IGenreTrakt from "./IGenreTrakt"
import IIds from "./IIds"
import ILanguageTrakt from "./ILanguageTrakt"

export default interface IVideo {
  title: string
  year: number
  ids: IIds
  overview: string
  runtime: number
  certification: string
  updated_at: string
  trailer?: string
  homepage: string
  rating: number
  votes: number
  language: ILanguageTrakt
  available_translations: ILanguageTrakt[]
  genres: IGenreTrakt[]
}
