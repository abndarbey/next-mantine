import {
    IconCode,
    IconDeviceDesktopAnalytics,
    IconUsers,
    IconBugOff,
    IconDeviceAnalytics,
    IconActivity
} from '@tabler/icons-react'

export const challengesItems = {
    columns: 3,
    superTitle: `Challenges`,
    title: `Which of the following challenges are you working to solve?`,
    cardData: [
        {
            icon: IconCode,
            link: '/services/engineering',
            title: 'Future Proof Your Business',
            description: `
                Leverage the multiplying effects of innovative data, rigorous standards and global reach with a single, simple cost-per container.
            `,
        },
        {
            icon: IconDeviceDesktopAnalytics,
            link: '/services/product-design',
            title: 'ETAs from the source',
            description: `
                Start accessing accurate carrier data for your containers that will give you direct sight of and help you plan smarter.
            `,
        },
        {
            icon: IconDeviceAnalytics,
            link: '/services/project-management',
            title: 'Easily track containers',
            description: `
                Eliminate the repetitive chore of hunting for the latest updates. See your containers across multiple modes of transport in a single window.
            `,
        },
        {
            icon: IconUsers,
            link: '/services/staff-augmentation',
            title: 'Use digital Bills of Lading ',
            description: `
                Receive a digital Bill of Lading from your carrier that can be transferred and surrendered with the click of a button.
            `,
        },
        {
            icon: IconBugOff,
            link: '/services/testing',
            title: 'Reduce D&D charges',
            description: `
                With TradeLens, you can instantly see where in the world your containers are held up, so you can do what's needed to lower any unplanned charges and fees.
            `,
        },
        {
            icon: IconActivity,
            link: '/services/training',
            title: 'Lower your carrying costs',
            description: `
                With more, and more accurate data across your supply chain, you can efficiently manage safety stock and lower your costs.
            `,
        },
    ]
}