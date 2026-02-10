import type { PyContext } from '../../cse-machine/py_context';
import type { IOptions } from '../../runner/pyRunner';
import type { PreprocessResult } from '../moduleTypes';
import { StmtNS } from '../../ast-types';
export declare function preprocessFileImports(program: StmtNS.Stmt, entrypointFilePath: string, context: PyContext, options: IOptions): Promise<PreprocessResult>;
