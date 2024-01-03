import { Component } from "@/components/component";
interface CountdownOptions {
    countDown: number;
}
export declare class CountdownComponent extends Component {
    options: CountdownOptions;
    private currentCount;
    private text;
    private interval;
    private showRejecter;
    constructor(options?: CountdownOptions);
    render(): void;
    setOptions(options?: CountdownOptions): void;
    private drawRect;
    private drawText;
    showCountdown(): Promise<any>;
    hideCountdown(): void;
}
export {};
