import { RuntimeSourceError } from "../errors/py_runtimeSourceError";
export declare class PromiseTimeoutError extends RuntimeSourceError {
}
export declare const timeoutPromise: <T>(promise: Promise<T>, timeout: number) => Promise<T>;
