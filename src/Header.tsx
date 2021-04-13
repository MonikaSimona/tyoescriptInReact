import React, { useState } from 'react'

interface Props {
    name: string;
    age: number;
}
interface Movie {
    title: string;
    rate: number;
}

function Header(props: Props) {
    const [movie,setMovie] = useState<Movie | null>(null);
    const { name, age } = props

    return (
        <>
        <div>{name} , {age}</div>
        <button onClick={() => setMovie({title:'Harry Potter',rate:8.5})}>Set movie</button>
        <div>Movie: {movie?.title}</div>
        <div>Rate: {movie?.rate}</div>
        </>
    )
}

export default Header
