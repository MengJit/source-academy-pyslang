import type { PyContext } from '../../cse-machine/py_context';
import type { ModuleFunctions } from '../moduleTypes';
/**
 * With the given set of Source Modules to Import, load all of the bundles and
 * tabs (if `loadTabs` is true) and populate the `context.nativeStorage.loadedModules`
 * property.
 */
export default function loadSourceModules(sourceModulesToImport: Set<string>, context: PyContext, loadTabs: boolean): Promise<{
    [k: string]: ModuleFunctions;
}>;
export declare function loadSourceModuleTypes(sourceModulesToImport: Set<string>, context: PyContext): Promise<void>;
export { MODULES_STATIC_URL } from './importers';
export { setModulesStaticURL, memoizedGetModuleDocsAsync, memoizedGetModuleManifestAsync } from './loaders';
