import type { PyContext } from '../../cse-machine/py_context';
import { Locatable } from '../../errors/base';
import type { ModuleDocumentation, ModuleFunctions, ModuleManifest } from '../moduleTypes';
export declare function setModulesStaticURL(value: string): void;
export declare const memoizedGetModuleManifestAsync: {
    (): Promise<ModuleManifest>;
    reset(): void;
};
export declare const memoizedGetModuleDocsAsync: {
    (moduleName: string, throwOnError: true): Promise<ModuleDocumentation>;
    (moduleName: string, throwOnError?: false): Promise<ModuleDocumentation | null>;
    cache: Map<string, ModuleDocumentation>;
};
export declare function loadModuleTabsAsync(moduleName: string): Promise<import("../moduleTypes").ModuleBundle[]>;
export declare function loadModuleBundleAsync(moduleName: string, context: PyContext, node?: Locatable): Promise<ModuleFunctions>;
