import { ErrorType, SourceError, SourceLocation, ErrorSeverity, Locatable } from "../errors/base";
import { RuntimeSourceError } from "../errors/py_runtimeSourceError";
export declare class ModuleInternalError extends RuntimeSourceError {
    moduleName: string;
    error?: any | undefined;
    constructor(moduleName: string, error?: any | undefined, node?: Locatable);
    explain(): string;
    elaborate(): string;
}
declare abstract class ImportError implements SourceError {
    node?: Locatable | undefined;
    type: ErrorType;
    severity: ErrorSeverity;
    location: SourceLocation;
    message: string;
    constructor(node?: Locatable | undefined);
    abstract explain(): string;
    abstract elaborate(): string;
}
export declare class ModuleConnectionError extends ImportError {
    private static staticMessage;
    private static staticElaboration;
    constructor(node?: Locatable);
    explain(): string;
    elaborate(): string;
}
export declare class ModuleNotFoundError extends ImportError {
    moduleName: string;
    constructor(moduleName: string, node?: Locatable);
    explain(): string;
    elaborate(): string;
}
export declare class UndefinedImportError extends ImportError {
    name: string;
    moduleName: string;
    constructor(name: string, moduleName: string, node?: Locatable);
    explain(): string;
    elaborate(): string;
}
export declare class ModulePreprocessingError extends ImportError {
    underlyingError: SourceError;
    constructor(underlyingError: SourceError);
    explain(): string;
    elaborate(): string;
}
export {};
