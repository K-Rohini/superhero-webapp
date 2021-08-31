import React from 'react'
import { useParams } from 'react-router-dom'

const Hero = () => {

    const { id } = useParams();

    return (
        <div>
            {id}
        </div>
    )
}

export default Hero
