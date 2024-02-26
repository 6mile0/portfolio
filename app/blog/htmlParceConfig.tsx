import React from 'react'
import{
  domToReact,
  attributesToProps,
  Element,
  HTMLReactParserOptions,
  DOMNode
} from 'html-react-parser'

export const parceOptions: HTMLReactParserOptions = {
  replace: domNode => {
    const typedDomNode = domNode as Element

    if (typedDomNode.attribs && typedDomNode.name === 'a') {
      return (
        <a
          {...attributesToProps(typedDomNode.attribs)}
          className="underline text-primary-500"
          target="_blank"
        >
          <>{domToReact((domNode as Element).children as DOMNode[], parceOptions)}</>
        </a>
      )
    }

    if(typedDomNode.attribs && typedDomNode.name === 'h1') {
      return (
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200 mb-2">
          {domToReact((domNode as Element).children as DOMNode[], parceOptions)}
        </h1>
      )
    }

    if(typedDomNode.attribs && typedDomNode.name === 'p') {
      return (
        <p className="break-words whitespace-pre-wrap">
          {domToReact((domNode as Element).children as DOMNode[], parceOptions)}
        </p>
      )
    }

    if(typedDomNode.attribs && typedDomNode.name === 'code') {
      return (
        <code className="bg-gray-100 dark:bg-gray-800 text-sm p-1 rounded-md break-words whitespace-pre-wrap">
          {domToReact((domNode as Element).children as DOMNode[], parceOptions)}
        </code>
      )
    }

    return false
  },
}
