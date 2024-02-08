import { Component } from "../component";
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
    promise?: PromiseContainer;
}
export declare class OverlayScreen extends Component {
    options: OverlayScreenOptions;
    private defaultOverlaySprite;
    private loadedOverlaySprite;
    private resource;
    private isVideo;
    private currentURL;
    private processedURL;
    constructor(options?: OverlayScreenOptions);
    render(): void;
    show(): void;
    hide(): void;
    private initOverlayFromUrl;
    setOptions(o: Options): Promise<void>;
    private setOverlayImage;
    private loadImage;
    private switchVideoTexture;
}
export {};
