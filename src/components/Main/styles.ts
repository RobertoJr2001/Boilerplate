import style from 'styled-components'

export const Wrapper = style.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = style.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = style.h1`
  font-size: 2.5rem;
`

export const Description = style.h2`
font-size: 2rem;
font-wight: 400;
`

export const Illustration = style.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`