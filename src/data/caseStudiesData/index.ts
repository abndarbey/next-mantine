import fileSearchImg from 'assets/images/file-search.svg'
import { articlesData } from 'data/caseStudiesData/articlesData'

export const caseStudiesHero = {
    title: `Engineering Case Studies`,
    description: `
        Engineering is precise. It's about building a product that works in a myriad of scenarios.
        Here are a few case studies that showcase the solutions and architecture decisions we took to build these products.
    `,
    image: fileSearchImg,
}

export const homeCaseStudiesData = {
    columns: 2,
    cardLimit: 10,
    cardData: articlesData
}