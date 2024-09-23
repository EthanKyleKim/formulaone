import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh; /* This ensures the container takes at least full viewport height */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  padding: 20px; /* Optional, to provide some spacing */
  margin-top: 36px
`

export { Container }
