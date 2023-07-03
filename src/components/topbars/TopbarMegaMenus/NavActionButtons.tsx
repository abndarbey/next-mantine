import { Button, Group } from '@mantine/core'
import { topbarStyles } from './styles'
import { useRouter } from 'next/router'

export default function NavActionButtons() {
  const { classes } = topbarStyles()
  const router = useRouter()
  
  const handleClick = (href: string) => {
    router.push(href)
  }
  
  return (
    <Group className={classes.hiddenMobile}>
      <Button
        variant="default"
        onClick={() => handleClick('/login')}
      >
        Log in
      </Button>
      <Button
        variant='gradient'
        gradient={{from: 'teal', to: 'cyan'}}
      >
        Sign up
      </Button>
    </Group>
  )
}
