export default interface ISong {
    artist: string
    name: string
    songId : number
    spotifyUri: string
  }
export type SongViewModel = {
  songId : number
  label: string
}