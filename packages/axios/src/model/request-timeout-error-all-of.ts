/* tslint:disable */
/* eslint-disable */
/**
 * ShanyLedger App
 * これはShanyLedgerのAPIサーバーの仕様です。
 *
 * The version of the OpenAPI document: 0.0.8
 * Contact: support@shany-ledger.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface RequestTimeoutErrorAllOf
 */
export interface RequestTimeoutErrorAllOf {
    /**
     * 
     * @type {number}
     * @memberof RequestTimeoutErrorAllOf
     */
    'status'?: RequestTimeoutErrorAllOfStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof RequestTimeoutErrorAllOf
     */
    'code'?: RequestTimeoutErrorAllOfCodeEnum;
}

export const RequestTimeoutErrorAllOfStatusEnum = {
    NUMBER_408: 408
} as const;

export type RequestTimeoutErrorAllOfStatusEnum = typeof RequestTimeoutErrorAllOfStatusEnum[keyof typeof RequestTimeoutErrorAllOfStatusEnum];
export const RequestTimeoutErrorAllOfCodeEnum = {
    RequestTimeoutError: 'RequestTimeoutError'
} as const;

export type RequestTimeoutErrorAllOfCodeEnum = typeof RequestTimeoutErrorAllOfCodeEnum[keyof typeof RequestTimeoutErrorAllOfCodeEnum];


