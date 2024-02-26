import React from 'react';

import { Article } from '../../../types/article';
import Link from 'next/link';

interface Props {
    article: Article[]
}

export default function ArticleBox({ article }: Props) {
    return (
        article.map((item, index) => {
            // Remove HTML tags and spaces, indention from body
            const bodyText = item.body.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "").replace(/\s+/g, " ").trim();
            return (
                <article key={index} className="md:p-3 mb-4">
                    <Link href={`/blog/${item.slug}`}>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-1">
                            {item.title}
                        </h2>
                    </Link>
                    <div className="text-sm text-gray-500 dark:text-gray-300 mb-3">
                        {
                            item.tags.map((tag, index) => {
                                return (
                                    <Link href={`/blog/tag/${tag.slug}`} key={index} className="text-sm text-primary-500 underline dark:text-primary-400">
                                        #{tag.name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className="text-sm text-gray-400 dark:text-gray-400">
                        { bodyText.length > 200 ? bodyText.slice(0, 200) + "..." : bodyText }
                    </div>
                </article>
            )
        })
    )
}
