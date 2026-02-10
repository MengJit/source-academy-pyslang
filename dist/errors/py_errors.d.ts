import { ExprNS } from '../ast-types';
import { RuntimeSourceError } from './py_runtimeSourceError';
import { PyContext } from '../cse-machine/py_context';
export declare function createErrorIndicator(snippet: string, errorPos: number): string;
export declare class UnsupportedOperandTypeError extends RuntimeSourceError {
    constructor(source: string, node: ExprNS.Expr, wrongType1: string, wrongType2: string, operand: string);
}
export declare class MissingRequiredPositionalError extends RuntimeSourceError {
    private functionName;
    private missingParamCnt;
    private missingParamName;
    constructor(source: string, node: ExprNS.Expr, functionName: string, params: any, args: any, variadic: boolean);
    private joinWithCommasAndAnd;
}
export declare class TooManyPositionalArgumentsError extends RuntimeSourceError {
    private functionName;
    private expectedCount;
    private givenCount;
    constructor(source: string, node: ExprNS.Expr, functionName: string, params: any, args: any, variadic: boolean);
}
export declare class ZeroDivisionError extends RuntimeSourceError {
    constructor(source: string, node: ExprNS.Expr, context: PyContext);
}
export declare class UnboundLocalError extends RuntimeSourceError {
    constructor(source: string, name: string, node: ExprNS.Expr);
}
export declare class NameError extends RuntimeSourceError {
    constructor(source: string, name: string, node: ExprNS.Variable);
}
export declare class ValueError extends RuntimeSourceError {
    constructor(source: string, node: ExprNS.Expr, context: PyContext, functionName: string);
}
export declare class TypeError extends RuntimeSourceError {
    constructor(source: string, node: ExprNS.Expr, context: PyContext, originalType: string, targetType: string);
}
