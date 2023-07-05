import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons-react'

export default function ThemeToggler() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position='center'>
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size='lg'
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.dark[4],
        })}
        id='theme-toggler'
        aria-label='Theme Toggler'
      >
        {colorScheme === 'dark' ? <IconSun size='1.2rem' /> : <IconMoonStars size='1.2rem' />}
      </ActionIcon>
    </Group>
  );
}
