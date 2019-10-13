import { INestApplication } from '@nestjs/common';
import {
  SwaggerBaseConfig,
  SwaggerCustomOptions,
  SwaggerDocument,
  SwaggerDocumentOptions
} from './interfaces';
export declare class SwaggerModule {
  static createDocument(
    app: INestApplication,
    config: SwaggerBaseConfig,
    options?: SwaggerDocumentOptions
  ): SwaggerDocument;
  static setup(
    path: string,
    app: INestApplication,
    document: SwaggerDocument,
    options?: SwaggerCustomOptions
  ): void;
  private static setupExpress;
  private static setupFastify;
}