import { Component } from "@/components/component";
import { Position } from "controllers/lib";
export interface StikerOptions {
    url?: string;
    capacity?: number;
    ratio?: number;
    position?: Position;
    id?: string;
    sticker?: AppendStiker;
    duration?: number;
    animationSpeed?: number;
    size?: number;
}
interface AppendStiker {
    url: string;
    promise: any;
    silenceMode?: boolean;
}
export declare class Stikers extends Component {
    private spriteStore;
    private activeID;
    private activeStiker;
    private capacity;
    private position;
    private size;
    private timerId;
    private duration;
    private ticker;
    private animationSpeed;
    private loadSuccesssFunc;
    private loadErrorFunc;
    constructor(options: StikerOptions);
    show(): void;
    hide(): void;
    onLoadSucccess(f: Function): void;
    onLoadError(f: Function): void;
    setOptions(options: Partial<StikerOptions>): Promise<void>;
    private loadStiker;
    private animateStiker;
    private updateSpritePosition;
    private addStiker;
    private calcPosition;
}
export {};
