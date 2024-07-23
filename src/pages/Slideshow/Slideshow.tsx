'use client'

import { useEffect, useState } from 'react'
import { Image } from './Slideshow.styled'

const images = [
    { src: 'images/2024-Formula1-Alpine-A524-004-2160.jpg', description: 'Red Bull Racing RB20' },
    { src: 'images/2024-Formula1-Aston-Martin-AMR24-006-2160.jpg', description: 'Mercedes AMG W15' },
    { src: 'images/2024-Formula1-Ferrari-SF-24-009-2160.jpg', description: 'McLaren MCL38' },
    { src: 'images/2024-Formula1-McLaren-MCL38-002-2160.jpg', description: 'Alpine A524' },
    { src: 'images/2024-Formula1-Mercedes-AMG-W15-F1-E-Performance-001-2160.jpg', description: 'Aston Martin AMR24' },
    { src: 'images/2024-Formula1-Red-Bull-Racing-RB20-006-2160.jpg', description: 'Ferrari SF24' },
    { src: 'images/2024-Formula1-Sauber-C44-001-2160.jpg', description: 'Sauber C44' },
]

export default function Slideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [fadeType, setFadeType] = useState('in')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFadeType('out')
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
                setFadeType('in')
            }, 2000) // fade out duration
        }, 5000) // display duration

        return () => clearTimeout(timeout)
    }, [currentImageIndex])

    return <Image src={images[currentImageIndex].src} fadeType={fadeType} alt={images[currentImageIndex].description} />
}
