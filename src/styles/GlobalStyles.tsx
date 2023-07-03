import { Global } from '@mantine/core'

export default function GlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        '*, *::before, *::after': {
            boxSizing: 'border-box',
            padding: 0,
            margin: 0,
        },
        
        "html, body": {
            maxWidth: '100vw',
            overflowX: 'hidden',
        },

        a: {
          color: "inherit",
          textDecoration: "none",
        },
      })}
    />
  )
}