import { ErrorSeverity, ErrorType, Locatable, type SourceError, SourceLocation } from "./base";
export declare class RuntimeSourceError implements SourceError {
    type: ErrorType;
    severity: ErrorSeverity;
    location: SourceLocation;
    message: string;
    constructor(node?: Locatable);
    explain(): string;
    elaborate(): string;
}
