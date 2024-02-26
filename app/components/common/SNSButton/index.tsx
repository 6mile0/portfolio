import Link from "next/link";
import { useState } from "react";

// SNS Icons from Simple Icons via React Icons.
import { RiTwitterXFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { SiZenn } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import { RiGlobalLine } from "react-icons/ri";
import { RiInformationLine } from "react-icons/ri";

interface Props {
    to?: string;
    serviceName: string;
    className?: string;
    tooltipId?: string;
    tooltipContent?: string;
    isAbleToCopy?: boolean;
}

interface IconProps {
    serviceName: string;
    icon: JSX.Element
}

const iconLists: IconProps[] = [
    {
        serviceName: "X",
        icon: <RiTwitterXFill />
    },
    {
        serviceName: "GitHub",
        icon: <SiGithub />
    },
    {
        serviceName: "Zenn",
        icon: <SiZenn />
    },
    {
        serviceName: "Blog",
        icon: <RiGlobalLine />
    },
    {
        serviceName: "Discord",
        icon: <SiDiscord />
    },
    {
        serviceName: "Portfolio",
        icon: <RiInformationLine />
    }
]

export default function SNSButton({ to, serviceName, className, tooltipId, tooltipContent, isAbleToCopy }: Props) {
    const iconData = iconLists.find(val => val.serviceName == serviceName);
    const [content, setContent] = useState<string>(tooltipContent ?? "");

    const handleClick = () => {
        navigator.clipboard.writeText(tooltipContent ?? "");
        setContent("Copied!");
        setTimeout(() => {
            setContent(tooltipContent ?? "");
        }, 2000);
    }

    return (
        <Link href={to ? to : ""} className={className} data-tooltip-id={tooltipId} data-tooltip-content={content} onClick={isAbleToCopy ? handleClick : () => { }}>
            <span className="text-2xl dark:text-gray-200">{iconData?.icon}</span>
        </Link>
    )
}
