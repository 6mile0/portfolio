import { client } from '../api/newt'
import { cache } from 'react'
import { Article } from '../types/article'
import { Tag } from '../types/tags'

import ArticleBox from "../components/blogPage/ArticleBox";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Link from 'next/link';

export const getArticles = cache(async (): Promise<Article[]> => {
    const res = await client.getContents<Article>({
        appUid: 'blog',
        modelUid: 'article',
        query: {
            select: ['_id', 'title', 'slug', 'body', 'tags'],
        },
    })
    return res.items;
});

export const getTags = cache(async (): Promise<Tag[]> => {
    const tags = await client.getContents<Tag>({
        appUid: 'blog',
        modelUid: 'tag'
    })
    return tags.items;
});

export default async function Home() {
    const posts = await getArticles();
    const tags = await getTags();

    return (
        <div>
            <Header title="6mile's blog" description="メモを書き溜める場所" imgUrl="/me.webp" mode="blog" />
            <div className="flex flex-col md:flex-row">
                <div className="basis-8/12 md:p-6">
                    <ArticleBox article={posts} />
                </div>
                <div className="basis-1/3 md:p-6">
                    <div className="break-words whitespace-pre-wrap">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-3">
                            タグ一覧
                        </h2>
                        <div className="flex flex-wrap">
                            {
                                tags.map((tag, index) => {
                                    return (
                                        <Link href={`/blog/tag/${tag.slug}`} key={index} className="text-sm text-gray-500 dark:text-gray-300 p-1.5 px-2 hover:bg-gray-100 underline dark:hover:text-gray-800 rounded-md my-2">
                                            #{tag.name}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}
