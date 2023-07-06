import { Button, Group } from '@mantine/core'
import { topbarStyles } from './styles'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { gradientLiner } from '@/styles/constants'

export default function NavActionButtons() {
  const router = useRouter()
  
  const handleClick = (href: string) => {
    router.push(href)
  }
  
  return (
    <Fragment>
      <Button
        variant="default"
        onClick={() => handleClick('/login')}
      >
        Log in
      </Button>
      <Button
        variant='gradient'
        gradient={gradientLiner}
      >
        Sign up
      </Button>
    </Fragment>
  )
}
