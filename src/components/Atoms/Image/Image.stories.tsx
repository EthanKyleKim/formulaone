import React from 'react'
import { Image } from './Image'

export default {
  title: 'Atoms/Image',
  component: Image,
}

export const Default = () => <Image src="https://via.placeholder.com/100" alt="Profile" />

export const WithCustomSize = () => (
  <Image
    src="https://via.placeholder.com/150"
    alt="Custom Profile"
    style={{ width: '150px', height: '150px' }}
  />
)
