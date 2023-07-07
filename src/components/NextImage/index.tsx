import Image, { StaticImageData } from 'next/image'
import { useNextImageStyles } from './styles'

type NextImageProps = {
    src: StaticImageData | string
    alt: string
}

export default function NextImage(props: NextImageProps) {
  const { classes, theme } = useNextImageStyles()

  let size: number = theme.fn.smallerThan('sm') ? 350 : 500

  return (
    <div className={classes.wrapper}>
      <Image
        src={props.src}
        alt={props.alt}
        width={size}
        height={size}
        style={{ width: '100%', height: 'auto' }}
      />
    </div> 
  )
}
