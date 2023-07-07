import { ReactNode } from 'react'
import { heroWrapperStyles } from './styles'

type HeroWrapperProps = {
  children: ReactNode
}

export default function HeroWrapper(props: HeroWrapperProps) {
  const { classes } = heroWrapperStyles()
  return (
    <div className={classes.wrapper}>
      {props.children}
    </div>
  )
}
