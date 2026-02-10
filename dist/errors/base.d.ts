import { Token } from '../tokenizer';
export interface Locatable {
    startToken: Token;
    endToken: Token;
}
/**
 * Represents a specific position in source code
 * Line is 1-based, Column is 0-based
 */
export interface SourcePosition {
    line: number;
    column: number;
}
/**
 * Represents the span of code within source code from start to end
 * Can be null if source code is not available
 */
export interface SourceLocation {
    source?: string | null;
    start: SourcePosition;
    end: SourcePosition;
}
export declare enum ErrorType {
    IMPORT = "Import",
    RUNTIME = "Runtime",
    SYNTAX = "Syntax",
    TYPE = "Type"
}
export declare enum ErrorSeverity {
    WARNING = "Warning",
    ERROR = "Error"
}
export declare const UNKNOWN_LOCATION: SourceLocation;
export interface SourceError {
    type: ErrorType;
    severity: ErrorSeverity;
    location: SourceLocation;
    explain(): string;
    elaborate(): string;
}
