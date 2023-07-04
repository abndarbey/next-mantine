import Image, { StaticImageData } from 'next/image'
import { createStyles, useMantineColorScheme } from '@mantine/core'
import { useRouter } from 'next/router'

import lightLogo from '@/assets/logos/nexport_logo_light.png'
import darkLogo from '@/assets/logos/nexport_logo_dark.png'

const logoStyles = createStyles({
  image: {
    cursor: 'pointer',
  },
})

type LogoProps = {
  width?: number
  light?: boolean
}

export default function Logo(props: LogoProps) {
  const router = useRouter()
  const { classes } = logoStyles()
  const { colorScheme } = useMantineColorScheme()

  const defaultWidth: number = 100

  let logoImage: StaticImageData = colorScheme === 'dark' ? darkLogo : lightLogo
  if (props.light) {
    logoImage = darkLogo
  }

  return (
    <Image
      className={classes.image}
      width={props.width ? props.width : defaultWidth}
      src={logoImage}
      alt='logo'
      onClick={(e: any) => router.push('/')}
    />
  )
}