// Type definitions for raspicam
// Project: https://github.com/troyth/node-raspicam 
// Definitions by: Jeremy Foster <https://github.com/codefoster> 
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped 

declare module 'raspicam' {

    export var events: any, spawn: any, util: any, fs: any, _: any, __: any, parameters: any, flags: any;
    export var INFINITY_MS: number;
    export var PROCESS_RUNNING_FLAG: boolean;
    export var PHOTO_CMD: string;
    export var TIMELAPSE_CMD: string;
    export var VIDEO_CMD: string;
    export var child_process: any;

    export class RaspiCam {
        constructor(opts: Object);
        on(event:string,callback:(err?:Error,filename?:string)=>void);
        start():void;
        stop():void;
    }
}