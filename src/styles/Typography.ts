// src/styles/typography.ts

export interface TypographyStyles {
  fontSize: string
  fontWeight: number
}

export const typography = {
  h1: {
    fontSize: '48px', // or '3rem'
    fontWeight: 900, // Heavy
  },
  h2: {
    fontSize: '40px', // or '2.5rem'
    fontWeight: 700, // Bold
  },
  h3: {
    fontSize: '32px', // or '2.25rem'
    fontWeight: 700, // Bold
  },
  h4: {
    fontSize: '24px', // or '1.5rem'
    fontWeight: 500, // Medium
  },
  h5: {
    fontSize: '20px', // or '1.25rem'
    fontWeight: 500, // Medium
  },
  body1: {
    fontSize: '16px', // or '1rem'
    fontWeight: 500, // Medium
  },
  body2: {
    fontSize: '14px', // or '0.875rem'
    fontWeight: 400, // Normal
  },
  caption1: {
    fontSize: '16px', // or '1rem'
    fontWeight: 400, // Normal
  },
  caption2: {
    fontSize: '14px', // or '0.875rem'
    fontWeight: 400, // Normal
  },
  caption3: {
    fontSize: '12px', // or '0.75rem'
    fontWeight: 400, // Normal
  },
}
