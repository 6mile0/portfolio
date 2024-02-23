interface TimeLineButton {
    title: string;
    to: string;
}

export interface TimeLine {
    time: string;
    title: string;
    descriptions?: string;
    buttons?: TimeLineButton[]
}
