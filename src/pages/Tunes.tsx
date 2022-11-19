import React, {  useState } from 'react'
import TunesList from '../components/tunes/TunesList';
import TunesSearchForms from '../components/tunes/TunesSearchForms';
import axios from 'axios'
import { Song } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const Tunes = (props: Props) => {
 
  interface songsFromITunes{
      trackId:number
      artistName:string
      previewUrl:string
      artworkUrl100?:string
      trackName:string
      collectionName:string
      kind?:string
  }
  const [songs,setSongs] = useState([])
  const handleSearch = (query: string) => {

    axios
        .get(`https://itunes.apple.com/search
				?term=${encodeURI(query)}
				&entity=musicTrack
				&limit=5`
            )
            .then(response =>{
              let iTunesSongs = response.data.results.filter(
                (song:songsFromITunes) => song.kind === 'song'
              ).map((song:songsFromITunes) => extractData(song))
              setSongs(iTunesSongs)
            })
    //setSongs([])
  }
  const extractData = ({ 
    trackId: id,
    artistName: artist,
    previewUrl: audioFile,
    artworkUrl100: artwork,
    trackName : title,
    collectionName: album,
  }:songsFromITunes) =>{
    return {
      id,artist,audioFile,artwork,title,album
    } as Song
  }

  return (
    <article className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold font-italic'>Tunes  <FontAwesomeIcon className='w-[30px]' icon={faMusic} /></h1>
      <TunesSearchForms onSearch={handleSearch} />
      <TunesList songs={songs}/>
    </article>

  )
}
export default Tunes