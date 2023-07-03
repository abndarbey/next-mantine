'use client';

import { Box, Flex, Grid } from '@mantine/core';
import { StatsGroup } from '@/components/StatsGroup';
import { mockData } from '@/components/StatsGroup/mock';
import { BalanceCard } from './BalanceCard';
// import { OverviewCard } from './OverviewCard';
import { ProfileCard } from './ProfileCard';
import { WelcomeCard } from './WelcomeCard';
import StatsGrid from './StatsGrid';

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
		  <Flex direction="column" h="100%" justify="space-between">
			<WelcomeCard />
			<StatsGroup data={mockData} />
		  </Flex>
		</Grid.Col>
		<Grid.Col span={8}>
		  <BalanceCard />
		</Grid.Col>
		{/* <Grid.Col span={4}>
			<OverviewCard />
		</Grid.Col> */}
	  </Grid>
	</Box>
  )
}
