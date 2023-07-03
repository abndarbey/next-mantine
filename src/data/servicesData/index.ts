import programmingImg from 'assets/images/programming.svg'
import designGirlImg from 'assets/images/design-girl.svg'
import projectManagementImg from 'assets/images/project-management.svg'
import projectTeamImg from 'assets/images/project-team.svg'
import testingImg from 'assets/images/testing.svg'
import supportImg from 'assets/images/support.svg'
import {
    IconUsers,
    IconBugOff,
    IconDeviceAnalytics,
    IconFileCheck,
    IconBrush,
    IconCirclesRelation,
    IconMessages,
    IconSettingsAutomation,
    IconSwords,
    IconTicTac,
    Icon360View,
    IconArrowIteration,
    IconGoGame,
    IconCash,
    IconUserCheck,
    IconDashboard,
    IconFileSettings,
    IconTableOptions,
    IconCodeCircle2,
    IconShieldCheck,
    IconTools,
} from '@tabler/icons'


export const engineeringService = {
    title: `Engineering`,
    description: `
        Software is binary. It either works or it doesn't.
        Our teams have been building software for decades.
        We're makers at heart and think of engineering as a craft.
    `,
    image: programmingImg,
    columns: 1,
    cardData: [
        {
            icon: IconTicTac,
            title: `Playbook`,
            description: `
                To build software that stands the test of time a set process
                which details everything right down to how a project is organized is required.
                We've invested time and effort in creating a Playbook (playbook.wednesday.is)
                that outlines the conventions we follow to build readable, reliable, and maintainable solutions.
            `
        },
        {
            icon: IconSwords,
            title: `Don't bring a knife to a gunfight`,
            description: `
                The tech world has an unprecedented pace of change. Digital products need to evolve.
                Our team is always learning so your business doesn't lose any opportunities.
                We suggest the relevant frameworks and invest in the right technologies so you don't miss business opportunities.
            `,
        },
        {
            icon: IconBugOff,
            title: `Test Driven Development`,
            description: `
                Tests are central to our delivery strategy. We tailor-make unit, integration, acceptance, and performance test suites.
                This ensures quality and allows you to build new features deterministically.
            `,
        },
        {
            icon: IconUsers,
            title: `Peer Reviews`,
            description: `
                Two is better than one. Each feature is peer-reviewed and we encourage discussions.
                This ensures the best architecture and conventions are used.
            `,
        },
        {
            icon: IconSettingsAutomation,
            title: `DevOps & Code Quality`,
            description: `
                We've adopted the DevOps movement. Each push goes through a pipeline i.e.
                lint, build, and test followed by a peer review. Similar to a factory our
                pipeline ensures that each line of code adheres to a standard, ready to be deployed.
            `,
        },
    ]
}

export const productDesignService = {
    title: `Product Design`,
    description: `
        Product design is meeting the business goals while promising a great user experience.
        It is the art of balancing business goals and meeting user expectations.
    `,
    image: designGirlImg,
    columns: 1,
    cardData: [
        {
            icon: IconFileCheck,
            title: `Facts not Assumptions`,
            description: `
                Design should meet the needs of each user. We use assumptions to build designs but validate them by user research,
                building small prototypes, A/B tests to find the right interaction and visuals to grow your business.
            `
        },
        {
            icon: IconBrush,
            title: `Design Language`,
            description: `
                Designing a user interface is more than creating illustrations and visuals.
                Our designers create a visual language that includes type, color,
                and a suite of elements that users will interact with on devices of all screensizes.
            `,
        },
        {
            icon: IconDeviceAnalytics,
            title: `Project Management`,
            description: `
                We ideate, plan, budget, and allocate experts.
                We take ownership and work on the tiny details to address project needs ahead of time.
            `,
        },
        {
            icon: IconCirclesRelation,
            title: `Motion & Micro-Interactions`,
            description: `
                A well-designed product will wow the customer in each interaction.
                We finetune each micro-interaction using motion to ensure the least friction.
                We think about interactions in terms of ease of use, number of clicks/taps, while providing a great visual interface.
            `,
        },
        {
            icon: IconMessages,
            title: `Conversational Design`,
            description: `
                With a wide influx of data, digital products are getting more intelligent and users expect
                the same out of your product. Mediums like voice are now the center stage for user interaction.
                Our team specializes in creating conversational design systems that can understand user intent and respond intelligently.
            `,
        },
    ]
}

