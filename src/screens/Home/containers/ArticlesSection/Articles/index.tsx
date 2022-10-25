import React, { FC, useState } from 'react'
import { Article } from '~/components/Article'
import { useArticles } from '~/utils/actions/articles'
import { ArticlesContent } from './styled'

export const Articles: FC = () => {
  const [categoryLimit] = useState<number>(3)
  const data = useArticles(categoryLimit)

  return (
    <ArticlesContent>
      {data?.edges.map((article) => (
        <Article
          mainPage
          src={article.node.image.url}
          link={article.node.linkTo}
          title={article.node.title}
          text={article.node.description.text}
          key={article.node.title}
          icon={article.node.siteUrl}
        />
      ))}
    </ArticlesContent>
  )
}
