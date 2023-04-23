import {HttpMethod} from "../types/http-method";
import {RestDecoratorInformation} from "../types/rest-decorator";

export function rest (
    httpMethod: HttpMethod,
    path: string,
) {
    return (target: any, propertyName: string): any => {
        const ar: RestDecoratorInformation[] = Reflect.get(target, '_restApiCalls') ?? [];

        ar.push({
            httpMethod,
            path,
            propertyName,
        });

        Reflect.set(target, '_restApiCalls', ar);
    };
}
