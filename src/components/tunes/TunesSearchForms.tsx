import React, { FormEvent, useRef } from 'react'
import {debounce} from 'lodash-es'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
type Props = {
    onSearch : (query: string) => void
}

const TunesSearchForms = (props: Props) => {
    const searchInput = useRef<HTMLInputElement>(null)
   

    const handleInput = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        searchForMusic()
    },500)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchForMusic()
    }

    const searchForMusic = () => {
        let searchString = searchInput.current?.value
        if (searchString) props.onSearch(searchString)
    }
    return (
        <div>

            <form onSubmit={handleSubmit} className='text-black relative'>
            <FontAwesomeIcon className='absolute mt-4 ml-2' icon={faMagnifyingGlass} /><input autoFocus type="text" ref={searchInput} onChange={handleInput} className='appearance-none block w-full bg-gray-200 mt-2 text-gray-700 border border-gray-200 rounded py-3 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
            </form>
        </div>
    )
}

export default TunesSearchForms