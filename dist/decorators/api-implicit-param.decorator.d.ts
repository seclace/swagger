import { SwaggerEnumType } from '../types/swagger-enum.type';
export declare const ApiImplicitParam: (metadata: {
  name: string;
  description?: string;
  required?: boolean;
  enum?: SwaggerEnumType;
  type?: any;
}) => MethodDecorator;
