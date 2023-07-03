import image from 'assets/images/hero-banner.svg'
import { IconGauge, IconUser, IconCookie, IconCode, IconAnalyze, IconFileAnalytics, IconDeviceDesktopAnalytics, IconUsers, IconTestPipe, IconBug, IconBugOff, IconTriangleInverted, IconReportAnalytics, IconDeviceAnalytics, IconMessageReport, IconActivity } from '@tabler/icons'

export const serviceHero = {
    title: `Services`,
    description: `
        User research, strategy, design, and engineering.
        Our suite of services takes your vision from an idea to an enterprise grade product.
        Our team has decades of experience building fault-tolerant APIs and interfaces across Web and Mobile.
    `,
    image: image,
}

export const serviceFeatureCards = {
    columns: 3,
    superTitle: `What We Do `,
    title: `Create Your Way Forward`,
    description: `
        Whether you are an SME or an enterprise, our end-to-end digital and IT services
        empower you to stay ahead of newest trends by consistent business innovations,
        streamlined operations, higher revenue streams and improved customer experience.
    `,
    cardData: [
        {
            icon: IconCode,
            link: '/services/engineering',
            title: 'Engineering',
            description: `
                Our experts build products using suitable frameworks and technologies.
                We build scalable, fault-tolerant APIs, and pixel-perfect interfaces.
            `,
        },
        {
            icon: IconDeviceDesktopAnalytics,
            link: '/services/product-design',
            title: 'Product Design',
            description: `
                We design stunning user interfaces with a user experience tailor-made for your user's needs.
            `,
        },
        {
            icon: IconDeviceAnalytics,
            link: '/services/project-management',
            title: 'Project Management',
            description: `
                We ideate, plan, budget, and allocate experts.
                We take ownership and work on the tiny details to address project needs ahead of time.
            `,
        },
        {
            icon: IconUsers,
            link: '/services/staff-augmentation',
            title: 'Staff Augmentation',
            description: `
                We embed developers, designers, and QA experts into your team.
                We complement your skills allowing you to cover more ground.
            `,
        },
        {
            icon: IconBugOff,
            link: '/services/testing',
            title: 'Testing & QA',
            description: `
                We tailor-make regression, unit, acceptance, and performance test suites to ensure your product works flawlessly.
            `,
        },
        {
            icon: IconActivity,
            link: '/services/training',
            title: 'Training & Support',
            description: `
                We help bring your team up to speed with the latest best practices in design and engineering
            `,
        },
    ]
}