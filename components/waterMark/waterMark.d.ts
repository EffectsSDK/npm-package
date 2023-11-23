import { Component } from "@/components/component";
export interface WatermarkOptions {
    url?: string;
    ratio?: number;
    position?: Position;
}
interface Position {
    x: number;
    y: number;
}
export declare class WaterMark extends Component {
    options: WatermarkOptions;
    constructor(options?: WatermarkOptions);
    render(): void;
}
export {};
