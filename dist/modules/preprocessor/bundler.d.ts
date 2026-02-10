import { PyContext } from '../../cse-machine/py_context';
import { LinkerResult } from '../moduleTypes';
/**
 * Binds imported foreign values (JS functions/constants) to the global environment.
 * This function runs after the loader and analyzer, but before the CSE machine.
 *
 * @param context The PyContext containing loaded modules and the runtime environment.
 * @param linkerResult The result from the linker, containing import information.
 */
export declare function bundleAndBind(context: PyContext, linkerResult: LinkerResult): void;
