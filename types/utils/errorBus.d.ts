export type CallbackFunction = (n: ErrorObject) => void;
declare class _ErrorBus {
    private static _instance;
    static getInstance(): _ErrorBus;
    private onErrorFunction?;
    private constructor();
    subscribe(f: CallbackFunction): void;
    notify(n: ErrorObjectLight): void;
}
export declare const ErrorBus: _ErrorBus;
export interface ErrorObject {
    message: string;
    type: ErrorType;
    emitter?: ErrorEmitter;
    cause?: Error;
    data?: any;
}
type ErrorObjectLight = Omit<ErrorObject, "type"> & {
    type?: ErrorType;
};
export declare enum ErrorType {
    INFO = "info",
    WARNING = "warning",
    ERROR = "error"
}
export declare enum ErrorEmitter {
    TSVB = "tsvb",
    COMPONENTS_SYSTEM = "components_system",
    SRTEAM_PROCESSOR = "stream_processor",
    ML_INFERENCE = "ml_inference",
    PRESET_INIT = "preset_init",
    RENDERER = "renderer",
    RECORDER = "recorder",
    EFFECT_VIRTUAL_BACKGROUND = "effect_virtual_background",
    EFFECT_COLOR_CORRECTION = "effect_color_correction",
    EFFECT_COLOR_FILTER = "effect_color_filter",
    EFFECT_SMART_ZOOM = "effect_smart_zoom",
    EFFECT_LOW_LIGHT = "effect_low_light"
}
export {};
