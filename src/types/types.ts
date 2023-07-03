export type PageProps = {
    title?: string
    code?: any
}

export type ButtonProps = {
    name: string
    link: string
    icon?: JSX.Element
    color?: string
    variant?: any
}

export type FeatureProps = {
    icon: any
    title: string
    description: string
    link?: string
    externalLink?: boolean
}

export type ArticleCardProps = {
    superTitle: string
    title: string
    description: string
    image: any
    showDescription?: boolean
}
