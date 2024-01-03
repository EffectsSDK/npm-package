import { Component } from "@/components/component";
export interface StickerOptions {
    capacity: number;
    ratio: number;
    position: Position;
    duration: number;
    animationSpeed: number;
    size: number;
    id?: string;
    sticker?: AppendSticker;
}
interface Position {
    x: number;
    y: number;
    placement?: Placement;
}
type Placement = "top-left" | "bottom-left" | "center" | "top-right" | "bottom-right" | "custom";
interface AppendSticker {
    url: string;
    promise: any;
    silenceMode?: boolean;
}
export declare class Stickers extends Component {
    options: StickerOptions;
    private spriteStore;
    private activeID;
    private activeSticker;
    private timerId;
    private ticker;
    private loadSuccesssFunc?;
    private loadErrorFunc?;
    constructor(options?: Partial<StickerOptions>);
    show(): void;
    hide(): void;
    onLoadSucccess(f?: Function): void;
    onLoadError(f?: Function): void;
    setOptions(options: Partial<StickerOptions>): Promise<void>;
    private selectSticker;
    private loadSticker;
    private animateSticker;
    private updateSpritePosition;
    private addSticker;
    private calcPosition;
}
export {};
