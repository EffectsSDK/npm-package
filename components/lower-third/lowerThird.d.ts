import { Graphics, Text, Ticker, TickerCallback } from "pixi.js";
import { Component } from "../component";
import { Position } from "controllers/lib";
export interface LtOptions {
    position?: Position;
    offset?: LtOffsetOptions;
    color?: LtColorOptions;
    text?: LtTextOptions;
}
export interface LtOptions {
    positionX?: number;
    offset?: LtOffsetOptions;
    color?: LtColorOptions;
    text?: LtTextOptions;
}
interface LtOffsetOptions {
    y?: number;
    x?: number;
}
interface LtColorOptions {
    primary?: number;
    secondary?: number;
    text?: number;
}
interface LtTextOptions {
    title?: string;
    subtitle?: string;
    maxLengthTitle?: number;
    maxLengthSubtitle?: number;
}
interface LtFonts {
    title: string[];
    subtitle: string[];
}
export declare abstract class LowerThird extends Component {
    ticker: Ticker;
    showFunction: TickerCallback<any>;
    hideFunction: TickerCallback<any>;
    title: Text;
    subtitle: Text;
    fonts: LtFonts;
    isHideAnimationFinished: boolean;
    isShowing: boolean;
    isHiding: boolean;
    options: Required<LtOptions>;
    constructor(options?: LtOptions);
    render(): void;
    setOptions(options?: LtOptions, render?: boolean): void;
    showLowerThird(): void;
    hideLowerThird(): void;
    stopShowing(): void;
    stopHiding(): void;
    private setColor;
    private setOffset;
    private setPosition;
    private setText;
    px(value: number): number;
    offsetX(): number;
    offsetY(): number;
    strTrimAndEllipsis(str: string, maxLength: number): string;
    showOffset(): void;
    drawRectPrimary(x: number, y: number, width: number, height: number): Graphics;
    drawRectSecondary(x: number, y: number, width: number, height: number): Graphics;
    fontFamily(key: "title" | "subtitle"): string | string[];
    loadFont(key: "title" | "subtitle", fontURL: string): Promise<void>;
    destroy(): void;
}
export {};
