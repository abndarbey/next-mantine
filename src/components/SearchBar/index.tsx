import { Button, MantineSize, MantineNumberSize, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { searchBarStyles } from './styles'

type SearchBarProps = {
  size: MantineSize
  handleClick?: () => (void)
}

export default function SearchBar(props: SearchBarProps) {
  const { classes } = searchBarStyles()
  const radius: MantineNumberSize = 'md'

  return (
    <div className={classes.searchBar}>
      <TextInput
        classNames={{input: classes.input, root: classes.inputWrapper}}
        placeholder="Search"
        radius={radius}
        size={props.size}
      />
      <Button
        className={classes.control}
        size={props.size}
        radius={radius}
        variant="gradient"
        gradient={{ from: 'teal', to: 'cyan' }}
        onClick={props.handleClick}
      >
        <IconSearch />
      </Button>
    </div>
  )
}