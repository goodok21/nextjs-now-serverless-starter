import FontFaceObserver from 'fontfaceobserver'
import { styled, ThemeProvider } from 'styled-components'
import theme from './theme'
import { Normalize } from 'styled-normalize'
import GlobalStyle from './globalStyle'
import { useState, useIsomorphicLayoutEffect } from 'utils'

const Wrapper = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false)
  useIsomorphicLayoutEffect(() => {
    var font = new FontFaceObserver('Gilroy')
    font
      .load()
      .then(() => {
        if (!isFontLoaded) {
          setIsFontLoaded(true)
        }
      })
      .catch(e => {
        console.warn(e)
      })
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle fontLoaded={isFontLoaded} />
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </>
  )
}

export default Layout
