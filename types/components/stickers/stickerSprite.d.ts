import Player from "apng-js/types/library/player";
import { Sprite } from "pixi.js";
interface StickerSpriteOptions {
    sprite: Sprite;
    id: string;
    player?: Player;
    canvas?: HTMLCanvasElement;
    size?: number;
    aminationPhase?: "showing" | "static" | "hiding";
    shrink: number;
}
export declare class StickerSprite {
    private shrink;
    sprite: Sprite;
    id: string;
    player?: Player;
    canvas?: HTMLCanvasElement;
    alpha: number;
    height: number;
    width: number;
    aminationPhase: "showing" | "static" | "hiding";
    private sourceRatio;
    constructor(options: StickerSpriteOptions);
    private isShowing;
    private isStatic;
    isHidingStop(): boolean;
    animateAlpha(speed: number): void;
    animateSize(speed: number): void;
    animatePosition(position: {
        x: number;
        y: number;
    }): void;
    reset(): void;
    setSpriteSize(size?: number): void;
}
export {};
