import { IconType } from "react-icons";
import * as simpleIcon from "react-icons/si"

interface LangBadge {
    name: string;
    icon: IconType
}

const langList: LangBadge[] = [
    {
        name: "TypeScript",
        icon: simpleIcon.SiTypescript
    },
    {
        name: "React",
        icon: simpleIcon.SiReact
    },
    {
        name: "Git",
        icon: simpleIcon.SiGit
    },
    {
        name: "Next.js",
        icon: simpleIcon.SiNextdotjs
    },
    {
        name: "Kotlin",
        icon: simpleIcon.SiKotlin
    },
    {
        name: "Firebase",
        icon: simpleIcon.SiFirebase
    },
    {
        name: "Go",
        icon: simpleIcon.SiGo
    },
    {
        name: "Python",
        icon: simpleIcon.SiPython
    },
    {
        name: "Express.js",
        icon: simpleIcon.SiExpress
    },
    {
        name: "FastAPI",
        icon: simpleIcon.SiFastapi
    },
    {
        name: "Node.js",
        icon: simpleIcon.SiNodedotjs
    },
    {
        name: "Dart",
        icon: simpleIcon.SiDart
    },
    {
        name: "Flutter",
        icon: simpleIcon.SiFlutter
    },
    {
        name: "Docker",
        icon: simpleIcon.SiDocker
    },
    {
        name: "SpringBoot",
        icon: simpleIcon.SiSpring
    },
    {
        name: "Ruby",
        icon: simpleIcon.SiRuby
    },
    {
        name: "Ruby on Rails",
        icon: simpleIcon.SiRubyonrails
    },
    {
        name: "Google Cloud",
        icon: simpleIcon.SiGooglecloud
    },
    {
        name: "Nest.js",
        icon: simpleIcon.SiNestjs
    },
    {
        name: "Hono.js",
        icon: simpleIcon.SiHono
    }
]

export function convertLangNameToIcon(name: string): IconType | undefined {
    return langList.find(val => val.name == name)?.icon
}
