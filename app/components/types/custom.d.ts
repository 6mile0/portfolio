export interface Profile {
    birthday: string,
    belongTo: string;
    certification: string[],
    hobby: string[]
}


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
