import { Container, Button, Input, Text, Box } from '@mantine/core'
import { heroSearchStyles } from './styles'
import SearchBar from '@/components/SearchBar'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import HeroFeatures from '../HeroFeatures'

export default function HeroSearch() {
  const { classes } = heroSearchStyles()
  const [text] = useTypewriter({
    words: ['Partners', '3PLs', 'Warehouses'],
    loop: true,
  })

  return (
    <div className={classes.wrapper}>
      <Container size='xl' className={classes.inner}>
        <h1 className={classes.title}>
          Search{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'teal', to: 'cyan' }} inherit>
            {text}
          </Text>
          {/* <Cursor /> */}
        </h1>
        
        <SearchBar size='xl' />
        <Box pt={30}>
          <HeroFeatures />
        </Box>
      </Container>
    </div>
  )
}
