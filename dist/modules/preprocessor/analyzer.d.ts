import type { PyContext } from '../../cse-machine/py_context';
/**
 * Analyzes the imported names against the currently loaded modules.
 * If an imported name does not exist in the module, it adds an error to the context.
 *
 * @param imports A map from module names to the specific names imported from them.
 * @param context The current PyContext, containing loadedModules.
 */
export declare function analyzeImports(imports: Map<string, Array<{
    name: string;
    alias: string | null;
}>>, context: PyContext): void;
export interface ImportAnalysisOptions {
}
