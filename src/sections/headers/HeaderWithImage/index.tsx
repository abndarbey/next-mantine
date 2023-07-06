import {
  Image,
  Title,
  Text,
  SimpleGrid,
} from '@mantine/core'
import { Dots } from '@/components/Dots'
import { heroHeaderStyles } from './styles'
import HeaderWrapper from '@/components/wrappers/HeaderWrapper'

interface HeroHeaderProps {
  title: string
  description?: string
  image?: any
}

export default function HeaderWithImage(props: HeroHeaderProps) {
  const { classes } = heroHeaderStyles()

  return (
    <HeaderWrapper>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            {props.title}
          </Title>
          <Text mt="md">{props.description}</Text>
        </div>
        <Image src={props.image.src} className={classes.image} alt="img" />
      </SimpleGrid>
    </HeaderWrapper>
  )
}
