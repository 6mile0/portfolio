import { cache } from 'react';
import { Article } from '../../../types/article';
import { client } from '../../../api/newt';
import { notFound } from 'next/navigation';
import PostRender from '@/app/components/blogPage/ArticleBox/PostRender';
import HeaderTitle from '@/app/components/blogPage/HeaderTitle';

const getPost = cache(async (slug: string): Promise<Article | null> => {
    const res = await client.getContents<Article>({
        appUid: 'blog',
        modelUid: 'article',
        query: {
            slug: slug,
            select: ['_id', 'title', 'slug', 'body', 'tags'],
        },
    });
    return res.items[0] ?? null;
});

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await getPost(params.slug);

    return data ? (
        <>
        <HeaderTitle title={data.title} />
            <PostRender article={data} />
        </>
    ) :
        notFound();
}
