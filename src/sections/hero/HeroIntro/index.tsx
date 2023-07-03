import { Title, Text, Button, Container, Group } from '@mantine/core'
import { useRouter } from 'next/router'
import { ButtonProps } from '@/types/types'
import { Dots } from '@/components/Dots'
import { heroIntroStyles } from './styles'
import SectionWrapper from '@/components/wrappers/SectionWrapper'
import { IconArrowNarrowRight, IconArrowRight } from '@tabler/icons-react'

type HeroIntroProps = {
  titleFragment1: string
  titleHighlight: string
  titleFragment2: string
  description?: string
  buttons?: ButtonProps[]
}

export default function HeroIntro(props: HeroIntroProps) {
  const { classes } = heroIntroStyles()
  const router = useRouter()

  const renderButtons = props.buttons?.map((item, key) => (
    <Button
      key={key}
      className={classes.control}
      color={item.color!}
      variant={item.variant!}
      size="lg"
      rightIcon={<IconArrowNarrowRight />}
      onClick={(e: any) => router.push(item?.link!)}
    >
      {item?.name}
    </Button>
  ))

  return (
    <SectionWrapper>
      <div className={classes.inner}>
          <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
          <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
          <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
          <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

          <div className={classes.inner}>
            <Title className={classes.title}>
                {props.titleFragment1}{' '}
                <Text component="span" className={classes.highlight} inherit>
                    {props.titleHighlight}
                </Text>{' '}
                {props.titleFragment2}
            </Title>

            <Container p={0} size={600}>
                <Text size="lg" color="dimmed" className={classes.description}>
                    {props.description}
                </Text>
            </Container>

            <div className={classes.controls}>
                {renderButtons}
            </div>
          </div>
      </div>
    </SectionWrapper>
  )
}