export const projectManagementService = {
    title: `Project Management`,
    description: `
        Project Management is more than scheduling meetings or assigning tickets.
        It's about understanding feature requirements, creating a roadmap, and thinking ten steps ahead.
        We steer the project to delivery within budget.
    `,
    image: projectManagementImg,
    columns: 1,
    cardData: [
        {
            icon: Icon360View,
            title: `360 Degree Outlook`,
            description: `
                Finance, Entertainments, Events, and Logistics are some verticals we have built products for.
                This experience allows us to think ten steps ahead, and avoid pitfalls.
            `
        },
        {
            icon: IconUsers,
            title: `Talent Beyond Borders`,
            description: `
                We work with customers across the globe, from Fortune 1000 companies to startups.
                We run a distributed team and know how to operate across timezones.
            `,
        },
        {
            icon: IconArrowIteration,
            title: `Agile`,
            description: `
                We plan a roadmap, create a backlog, and work in sprints. Each sprint ends with a demo that is deployed.
                Following a strict process allows us to add predictability to our delivery process.
            `,
        },
        {
            icon: IconGoGame,
            title: `Strategic Advice`,
            description: `
                We think of ourselves as partners. We understand the nuances of running a digital business.
                We offer strategic advice in terms of where to invest, what technologies to use,
                and what areas to explore for traction & market growth.
            `,
        },
    ]
}

export const staffAugmentationService = {
    title: `Staff Augmentation`,
    description: `
        Deadlines are real. Business goals need to be met.
        Whether you're a single person startup or a fortune 500 company a few more experienced hands increases velocity.
    `,
    image: projectTeamImg,
    columns: 1,
    cardData: [
        {
            icon: IconUsers,
            title: `A Part of your Team`,
            description: `
                We are flexible and adjust to your product development process.
                We have repeatedly built large systems that allow us to focus more on
                understanding product featuresrather than how to build them.
            `
        },
        {
            icon: IconUserCheck ,
            title: `Experience Matters`,
            description: `
                Our diverse team of engineers, designers, and project managers have built complex products across the web,
                mobile, and watch interfaces. We've designed APIs that are used by some of the largest payment networks,
                entertainment companies, and e-commerce players. We come to the table with years of experience building these products.
            `,
        },
        {
            icon: IconCash,
            title: `Reduce Cost `,
            description: `
                We engage in both short and long-term contracts. Having a remote senior engineer,
                designer, or project manager as a part of your team can reduce your cost.
            `,
        },
    ]
}

export const testingService = {
    title: `Testing & QA`,
    description: `
        Testing is at the center of our development process. Every feature we build is tested rigorously for function, accuracy,
        and performance across all use cases. Writing tests while building the product ensures we're covering all edge cases and
        reduces risk before going to market.
    `,
    image: testingImg,
    columns: 1,
    cardData: [
        {
            icon: IconTableOptions,
            title: `Tailor-made Plan`,
            description: `
                We tailor-make a unit, integration, and acceptance test-suite for your product.
                Our test-suite ensures that you meet all the regulatory compliances with each iteration.
            `
        },
        {
            icon: IconSettingsAutomation,
            title: `Test Automation`,
            description: `
                Every feature we build is tested using an automated test suite.
                We believe test automation allows us to bundle all use cases and thoroughly test your product with each push.
            `,
        },
        {
            icon: IconFileSettings,
            title: `Systems Tests`,
            description: `
                No product can be built as a standalone application. Your digital product will work with other systems.
                We put in place strategies to test these data flows ensuring all scenarios are covered.
            `,
        },
        {
            icon: IconDashboard,
            title: `Performance Tests`,
            description: `
                Using the best-in-class stress and regression tests our engineers ensure your product is ready for scale.
                We test scenarios of high load so your marketing team can continue creating growth strategies.
            `,
        },
    ]
}

export const trainingService = {
    title: `Training & Support`,
    description: `
        The technology landscape changes very fast. It's important to think ten steps ahead to ensure your team has
        the right skill to gain market share. We review your technology stack and equip your teams with the skills to move forward.
    `,
    image: supportImg,
    columns: 1,
    cardData: [
        {
            icon: IconCodeCircle2,
            title: `Architecture and Code Reviews`,
            description: `
                Two pairs of eyes are better than one. We are well versed in the best engineering & design practices,
                conventions, and architecture principles. We take a deep dive and grade your project on reliability,
                performance, maintainability, and fault tolerance.
            `
        },
        {
            icon: IconShieldCheck,
            title: `Security & Compliance Audit`,
            description: `
                We build a penetration test suite and check if your product meets all the compliance regulations.
                Our detailed reports help you understand vulnerabilities along with strategies to rectify them.
            `,
        },
        {
            icon: IconTools,
            title: `Maintenance`,
            description: `
                We set up a maintenance team capable of understanding your tech stack.
                We help with reliability, automation, bug fixes, and modifications to meet existing customer's needs.
            `,
        },
    ]
}