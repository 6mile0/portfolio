import React from 'react';
import { Article } from '../../../../types/article';


export default function PostRender({ article }: { article: Article }) {
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <p>{article.tags.map(tag => tag.name).join(', ')}</p>
        </div>
    );
}
