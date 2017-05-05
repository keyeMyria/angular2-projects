export interface ISeCountdownOptions {
    isStart?: boolean;
    timeStart?: number;
    time?: string;
    start?(options?);
    stop?(options?);
}