import { ReactNode } from 'react'
import { ButtonProps, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'
import GlobalStyles from './GlobalStyles'
import { colors } from './colors'

interface GlobalThemeProps {
  children: ReactNode
}

export default function GlobalTheme(props: GlobalThemeProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  })
    
  const toggleColorScheme = (value?: ColorScheme) =>
  setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
    
  useHotkeys([['mod+J', () => toggleColorScheme()]])
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme,
          colors,
          primaryColor: 'teal',
          components: {
            Button: {
              // Subscribe to theme and component params
              styles: (theme, params: ButtonProps) => ({
                root: {
                  // make filled button darker in color
                  // backgroundColor: params.variant === 'filled' ? theme.colors[params.color || theme.primaryColor][9] : undefined,

                  ":hover": {
                    backgroundColor: theme.colorScheme === "dark" ? theme.white : theme.black,
                    borderColor: theme.colorScheme === "dark" ? theme.white : theme.black,
                    color: theme.colorScheme === "dark" ? theme.black : theme.white,
                    transition: "0.5s all ease",
                  }
                },
              }),
            },
          },
        }}
      >
        {/* <GlobalStyles /> */}
        {props.children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}