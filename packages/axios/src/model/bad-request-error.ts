/* tslint:disable */
/* eslint-disable */
/**
 * ShanyLedger App
 * これはShanyLedgerのAPIサーバーの仕様です。
 *
 * The version of the OpenAPI document: 0.0.9
 * Contact: support@shany-ledger.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { DefaultBadRequestError } from './default-bad-request-error';
// May contain unused imports in some cases
// @ts-ignore
import { ValidationError } from './validation-error';
// May contain unused imports in some cases
// @ts-ignore
import { ValidationErrorAllOfErrors } from './validation-error-all-of-errors';

/**
 * @type BadRequestError
 * リクエスト内容に誤りがあった場合のエラー詳細です。
 * @export
 */
export type BadRequestError = DefaultBadRequestError | ValidationError;


