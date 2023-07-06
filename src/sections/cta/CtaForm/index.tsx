import { Title, TextInput, Button } from '@mantine/core'
import Image from 'next/image'
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
      <div className={classes.wrapper}>
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
        <NextImage src={emailImg.src} className={classes.image} alt="img" />
      </div>
    </SectionWrapper>
  )
}
