import { PyContext } from './cse-machine/py_context';
import { Value } from './cse-machine/stash';
import { ExprNS } from './ast-types';
export declare function toPythonFloat(num: number): string;
export declare function toPythonString(obj: Value): string;
export declare class BuiltInFunctions {
    static print(source: string, node: ExprNS.Expr, context: PyContext, ...args: Value[]): Value;
    static _int(source: string, node: ExprNS.Expr, context: PyContext, ...args: Value[]): Value;
    static abs(source: string, node: ExprNS.Expr, context: PyContext, ...args: Value[]): Value;
    static str(source: string, node: ExprNS.Expr, context: PyContext, ...args: Value[]): Value;
    static error(source: string, node: ExprNS.Expr, context: PyContext, ...args: Value[]): Value;
}
export declare const builtInConstants: Map<string, any>;
export declare const builtIns: Map<string, any>;
