import FontFaceObserver from 'fontfaceobserver'
import styled, { ThemeProvider } from 'styled-components'
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
    if (isFontLoaded) return
    var normal = new FontFaceObserver('Gilroy')
    var italic = new FontFaceObserver('Gilroy', {
      style: 'italic'
    })
    var bold = new FontFaceObserver('Gilroy', {
      style: 'bold'
    })

    Promise.all([normal.load(), italic.load(), bold.load()]).then(() => {
      setIsFontLoaded(true)
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
