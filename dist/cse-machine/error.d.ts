import { SourceError, ErrorType, ErrorSeverity, SourceLocation } from '../errors/base';
export declare class CseError implements SourceError {
    message: string;
    type: ErrorType;
    severity: ErrorSeverity;
    location: SourceLocation;
    constructor(message: string, location?: SourceLocation);
    explain(): string;
    elaborate(): string;
}
