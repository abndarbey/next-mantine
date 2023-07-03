import SectionWrapper from '@/components/wrappers/SectionWrapper'
import { Tabs, Text } from '@mantine/core'
import FeaturesTabContent from './FeaturesTabContnet'
import image1 from '@/assets/images/code-review.svg'
import image2 from '@/assets/images/design-girl.svg'
import image3 from '@/assets/images/firmware.svg'

type FeaturesTabsProps = {
  gray?: boolean
}

export default function FeaturesTabs(props: FeaturesTabsProps) {
  const tabTitleSize: number = 18
  return (
    <SectionWrapper gray={props.gray}>
      <Tabs defaultValue="first">
        <Tabs.List grow>
          <Tabs.Tab value="first">
            <Text size={tabTitleSize}>First Tab</Text>
          </Tabs.Tab>
          <Tabs.Tab value="second">
            <Text size={tabTitleSize}>Second Tab</Text>
          </Tabs.Tab>
          <Tabs.Tab value="third">
            <Text size={tabTitleSize}>Third Tab</Text>
          </Tabs.Tab>
          <Tabs.Tab value="fourth">
            <Text size={tabTitleSize}>Fourth Tab</Text>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first" pt="xs">
          <FeaturesTabContent
            gray={props.gray}
            image={image1}
          />
        </Tabs.Panel>

        <Tabs.Panel value="second" pt="xs">
          <FeaturesTabContent
            gray={props.gray}
            image={image2}
          />
        </Tabs.Panel>

        <Tabs.Panel value="third" pt="xs">
          <FeaturesTabContent
            gray={props.gray}
            image={image3}
          />
        </Tabs.Panel>

        <Tabs.Panel value="fourth" pt="xs">
          <FeaturesTabContent
            gray={props.gray}
            image={image2}
          />
        </Tabs.Panel>
      </Tabs>
    </SectionWrapper>
  )
}
