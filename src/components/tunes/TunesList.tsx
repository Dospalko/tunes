import React, { useState } from 'react'
import { Song } from '../../types';
import TunesSong from './TunesSong';
import {TransitionGroup,CSSTransition} from 'react-transition-group'
type Props = {
    songs: Song[]
}

const TunesList = (props: Props) => {
    
    const {songs} = props;
    return (
        <ul className=''>
            {songs.map(song => (
                <li className='flex flex-col max-w-[500px] mt-10  justify-center items-center mx-auto text-black' key={song.id}>
                    <TunesSong song={song}/>
                </li>
            ))}
        </ul>

    )
}

export default TunesList