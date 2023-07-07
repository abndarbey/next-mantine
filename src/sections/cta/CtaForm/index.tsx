import { Title, TextInput, Button, SimpleGrid } from '@mantine/core'
import SectionWrapper from '@/components/wrappers/SectionWrapper'
import { ctaStyles } from './styles'
import emailImg from '@/assets/images/email.svg'
import NextImage from '@/components/NextImage'
import { gradientLiner } from '@/styles/constants'

type CtaFormProps = {
  gray?: boolean
}

export default function CtaForm(props: CtaFormProps) {
  const { classes } = ctaStyles()
  
  return (
    <SectionWrapper gray={props.gray}>
      <SimpleGrid
        cols={2}
        className={classes.wrapper}
        breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      >
        <div className={classes.body}>
          <Title className={classes.title}>
            Drop your email and we will get back to you.
          </Title>

          <div className={classes.controls}>
            <TextInput
              placeholder="Your email"
              classNames={{ input: classes.input, root: classes.inputWrapper }}
            />
            <Button
              className={classes.control}
              variant='gradient'
              gradient={gradientLiner}
            >
              Submit
            </Button>
          </div>
        </div>
        <div className={classes.image}>
          <NextImage src={emailImg.src} alt="img" />
        </div>
      </SimpleGrid>
    </SectionWrapper>
  )
}
