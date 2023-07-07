import { createStyles } from "@mantine/core"

export const featureCardsStyles = createStyles((theme) => ({
  card: {
    cursor: 'pointer',
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,

    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: theme.shadows.md,
    },
  },
    
  link: {
    textDecoration: 'none',
    textDecorationColor: 'none',
  },

  cardTitle: {
    '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: 45,
        height: 2,
        marginTop: theme.spacing.sm,
    },
  },
}))