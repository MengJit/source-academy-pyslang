import type { PyContext } from '../../cse-machine/py_context';
import type { LinkerResult } from '../moduleTypes';
import { StmtNS } from '../../ast-types';
export interface ImportResolutionOptions {
}
export declare const defaultResolutionOptions: ImportResolutionOptions;
export interface LinkerOptions {
    resolverOptions: ImportResolutionOptions;
}
export declare const defaultLinkerOptions: LinkerOptions;
export default function parseProgramsAndConstructImportGraph(program: StmtNS.Stmt, entrypointFilePath: string, context: PyContext, options?: Partial<LinkerOptions>, shouldAddFileName?: boolean): Promise<LinkerResult>;
