// 'use client'

import { Box, Grid } from '@mantine/core'
import { BalanceCard } from './BalanceCard'
import { ProfileCard } from './ProfileCard'
import StatsGrid from './StatsGrid'

export function Dashboard() {
  return (
	<Box>
	  <StatsGrid />
	  <StatsGrid />
	  <Grid>
		<Grid.Col span={4}>
		  <ProfileCard />
		</Grid.Col>
		<Grid.Col span={8}>
		  <BalanceCard />
		</Grid.Col>
	  </Grid>
	</Box>
  )
}
