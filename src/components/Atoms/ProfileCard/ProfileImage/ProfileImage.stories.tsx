import React from 'react'
import { ProfileImage } from './ProfileImage'

export default {
  title: 'Atoms/ProfileImage',
  component: ProfileImage,
}

export const Default = () => <ProfileImage src="https://via.placeholder.com/100" alt="Profile" />

export const WithCustomSize = () => (
  <ProfileImage
    src="https://via.placeholder.com/150"
    alt="Custom Profile"
    style={{ width: '150px', height: '150px' }}
  />
)
