import Link from "next/link";

// SNS Icons from Simple Icons via React Icons.
import { RiTwitterXFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { SiZenn } from "react-icons/si";
import { SiQiita } from "react-icons/si";
import { SiKeybase } from "react-icons/si";
import { RiGlobalLine } from "react-icons/ri";

interface Props {
    to: string;
    serviceName: string;
    className?: string;
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
        serviceName: "Qiita",
        icon: <SiQiita />
    },
    {
        serviceName: "KeyBase",
        icon: <SiKeybase/>
    },
    {
        serviceName: "Blog",
        icon: <RiGlobalLine/>
    }
]

export default function SNSButton({ to, serviceName, className}: Props) {
    const iconData = iconLists.find(val => val.serviceName == serviceName);
    return (
        <Link href={to} className={className}>
            <span className="text-2xl dark:text-gray-200">{iconData?.icon}</span>
        </Link>
    )
}
