export interface ResponseMetadata {
  description?: string;
  type?: any;
  isArray?: boolean;
  headers?: any;
}
export declare const ApiResponse: (
  metadata: {
    status: number;
  } & ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiOkResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiCreatedResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiAcceptedResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiNoContentResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiMovedPermanentlyResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiBadRequestResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiUnauthorizedResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiTooManyRequestsResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiNotFoundResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiInternalServerErrorResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiBadGatewayResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiConflictResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiForbiddenResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiGatewayTimeoutResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiGoneResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiMethodNotAllowedResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiNotAcceptableResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiNotImplementedResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiPayloadTooLargeResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiRequestTimeoutResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiServiceUnavailableResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiUnprocessableEntityResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;
export declare const ApiUnsupportedMediaTypeResponse: (
  metadata: ResponseMetadata
) => (target: any, key?: any, descriptor?: PropertyDescriptor) => any;