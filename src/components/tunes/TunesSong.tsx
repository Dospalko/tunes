import { truncate } from 'lodash-es'
import React, { useMemo } from 'react'
import { Song } from '../../types'
import './TunesSong.scss'
type Props = {
    song: Song
}

const TunesSong = (props: Props) => {
    const { song } = props

    const songify = useMemo(
        () => (song: Song): string => {
            const newTitle = song.title + ' by ' + song.artist
            return shorten(newTitle, 100)
        },
        [song.title, song.artist]
    )

    const shorten = (str: string, len = 55): string => {
        return truncate(str, { length: len })
    }

    return (
        <div className='flex song flex-col bg-[#E3D87E] rounded'>
            <div className="inside px-6 ">
                <h2 className='font-bold text-lg border-b-2 border-gray-600 mt-1'>
                    {songify(song)}
                </h2>
                <div className='flex flex-row gap-8'>
                    {song.artwork && (
                        <img src={song.artwork} alt="album art" className='my-3 rounded-sm  shadow-2xl object-fit' />
                    )}
                    <audio controls src={song.audioFile} className="my-auto mx-auto "></audio>
                </div>
            </div>
            <footer className="meta bg-[#F0EC57] h-12 my-auto text-black font-semibold flex items-center px-3">
                {shorten(song.album)}
            </footer>
        </div>
    )
}

export default TunesSong