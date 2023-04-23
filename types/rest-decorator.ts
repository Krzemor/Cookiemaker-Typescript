import {HttpMethod} from "./http-method";

export interface RestDecoratorInformation {
    httpMethod: HttpMethod;
    path: string;
    propertyName: string;
}
