import { Component } from "@/components/component";
interface Options {
    url: string;
    promise?: PromiseContainer;
}
interface PromiseContainer {
    resolve: Function;
    reject: Function;
}
export interface OverlayScreenOptions {
    url?: string;
}
export declare class OverlayScreen extends Component {
    private defaultOverlaySprite;
    private loadedOverlaySprite;
    private resource;
    private isVideo;
    private currentURL;
    constructor(options?: OverlayScreenOptions);
    show(): void;
    hide(): void;
    private initOverlayFromUrl;
    setOptions(o: Options): Promise<void>;
    private setOverlayImage;
    private loadImage;
    private switchVideoTexture;
}
export {};
