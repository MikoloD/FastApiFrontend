import { useEffect, useState } from "react"
import ISong from "../interfaces/ISong"


const Recomendation = () => {

  const [songs, setSongs] = useState<ISong[]>([])
  const fetchSongData = async () => {
    await fetch("http://localhost:8000/", {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        setSongs(data)
      })
  }

  useEffect(() => {
    fetchSongData()
  }, [])

  return (
    <div>
        {songs.map(song =>(<p>{song.artist} {song.name}</p>))}
    </div>
  );
}
export default Recomendation;