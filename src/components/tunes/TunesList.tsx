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
        <TransitionGroup component="ul" className="tunes-list">
        {songs.map(song => (
            <CSSTransition key={song.id} timeout={200} classNames="song">
                <li key={song.id} className="flex flex-col max-w-[500px] mt-10  justify-center items-center mx-auto text-black">
                    <TunesSong song={song}/>
                </li>
            </CSSTransition>
        ))}
    </TransitionGroup>
)
}

export default TunesList