import type { ModuleBundle } from '../moduleTypes';
/** Default modules static url. Exported for testing. */
export declare let MODULES_STATIC_URL: string;
export declare function setModulesStaticURL(url: string): void;
export declare const docsImporter: (p: string) => Promise<{
    default: any;
}>;
export declare const bundleAndTabImporter: (p: string) => Promise<{
    default: ModuleBundle;
}>;
