import NextImage from '@/components/NextImage'
import { AspectRatio, Button, Paper, Text } from '@mantine/core'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import { useStyles } from './styles'
import { ArticleCardProps } from '@/types/types'

export default function FeaturePaperGridItem(props: ArticleCardProps) {
  const { classes } = useStyles()
  
  return (
    <div>
      <Paper key={props.title} radius="xs" component="a" href="#" className={classes.card}>
        <AspectRatio ratio={1920 / 1080}>
          <NextImage src={props.image} alt='img' />
        </AspectRatio>
      </Paper>
      <Text size="xs" transform="uppercase" weight={700} mt="md">
        {props.superTitle}
      </Text>
      <Text className={classes.title} mt={5}>
        {props.title}
      </Text>
      <Button
        my='md'
        variant='subtle'
        rightIcon={<IconArrowNarrowRight />}
      >
        Learn More
      </Button>
    </div>
  )
}
