
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Case
 * 
 */
export type Case = $Result.DefaultSelection<Prisma.$CasePayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model MediationRequest
 * 
 */
export type MediationRequest = $Result.DefaultSelection<Prisma.$MediationRequestPayload>
/**
 * Model MediationMeeting
 * 
 */
export type MediationMeeting = $Result.DefaultSelection<Prisma.$MediationMeetingPayload>
/**
 * Model CaseEvent
 * 
 */
export type CaseEvent = $Result.DefaultSelection<Prisma.$CaseEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  TENANT: 'TENANT',
  LANDLORD: 'LANDLORD',
  JUDICIAL_OFFICER: 'JUDICIAL_OFFICER',
  MEDIATOR: 'MEDIATOR',
  SOCIAL_WORKER: 'SOCIAL_WORKER',
  PREFECTURE: 'PREFECTURE',
  CCAPEX: 'CCAPEX',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CaseStatus: {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  MEDIATION: 'MEDIATION',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED'
};

export type CaseStatus = (typeof CaseStatus)[keyof typeof CaseStatus]


export const ProcedureStage: {
  UNPAID_REPORT: 'UNPAID_REPORT',
  PAYMENT_COMMAND: 'PAYMENT_COMMAND',
  ASSIGNMENT: 'ASSIGNMENT',
  HEARING: 'HEARING',
  DECISION: 'DECISION',
  EVICTION_COMMAND: 'EVICTION_COMMAND',
  EVICTION: 'EVICTION'
};

export type ProcedureStage = (typeof ProcedureStage)[keyof typeof ProcedureStage]


export const UrgencyLevel: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type UrgencyLevel = (typeof UrgencyLevel)[keyof typeof UrgencyLevel]


export const DocumentType: {
  PAYMENT_COMMAND: 'PAYMENT_COMMAND',
  ASSIGNMENT: 'ASSIGNMENT',
  COURT_DECISION: 'COURT_DECISION',
  EVICTION_COMMAND: 'EVICTION_COMMAND',
  PAYMENT_PLAN: 'PAYMENT_PLAN',
  MEDIATION_AGREEMENT: 'MEDIATION_AGREEMENT',
  ID_DOCUMENT: 'ID_DOCUMENT',
  LEASE: 'LEASE',
  INCOME_PROOF: 'INCOME_PROOF',
  OTHER: 'OTHER'
};

export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType]


export const MediationStatus: {
  REQUESTED: 'REQUESTED',
  ACCEPTED: 'ACCEPTED',
  IN_PROGRESS: 'IN_PROGRESS',
  AGREEMENT_FOUND: 'AGREEMENT_FOUND',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type MediationStatus = (typeof MediationStatus)[keyof typeof MediationStatus]


export const MeetingStatus: {
  SCHEDULED: 'SCHEDULED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  POSTPONED: 'POSTPONED'
};

export type MeetingStatus = (typeof MeetingStatus)[keyof typeof MeetingStatus]


export const EventType: {
  CASE_CREATED: 'CASE_CREATED',
  STATUS_CHANGED: 'STATUS_CHANGED',
  STAGE_CHANGED: 'STAGE_CHANGED',
  DOCUMENT_ADDED: 'DOCUMENT_ADDED',
  MEDIATION_REQUESTED: 'MEDIATION_REQUESTED',
  MEDIATION_ACCEPTED: 'MEDIATION_ACCEPTED',
  MEDIATION_COMPLETED: 'MEDIATION_COMPLETED',
  PAYMENT_MADE: 'PAYMENT_MADE',
  PAYMENT_PLAN_CREATED: 'PAYMENT_PLAN_CREATED',
  SOCIAL_WORKER_ASSIGNED: 'SOCIAL_WORKER_ASSIGNED',
  CCAPEX_REVIEW: 'CCAPEX_REVIEW',
  OTHER: 'OTHER'
};

export type EventType = (typeof EventType)[keyof typeof EventType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CaseStatus = $Enums.CaseStatus

export const CaseStatus: typeof $Enums.CaseStatus

export type ProcedureStage = $Enums.ProcedureStage

export const ProcedureStage: typeof $Enums.ProcedureStage

export type UrgencyLevel = $Enums.UrgencyLevel

export const UrgencyLevel: typeof $Enums.UrgencyLevel

export type DocumentType = $Enums.DocumentType

export const DocumentType: typeof $Enums.DocumentType

export type MediationStatus = $Enums.MediationStatus

export const MediationStatus: typeof $Enums.MediationStatus

export type MeetingStatus = $Enums.MeetingStatus

export const MeetingStatus: typeof $Enums.MeetingStatus

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.case`: Exposes CRUD operations for the **Case** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cases
    * const cases = await prisma.case.findMany()
    * ```
    */
  get case(): Prisma.CaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediationRequest`: Exposes CRUD operations for the **MediationRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediationRequests
    * const mediationRequests = await prisma.mediationRequest.findMany()
    * ```
    */
  get mediationRequest(): Prisma.MediationRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediationMeeting`: Exposes CRUD operations for the **MediationMeeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediationMeetings
    * const mediationMeetings = await prisma.mediationMeeting.findMany()
    * ```
    */
  get mediationMeeting(): Prisma.MediationMeetingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caseEvent`: Exposes CRUD operations for the **CaseEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CaseEvents
    * const caseEvents = await prisma.caseEvent.findMany()
    * ```
    */
  get caseEvent(): Prisma.CaseEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Case: 'Case',
    Document: 'Document',
    Notification: 'Notification',
    MediationRequest: 'MediationRequest',
    MediationMeeting: 'MediationMeeting',
    CaseEvent: 'CaseEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "case" | "document" | "notification" | "mediationRequest" | "mediationMeeting" | "caseEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Case: {
        payload: Prisma.$CasePayload<ExtArgs>
        fields: Prisma.CaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          findFirst: {
            args: Prisma.CaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          findMany: {
            args: Prisma.CaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>[]
          }
          create: {
            args: Prisma.CaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          createMany: {
            args: Prisma.CaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>[]
          }
          delete: {
            args: Prisma.CaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          update: {
            args: Prisma.CaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          deleteMany: {
            args: Prisma.CaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>[]
          }
          upsert: {
            args: Prisma.CaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          aggregate: {
            args: Prisma.CaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCase>
          }
          groupBy: {
            args: Prisma.CaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaseCountArgs<ExtArgs>
            result: $Utils.Optional<CaseCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      MediationRequest: {
        payload: Prisma.$MediationRequestPayload<ExtArgs>
        fields: Prisma.MediationRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediationRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediationRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationRequestPayload>
          }
          findFirst: {
            args: Prisma.MediationRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediationRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationRequestPayload>
          }
          findMany: {
            args: Prisma.MediationRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationRequestPayload>[]
          }
          create: {
            args: Prisma.MediationRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationRequestPayload>
          }
          createMany: {
            args: Prisma.MediationRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediationRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationRequestPayload>[]
          }
          delete: {
            args: Prisma.MediationRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationRequestPayload>
          }
          update: {
            args: Prisma.MediationRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationRequestPayload>
          }
          deleteMany: {
            args: Prisma.MediationRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediationRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediationRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationRequestPayload>[]
          }
          upsert: {
            args: Prisma.MediationRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationRequestPayload>
          }
          aggregate: {
            args: Prisma.MediationRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediationRequest>
          }
          groupBy: {
            args: Prisma.MediationRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediationRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediationRequestCountArgs<ExtArgs>
            result: $Utils.Optional<MediationRequestCountAggregateOutputType> | number
          }
        }
      }
      MediationMeeting: {
        payload: Prisma.$MediationMeetingPayload<ExtArgs>
        fields: Prisma.MediationMeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediationMeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationMeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediationMeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationMeetingPayload>
          }
          findFirst: {
            args: Prisma.MediationMeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationMeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediationMeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationMeetingPayload>
          }
          findMany: {
            args: Prisma.MediationMeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationMeetingPayload>[]
          }
          create: {
            args: Prisma.MediationMeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationMeetingPayload>
          }
          createMany: {
            args: Prisma.MediationMeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediationMeetingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationMeetingPayload>[]
          }
          delete: {
            args: Prisma.MediationMeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationMeetingPayload>
          }
          update: {
            args: Prisma.MediationMeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationMeetingPayload>
          }
          deleteMany: {
            args: Prisma.MediationMeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediationMeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediationMeetingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationMeetingPayload>[]
          }
          upsert: {
            args: Prisma.MediationMeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediationMeetingPayload>
          }
          aggregate: {
            args: Prisma.MediationMeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediationMeeting>
          }
          groupBy: {
            args: Prisma.MediationMeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediationMeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediationMeetingCountArgs<ExtArgs>
            result: $Utils.Optional<MediationMeetingCountAggregateOutputType> | number
          }
        }
      }
      CaseEvent: {
        payload: Prisma.$CaseEventPayload<ExtArgs>
        fields: Prisma.CaseEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaseEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaseEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseEventPayload>
          }
          findFirst: {
            args: Prisma.CaseEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaseEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseEventPayload>
          }
          findMany: {
            args: Prisma.CaseEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseEventPayload>[]
          }
          create: {
            args: Prisma.CaseEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseEventPayload>
          }
          createMany: {
            args: Prisma.CaseEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaseEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseEventPayload>[]
          }
          delete: {
            args: Prisma.CaseEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseEventPayload>
          }
          update: {
            args: Prisma.CaseEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseEventPayload>
          }
          deleteMany: {
            args: Prisma.CaseEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaseEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaseEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseEventPayload>[]
          }
          upsert: {
            args: Prisma.CaseEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseEventPayload>
          }
          aggregate: {
            args: Prisma.CaseEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaseEvent>
          }
          groupBy: {
            args: Prisma.CaseEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaseEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaseEventCountArgs<ExtArgs>
            result: $Utils.Optional<CaseEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    case?: CaseOmit
    document?: DocumentOmit
    notification?: NotificationOmit
    mediationRequest?: MediationRequestOmit
    mediationMeeting?: MediationMeetingOmit
    caseEvent?: CaseEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    casesAsLandlord: number
    casesAsTenant: number
    casesAsOfficer: number
    casesAsMediator: number
    casesAsSocialWorker: number
    notifications: number
    mediationRequests: number
    mediationHandled: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casesAsLandlord?: boolean | UserCountOutputTypeCountCasesAsLandlordArgs
    casesAsTenant?: boolean | UserCountOutputTypeCountCasesAsTenantArgs
    casesAsOfficer?: boolean | UserCountOutputTypeCountCasesAsOfficerArgs
    casesAsMediator?: boolean | UserCountOutputTypeCountCasesAsMediatorArgs
    casesAsSocialWorker?: boolean | UserCountOutputTypeCountCasesAsSocialWorkerArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    mediationRequests?: boolean | UserCountOutputTypeCountMediationRequestsArgs
    mediationHandled?: boolean | UserCountOutputTypeCountMediationHandledArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCasesAsLandlordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCasesAsTenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCasesAsOfficerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCasesAsMediatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCasesAsSocialWorkerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMediationRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediationRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMediationHandledArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediationRequestWhereInput
  }


  /**
   * Count Type CaseCountOutputType
   */

  export type CaseCountOutputType = {
    documents: number
    notifications: number
    mediationRequests: number
    events: number
  }

  export type CaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | CaseCountOutputTypeCountDocumentsArgs
    notifications?: boolean | CaseCountOutputTypeCountNotificationsArgs
    mediationRequests?: boolean | CaseCountOutputTypeCountMediationRequestsArgs
    events?: boolean | CaseCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseCountOutputType
     */
    select?: CaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeCountMediationRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediationRequestWhereInput
  }

  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseEventWhereInput
  }


  /**
   * Count Type MediationRequestCountOutputType
   */

  export type MediationRequestCountOutputType = {
    meetings: number
  }

  export type MediationRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | MediationRequestCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * MediationRequestCountOutputType without action
   */
  export type MediationRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationRequestCountOutputType
     */
    select?: MediationRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MediationRequestCountOutputType without action
   */
  export type MediationRequestCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediationMeetingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    properties: number | null
  }

  export type UserSumAggregateOutputType = {
    properties: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    situation: string | null
    type: string | null
    properties: number | null
    office: string | null
    organization: string | null
    service: string | null
    function: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    situation: string | null
    type: string | null
    properties: number | null
    office: string | null
    organization: string | null
    service: string | null
    function: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    role: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    situation: number
    type: number
    properties: number
    office: number
    organization: number
    service: number
    function: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    properties?: true
  }

  export type UserSumAggregateInputType = {
    properties?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    situation?: true
    type?: true
    properties?: true
    office?: true
    organization?: true
    service?: true
    function?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    situation?: true
    type?: true
    properties?: true
    office?: true
    organization?: true
    service?: true
    function?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    situation?: true
    type?: true
    properties?: true
    office?: true
    organization?: true
    service?: true
    function?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    situation: string | null
    type: string | null
    properties: number | null
    office: string | null
    organization: string | null
    service: string | null
    function: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    situation?: boolean
    type?: boolean
    properties?: boolean
    office?: boolean
    organization?: boolean
    service?: boolean
    function?: boolean
    casesAsLandlord?: boolean | User$casesAsLandlordArgs<ExtArgs>
    casesAsTenant?: boolean | User$casesAsTenantArgs<ExtArgs>
    casesAsOfficer?: boolean | User$casesAsOfficerArgs<ExtArgs>
    casesAsMediator?: boolean | User$casesAsMediatorArgs<ExtArgs>
    casesAsSocialWorker?: boolean | User$casesAsSocialWorkerArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    mediationRequests?: boolean | User$mediationRequestsArgs<ExtArgs>
    mediationHandled?: boolean | User$mediationHandledArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    situation?: boolean
    type?: boolean
    properties?: boolean
    office?: boolean
    organization?: boolean
    service?: boolean
    function?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    situation?: boolean
    type?: boolean
    properties?: boolean
    office?: boolean
    organization?: boolean
    service?: boolean
    function?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    situation?: boolean
    type?: boolean
    properties?: boolean
    office?: boolean
    organization?: boolean
    service?: boolean
    function?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "role" | "phone" | "address" | "createdAt" | "updatedAt" | "situation" | "type" | "properties" | "office" | "organization" | "service" | "function", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casesAsLandlord?: boolean | User$casesAsLandlordArgs<ExtArgs>
    casesAsTenant?: boolean | User$casesAsTenantArgs<ExtArgs>
    casesAsOfficer?: boolean | User$casesAsOfficerArgs<ExtArgs>
    casesAsMediator?: boolean | User$casesAsMediatorArgs<ExtArgs>
    casesAsSocialWorker?: boolean | User$casesAsSocialWorkerArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    mediationRequests?: boolean | User$mediationRequestsArgs<ExtArgs>
    mediationHandled?: boolean | User$mediationHandledArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      casesAsLandlord: Prisma.$CasePayload<ExtArgs>[]
      casesAsTenant: Prisma.$CasePayload<ExtArgs>[]
      casesAsOfficer: Prisma.$CasePayload<ExtArgs>[]
      casesAsMediator: Prisma.$CasePayload<ExtArgs>[]
      casesAsSocialWorker: Prisma.$CasePayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      mediationRequests: Prisma.$MediationRequestPayload<ExtArgs>[]
      mediationHandled: Prisma.$MediationRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      role: $Enums.Role
      phone: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
      situation: string | null
      type: string | null
      properties: number | null
      office: string | null
      organization: string | null
      service: string | null
      function: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    casesAsLandlord<T extends User$casesAsLandlordArgs<ExtArgs> = {}>(args?: Subset<T, User$casesAsLandlordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    casesAsTenant<T extends User$casesAsTenantArgs<ExtArgs> = {}>(args?: Subset<T, User$casesAsTenantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    casesAsOfficer<T extends User$casesAsOfficerArgs<ExtArgs> = {}>(args?: Subset<T, User$casesAsOfficerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    casesAsMediator<T extends User$casesAsMediatorArgs<ExtArgs> = {}>(args?: Subset<T, User$casesAsMediatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    casesAsSocialWorker<T extends User$casesAsSocialWorkerArgs<ExtArgs> = {}>(args?: Subset<T, User$casesAsSocialWorkerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mediationRequests<T extends User$mediationRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$mediationRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mediationHandled<T extends User$mediationHandledArgs<ExtArgs> = {}>(args?: Subset<T, User$mediationHandledArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly phone: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly situation: FieldRef<"User", 'String'>
    readonly type: FieldRef<"User", 'String'>
    readonly properties: FieldRef<"User", 'Int'>
    readonly office: FieldRef<"User", 'String'>
    readonly organization: FieldRef<"User", 'String'>
    readonly service: FieldRef<"User", 'String'>
    readonly function: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.casesAsLandlord
   */
  export type User$casesAsLandlordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    cursor?: CaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * User.casesAsTenant
   */
  export type User$casesAsTenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    cursor?: CaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * User.casesAsOfficer
   */
  export type User$casesAsOfficerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    cursor?: CaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * User.casesAsMediator
   */
  export type User$casesAsMediatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    cursor?: CaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * User.casesAsSocialWorker
   */
  export type User$casesAsSocialWorkerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    cursor?: CaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.mediationRequests
   */
  export type User$mediationRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationRequest
     */
    select?: MediationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationRequest
     */
    omit?: MediationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationRequestInclude<ExtArgs> | null
    where?: MediationRequestWhereInput
    orderBy?: MediationRequestOrderByWithRelationInput | MediationRequestOrderByWithRelationInput[]
    cursor?: MediationRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediationRequestScalarFieldEnum | MediationRequestScalarFieldEnum[]
  }

  /**
   * User.mediationHandled
   */
  export type User$mediationHandledArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationRequest
     */
    select?: MediationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationRequest
     */
    omit?: MediationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationRequestInclude<ExtArgs> | null
    where?: MediationRequestWhereInput
    orderBy?: MediationRequestOrderByWithRelationInput | MediationRequestOrderByWithRelationInput[]
    cursor?: MediationRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediationRequestScalarFieldEnum | MediationRequestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Case
   */

  export type AggregateCase = {
    _count: CaseCountAggregateOutputType | null
    _avg: CaseAvgAggregateOutputType | null
    _sum: CaseSumAggregateOutputType | null
    _min: CaseMinAggregateOutputType | null
    _max: CaseMaxAggregateOutputType | null
  }

  export type CaseAvgAggregateOutputType = {
    debtAmount: number | null
    housingArea: number | null
    rent: number | null
    charges: number | null
    deposit: number | null
    leaseDuration: number | null
  }

  export type CaseSumAggregateOutputType = {
    debtAmount: number | null
    housingArea: number | null
    rent: number | null
    charges: number | null
    deposit: number | null
    leaseDuration: number | null
  }

  export type CaseMinAggregateOutputType = {
    id: string | null
    reference: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.CaseStatus | null
    stage: $Enums.ProcedureStage | null
    urgency: $Enums.UrgencyLevel | null
    debtAmount: number | null
    description: string | null
    landlordId: string | null
    tenantId: string | null
    officerId: string | null
    mediatorId: string | null
    socialWorkerId: string | null
    housingType: string | null
    housingArea: number | null
    rent: number | null
    charges: number | null
    deposit: number | null
    leaseStartDate: Date | null
    leaseType: string | null
    leaseDuration: number | null
    address: string | null
  }

  export type CaseMaxAggregateOutputType = {
    id: string | null
    reference: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.CaseStatus | null
    stage: $Enums.ProcedureStage | null
    urgency: $Enums.UrgencyLevel | null
    debtAmount: number | null
    description: string | null
    landlordId: string | null
    tenantId: string | null
    officerId: string | null
    mediatorId: string | null
    socialWorkerId: string | null
    housingType: string | null
    housingArea: number | null
    rent: number | null
    charges: number | null
    deposit: number | null
    leaseStartDate: Date | null
    leaseType: string | null
    leaseDuration: number | null
    address: string | null
  }

  export type CaseCountAggregateOutputType = {
    id: number
    reference: number
    createdAt: number
    updatedAt: number
    status: number
    stage: number
    urgency: number
    debtAmount: number
    description: number
    landlordId: number
    tenantId: number
    officerId: number
    mediatorId: number
    socialWorkerId: number
    housingType: number
    housingArea: number
    rent: number
    charges: number
    deposit: number
    leaseStartDate: number
    leaseType: number
    leaseDuration: number
    address: number
    _all: number
  }


  export type CaseAvgAggregateInputType = {
    debtAmount?: true
    housingArea?: true
    rent?: true
    charges?: true
    deposit?: true
    leaseDuration?: true
  }

  export type CaseSumAggregateInputType = {
    debtAmount?: true
    housingArea?: true
    rent?: true
    charges?: true
    deposit?: true
    leaseDuration?: true
  }

  export type CaseMinAggregateInputType = {
    id?: true
    reference?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    stage?: true
    urgency?: true
    debtAmount?: true
    description?: true
    landlordId?: true
    tenantId?: true
    officerId?: true
    mediatorId?: true
    socialWorkerId?: true
    housingType?: true
    housingArea?: true
    rent?: true
    charges?: true
    deposit?: true
    leaseStartDate?: true
    leaseType?: true
    leaseDuration?: true
    address?: true
  }

  export type CaseMaxAggregateInputType = {
    id?: true
    reference?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    stage?: true
    urgency?: true
    debtAmount?: true
    description?: true
    landlordId?: true
    tenantId?: true
    officerId?: true
    mediatorId?: true
    socialWorkerId?: true
    housingType?: true
    housingArea?: true
    rent?: true
    charges?: true
    deposit?: true
    leaseStartDate?: true
    leaseType?: true
    leaseDuration?: true
    address?: true
  }

  export type CaseCountAggregateInputType = {
    id?: true
    reference?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    stage?: true
    urgency?: true
    debtAmount?: true
    description?: true
    landlordId?: true
    tenantId?: true
    officerId?: true
    mediatorId?: true
    socialWorkerId?: true
    housingType?: true
    housingArea?: true
    rent?: true
    charges?: true
    deposit?: true
    leaseStartDate?: true
    leaseType?: true
    leaseDuration?: true
    address?: true
    _all?: true
  }

  export type CaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Case to aggregate.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cases
    **/
    _count?: true | CaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaseMaxAggregateInputType
  }

  export type GetCaseAggregateType<T extends CaseAggregateArgs> = {
        [P in keyof T & keyof AggregateCase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCase[P]>
      : GetScalarType<T[P], AggregateCase[P]>
  }




  export type CaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithAggregationInput | CaseOrderByWithAggregationInput[]
    by: CaseScalarFieldEnum[] | CaseScalarFieldEnum
    having?: CaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaseCountAggregateInputType | true
    _avg?: CaseAvgAggregateInputType
    _sum?: CaseSumAggregateInputType
    _min?: CaseMinAggregateInputType
    _max?: CaseMaxAggregateInputType
  }

  export type CaseGroupByOutputType = {
    id: string
    reference: string
    createdAt: Date
    updatedAt: Date
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description: string | null
    landlordId: string
    tenantId: string
    officerId: string | null
    mediatorId: string | null
    socialWorkerId: string | null
    housingType: string | null
    housingArea: number | null
    rent: number | null
    charges: number | null
    deposit: number | null
    leaseStartDate: Date | null
    leaseType: string | null
    leaseDuration: number | null
    address: string | null
    _count: CaseCountAggregateOutputType | null
    _avg: CaseAvgAggregateOutputType | null
    _sum: CaseSumAggregateOutputType | null
    _min: CaseMinAggregateOutputType | null
    _max: CaseMaxAggregateOutputType | null
  }

  type GetCaseGroupByPayload<T extends CaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaseGroupByOutputType[P]>
            : GetScalarType<T[P], CaseGroupByOutputType[P]>
        }
      >
    >


  export type CaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    stage?: boolean
    urgency?: boolean
    debtAmount?: boolean
    description?: boolean
    landlordId?: boolean
    tenantId?: boolean
    officerId?: boolean
    mediatorId?: boolean
    socialWorkerId?: boolean
    housingType?: boolean
    housingArea?: boolean
    rent?: boolean
    charges?: boolean
    deposit?: boolean
    leaseStartDate?: boolean
    leaseType?: boolean
    leaseDuration?: boolean
    address?: boolean
    landlord?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    officer?: boolean | Case$officerArgs<ExtArgs>
    mediator?: boolean | Case$mediatorArgs<ExtArgs>
    socialWorker?: boolean | Case$socialWorkerArgs<ExtArgs>
    documents?: boolean | Case$documentsArgs<ExtArgs>
    notifications?: boolean | Case$notificationsArgs<ExtArgs>
    mediationRequests?: boolean | Case$mediationRequestsArgs<ExtArgs>
    events?: boolean | Case$eventsArgs<ExtArgs>
    _count?: boolean | CaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["case"]>

  export type CaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    stage?: boolean
    urgency?: boolean
    debtAmount?: boolean
    description?: boolean
    landlordId?: boolean
    tenantId?: boolean
    officerId?: boolean
    mediatorId?: boolean
    socialWorkerId?: boolean
    housingType?: boolean
    housingArea?: boolean
    rent?: boolean
    charges?: boolean
    deposit?: boolean
    leaseStartDate?: boolean
    leaseType?: boolean
    leaseDuration?: boolean
    address?: boolean
    landlord?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    officer?: boolean | Case$officerArgs<ExtArgs>
    mediator?: boolean | Case$mediatorArgs<ExtArgs>
    socialWorker?: boolean | Case$socialWorkerArgs<ExtArgs>
  }, ExtArgs["result"]["case"]>

  export type CaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    stage?: boolean
    urgency?: boolean
    debtAmount?: boolean
    description?: boolean
    landlordId?: boolean
    tenantId?: boolean
    officerId?: boolean
    mediatorId?: boolean
    socialWorkerId?: boolean
    housingType?: boolean
    housingArea?: boolean
    rent?: boolean
    charges?: boolean
    deposit?: boolean
    leaseStartDate?: boolean
    leaseType?: boolean
    leaseDuration?: boolean
    address?: boolean
    landlord?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    officer?: boolean | Case$officerArgs<ExtArgs>
    mediator?: boolean | Case$mediatorArgs<ExtArgs>
    socialWorker?: boolean | Case$socialWorkerArgs<ExtArgs>
  }, ExtArgs["result"]["case"]>

  export type CaseSelectScalar = {
    id?: boolean
    reference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    stage?: boolean
    urgency?: boolean
    debtAmount?: boolean
    description?: boolean
    landlordId?: boolean
    tenantId?: boolean
    officerId?: boolean
    mediatorId?: boolean
    socialWorkerId?: boolean
    housingType?: boolean
    housingArea?: boolean
    rent?: boolean
    charges?: boolean
    deposit?: boolean
    leaseStartDate?: boolean
    leaseType?: boolean
    leaseDuration?: boolean
    address?: boolean
  }

  export type CaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference" | "createdAt" | "updatedAt" | "status" | "stage" | "urgency" | "debtAmount" | "description" | "landlordId" | "tenantId" | "officerId" | "mediatorId" | "socialWorkerId" | "housingType" | "housingArea" | "rent" | "charges" | "deposit" | "leaseStartDate" | "leaseType" | "leaseDuration" | "address", ExtArgs["result"]["case"]>
  export type CaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landlord?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    officer?: boolean | Case$officerArgs<ExtArgs>
    mediator?: boolean | Case$mediatorArgs<ExtArgs>
    socialWorker?: boolean | Case$socialWorkerArgs<ExtArgs>
    documents?: boolean | Case$documentsArgs<ExtArgs>
    notifications?: boolean | Case$notificationsArgs<ExtArgs>
    mediationRequests?: boolean | Case$mediationRequestsArgs<ExtArgs>
    events?: boolean | Case$eventsArgs<ExtArgs>
    _count?: boolean | CaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landlord?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    officer?: boolean | Case$officerArgs<ExtArgs>
    mediator?: boolean | Case$mediatorArgs<ExtArgs>
    socialWorker?: boolean | Case$socialWorkerArgs<ExtArgs>
  }
  export type CaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landlord?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    officer?: boolean | Case$officerArgs<ExtArgs>
    mediator?: boolean | Case$mediatorArgs<ExtArgs>
    socialWorker?: boolean | Case$socialWorkerArgs<ExtArgs>
  }

  export type $CasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Case"
    objects: {
      landlord: Prisma.$UserPayload<ExtArgs>
      tenant: Prisma.$UserPayload<ExtArgs>
      officer: Prisma.$UserPayload<ExtArgs> | null
      mediator: Prisma.$UserPayload<ExtArgs> | null
      socialWorker: Prisma.$UserPayload<ExtArgs> | null
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      mediationRequests: Prisma.$MediationRequestPayload<ExtArgs>[]
      events: Prisma.$CaseEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reference: string
      createdAt: Date
      updatedAt: Date
      status: $Enums.CaseStatus
      stage: $Enums.ProcedureStage
      urgency: $Enums.UrgencyLevel
      debtAmount: number
      description: string | null
      landlordId: string
      tenantId: string
      officerId: string | null
      mediatorId: string | null
      socialWorkerId: string | null
      housingType: string | null
      housingArea: number | null
      rent: number | null
      charges: number | null
      deposit: number | null
      leaseStartDate: Date | null
      leaseType: string | null
      leaseDuration: number | null
      address: string | null
    }, ExtArgs["result"]["case"]>
    composites: {}
  }

  type CaseGetPayload<S extends boolean | null | undefined | CaseDefaultArgs> = $Result.GetResult<Prisma.$CasePayload, S>

  type CaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaseCountAggregateInputType | true
    }

  export interface CaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Case'], meta: { name: 'Case' } }
    /**
     * Find zero or one Case that matches the filter.
     * @param {CaseFindUniqueArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaseFindUniqueArgs>(args: SelectSubset<T, CaseFindUniqueArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Case that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaseFindUniqueOrThrowArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaseFindUniqueOrThrowArgs>(args: SelectSubset<T, CaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Case that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindFirstArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaseFindFirstArgs>(args?: SelectSubset<T, CaseFindFirstArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Case that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindFirstOrThrowArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaseFindFirstOrThrowArgs>(args?: SelectSubset<T, CaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cases
     * const cases = await prisma.case.findMany()
     * 
     * // Get first 10 Cases
     * const cases = await prisma.case.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caseWithIdOnly = await prisma.case.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaseFindManyArgs>(args?: SelectSubset<T, CaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Case.
     * @param {CaseCreateArgs} args - Arguments to create a Case.
     * @example
     * // Create one Case
     * const Case = await prisma.case.create({
     *   data: {
     *     // ... data to create a Case
     *   }
     * })
     * 
     */
    create<T extends CaseCreateArgs>(args: SelectSubset<T, CaseCreateArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cases.
     * @param {CaseCreateManyArgs} args - Arguments to create many Cases.
     * @example
     * // Create many Cases
     * const case = await prisma.case.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaseCreateManyArgs>(args?: SelectSubset<T, CaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cases and returns the data saved in the database.
     * @param {CaseCreateManyAndReturnArgs} args - Arguments to create many Cases.
     * @example
     * // Create many Cases
     * const case = await prisma.case.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cases and only return the `id`
     * const caseWithIdOnly = await prisma.case.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaseCreateManyAndReturnArgs>(args?: SelectSubset<T, CaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Case.
     * @param {CaseDeleteArgs} args - Arguments to delete one Case.
     * @example
     * // Delete one Case
     * const Case = await prisma.case.delete({
     *   where: {
     *     // ... filter to delete one Case
     *   }
     * })
     * 
     */
    delete<T extends CaseDeleteArgs>(args: SelectSubset<T, CaseDeleteArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Case.
     * @param {CaseUpdateArgs} args - Arguments to update one Case.
     * @example
     * // Update one Case
     * const case = await prisma.case.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaseUpdateArgs>(args: SelectSubset<T, CaseUpdateArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cases.
     * @param {CaseDeleteManyArgs} args - Arguments to filter Cases to delete.
     * @example
     * // Delete a few Cases
     * const { count } = await prisma.case.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaseDeleteManyArgs>(args?: SelectSubset<T, CaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cases
     * const case = await prisma.case.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaseUpdateManyArgs>(args: SelectSubset<T, CaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cases and returns the data updated in the database.
     * @param {CaseUpdateManyAndReturnArgs} args - Arguments to update many Cases.
     * @example
     * // Update many Cases
     * const case = await prisma.case.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cases and only return the `id`
     * const caseWithIdOnly = await prisma.case.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CaseUpdateManyAndReturnArgs>(args: SelectSubset<T, CaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Case.
     * @param {CaseUpsertArgs} args - Arguments to update or create a Case.
     * @example
     * // Update or create a Case
     * const case = await prisma.case.upsert({
     *   create: {
     *     // ... data to create a Case
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Case we want to update
     *   }
     * })
     */
    upsert<T extends CaseUpsertArgs>(args: SelectSubset<T, CaseUpsertArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseCountArgs} args - Arguments to filter Cases to count.
     * @example
     * // Count the number of Cases
     * const count = await prisma.case.count({
     *   where: {
     *     // ... the filter for the Cases we want to count
     *   }
     * })
    **/
    count<T extends CaseCountArgs>(
      args?: Subset<T, CaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaseAggregateArgs>(args: Subset<T, CaseAggregateArgs>): Prisma.PrismaPromise<GetCaseAggregateType<T>>

    /**
     * Group by Case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaseGroupByArgs['orderBy'] }
        : { orderBy?: CaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Case model
   */
  readonly fields: CaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Case.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    landlord<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    officer<T extends Case$officerArgs<ExtArgs> = {}>(args?: Subset<T, Case$officerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mediator<T extends Case$mediatorArgs<ExtArgs> = {}>(args?: Subset<T, Case$mediatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    socialWorker<T extends Case$socialWorkerArgs<ExtArgs> = {}>(args?: Subset<T, Case$socialWorkerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    documents<T extends Case$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Case$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Case$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Case$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mediationRequests<T extends Case$mediationRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Case$mediationRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Case$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Case$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Case model
   */
  interface CaseFieldRefs {
    readonly id: FieldRef<"Case", 'String'>
    readonly reference: FieldRef<"Case", 'String'>
    readonly createdAt: FieldRef<"Case", 'DateTime'>
    readonly updatedAt: FieldRef<"Case", 'DateTime'>
    readonly status: FieldRef<"Case", 'CaseStatus'>
    readonly stage: FieldRef<"Case", 'ProcedureStage'>
    readonly urgency: FieldRef<"Case", 'UrgencyLevel'>
    readonly debtAmount: FieldRef<"Case", 'Float'>
    readonly description: FieldRef<"Case", 'String'>
    readonly landlordId: FieldRef<"Case", 'String'>
    readonly tenantId: FieldRef<"Case", 'String'>
    readonly officerId: FieldRef<"Case", 'String'>
    readonly mediatorId: FieldRef<"Case", 'String'>
    readonly socialWorkerId: FieldRef<"Case", 'String'>
    readonly housingType: FieldRef<"Case", 'String'>
    readonly housingArea: FieldRef<"Case", 'Float'>
    readonly rent: FieldRef<"Case", 'Float'>
    readonly charges: FieldRef<"Case", 'Float'>
    readonly deposit: FieldRef<"Case", 'Float'>
    readonly leaseStartDate: FieldRef<"Case", 'DateTime'>
    readonly leaseType: FieldRef<"Case", 'String'>
    readonly leaseDuration: FieldRef<"Case", 'Int'>
    readonly address: FieldRef<"Case", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Case findUnique
   */
  export type CaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case findUniqueOrThrow
   */
  export type CaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case findFirst
   */
  export type CaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cases.
     */
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case findFirstOrThrow
   */
  export type CaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cases.
     */
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case findMany
   */
  export type CaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Cases to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case create
   */
  export type CaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Case.
     */
    data: XOR<CaseCreateInput, CaseUncheckedCreateInput>
  }

  /**
   * Case createMany
   */
  export type CaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cases.
     */
    data: CaseCreateManyInput | CaseCreateManyInput[]
  }

  /**
   * Case createManyAndReturn
   */
  export type CaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * The data used to create many Cases.
     */
    data: CaseCreateManyInput | CaseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Case update
   */
  export type CaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Case.
     */
    data: XOR<CaseUpdateInput, CaseUncheckedUpdateInput>
    /**
     * Choose, which Case to update.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case updateMany
   */
  export type CaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cases.
     */
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyInput>
    /**
     * Filter which Cases to update
     */
    where?: CaseWhereInput
    /**
     * Limit how many Cases to update.
     */
    limit?: number
  }

  /**
   * Case updateManyAndReturn
   */
  export type CaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * The data used to update Cases.
     */
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyInput>
    /**
     * Filter which Cases to update
     */
    where?: CaseWhereInput
    /**
     * Limit how many Cases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Case upsert
   */
  export type CaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Case to update in case it exists.
     */
    where: CaseWhereUniqueInput
    /**
     * In case the Case found by the `where` argument doesn't exist, create a new Case with this data.
     */
    create: XOR<CaseCreateInput, CaseUncheckedCreateInput>
    /**
     * In case the Case was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaseUpdateInput, CaseUncheckedUpdateInput>
  }

  /**
   * Case delete
   */
  export type CaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter which Case to delete.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case deleteMany
   */
  export type CaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cases to delete
     */
    where?: CaseWhereInput
    /**
     * Limit how many Cases to delete.
     */
    limit?: number
  }

  /**
   * Case.officer
   */
  export type Case$officerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Case.mediator
   */
  export type Case$mediatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Case.socialWorker
   */
  export type Case$socialWorkerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Case.documents
   */
  export type Case$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Case.notifications
   */
  export type Case$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Case.mediationRequests
   */
  export type Case$mediationRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationRequest
     */
    select?: MediationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationRequest
     */
    omit?: MediationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationRequestInclude<ExtArgs> | null
    where?: MediationRequestWhereInput
    orderBy?: MediationRequestOrderByWithRelationInput | MediationRequestOrderByWithRelationInput[]
    cursor?: MediationRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediationRequestScalarFieldEnum | MediationRequestScalarFieldEnum[]
  }

  /**
   * Case.events
   */
  export type Case$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseEvent
     */
    select?: CaseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseEvent
     */
    omit?: CaseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseEventInclude<ExtArgs> | null
    where?: CaseEventWhereInput
    orderBy?: CaseEventOrderByWithRelationInput | CaseEventOrderByWithRelationInput[]
    cursor?: CaseEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseEventScalarFieldEnum | CaseEventScalarFieldEnum[]
  }

  /**
   * Case without action
   */
  export type CaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    title: string | null
    type: $Enums.DocumentType | null
    filePath: string | null
    uploadedAt: Date | null
    caseId: string | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    type: $Enums.DocumentType | null
    filePath: string | null
    uploadedAt: Date | null
    caseId: string | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    title: number
    type: number
    filePath: number
    uploadedAt: number
    caseId: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
    filePath?: true
    uploadedAt?: true
    caseId?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
    filePath?: true
    uploadedAt?: true
    caseId?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    filePath?: true
    uploadedAt?: true
    caseId?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    title: string
    type: $Enums.DocumentType
    filePath: string
    uploadedAt: Date
    caseId: string
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    filePath?: boolean
    uploadedAt?: boolean
    caseId?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    filePath?: boolean
    uploadedAt?: boolean
    caseId?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    filePath?: boolean
    uploadedAt?: boolean
    caseId?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
    filePath?: boolean
    uploadedAt?: boolean
    caseId?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type" | "filePath" | "uploadedAt" | "caseId", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      case: Prisma.$CasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      type: $Enums.DocumentType
      filePath: string
      uploadedAt: Date
      caseId: string
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    case<T extends CaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaseDefaultArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly title: FieldRef<"Document", 'String'>
    readonly type: FieldRef<"Document", 'DocumentType'>
    readonly filePath: FieldRef<"Document", 'String'>
    readonly uploadedAt: FieldRef<"Document", 'DateTime'>
    readonly caseId: FieldRef<"Document", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    read: boolean | null
    userId: string | null
    caseId: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    read: boolean | null
    userId: string | null
    caseId: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    title: number
    content: number
    createdAt: number
    read: number
    userId: number
    caseId: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    read?: true
    userId?: true
    caseId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    read?: true
    userId?: true
    caseId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    read?: true
    userId?: true
    caseId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    title: string
    content: string
    createdAt: Date
    read: boolean
    userId: string
    caseId: string | null
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    read?: boolean
    userId?: boolean
    caseId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    case?: boolean | Notification$caseArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    read?: boolean
    userId?: boolean
    caseId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    case?: boolean | Notification$caseArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    read?: boolean
    userId?: boolean
    caseId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    case?: boolean | Notification$caseArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    read?: boolean
    userId?: boolean
    caseId?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "createdAt" | "read" | "userId" | "caseId", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    case?: boolean | Notification$caseArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    case?: boolean | Notification$caseArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    case?: boolean | Notification$caseArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      case: Prisma.$CasePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      createdAt: Date
      read: boolean
      userId: string
      caseId: string | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    case<T extends Notification$caseArgs<ExtArgs> = {}>(args?: Subset<T, Notification$caseArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly content: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly caseId: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.case
   */
  export type Notification$caseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    where?: CaseWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model MediationRequest
   */

  export type AggregateMediationRequest = {
    _count: MediationRequestCountAggregateOutputType | null
    _min: MediationRequestMinAggregateOutputType | null
    _max: MediationRequestMaxAggregateOutputType | null
  }

  export type MediationRequestMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.MediationStatus | null
    reason: string | null
    proposal: string | null
    requesterId: string | null
    mediatorId: string | null
    caseId: string | null
  }

  export type MediationRequestMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.MediationStatus | null
    reason: string | null
    proposal: string | null
    requesterId: string | null
    mediatorId: string | null
    caseId: string | null
  }

  export type MediationRequestCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    status: number
    reason: number
    proposal: number
    requesterId: number
    mediatorId: number
    caseId: number
    _all: number
  }


  export type MediationRequestMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    reason?: true
    proposal?: true
    requesterId?: true
    mediatorId?: true
    caseId?: true
  }

  export type MediationRequestMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    reason?: true
    proposal?: true
    requesterId?: true
    mediatorId?: true
    caseId?: true
  }

  export type MediationRequestCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    reason?: true
    proposal?: true
    requesterId?: true
    mediatorId?: true
    caseId?: true
    _all?: true
  }

  export type MediationRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediationRequest to aggregate.
     */
    where?: MediationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediationRequests to fetch.
     */
    orderBy?: MediationRequestOrderByWithRelationInput | MediationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediationRequests
    **/
    _count?: true | MediationRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediationRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediationRequestMaxAggregateInputType
  }

  export type GetMediationRequestAggregateType<T extends MediationRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateMediationRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediationRequest[P]>
      : GetScalarType<T[P], AggregateMediationRequest[P]>
  }




  export type MediationRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediationRequestWhereInput
    orderBy?: MediationRequestOrderByWithAggregationInput | MediationRequestOrderByWithAggregationInput[]
    by: MediationRequestScalarFieldEnum[] | MediationRequestScalarFieldEnum
    having?: MediationRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediationRequestCountAggregateInputType | true
    _min?: MediationRequestMinAggregateInputType
    _max?: MediationRequestMaxAggregateInputType
  }

  export type MediationRequestGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    status: $Enums.MediationStatus
    reason: string
    proposal: string | null
    requesterId: string
    mediatorId: string | null
    caseId: string
    _count: MediationRequestCountAggregateOutputType | null
    _min: MediationRequestMinAggregateOutputType | null
    _max: MediationRequestMaxAggregateOutputType | null
  }

  type GetMediationRequestGroupByPayload<T extends MediationRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediationRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediationRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediationRequestGroupByOutputType[P]>
            : GetScalarType<T[P], MediationRequestGroupByOutputType[P]>
        }
      >
    >


  export type MediationRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    reason?: boolean
    proposal?: boolean
    requesterId?: boolean
    mediatorId?: boolean
    caseId?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    mediator?: boolean | MediationRequest$mediatorArgs<ExtArgs>
    case?: boolean | CaseDefaultArgs<ExtArgs>
    meetings?: boolean | MediationRequest$meetingsArgs<ExtArgs>
    _count?: boolean | MediationRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediationRequest"]>

  export type MediationRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    reason?: boolean
    proposal?: boolean
    requesterId?: boolean
    mediatorId?: boolean
    caseId?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    mediator?: boolean | MediationRequest$mediatorArgs<ExtArgs>
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediationRequest"]>

  export type MediationRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    reason?: boolean
    proposal?: boolean
    requesterId?: boolean
    mediatorId?: boolean
    caseId?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    mediator?: boolean | MediationRequest$mediatorArgs<ExtArgs>
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediationRequest"]>

  export type MediationRequestSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    reason?: boolean
    proposal?: boolean
    requesterId?: boolean
    mediatorId?: boolean
    caseId?: boolean
  }

  export type MediationRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "status" | "reason" | "proposal" | "requesterId" | "mediatorId" | "caseId", ExtArgs["result"]["mediationRequest"]>
  export type MediationRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    mediator?: boolean | MediationRequest$mediatorArgs<ExtArgs>
    case?: boolean | CaseDefaultArgs<ExtArgs>
    meetings?: boolean | MediationRequest$meetingsArgs<ExtArgs>
    _count?: boolean | MediationRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MediationRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    mediator?: boolean | MediationRequest$mediatorArgs<ExtArgs>
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }
  export type MediationRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    mediator?: boolean | MediationRequest$mediatorArgs<ExtArgs>
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }

  export type $MediationRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediationRequest"
    objects: {
      requester: Prisma.$UserPayload<ExtArgs>
      mediator: Prisma.$UserPayload<ExtArgs> | null
      case: Prisma.$CasePayload<ExtArgs>
      meetings: Prisma.$MediationMeetingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      status: $Enums.MediationStatus
      reason: string
      proposal: string | null
      requesterId: string
      mediatorId: string | null
      caseId: string
    }, ExtArgs["result"]["mediationRequest"]>
    composites: {}
  }

  type MediationRequestGetPayload<S extends boolean | null | undefined | MediationRequestDefaultArgs> = $Result.GetResult<Prisma.$MediationRequestPayload, S>

  type MediationRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediationRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediationRequestCountAggregateInputType | true
    }

  export interface MediationRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediationRequest'], meta: { name: 'MediationRequest' } }
    /**
     * Find zero or one MediationRequest that matches the filter.
     * @param {MediationRequestFindUniqueArgs} args - Arguments to find a MediationRequest
     * @example
     * // Get one MediationRequest
     * const mediationRequest = await prisma.mediationRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediationRequestFindUniqueArgs>(args: SelectSubset<T, MediationRequestFindUniqueArgs<ExtArgs>>): Prisma__MediationRequestClient<$Result.GetResult<Prisma.$MediationRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediationRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediationRequestFindUniqueOrThrowArgs} args - Arguments to find a MediationRequest
     * @example
     * // Get one MediationRequest
     * const mediationRequest = await prisma.mediationRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediationRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, MediationRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediationRequestClient<$Result.GetResult<Prisma.$MediationRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediationRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediationRequestFindFirstArgs} args - Arguments to find a MediationRequest
     * @example
     * // Get one MediationRequest
     * const mediationRequest = await prisma.mediationRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediationRequestFindFirstArgs>(args?: SelectSubset<T, MediationRequestFindFirstArgs<ExtArgs>>): Prisma__MediationRequestClient<$Result.GetResult<Prisma.$MediationRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediationRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediationRequestFindFirstOrThrowArgs} args - Arguments to find a MediationRequest
     * @example
     * // Get one MediationRequest
     * const mediationRequest = await prisma.mediationRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediationRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, MediationRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediationRequestClient<$Result.GetResult<Prisma.$MediationRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediationRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediationRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediationRequests
     * const mediationRequests = await prisma.mediationRequest.findMany()
     * 
     * // Get first 10 MediationRequests
     * const mediationRequests = await prisma.mediationRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediationRequestWithIdOnly = await prisma.mediationRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediationRequestFindManyArgs>(args?: SelectSubset<T, MediationRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediationRequest.
     * @param {MediationRequestCreateArgs} args - Arguments to create a MediationRequest.
     * @example
     * // Create one MediationRequest
     * const MediationRequest = await prisma.mediationRequest.create({
     *   data: {
     *     // ... data to create a MediationRequest
     *   }
     * })
     * 
     */
    create<T extends MediationRequestCreateArgs>(args: SelectSubset<T, MediationRequestCreateArgs<ExtArgs>>): Prisma__MediationRequestClient<$Result.GetResult<Prisma.$MediationRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediationRequests.
     * @param {MediationRequestCreateManyArgs} args - Arguments to create many MediationRequests.
     * @example
     * // Create many MediationRequests
     * const mediationRequest = await prisma.mediationRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediationRequestCreateManyArgs>(args?: SelectSubset<T, MediationRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediationRequests and returns the data saved in the database.
     * @param {MediationRequestCreateManyAndReturnArgs} args - Arguments to create many MediationRequests.
     * @example
     * // Create many MediationRequests
     * const mediationRequest = await prisma.mediationRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediationRequests and only return the `id`
     * const mediationRequestWithIdOnly = await prisma.mediationRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediationRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, MediationRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediationRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MediationRequest.
     * @param {MediationRequestDeleteArgs} args - Arguments to delete one MediationRequest.
     * @example
     * // Delete one MediationRequest
     * const MediationRequest = await prisma.mediationRequest.delete({
     *   where: {
     *     // ... filter to delete one MediationRequest
     *   }
     * })
     * 
     */
    delete<T extends MediationRequestDeleteArgs>(args: SelectSubset<T, MediationRequestDeleteArgs<ExtArgs>>): Prisma__MediationRequestClient<$Result.GetResult<Prisma.$MediationRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediationRequest.
     * @param {MediationRequestUpdateArgs} args - Arguments to update one MediationRequest.
     * @example
     * // Update one MediationRequest
     * const mediationRequest = await prisma.mediationRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediationRequestUpdateArgs>(args: SelectSubset<T, MediationRequestUpdateArgs<ExtArgs>>): Prisma__MediationRequestClient<$Result.GetResult<Prisma.$MediationRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediationRequests.
     * @param {MediationRequestDeleteManyArgs} args - Arguments to filter MediationRequests to delete.
     * @example
     * // Delete a few MediationRequests
     * const { count } = await prisma.mediationRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediationRequestDeleteManyArgs>(args?: SelectSubset<T, MediationRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediationRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediationRequests
     * const mediationRequest = await prisma.mediationRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediationRequestUpdateManyArgs>(args: SelectSubset<T, MediationRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediationRequests and returns the data updated in the database.
     * @param {MediationRequestUpdateManyAndReturnArgs} args - Arguments to update many MediationRequests.
     * @example
     * // Update many MediationRequests
     * const mediationRequest = await prisma.mediationRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediationRequests and only return the `id`
     * const mediationRequestWithIdOnly = await prisma.mediationRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediationRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, MediationRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediationRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MediationRequest.
     * @param {MediationRequestUpsertArgs} args - Arguments to update or create a MediationRequest.
     * @example
     * // Update or create a MediationRequest
     * const mediationRequest = await prisma.mediationRequest.upsert({
     *   create: {
     *     // ... data to create a MediationRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediationRequest we want to update
     *   }
     * })
     */
    upsert<T extends MediationRequestUpsertArgs>(args: SelectSubset<T, MediationRequestUpsertArgs<ExtArgs>>): Prisma__MediationRequestClient<$Result.GetResult<Prisma.$MediationRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediationRequestCountArgs} args - Arguments to filter MediationRequests to count.
     * @example
     * // Count the number of MediationRequests
     * const count = await prisma.mediationRequest.count({
     *   where: {
     *     // ... the filter for the MediationRequests we want to count
     *   }
     * })
    **/
    count<T extends MediationRequestCountArgs>(
      args?: Subset<T, MediationRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediationRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediationRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediationRequestAggregateArgs>(args: Subset<T, MediationRequestAggregateArgs>): Prisma.PrismaPromise<GetMediationRequestAggregateType<T>>

    /**
     * Group by MediationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediationRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediationRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediationRequestGroupByArgs['orderBy'] }
        : { orderBy?: MediationRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediationRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediationRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediationRequest model
   */
  readonly fields: MediationRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediationRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediationRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mediator<T extends MediationRequest$mediatorArgs<ExtArgs> = {}>(args?: Subset<T, MediationRequest$mediatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    case<T extends CaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaseDefaultArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    meetings<T extends MediationRequest$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, MediationRequest$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediationMeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MediationRequest model
   */
  interface MediationRequestFieldRefs {
    readonly id: FieldRef<"MediationRequest", 'String'>
    readonly createdAt: FieldRef<"MediationRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"MediationRequest", 'DateTime'>
    readonly status: FieldRef<"MediationRequest", 'MediationStatus'>
    readonly reason: FieldRef<"MediationRequest", 'String'>
    readonly proposal: FieldRef<"MediationRequest", 'String'>
    readonly requesterId: FieldRef<"MediationRequest", 'String'>
    readonly mediatorId: FieldRef<"MediationRequest", 'String'>
    readonly caseId: FieldRef<"MediationRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MediationRequest findUnique
   */
  export type MediationRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationRequest
     */
    select?: MediationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationRequest
     */
    omit?: MediationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationRequestInclude<ExtArgs> | null
    /**
     * Filter, which MediationRequest to fetch.
     */
    where: MediationRequestWhereUniqueInput
  }

  /**
   * MediationRequest findUniqueOrThrow
   */
  export type MediationRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationRequest
     */
    select?: MediationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationRequest
     */
    omit?: MediationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationRequestInclude<ExtArgs> | null
    /**
     * Filter, which MediationRequest to fetch.
     */
    where: MediationRequestWhereUniqueInput
  }

  /**
   * MediationRequest findFirst
   */
  export type MediationRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationRequest
     */
    select?: MediationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationRequest
     */
    omit?: MediationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationRequestInclude<ExtArgs> | null
    /**
     * Filter, which MediationRequest to fetch.
     */
    where?: MediationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediationRequests to fetch.
     */
    orderBy?: MediationRequestOrderByWithRelationInput | MediationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediationRequests.
     */
    cursor?: MediationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediationRequests.
     */
    distinct?: MediationRequestScalarFieldEnum | MediationRequestScalarFieldEnum[]
  }

  /**
   * MediationRequest findFirstOrThrow
   */
  export type MediationRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationRequest
     */
    select?: MediationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationRequest
     */
    omit?: MediationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationRequestInclude<ExtArgs> | null
    /**
     * Filter, which MediationRequest to fetch.
     */
    where?: MediationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediationRequests to fetch.
     */
    orderBy?: MediationRequestOrderByWithRelationInput | MediationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediationRequests.
     */
    cursor?: MediationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediationRequests.
     */
    distinct?: MediationRequestScalarFieldEnum | MediationRequestScalarFieldEnum[]
  }

  /**
   * MediationRequest findMany
   */
  export type MediationRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationRequest
     */
    select?: MediationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationRequest
     */
    omit?: MediationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationRequestInclude<ExtArgs> | null
    /**
     * Filter, which MediationRequests to fetch.
     */
    where?: MediationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediationRequests to fetch.
     */
    orderBy?: MediationRequestOrderByWithRelationInput | MediationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediationRequests.
     */
    cursor?: MediationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediationRequests.
     */
    skip?: number
    distinct?: MediationRequestScalarFieldEnum | MediationRequestScalarFieldEnum[]
  }

  /**
   * MediationRequest create
   */
  export type MediationRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationRequest
     */
    select?: MediationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationRequest
     */
    omit?: MediationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a MediationRequest.
     */
    data: XOR<MediationRequestCreateInput, MediationRequestUncheckedCreateInput>
  }

  /**
   * MediationRequest createMany
   */
  export type MediationRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediationRequests.
     */
    data: MediationRequestCreateManyInput | MediationRequestCreateManyInput[]
  }

  /**
   * MediationRequest createManyAndReturn
   */
  export type MediationRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationRequest
     */
    select?: MediationRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediationRequest
     */
    omit?: MediationRequestOmit<ExtArgs> | null
    /**
     * The data used to create many MediationRequests.
     */
    data: MediationRequestCreateManyInput | MediationRequestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediationRequest update
   */
  export type MediationRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationRequest
     */
    select?: MediationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationRequest
     */
    omit?: MediationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a MediationRequest.
     */
    data: XOR<MediationRequestUpdateInput, MediationRequestUncheckedUpdateInput>
    /**
     * Choose, which MediationRequest to update.
     */
    where: MediationRequestWhereUniqueInput
  }

  /**
   * MediationRequest updateMany
   */
  export type MediationRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediationRequests.
     */
    data: XOR<MediationRequestUpdateManyMutationInput, MediationRequestUncheckedUpdateManyInput>
    /**
     * Filter which MediationRequests to update
     */
    where?: MediationRequestWhereInput
    /**
     * Limit how many MediationRequests to update.
     */
    limit?: number
  }

  /**
   * MediationRequest updateManyAndReturn
   */
  export type MediationRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationRequest
     */
    select?: MediationRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediationRequest
     */
    omit?: MediationRequestOmit<ExtArgs> | null
    /**
     * The data used to update MediationRequests.
     */
    data: XOR<MediationRequestUpdateManyMutationInput, MediationRequestUncheckedUpdateManyInput>
    /**
     * Filter which MediationRequests to update
     */
    where?: MediationRequestWhereInput
    /**
     * Limit how many MediationRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediationRequest upsert
   */
  export type MediationRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationRequest
     */
    select?: MediationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationRequest
     */
    omit?: MediationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the MediationRequest to update in case it exists.
     */
    where: MediationRequestWhereUniqueInput
    /**
     * In case the MediationRequest found by the `where` argument doesn't exist, create a new MediationRequest with this data.
     */
    create: XOR<MediationRequestCreateInput, MediationRequestUncheckedCreateInput>
    /**
     * In case the MediationRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediationRequestUpdateInput, MediationRequestUncheckedUpdateInput>
  }

  /**
   * MediationRequest delete
   */
  export type MediationRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationRequest
     */
    select?: MediationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationRequest
     */
    omit?: MediationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationRequestInclude<ExtArgs> | null
    /**
     * Filter which MediationRequest to delete.
     */
    where: MediationRequestWhereUniqueInput
  }

  /**
   * MediationRequest deleteMany
   */
  export type MediationRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediationRequests to delete
     */
    where?: MediationRequestWhereInput
    /**
     * Limit how many MediationRequests to delete.
     */
    limit?: number
  }

  /**
   * MediationRequest.mediator
   */
  export type MediationRequest$mediatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MediationRequest.meetings
   */
  export type MediationRequest$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationMeeting
     */
    select?: MediationMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationMeeting
     */
    omit?: MediationMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationMeetingInclude<ExtArgs> | null
    where?: MediationMeetingWhereInput
    orderBy?: MediationMeetingOrderByWithRelationInput | MediationMeetingOrderByWithRelationInput[]
    cursor?: MediationMeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediationMeetingScalarFieldEnum | MediationMeetingScalarFieldEnum[]
  }

  /**
   * MediationRequest without action
   */
  export type MediationRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationRequest
     */
    select?: MediationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationRequest
     */
    omit?: MediationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationRequestInclude<ExtArgs> | null
  }


  /**
   * Model MediationMeeting
   */

  export type AggregateMediationMeeting = {
    _count: MediationMeetingCountAggregateOutputType | null
    _min: MediationMeetingMinAggregateOutputType | null
    _max: MediationMeetingMaxAggregateOutputType | null
  }

  export type MediationMeetingMinAggregateOutputType = {
    id: string | null
    date: Date | null
    location: string | null
    videoLink: string | null
    status: $Enums.MeetingStatus | null
    notes: string | null
    mediationId: string | null
  }

  export type MediationMeetingMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    location: string | null
    videoLink: string | null
    status: $Enums.MeetingStatus | null
    notes: string | null
    mediationId: string | null
  }

  export type MediationMeetingCountAggregateOutputType = {
    id: number
    date: number
    location: number
    videoLink: number
    status: number
    notes: number
    mediationId: number
    _all: number
  }


  export type MediationMeetingMinAggregateInputType = {
    id?: true
    date?: true
    location?: true
    videoLink?: true
    status?: true
    notes?: true
    mediationId?: true
  }

  export type MediationMeetingMaxAggregateInputType = {
    id?: true
    date?: true
    location?: true
    videoLink?: true
    status?: true
    notes?: true
    mediationId?: true
  }

  export type MediationMeetingCountAggregateInputType = {
    id?: true
    date?: true
    location?: true
    videoLink?: true
    status?: true
    notes?: true
    mediationId?: true
    _all?: true
  }

  export type MediationMeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediationMeeting to aggregate.
     */
    where?: MediationMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediationMeetings to fetch.
     */
    orderBy?: MediationMeetingOrderByWithRelationInput | MediationMeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediationMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediationMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediationMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediationMeetings
    **/
    _count?: true | MediationMeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediationMeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediationMeetingMaxAggregateInputType
  }

  export type GetMediationMeetingAggregateType<T extends MediationMeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateMediationMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediationMeeting[P]>
      : GetScalarType<T[P], AggregateMediationMeeting[P]>
  }




  export type MediationMeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediationMeetingWhereInput
    orderBy?: MediationMeetingOrderByWithAggregationInput | MediationMeetingOrderByWithAggregationInput[]
    by: MediationMeetingScalarFieldEnum[] | MediationMeetingScalarFieldEnum
    having?: MediationMeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediationMeetingCountAggregateInputType | true
    _min?: MediationMeetingMinAggregateInputType
    _max?: MediationMeetingMaxAggregateInputType
  }

  export type MediationMeetingGroupByOutputType = {
    id: string
    date: Date
    location: string | null
    videoLink: string | null
    status: $Enums.MeetingStatus
    notes: string | null
    mediationId: string
    _count: MediationMeetingCountAggregateOutputType | null
    _min: MediationMeetingMinAggregateOutputType | null
    _max: MediationMeetingMaxAggregateOutputType | null
  }

  type GetMediationMeetingGroupByPayload<T extends MediationMeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediationMeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediationMeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediationMeetingGroupByOutputType[P]>
            : GetScalarType<T[P], MediationMeetingGroupByOutputType[P]>
        }
      >
    >


  export type MediationMeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    location?: boolean
    videoLink?: boolean
    status?: boolean
    notes?: boolean
    mediationId?: boolean
    mediation?: boolean | MediationRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediationMeeting"]>

  export type MediationMeetingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    location?: boolean
    videoLink?: boolean
    status?: boolean
    notes?: boolean
    mediationId?: boolean
    mediation?: boolean | MediationRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediationMeeting"]>

  export type MediationMeetingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    location?: boolean
    videoLink?: boolean
    status?: boolean
    notes?: boolean
    mediationId?: boolean
    mediation?: boolean | MediationRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediationMeeting"]>

  export type MediationMeetingSelectScalar = {
    id?: boolean
    date?: boolean
    location?: boolean
    videoLink?: boolean
    status?: boolean
    notes?: boolean
    mediationId?: boolean
  }

  export type MediationMeetingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "location" | "videoLink" | "status" | "notes" | "mediationId", ExtArgs["result"]["mediationMeeting"]>
  export type MediationMeetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediation?: boolean | MediationRequestDefaultArgs<ExtArgs>
  }
  export type MediationMeetingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediation?: boolean | MediationRequestDefaultArgs<ExtArgs>
  }
  export type MediationMeetingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediation?: boolean | MediationRequestDefaultArgs<ExtArgs>
  }

  export type $MediationMeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediationMeeting"
    objects: {
      mediation: Prisma.$MediationRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      location: string | null
      videoLink: string | null
      status: $Enums.MeetingStatus
      notes: string | null
      mediationId: string
    }, ExtArgs["result"]["mediationMeeting"]>
    composites: {}
  }

  type MediationMeetingGetPayload<S extends boolean | null | undefined | MediationMeetingDefaultArgs> = $Result.GetResult<Prisma.$MediationMeetingPayload, S>

  type MediationMeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediationMeetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediationMeetingCountAggregateInputType | true
    }

  export interface MediationMeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediationMeeting'], meta: { name: 'MediationMeeting' } }
    /**
     * Find zero or one MediationMeeting that matches the filter.
     * @param {MediationMeetingFindUniqueArgs} args - Arguments to find a MediationMeeting
     * @example
     * // Get one MediationMeeting
     * const mediationMeeting = await prisma.mediationMeeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediationMeetingFindUniqueArgs>(args: SelectSubset<T, MediationMeetingFindUniqueArgs<ExtArgs>>): Prisma__MediationMeetingClient<$Result.GetResult<Prisma.$MediationMeetingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediationMeeting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediationMeetingFindUniqueOrThrowArgs} args - Arguments to find a MediationMeeting
     * @example
     * // Get one MediationMeeting
     * const mediationMeeting = await prisma.mediationMeeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediationMeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, MediationMeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediationMeetingClient<$Result.GetResult<Prisma.$MediationMeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediationMeeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediationMeetingFindFirstArgs} args - Arguments to find a MediationMeeting
     * @example
     * // Get one MediationMeeting
     * const mediationMeeting = await prisma.mediationMeeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediationMeetingFindFirstArgs>(args?: SelectSubset<T, MediationMeetingFindFirstArgs<ExtArgs>>): Prisma__MediationMeetingClient<$Result.GetResult<Prisma.$MediationMeetingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediationMeeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediationMeetingFindFirstOrThrowArgs} args - Arguments to find a MediationMeeting
     * @example
     * // Get one MediationMeeting
     * const mediationMeeting = await prisma.mediationMeeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediationMeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, MediationMeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediationMeetingClient<$Result.GetResult<Prisma.$MediationMeetingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediationMeetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediationMeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediationMeetings
     * const mediationMeetings = await prisma.mediationMeeting.findMany()
     * 
     * // Get first 10 MediationMeetings
     * const mediationMeetings = await prisma.mediationMeeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediationMeetingWithIdOnly = await prisma.mediationMeeting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediationMeetingFindManyArgs>(args?: SelectSubset<T, MediationMeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediationMeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediationMeeting.
     * @param {MediationMeetingCreateArgs} args - Arguments to create a MediationMeeting.
     * @example
     * // Create one MediationMeeting
     * const MediationMeeting = await prisma.mediationMeeting.create({
     *   data: {
     *     // ... data to create a MediationMeeting
     *   }
     * })
     * 
     */
    create<T extends MediationMeetingCreateArgs>(args: SelectSubset<T, MediationMeetingCreateArgs<ExtArgs>>): Prisma__MediationMeetingClient<$Result.GetResult<Prisma.$MediationMeetingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediationMeetings.
     * @param {MediationMeetingCreateManyArgs} args - Arguments to create many MediationMeetings.
     * @example
     * // Create many MediationMeetings
     * const mediationMeeting = await prisma.mediationMeeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediationMeetingCreateManyArgs>(args?: SelectSubset<T, MediationMeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediationMeetings and returns the data saved in the database.
     * @param {MediationMeetingCreateManyAndReturnArgs} args - Arguments to create many MediationMeetings.
     * @example
     * // Create many MediationMeetings
     * const mediationMeeting = await prisma.mediationMeeting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediationMeetings and only return the `id`
     * const mediationMeetingWithIdOnly = await prisma.mediationMeeting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediationMeetingCreateManyAndReturnArgs>(args?: SelectSubset<T, MediationMeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediationMeetingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MediationMeeting.
     * @param {MediationMeetingDeleteArgs} args - Arguments to delete one MediationMeeting.
     * @example
     * // Delete one MediationMeeting
     * const MediationMeeting = await prisma.mediationMeeting.delete({
     *   where: {
     *     // ... filter to delete one MediationMeeting
     *   }
     * })
     * 
     */
    delete<T extends MediationMeetingDeleteArgs>(args: SelectSubset<T, MediationMeetingDeleteArgs<ExtArgs>>): Prisma__MediationMeetingClient<$Result.GetResult<Prisma.$MediationMeetingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediationMeeting.
     * @param {MediationMeetingUpdateArgs} args - Arguments to update one MediationMeeting.
     * @example
     * // Update one MediationMeeting
     * const mediationMeeting = await prisma.mediationMeeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediationMeetingUpdateArgs>(args: SelectSubset<T, MediationMeetingUpdateArgs<ExtArgs>>): Prisma__MediationMeetingClient<$Result.GetResult<Prisma.$MediationMeetingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediationMeetings.
     * @param {MediationMeetingDeleteManyArgs} args - Arguments to filter MediationMeetings to delete.
     * @example
     * // Delete a few MediationMeetings
     * const { count } = await prisma.mediationMeeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediationMeetingDeleteManyArgs>(args?: SelectSubset<T, MediationMeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediationMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediationMeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediationMeetings
     * const mediationMeeting = await prisma.mediationMeeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediationMeetingUpdateManyArgs>(args: SelectSubset<T, MediationMeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediationMeetings and returns the data updated in the database.
     * @param {MediationMeetingUpdateManyAndReturnArgs} args - Arguments to update many MediationMeetings.
     * @example
     * // Update many MediationMeetings
     * const mediationMeeting = await prisma.mediationMeeting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediationMeetings and only return the `id`
     * const mediationMeetingWithIdOnly = await prisma.mediationMeeting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediationMeetingUpdateManyAndReturnArgs>(args: SelectSubset<T, MediationMeetingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediationMeetingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MediationMeeting.
     * @param {MediationMeetingUpsertArgs} args - Arguments to update or create a MediationMeeting.
     * @example
     * // Update or create a MediationMeeting
     * const mediationMeeting = await prisma.mediationMeeting.upsert({
     *   create: {
     *     // ... data to create a MediationMeeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediationMeeting we want to update
     *   }
     * })
     */
    upsert<T extends MediationMeetingUpsertArgs>(args: SelectSubset<T, MediationMeetingUpsertArgs<ExtArgs>>): Prisma__MediationMeetingClient<$Result.GetResult<Prisma.$MediationMeetingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediationMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediationMeetingCountArgs} args - Arguments to filter MediationMeetings to count.
     * @example
     * // Count the number of MediationMeetings
     * const count = await prisma.mediationMeeting.count({
     *   where: {
     *     // ... the filter for the MediationMeetings we want to count
     *   }
     * })
    **/
    count<T extends MediationMeetingCountArgs>(
      args?: Subset<T, MediationMeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediationMeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediationMeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediationMeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediationMeetingAggregateArgs>(args: Subset<T, MediationMeetingAggregateArgs>): Prisma.PrismaPromise<GetMediationMeetingAggregateType<T>>

    /**
     * Group by MediationMeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediationMeetingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediationMeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediationMeetingGroupByArgs['orderBy'] }
        : { orderBy?: MediationMeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediationMeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediationMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediationMeeting model
   */
  readonly fields: MediationMeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediationMeeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediationMeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mediation<T extends MediationRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediationRequestDefaultArgs<ExtArgs>>): Prisma__MediationRequestClient<$Result.GetResult<Prisma.$MediationRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MediationMeeting model
   */
  interface MediationMeetingFieldRefs {
    readonly id: FieldRef<"MediationMeeting", 'String'>
    readonly date: FieldRef<"MediationMeeting", 'DateTime'>
    readonly location: FieldRef<"MediationMeeting", 'String'>
    readonly videoLink: FieldRef<"MediationMeeting", 'String'>
    readonly status: FieldRef<"MediationMeeting", 'MeetingStatus'>
    readonly notes: FieldRef<"MediationMeeting", 'String'>
    readonly mediationId: FieldRef<"MediationMeeting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MediationMeeting findUnique
   */
  export type MediationMeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationMeeting
     */
    select?: MediationMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationMeeting
     */
    omit?: MediationMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationMeetingInclude<ExtArgs> | null
    /**
     * Filter, which MediationMeeting to fetch.
     */
    where: MediationMeetingWhereUniqueInput
  }

  /**
   * MediationMeeting findUniqueOrThrow
   */
  export type MediationMeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationMeeting
     */
    select?: MediationMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationMeeting
     */
    omit?: MediationMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationMeetingInclude<ExtArgs> | null
    /**
     * Filter, which MediationMeeting to fetch.
     */
    where: MediationMeetingWhereUniqueInput
  }

  /**
   * MediationMeeting findFirst
   */
  export type MediationMeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationMeeting
     */
    select?: MediationMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationMeeting
     */
    omit?: MediationMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationMeetingInclude<ExtArgs> | null
    /**
     * Filter, which MediationMeeting to fetch.
     */
    where?: MediationMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediationMeetings to fetch.
     */
    orderBy?: MediationMeetingOrderByWithRelationInput | MediationMeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediationMeetings.
     */
    cursor?: MediationMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediationMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediationMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediationMeetings.
     */
    distinct?: MediationMeetingScalarFieldEnum | MediationMeetingScalarFieldEnum[]
  }

  /**
   * MediationMeeting findFirstOrThrow
   */
  export type MediationMeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationMeeting
     */
    select?: MediationMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationMeeting
     */
    omit?: MediationMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationMeetingInclude<ExtArgs> | null
    /**
     * Filter, which MediationMeeting to fetch.
     */
    where?: MediationMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediationMeetings to fetch.
     */
    orderBy?: MediationMeetingOrderByWithRelationInput | MediationMeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediationMeetings.
     */
    cursor?: MediationMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediationMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediationMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediationMeetings.
     */
    distinct?: MediationMeetingScalarFieldEnum | MediationMeetingScalarFieldEnum[]
  }

  /**
   * MediationMeeting findMany
   */
  export type MediationMeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationMeeting
     */
    select?: MediationMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationMeeting
     */
    omit?: MediationMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationMeetingInclude<ExtArgs> | null
    /**
     * Filter, which MediationMeetings to fetch.
     */
    where?: MediationMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediationMeetings to fetch.
     */
    orderBy?: MediationMeetingOrderByWithRelationInput | MediationMeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediationMeetings.
     */
    cursor?: MediationMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediationMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediationMeetings.
     */
    skip?: number
    distinct?: MediationMeetingScalarFieldEnum | MediationMeetingScalarFieldEnum[]
  }

  /**
   * MediationMeeting create
   */
  export type MediationMeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationMeeting
     */
    select?: MediationMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationMeeting
     */
    omit?: MediationMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationMeetingInclude<ExtArgs> | null
    /**
     * The data needed to create a MediationMeeting.
     */
    data: XOR<MediationMeetingCreateInput, MediationMeetingUncheckedCreateInput>
  }

  /**
   * MediationMeeting createMany
   */
  export type MediationMeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediationMeetings.
     */
    data: MediationMeetingCreateManyInput | MediationMeetingCreateManyInput[]
  }

  /**
   * MediationMeeting createManyAndReturn
   */
  export type MediationMeetingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationMeeting
     */
    select?: MediationMeetingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediationMeeting
     */
    omit?: MediationMeetingOmit<ExtArgs> | null
    /**
     * The data used to create many MediationMeetings.
     */
    data: MediationMeetingCreateManyInput | MediationMeetingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationMeetingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediationMeeting update
   */
  export type MediationMeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationMeeting
     */
    select?: MediationMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationMeeting
     */
    omit?: MediationMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationMeetingInclude<ExtArgs> | null
    /**
     * The data needed to update a MediationMeeting.
     */
    data: XOR<MediationMeetingUpdateInput, MediationMeetingUncheckedUpdateInput>
    /**
     * Choose, which MediationMeeting to update.
     */
    where: MediationMeetingWhereUniqueInput
  }

  /**
   * MediationMeeting updateMany
   */
  export type MediationMeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediationMeetings.
     */
    data: XOR<MediationMeetingUpdateManyMutationInput, MediationMeetingUncheckedUpdateManyInput>
    /**
     * Filter which MediationMeetings to update
     */
    where?: MediationMeetingWhereInput
    /**
     * Limit how many MediationMeetings to update.
     */
    limit?: number
  }

  /**
   * MediationMeeting updateManyAndReturn
   */
  export type MediationMeetingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationMeeting
     */
    select?: MediationMeetingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediationMeeting
     */
    omit?: MediationMeetingOmit<ExtArgs> | null
    /**
     * The data used to update MediationMeetings.
     */
    data: XOR<MediationMeetingUpdateManyMutationInput, MediationMeetingUncheckedUpdateManyInput>
    /**
     * Filter which MediationMeetings to update
     */
    where?: MediationMeetingWhereInput
    /**
     * Limit how many MediationMeetings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationMeetingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediationMeeting upsert
   */
  export type MediationMeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationMeeting
     */
    select?: MediationMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationMeeting
     */
    omit?: MediationMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationMeetingInclude<ExtArgs> | null
    /**
     * The filter to search for the MediationMeeting to update in case it exists.
     */
    where: MediationMeetingWhereUniqueInput
    /**
     * In case the MediationMeeting found by the `where` argument doesn't exist, create a new MediationMeeting with this data.
     */
    create: XOR<MediationMeetingCreateInput, MediationMeetingUncheckedCreateInput>
    /**
     * In case the MediationMeeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediationMeetingUpdateInput, MediationMeetingUncheckedUpdateInput>
  }

  /**
   * MediationMeeting delete
   */
  export type MediationMeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationMeeting
     */
    select?: MediationMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationMeeting
     */
    omit?: MediationMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationMeetingInclude<ExtArgs> | null
    /**
     * Filter which MediationMeeting to delete.
     */
    where: MediationMeetingWhereUniqueInput
  }

  /**
   * MediationMeeting deleteMany
   */
  export type MediationMeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediationMeetings to delete
     */
    where?: MediationMeetingWhereInput
    /**
     * Limit how many MediationMeetings to delete.
     */
    limit?: number
  }

  /**
   * MediationMeeting without action
   */
  export type MediationMeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediationMeeting
     */
    select?: MediationMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediationMeeting
     */
    omit?: MediationMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediationMeetingInclude<ExtArgs> | null
  }


  /**
   * Model CaseEvent
   */

  export type AggregateCaseEvent = {
    _count: CaseEventCountAggregateOutputType | null
    _min: CaseEventMinAggregateOutputType | null
    _max: CaseEventMaxAggregateOutputType | null
  }

  export type CaseEventMinAggregateOutputType = {
    id: string | null
    date: Date | null
    type: $Enums.EventType | null
    description: string | null
    actor: string | null
    caseId: string | null
  }

  export type CaseEventMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    type: $Enums.EventType | null
    description: string | null
    actor: string | null
    caseId: string | null
  }

  export type CaseEventCountAggregateOutputType = {
    id: number
    date: number
    type: number
    description: number
    actor: number
    caseId: number
    _all: number
  }


  export type CaseEventMinAggregateInputType = {
    id?: true
    date?: true
    type?: true
    description?: true
    actor?: true
    caseId?: true
  }

  export type CaseEventMaxAggregateInputType = {
    id?: true
    date?: true
    type?: true
    description?: true
    actor?: true
    caseId?: true
  }

  export type CaseEventCountAggregateInputType = {
    id?: true
    date?: true
    type?: true
    description?: true
    actor?: true
    caseId?: true
    _all?: true
  }

  export type CaseEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseEvent to aggregate.
     */
    where?: CaseEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseEvents to fetch.
     */
    orderBy?: CaseEventOrderByWithRelationInput | CaseEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaseEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CaseEvents
    **/
    _count?: true | CaseEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaseEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaseEventMaxAggregateInputType
  }

  export type GetCaseEventAggregateType<T extends CaseEventAggregateArgs> = {
        [P in keyof T & keyof AggregateCaseEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaseEvent[P]>
      : GetScalarType<T[P], AggregateCaseEvent[P]>
  }




  export type CaseEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseEventWhereInput
    orderBy?: CaseEventOrderByWithAggregationInput | CaseEventOrderByWithAggregationInput[]
    by: CaseEventScalarFieldEnum[] | CaseEventScalarFieldEnum
    having?: CaseEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaseEventCountAggregateInputType | true
    _min?: CaseEventMinAggregateInputType
    _max?: CaseEventMaxAggregateInputType
  }

  export type CaseEventGroupByOutputType = {
    id: string
    date: Date
    type: $Enums.EventType
    description: string
    actor: string
    caseId: string
    _count: CaseEventCountAggregateOutputType | null
    _min: CaseEventMinAggregateOutputType | null
    _max: CaseEventMaxAggregateOutputType | null
  }

  type GetCaseEventGroupByPayload<T extends CaseEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaseEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaseEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaseEventGroupByOutputType[P]>
            : GetScalarType<T[P], CaseEventGroupByOutputType[P]>
        }
      >
    >


  export type CaseEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    description?: boolean
    actor?: boolean
    caseId?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseEvent"]>

  export type CaseEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    description?: boolean
    actor?: boolean
    caseId?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseEvent"]>

  export type CaseEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    description?: boolean
    actor?: boolean
    caseId?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseEvent"]>

  export type CaseEventSelectScalar = {
    id?: boolean
    date?: boolean
    type?: boolean
    description?: boolean
    actor?: boolean
    caseId?: boolean
  }

  export type CaseEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "type" | "description" | "actor" | "caseId", ExtArgs["result"]["caseEvent"]>
  export type CaseEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }
  export type CaseEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }
  export type CaseEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }

  export type $CaseEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CaseEvent"
    objects: {
      case: Prisma.$CasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      type: $Enums.EventType
      description: string
      actor: string
      caseId: string
    }, ExtArgs["result"]["caseEvent"]>
    composites: {}
  }

  type CaseEventGetPayload<S extends boolean | null | undefined | CaseEventDefaultArgs> = $Result.GetResult<Prisma.$CaseEventPayload, S>

  type CaseEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaseEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaseEventCountAggregateInputType | true
    }

  export interface CaseEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CaseEvent'], meta: { name: 'CaseEvent' } }
    /**
     * Find zero or one CaseEvent that matches the filter.
     * @param {CaseEventFindUniqueArgs} args - Arguments to find a CaseEvent
     * @example
     * // Get one CaseEvent
     * const caseEvent = await prisma.caseEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaseEventFindUniqueArgs>(args: SelectSubset<T, CaseEventFindUniqueArgs<ExtArgs>>): Prisma__CaseEventClient<$Result.GetResult<Prisma.$CaseEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CaseEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaseEventFindUniqueOrThrowArgs} args - Arguments to find a CaseEvent
     * @example
     * // Get one CaseEvent
     * const caseEvent = await prisma.caseEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaseEventFindUniqueOrThrowArgs>(args: SelectSubset<T, CaseEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaseEventClient<$Result.GetResult<Prisma.$CaseEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseEventFindFirstArgs} args - Arguments to find a CaseEvent
     * @example
     * // Get one CaseEvent
     * const caseEvent = await prisma.caseEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaseEventFindFirstArgs>(args?: SelectSubset<T, CaseEventFindFirstArgs<ExtArgs>>): Prisma__CaseEventClient<$Result.GetResult<Prisma.$CaseEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseEventFindFirstOrThrowArgs} args - Arguments to find a CaseEvent
     * @example
     * // Get one CaseEvent
     * const caseEvent = await prisma.caseEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaseEventFindFirstOrThrowArgs>(args?: SelectSubset<T, CaseEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaseEventClient<$Result.GetResult<Prisma.$CaseEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CaseEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaseEvents
     * const caseEvents = await prisma.caseEvent.findMany()
     * 
     * // Get first 10 CaseEvents
     * const caseEvents = await prisma.caseEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caseEventWithIdOnly = await prisma.caseEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaseEventFindManyArgs>(args?: SelectSubset<T, CaseEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CaseEvent.
     * @param {CaseEventCreateArgs} args - Arguments to create a CaseEvent.
     * @example
     * // Create one CaseEvent
     * const CaseEvent = await prisma.caseEvent.create({
     *   data: {
     *     // ... data to create a CaseEvent
     *   }
     * })
     * 
     */
    create<T extends CaseEventCreateArgs>(args: SelectSubset<T, CaseEventCreateArgs<ExtArgs>>): Prisma__CaseEventClient<$Result.GetResult<Prisma.$CaseEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CaseEvents.
     * @param {CaseEventCreateManyArgs} args - Arguments to create many CaseEvents.
     * @example
     * // Create many CaseEvents
     * const caseEvent = await prisma.caseEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaseEventCreateManyArgs>(args?: SelectSubset<T, CaseEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CaseEvents and returns the data saved in the database.
     * @param {CaseEventCreateManyAndReturnArgs} args - Arguments to create many CaseEvents.
     * @example
     * // Create many CaseEvents
     * const caseEvent = await prisma.caseEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CaseEvents and only return the `id`
     * const caseEventWithIdOnly = await prisma.caseEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaseEventCreateManyAndReturnArgs>(args?: SelectSubset<T, CaseEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CaseEvent.
     * @param {CaseEventDeleteArgs} args - Arguments to delete one CaseEvent.
     * @example
     * // Delete one CaseEvent
     * const CaseEvent = await prisma.caseEvent.delete({
     *   where: {
     *     // ... filter to delete one CaseEvent
     *   }
     * })
     * 
     */
    delete<T extends CaseEventDeleteArgs>(args: SelectSubset<T, CaseEventDeleteArgs<ExtArgs>>): Prisma__CaseEventClient<$Result.GetResult<Prisma.$CaseEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CaseEvent.
     * @param {CaseEventUpdateArgs} args - Arguments to update one CaseEvent.
     * @example
     * // Update one CaseEvent
     * const caseEvent = await prisma.caseEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaseEventUpdateArgs>(args: SelectSubset<T, CaseEventUpdateArgs<ExtArgs>>): Prisma__CaseEventClient<$Result.GetResult<Prisma.$CaseEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CaseEvents.
     * @param {CaseEventDeleteManyArgs} args - Arguments to filter CaseEvents to delete.
     * @example
     * // Delete a few CaseEvents
     * const { count } = await prisma.caseEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaseEventDeleteManyArgs>(args?: SelectSubset<T, CaseEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaseEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaseEvents
     * const caseEvent = await prisma.caseEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaseEventUpdateManyArgs>(args: SelectSubset<T, CaseEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaseEvents and returns the data updated in the database.
     * @param {CaseEventUpdateManyAndReturnArgs} args - Arguments to update many CaseEvents.
     * @example
     * // Update many CaseEvents
     * const caseEvent = await prisma.caseEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CaseEvents and only return the `id`
     * const caseEventWithIdOnly = await prisma.caseEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CaseEventUpdateManyAndReturnArgs>(args: SelectSubset<T, CaseEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CaseEvent.
     * @param {CaseEventUpsertArgs} args - Arguments to update or create a CaseEvent.
     * @example
     * // Update or create a CaseEvent
     * const caseEvent = await prisma.caseEvent.upsert({
     *   create: {
     *     // ... data to create a CaseEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaseEvent we want to update
     *   }
     * })
     */
    upsert<T extends CaseEventUpsertArgs>(args: SelectSubset<T, CaseEventUpsertArgs<ExtArgs>>): Prisma__CaseEventClient<$Result.GetResult<Prisma.$CaseEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CaseEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseEventCountArgs} args - Arguments to filter CaseEvents to count.
     * @example
     * // Count the number of CaseEvents
     * const count = await prisma.caseEvent.count({
     *   where: {
     *     // ... the filter for the CaseEvents we want to count
     *   }
     * })
    **/
    count<T extends CaseEventCountArgs>(
      args?: Subset<T, CaseEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaseEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CaseEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaseEventAggregateArgs>(args: Subset<T, CaseEventAggregateArgs>): Prisma.PrismaPromise<GetCaseEventAggregateType<T>>

    /**
     * Group by CaseEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaseEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaseEventGroupByArgs['orderBy'] }
        : { orderBy?: CaseEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaseEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CaseEvent model
   */
  readonly fields: CaseEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CaseEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaseEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    case<T extends CaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaseDefaultArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CaseEvent model
   */
  interface CaseEventFieldRefs {
    readonly id: FieldRef<"CaseEvent", 'String'>
    readonly date: FieldRef<"CaseEvent", 'DateTime'>
    readonly type: FieldRef<"CaseEvent", 'EventType'>
    readonly description: FieldRef<"CaseEvent", 'String'>
    readonly actor: FieldRef<"CaseEvent", 'String'>
    readonly caseId: FieldRef<"CaseEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CaseEvent findUnique
   */
  export type CaseEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseEvent
     */
    select?: CaseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseEvent
     */
    omit?: CaseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseEventInclude<ExtArgs> | null
    /**
     * Filter, which CaseEvent to fetch.
     */
    where: CaseEventWhereUniqueInput
  }

  /**
   * CaseEvent findUniqueOrThrow
   */
  export type CaseEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseEvent
     */
    select?: CaseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseEvent
     */
    omit?: CaseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseEventInclude<ExtArgs> | null
    /**
     * Filter, which CaseEvent to fetch.
     */
    where: CaseEventWhereUniqueInput
  }

  /**
   * CaseEvent findFirst
   */
  export type CaseEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseEvent
     */
    select?: CaseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseEvent
     */
    omit?: CaseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseEventInclude<ExtArgs> | null
    /**
     * Filter, which CaseEvent to fetch.
     */
    where?: CaseEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseEvents to fetch.
     */
    orderBy?: CaseEventOrderByWithRelationInput | CaseEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseEvents.
     */
    cursor?: CaseEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseEvents.
     */
    distinct?: CaseEventScalarFieldEnum | CaseEventScalarFieldEnum[]
  }

  /**
   * CaseEvent findFirstOrThrow
   */
  export type CaseEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseEvent
     */
    select?: CaseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseEvent
     */
    omit?: CaseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseEventInclude<ExtArgs> | null
    /**
     * Filter, which CaseEvent to fetch.
     */
    where?: CaseEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseEvents to fetch.
     */
    orderBy?: CaseEventOrderByWithRelationInput | CaseEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseEvents.
     */
    cursor?: CaseEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseEvents.
     */
    distinct?: CaseEventScalarFieldEnum | CaseEventScalarFieldEnum[]
  }

  /**
   * CaseEvent findMany
   */
  export type CaseEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseEvent
     */
    select?: CaseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseEvent
     */
    omit?: CaseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseEventInclude<ExtArgs> | null
    /**
     * Filter, which CaseEvents to fetch.
     */
    where?: CaseEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseEvents to fetch.
     */
    orderBy?: CaseEventOrderByWithRelationInput | CaseEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CaseEvents.
     */
    cursor?: CaseEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseEvents.
     */
    skip?: number
    distinct?: CaseEventScalarFieldEnum | CaseEventScalarFieldEnum[]
  }

  /**
   * CaseEvent create
   */
  export type CaseEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseEvent
     */
    select?: CaseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseEvent
     */
    omit?: CaseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseEventInclude<ExtArgs> | null
    /**
     * The data needed to create a CaseEvent.
     */
    data: XOR<CaseEventCreateInput, CaseEventUncheckedCreateInput>
  }

  /**
   * CaseEvent createMany
   */
  export type CaseEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CaseEvents.
     */
    data: CaseEventCreateManyInput | CaseEventCreateManyInput[]
  }

  /**
   * CaseEvent createManyAndReturn
   */
  export type CaseEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseEvent
     */
    select?: CaseEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaseEvent
     */
    omit?: CaseEventOmit<ExtArgs> | null
    /**
     * The data used to create many CaseEvents.
     */
    data: CaseEventCreateManyInput | CaseEventCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaseEvent update
   */
  export type CaseEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseEvent
     */
    select?: CaseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseEvent
     */
    omit?: CaseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseEventInclude<ExtArgs> | null
    /**
     * The data needed to update a CaseEvent.
     */
    data: XOR<CaseEventUpdateInput, CaseEventUncheckedUpdateInput>
    /**
     * Choose, which CaseEvent to update.
     */
    where: CaseEventWhereUniqueInput
  }

  /**
   * CaseEvent updateMany
   */
  export type CaseEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CaseEvents.
     */
    data: XOR<CaseEventUpdateManyMutationInput, CaseEventUncheckedUpdateManyInput>
    /**
     * Filter which CaseEvents to update
     */
    where?: CaseEventWhereInput
    /**
     * Limit how many CaseEvents to update.
     */
    limit?: number
  }

  /**
   * CaseEvent updateManyAndReturn
   */
  export type CaseEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseEvent
     */
    select?: CaseEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaseEvent
     */
    omit?: CaseEventOmit<ExtArgs> | null
    /**
     * The data used to update CaseEvents.
     */
    data: XOR<CaseEventUpdateManyMutationInput, CaseEventUncheckedUpdateManyInput>
    /**
     * Filter which CaseEvents to update
     */
    where?: CaseEventWhereInput
    /**
     * Limit how many CaseEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaseEvent upsert
   */
  export type CaseEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseEvent
     */
    select?: CaseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseEvent
     */
    omit?: CaseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseEventInclude<ExtArgs> | null
    /**
     * The filter to search for the CaseEvent to update in case it exists.
     */
    where: CaseEventWhereUniqueInput
    /**
     * In case the CaseEvent found by the `where` argument doesn't exist, create a new CaseEvent with this data.
     */
    create: XOR<CaseEventCreateInput, CaseEventUncheckedCreateInput>
    /**
     * In case the CaseEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaseEventUpdateInput, CaseEventUncheckedUpdateInput>
  }

  /**
   * CaseEvent delete
   */
  export type CaseEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseEvent
     */
    select?: CaseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseEvent
     */
    omit?: CaseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseEventInclude<ExtArgs> | null
    /**
     * Filter which CaseEvent to delete.
     */
    where: CaseEventWhereUniqueInput
  }

  /**
   * CaseEvent deleteMany
   */
  export type CaseEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseEvents to delete
     */
    where?: CaseEventWhereInput
    /**
     * Limit how many CaseEvents to delete.
     */
    limit?: number
  }

  /**
   * CaseEvent without action
   */
  export type CaseEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseEvent
     */
    select?: CaseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseEvent
     */
    omit?: CaseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    situation: 'situation',
    type: 'type',
    properties: 'properties',
    office: 'office',
    organization: 'organization',
    service: 'service',
    function: 'function'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CaseScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    stage: 'stage',
    urgency: 'urgency',
    debtAmount: 'debtAmount',
    description: 'description',
    landlordId: 'landlordId',
    tenantId: 'tenantId',
    officerId: 'officerId',
    mediatorId: 'mediatorId',
    socialWorkerId: 'socialWorkerId',
    housingType: 'housingType',
    housingArea: 'housingArea',
    rent: 'rent',
    charges: 'charges',
    deposit: 'deposit',
    leaseStartDate: 'leaseStartDate',
    leaseType: 'leaseType',
    leaseDuration: 'leaseDuration',
    address: 'address'
  };

  export type CaseScalarFieldEnum = (typeof CaseScalarFieldEnum)[keyof typeof CaseScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type: 'type',
    filePath: 'filePath',
    uploadedAt: 'uploadedAt',
    caseId: 'caseId'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    read: 'read',
    userId: 'userId',
    caseId: 'caseId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const MediationRequestScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    reason: 'reason',
    proposal: 'proposal',
    requesterId: 'requesterId',
    mediatorId: 'mediatorId',
    caseId: 'caseId'
  };

  export type MediationRequestScalarFieldEnum = (typeof MediationRequestScalarFieldEnum)[keyof typeof MediationRequestScalarFieldEnum]


  export const MediationMeetingScalarFieldEnum: {
    id: 'id',
    date: 'date',
    location: 'location',
    videoLink: 'videoLink',
    status: 'status',
    notes: 'notes',
    mediationId: 'mediationId'
  };

  export type MediationMeetingScalarFieldEnum = (typeof MediationMeetingScalarFieldEnum)[keyof typeof MediationMeetingScalarFieldEnum]


  export const CaseEventScalarFieldEnum: {
    id: 'id',
    date: 'date',
    type: 'type',
    description: 'description',
    actor: 'actor',
    caseId: 'caseId'
  };

  export type CaseEventScalarFieldEnum = (typeof CaseEventScalarFieldEnum)[keyof typeof CaseEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'CaseStatus'
   */
  export type EnumCaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseStatus'>
    


  /**
   * Reference to a field of type 'ProcedureStage'
   */
  export type EnumProcedureStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcedureStage'>
    


  /**
   * Reference to a field of type 'UrgencyLevel'
   */
  export type EnumUrgencyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UrgencyLevel'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DocumentType'
   */
  export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MediationStatus'
   */
  export type EnumMediationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediationStatus'>
    


  /**
   * Reference to a field of type 'MeetingStatus'
   */
  export type EnumMeetingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeetingStatus'>
    


  /**
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    situation?: StringNullableFilter<"User"> | string | null
    type?: StringNullableFilter<"User"> | string | null
    properties?: IntNullableFilter<"User"> | number | null
    office?: StringNullableFilter<"User"> | string | null
    organization?: StringNullableFilter<"User"> | string | null
    service?: StringNullableFilter<"User"> | string | null
    function?: StringNullableFilter<"User"> | string | null
    casesAsLandlord?: CaseListRelationFilter
    casesAsTenant?: CaseListRelationFilter
    casesAsOfficer?: CaseListRelationFilter
    casesAsMediator?: CaseListRelationFilter
    casesAsSocialWorker?: CaseListRelationFilter
    notifications?: NotificationListRelationFilter
    mediationRequests?: MediationRequestListRelationFilter
    mediationHandled?: MediationRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    situation?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    properties?: SortOrderInput | SortOrder
    office?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    service?: SortOrderInput | SortOrder
    function?: SortOrderInput | SortOrder
    casesAsLandlord?: CaseOrderByRelationAggregateInput
    casesAsTenant?: CaseOrderByRelationAggregateInput
    casesAsOfficer?: CaseOrderByRelationAggregateInput
    casesAsMediator?: CaseOrderByRelationAggregateInput
    casesAsSocialWorker?: CaseOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    mediationRequests?: MediationRequestOrderByRelationAggregateInput
    mediationHandled?: MediationRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    situation?: StringNullableFilter<"User"> | string | null
    type?: StringNullableFilter<"User"> | string | null
    properties?: IntNullableFilter<"User"> | number | null
    office?: StringNullableFilter<"User"> | string | null
    organization?: StringNullableFilter<"User"> | string | null
    service?: StringNullableFilter<"User"> | string | null
    function?: StringNullableFilter<"User"> | string | null
    casesAsLandlord?: CaseListRelationFilter
    casesAsTenant?: CaseListRelationFilter
    casesAsOfficer?: CaseListRelationFilter
    casesAsMediator?: CaseListRelationFilter
    casesAsSocialWorker?: CaseListRelationFilter
    notifications?: NotificationListRelationFilter
    mediationRequests?: MediationRequestListRelationFilter
    mediationHandled?: MediationRequestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    situation?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    properties?: SortOrderInput | SortOrder
    office?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    service?: SortOrderInput | SortOrder
    function?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    situation?: StringNullableWithAggregatesFilter<"User"> | string | null
    type?: StringNullableWithAggregatesFilter<"User"> | string | null
    properties?: IntNullableWithAggregatesFilter<"User"> | number | null
    office?: StringNullableWithAggregatesFilter<"User"> | string | null
    organization?: StringNullableWithAggregatesFilter<"User"> | string | null
    service?: StringNullableWithAggregatesFilter<"User"> | string | null
    function?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CaseWhereInput = {
    AND?: CaseWhereInput | CaseWhereInput[]
    OR?: CaseWhereInput[]
    NOT?: CaseWhereInput | CaseWhereInput[]
    id?: StringFilter<"Case"> | string
    reference?: StringFilter<"Case"> | string
    createdAt?: DateTimeFilter<"Case"> | Date | string
    updatedAt?: DateTimeFilter<"Case"> | Date | string
    status?: EnumCaseStatusFilter<"Case"> | $Enums.CaseStatus
    stage?: EnumProcedureStageFilter<"Case"> | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFilter<"Case"> | $Enums.UrgencyLevel
    debtAmount?: FloatFilter<"Case"> | number
    description?: StringNullableFilter<"Case"> | string | null
    landlordId?: StringFilter<"Case"> | string
    tenantId?: StringFilter<"Case"> | string
    officerId?: StringNullableFilter<"Case"> | string | null
    mediatorId?: StringNullableFilter<"Case"> | string | null
    socialWorkerId?: StringNullableFilter<"Case"> | string | null
    housingType?: StringNullableFilter<"Case"> | string | null
    housingArea?: FloatNullableFilter<"Case"> | number | null
    rent?: FloatNullableFilter<"Case"> | number | null
    charges?: FloatNullableFilter<"Case"> | number | null
    deposit?: FloatNullableFilter<"Case"> | number | null
    leaseStartDate?: DateTimeNullableFilter<"Case"> | Date | string | null
    leaseType?: StringNullableFilter<"Case"> | string | null
    leaseDuration?: IntNullableFilter<"Case"> | number | null
    address?: StringNullableFilter<"Case"> | string | null
    landlord?: XOR<UserScalarRelationFilter, UserWhereInput>
    tenant?: XOR<UserScalarRelationFilter, UserWhereInput>
    officer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    mediator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    socialWorker?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    documents?: DocumentListRelationFilter
    notifications?: NotificationListRelationFilter
    mediationRequests?: MediationRequestListRelationFilter
    events?: CaseEventListRelationFilter
  }

  export type CaseOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    stage?: SortOrder
    urgency?: SortOrder
    debtAmount?: SortOrder
    description?: SortOrderInput | SortOrder
    landlordId?: SortOrder
    tenantId?: SortOrder
    officerId?: SortOrderInput | SortOrder
    mediatorId?: SortOrderInput | SortOrder
    socialWorkerId?: SortOrderInput | SortOrder
    housingType?: SortOrderInput | SortOrder
    housingArea?: SortOrderInput | SortOrder
    rent?: SortOrderInput | SortOrder
    charges?: SortOrderInput | SortOrder
    deposit?: SortOrderInput | SortOrder
    leaseStartDate?: SortOrderInput | SortOrder
    leaseType?: SortOrderInput | SortOrder
    leaseDuration?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    landlord?: UserOrderByWithRelationInput
    tenant?: UserOrderByWithRelationInput
    officer?: UserOrderByWithRelationInput
    mediator?: UserOrderByWithRelationInput
    socialWorker?: UserOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    mediationRequests?: MediationRequestOrderByRelationAggregateInput
    events?: CaseEventOrderByRelationAggregateInput
  }

  export type CaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: CaseWhereInput | CaseWhereInput[]
    OR?: CaseWhereInput[]
    NOT?: CaseWhereInput | CaseWhereInput[]
    createdAt?: DateTimeFilter<"Case"> | Date | string
    updatedAt?: DateTimeFilter<"Case"> | Date | string
    status?: EnumCaseStatusFilter<"Case"> | $Enums.CaseStatus
    stage?: EnumProcedureStageFilter<"Case"> | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFilter<"Case"> | $Enums.UrgencyLevel
    debtAmount?: FloatFilter<"Case"> | number
    description?: StringNullableFilter<"Case"> | string | null
    landlordId?: StringFilter<"Case"> | string
    tenantId?: StringFilter<"Case"> | string
    officerId?: StringNullableFilter<"Case"> | string | null
    mediatorId?: StringNullableFilter<"Case"> | string | null
    socialWorkerId?: StringNullableFilter<"Case"> | string | null
    housingType?: StringNullableFilter<"Case"> | string | null
    housingArea?: FloatNullableFilter<"Case"> | number | null
    rent?: FloatNullableFilter<"Case"> | number | null
    charges?: FloatNullableFilter<"Case"> | number | null
    deposit?: FloatNullableFilter<"Case"> | number | null
    leaseStartDate?: DateTimeNullableFilter<"Case"> | Date | string | null
    leaseType?: StringNullableFilter<"Case"> | string | null
    leaseDuration?: IntNullableFilter<"Case"> | number | null
    address?: StringNullableFilter<"Case"> | string | null
    landlord?: XOR<UserScalarRelationFilter, UserWhereInput>
    tenant?: XOR<UserScalarRelationFilter, UserWhereInput>
    officer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    mediator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    socialWorker?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    documents?: DocumentListRelationFilter
    notifications?: NotificationListRelationFilter
    mediationRequests?: MediationRequestListRelationFilter
    events?: CaseEventListRelationFilter
  }, "id" | "reference">

  export type CaseOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    stage?: SortOrder
    urgency?: SortOrder
    debtAmount?: SortOrder
    description?: SortOrderInput | SortOrder
    landlordId?: SortOrder
    tenantId?: SortOrder
    officerId?: SortOrderInput | SortOrder
    mediatorId?: SortOrderInput | SortOrder
    socialWorkerId?: SortOrderInput | SortOrder
    housingType?: SortOrderInput | SortOrder
    housingArea?: SortOrderInput | SortOrder
    rent?: SortOrderInput | SortOrder
    charges?: SortOrderInput | SortOrder
    deposit?: SortOrderInput | SortOrder
    leaseStartDate?: SortOrderInput | SortOrder
    leaseType?: SortOrderInput | SortOrder
    leaseDuration?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    _count?: CaseCountOrderByAggregateInput
    _avg?: CaseAvgOrderByAggregateInput
    _max?: CaseMaxOrderByAggregateInput
    _min?: CaseMinOrderByAggregateInput
    _sum?: CaseSumOrderByAggregateInput
  }

  export type CaseScalarWhereWithAggregatesInput = {
    AND?: CaseScalarWhereWithAggregatesInput | CaseScalarWhereWithAggregatesInput[]
    OR?: CaseScalarWhereWithAggregatesInput[]
    NOT?: CaseScalarWhereWithAggregatesInput | CaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Case"> | string
    reference?: StringWithAggregatesFilter<"Case"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Case"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Case"> | Date | string
    status?: EnumCaseStatusWithAggregatesFilter<"Case"> | $Enums.CaseStatus
    stage?: EnumProcedureStageWithAggregatesFilter<"Case"> | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelWithAggregatesFilter<"Case"> | $Enums.UrgencyLevel
    debtAmount?: FloatWithAggregatesFilter<"Case"> | number
    description?: StringNullableWithAggregatesFilter<"Case"> | string | null
    landlordId?: StringWithAggregatesFilter<"Case"> | string
    tenantId?: StringWithAggregatesFilter<"Case"> | string
    officerId?: StringNullableWithAggregatesFilter<"Case"> | string | null
    mediatorId?: StringNullableWithAggregatesFilter<"Case"> | string | null
    socialWorkerId?: StringNullableWithAggregatesFilter<"Case"> | string | null
    housingType?: StringNullableWithAggregatesFilter<"Case"> | string | null
    housingArea?: FloatNullableWithAggregatesFilter<"Case"> | number | null
    rent?: FloatNullableWithAggregatesFilter<"Case"> | number | null
    charges?: FloatNullableWithAggregatesFilter<"Case"> | number | null
    deposit?: FloatNullableWithAggregatesFilter<"Case"> | number | null
    leaseStartDate?: DateTimeNullableWithAggregatesFilter<"Case"> | Date | string | null
    leaseType?: StringNullableWithAggregatesFilter<"Case"> | string | null
    leaseDuration?: IntNullableWithAggregatesFilter<"Case"> | number | null
    address?: StringNullableWithAggregatesFilter<"Case"> | string | null
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    title?: StringFilter<"Document"> | string
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    filePath?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    caseId?: StringFilter<"Document"> | string
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    uploadedAt?: SortOrder
    caseId?: SortOrder
    case?: CaseOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    title?: StringFilter<"Document"> | string
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    filePath?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    caseId?: StringFilter<"Document"> | string
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    uploadedAt?: SortOrder
    caseId?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    title?: StringWithAggregatesFilter<"Document"> | string
    type?: EnumDocumentTypeWithAggregatesFilter<"Document"> | $Enums.DocumentType
    filePath?: StringWithAggregatesFilter<"Document"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    caseId?: StringWithAggregatesFilter<"Document"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    content?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    read?: BoolFilter<"Notification"> | boolean
    userId?: StringFilter<"Notification"> | string
    caseId?: StringNullableFilter<"Notification"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    case?: XOR<CaseNullableScalarRelationFilter, CaseWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    caseId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    case?: CaseOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    title?: StringFilter<"Notification"> | string
    content?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    read?: BoolFilter<"Notification"> | boolean
    userId?: StringFilter<"Notification"> | string
    caseId?: StringNullableFilter<"Notification"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    case?: XOR<CaseNullableScalarRelationFilter, CaseWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    caseId?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    content?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    userId?: StringWithAggregatesFilter<"Notification"> | string
    caseId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
  }

  export type MediationRequestWhereInput = {
    AND?: MediationRequestWhereInput | MediationRequestWhereInput[]
    OR?: MediationRequestWhereInput[]
    NOT?: MediationRequestWhereInput | MediationRequestWhereInput[]
    id?: StringFilter<"MediationRequest"> | string
    createdAt?: DateTimeFilter<"MediationRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MediationRequest"> | Date | string
    status?: EnumMediationStatusFilter<"MediationRequest"> | $Enums.MediationStatus
    reason?: StringFilter<"MediationRequest"> | string
    proposal?: StringNullableFilter<"MediationRequest"> | string | null
    requesterId?: StringFilter<"MediationRequest"> | string
    mediatorId?: StringNullableFilter<"MediationRequest"> | string | null
    caseId?: StringFilter<"MediationRequest"> | string
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    mediator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
    meetings?: MediationMeetingListRelationFilter
  }

  export type MediationRequestOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    proposal?: SortOrderInput | SortOrder
    requesterId?: SortOrder
    mediatorId?: SortOrderInput | SortOrder
    caseId?: SortOrder
    requester?: UserOrderByWithRelationInput
    mediator?: UserOrderByWithRelationInput
    case?: CaseOrderByWithRelationInput
    meetings?: MediationMeetingOrderByRelationAggregateInput
  }

  export type MediationRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediationRequestWhereInput | MediationRequestWhereInput[]
    OR?: MediationRequestWhereInput[]
    NOT?: MediationRequestWhereInput | MediationRequestWhereInput[]
    createdAt?: DateTimeFilter<"MediationRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MediationRequest"> | Date | string
    status?: EnumMediationStatusFilter<"MediationRequest"> | $Enums.MediationStatus
    reason?: StringFilter<"MediationRequest"> | string
    proposal?: StringNullableFilter<"MediationRequest"> | string | null
    requesterId?: StringFilter<"MediationRequest"> | string
    mediatorId?: StringNullableFilter<"MediationRequest"> | string | null
    caseId?: StringFilter<"MediationRequest"> | string
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    mediator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
    meetings?: MediationMeetingListRelationFilter
  }, "id">

  export type MediationRequestOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    proposal?: SortOrderInput | SortOrder
    requesterId?: SortOrder
    mediatorId?: SortOrderInput | SortOrder
    caseId?: SortOrder
    _count?: MediationRequestCountOrderByAggregateInput
    _max?: MediationRequestMaxOrderByAggregateInput
    _min?: MediationRequestMinOrderByAggregateInput
  }

  export type MediationRequestScalarWhereWithAggregatesInput = {
    AND?: MediationRequestScalarWhereWithAggregatesInput | MediationRequestScalarWhereWithAggregatesInput[]
    OR?: MediationRequestScalarWhereWithAggregatesInput[]
    NOT?: MediationRequestScalarWhereWithAggregatesInput | MediationRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MediationRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MediationRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MediationRequest"> | Date | string
    status?: EnumMediationStatusWithAggregatesFilter<"MediationRequest"> | $Enums.MediationStatus
    reason?: StringWithAggregatesFilter<"MediationRequest"> | string
    proposal?: StringNullableWithAggregatesFilter<"MediationRequest"> | string | null
    requesterId?: StringWithAggregatesFilter<"MediationRequest"> | string
    mediatorId?: StringNullableWithAggregatesFilter<"MediationRequest"> | string | null
    caseId?: StringWithAggregatesFilter<"MediationRequest"> | string
  }

  export type MediationMeetingWhereInput = {
    AND?: MediationMeetingWhereInput | MediationMeetingWhereInput[]
    OR?: MediationMeetingWhereInput[]
    NOT?: MediationMeetingWhereInput | MediationMeetingWhereInput[]
    id?: StringFilter<"MediationMeeting"> | string
    date?: DateTimeFilter<"MediationMeeting"> | Date | string
    location?: StringNullableFilter<"MediationMeeting"> | string | null
    videoLink?: StringNullableFilter<"MediationMeeting"> | string | null
    status?: EnumMeetingStatusFilter<"MediationMeeting"> | $Enums.MeetingStatus
    notes?: StringNullableFilter<"MediationMeeting"> | string | null
    mediationId?: StringFilter<"MediationMeeting"> | string
    mediation?: XOR<MediationRequestScalarRelationFilter, MediationRequestWhereInput>
  }

  export type MediationMeetingOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    location?: SortOrderInput | SortOrder
    videoLink?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    mediationId?: SortOrder
    mediation?: MediationRequestOrderByWithRelationInput
  }

  export type MediationMeetingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediationMeetingWhereInput | MediationMeetingWhereInput[]
    OR?: MediationMeetingWhereInput[]
    NOT?: MediationMeetingWhereInput | MediationMeetingWhereInput[]
    date?: DateTimeFilter<"MediationMeeting"> | Date | string
    location?: StringNullableFilter<"MediationMeeting"> | string | null
    videoLink?: StringNullableFilter<"MediationMeeting"> | string | null
    status?: EnumMeetingStatusFilter<"MediationMeeting"> | $Enums.MeetingStatus
    notes?: StringNullableFilter<"MediationMeeting"> | string | null
    mediationId?: StringFilter<"MediationMeeting"> | string
    mediation?: XOR<MediationRequestScalarRelationFilter, MediationRequestWhereInput>
  }, "id">

  export type MediationMeetingOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    location?: SortOrderInput | SortOrder
    videoLink?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    mediationId?: SortOrder
    _count?: MediationMeetingCountOrderByAggregateInput
    _max?: MediationMeetingMaxOrderByAggregateInput
    _min?: MediationMeetingMinOrderByAggregateInput
  }

  export type MediationMeetingScalarWhereWithAggregatesInput = {
    AND?: MediationMeetingScalarWhereWithAggregatesInput | MediationMeetingScalarWhereWithAggregatesInput[]
    OR?: MediationMeetingScalarWhereWithAggregatesInput[]
    NOT?: MediationMeetingScalarWhereWithAggregatesInput | MediationMeetingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MediationMeeting"> | string
    date?: DateTimeWithAggregatesFilter<"MediationMeeting"> | Date | string
    location?: StringNullableWithAggregatesFilter<"MediationMeeting"> | string | null
    videoLink?: StringNullableWithAggregatesFilter<"MediationMeeting"> | string | null
    status?: EnumMeetingStatusWithAggregatesFilter<"MediationMeeting"> | $Enums.MeetingStatus
    notes?: StringNullableWithAggregatesFilter<"MediationMeeting"> | string | null
    mediationId?: StringWithAggregatesFilter<"MediationMeeting"> | string
  }

  export type CaseEventWhereInput = {
    AND?: CaseEventWhereInput | CaseEventWhereInput[]
    OR?: CaseEventWhereInput[]
    NOT?: CaseEventWhereInput | CaseEventWhereInput[]
    id?: StringFilter<"CaseEvent"> | string
    date?: DateTimeFilter<"CaseEvent"> | Date | string
    type?: EnumEventTypeFilter<"CaseEvent"> | $Enums.EventType
    description?: StringFilter<"CaseEvent"> | string
    actor?: StringFilter<"CaseEvent"> | string
    caseId?: StringFilter<"CaseEvent"> | string
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }

  export type CaseEventOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    description?: SortOrder
    actor?: SortOrder
    caseId?: SortOrder
    case?: CaseOrderByWithRelationInput
  }

  export type CaseEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CaseEventWhereInput | CaseEventWhereInput[]
    OR?: CaseEventWhereInput[]
    NOT?: CaseEventWhereInput | CaseEventWhereInput[]
    date?: DateTimeFilter<"CaseEvent"> | Date | string
    type?: EnumEventTypeFilter<"CaseEvent"> | $Enums.EventType
    description?: StringFilter<"CaseEvent"> | string
    actor?: StringFilter<"CaseEvent"> | string
    caseId?: StringFilter<"CaseEvent"> | string
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }, "id">

  export type CaseEventOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    description?: SortOrder
    actor?: SortOrder
    caseId?: SortOrder
    _count?: CaseEventCountOrderByAggregateInput
    _max?: CaseEventMaxOrderByAggregateInput
    _min?: CaseEventMinOrderByAggregateInput
  }

  export type CaseEventScalarWhereWithAggregatesInput = {
    AND?: CaseEventScalarWhereWithAggregatesInput | CaseEventScalarWhereWithAggregatesInput[]
    OR?: CaseEventScalarWhereWithAggregatesInput[]
    NOT?: CaseEventScalarWhereWithAggregatesInput | CaseEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CaseEvent"> | string
    date?: DateTimeWithAggregatesFilter<"CaseEvent"> | Date | string
    type?: EnumEventTypeWithAggregatesFilter<"CaseEvent"> | $Enums.EventType
    description?: StringWithAggregatesFilter<"CaseEvent"> | string
    actor?: StringWithAggregatesFilter<"CaseEvent"> | string
    caseId?: StringWithAggregatesFilter<"CaseEvent"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsLandlord?: CaseCreateNestedManyWithoutLandlordInput
    casesAsTenant?: CaseCreateNestedManyWithoutTenantInput
    casesAsOfficer?: CaseCreateNestedManyWithoutOfficerInput
    casesAsMediator?: CaseCreateNestedManyWithoutMediatorInput
    casesAsSocialWorker?: CaseCreateNestedManyWithoutSocialWorkerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    mediationRequests?: MediationRequestCreateNestedManyWithoutRequesterInput
    mediationHandled?: MediationRequestCreateNestedManyWithoutMediatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsLandlord?: CaseUncheckedCreateNestedManyWithoutLandlordInput
    casesAsTenant?: CaseUncheckedCreateNestedManyWithoutTenantInput
    casesAsOfficer?: CaseUncheckedCreateNestedManyWithoutOfficerInput
    casesAsMediator?: CaseUncheckedCreateNestedManyWithoutMediatorInput
    casesAsSocialWorker?: CaseUncheckedCreateNestedManyWithoutSocialWorkerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    mediationRequests?: MediationRequestUncheckedCreateNestedManyWithoutRequesterInput
    mediationHandled?: MediationRequestUncheckedCreateNestedManyWithoutMediatorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsLandlord?: CaseUpdateManyWithoutLandlordNestedInput
    casesAsTenant?: CaseUpdateManyWithoutTenantNestedInput
    casesAsOfficer?: CaseUpdateManyWithoutOfficerNestedInput
    casesAsMediator?: CaseUpdateManyWithoutMediatorNestedInput
    casesAsSocialWorker?: CaseUpdateManyWithoutSocialWorkerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    mediationRequests?: MediationRequestUpdateManyWithoutRequesterNestedInput
    mediationHandled?: MediationRequestUpdateManyWithoutMediatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsLandlord?: CaseUncheckedUpdateManyWithoutLandlordNestedInput
    casesAsTenant?: CaseUncheckedUpdateManyWithoutTenantNestedInput
    casesAsOfficer?: CaseUncheckedUpdateManyWithoutOfficerNestedInput
    casesAsMediator?: CaseUncheckedUpdateManyWithoutMediatorNestedInput
    casesAsSocialWorker?: CaseUncheckedUpdateManyWithoutSocialWorkerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    mediationRequests?: MediationRequestUncheckedUpdateManyWithoutRequesterNestedInput
    mediationHandled?: MediationRequestUncheckedUpdateManyWithoutMediatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaseCreateInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    landlord: UserCreateNestedOneWithoutCasesAsLandlordInput
    tenant: UserCreateNestedOneWithoutCasesAsTenantInput
    officer?: UserCreateNestedOneWithoutCasesAsOfficerInput
    mediator?: UserCreateNestedOneWithoutCasesAsMediatorInput
    socialWorker?: UserCreateNestedOneWithoutCasesAsSocialWorkerInput
    documents?: DocumentCreateNestedManyWithoutCaseInput
    notifications?: NotificationCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestCreateNestedManyWithoutCaseInput
    events?: CaseEventCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    landlordId: string
    tenantId: string
    officerId?: string | null
    mediatorId?: string | null
    socialWorkerId?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutCaseInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestUncheckedCreateNestedManyWithoutCaseInput
    events?: CaseEventUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlord?: UserUpdateOneRequiredWithoutCasesAsLandlordNestedInput
    tenant?: UserUpdateOneRequiredWithoutCasesAsTenantNestedInput
    officer?: UserUpdateOneWithoutCasesAsOfficerNestedInput
    mediator?: UserUpdateOneWithoutCasesAsMediatorNestedInput
    socialWorker?: UserUpdateOneWithoutCasesAsSocialWorkerNestedInput
    documents?: DocumentUpdateManyWithoutCaseNestedInput
    notifications?: NotificationUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUpdateManyWithoutCaseNestedInput
    events?: CaseEventUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    landlordId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    socialWorkerId?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUncheckedUpdateManyWithoutCaseNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUncheckedUpdateManyWithoutCaseNestedInput
    events?: CaseEventUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseCreateManyInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    landlordId: string
    tenantId: string
    officerId?: string | null
    mediatorId?: string | null
    socialWorkerId?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
  }

  export type CaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    landlordId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    socialWorkerId?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentCreateInput = {
    id?: string
    title: string
    type: $Enums.DocumentType
    filePath: string
    uploadedAt?: Date | string
    case: CaseCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    title: string
    type: $Enums.DocumentType
    filePath: string
    uploadedAt?: Date | string
    caseId: string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    filePath?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    case?: CaseUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    filePath?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    title: string
    type: $Enums.DocumentType
    filePath: string
    uploadedAt?: Date | string
    caseId: string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    filePath?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    filePath?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    read?: boolean
    user: UserCreateNestedOneWithoutNotificationsInput
    case?: CaseCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    read?: boolean
    userId: string
    caseId?: string | null
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    case?: CaseUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    caseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateManyInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    read?: boolean
    userId: string
    caseId?: string | null
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    caseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediationRequestCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.MediationStatus
    reason: string
    proposal?: string | null
    requester: UserCreateNestedOneWithoutMediationRequestsInput
    mediator?: UserCreateNestedOneWithoutMediationHandledInput
    case: CaseCreateNestedOneWithoutMediationRequestsInput
    meetings?: MediationMeetingCreateNestedManyWithoutMediationInput
  }

  export type MediationRequestUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.MediationStatus
    reason: string
    proposal?: string | null
    requesterId: string
    mediatorId?: string | null
    caseId: string
    meetings?: MediationMeetingUncheckedCreateNestedManyWithoutMediationInput
  }

  export type MediationRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMediationStatusFieldUpdateOperationsInput | $Enums.MediationStatus
    reason?: StringFieldUpdateOperationsInput | string
    proposal?: NullableStringFieldUpdateOperationsInput | string | null
    requester?: UserUpdateOneRequiredWithoutMediationRequestsNestedInput
    mediator?: UserUpdateOneWithoutMediationHandledNestedInput
    case?: CaseUpdateOneRequiredWithoutMediationRequestsNestedInput
    meetings?: MediationMeetingUpdateManyWithoutMediationNestedInput
  }

  export type MediationRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMediationStatusFieldUpdateOperationsInput | $Enums.MediationStatus
    reason?: StringFieldUpdateOperationsInput | string
    proposal?: NullableStringFieldUpdateOperationsInput | string | null
    requesterId?: StringFieldUpdateOperationsInput | string
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    caseId?: StringFieldUpdateOperationsInput | string
    meetings?: MediationMeetingUncheckedUpdateManyWithoutMediationNestedInput
  }

  export type MediationRequestCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.MediationStatus
    reason: string
    proposal?: string | null
    requesterId: string
    mediatorId?: string | null
    caseId: string
  }

  export type MediationRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMediationStatusFieldUpdateOperationsInput | $Enums.MediationStatus
    reason?: StringFieldUpdateOperationsInput | string
    proposal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediationRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMediationStatusFieldUpdateOperationsInput | $Enums.MediationStatus
    reason?: StringFieldUpdateOperationsInput | string
    proposal?: NullableStringFieldUpdateOperationsInput | string | null
    requesterId?: StringFieldUpdateOperationsInput | string
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    caseId?: StringFieldUpdateOperationsInput | string
  }

  export type MediationMeetingCreateInput = {
    id?: string
    date: Date | string
    location?: string | null
    videoLink?: string | null
    status: $Enums.MeetingStatus
    notes?: string | null
    mediation: MediationRequestCreateNestedOneWithoutMeetingsInput
  }

  export type MediationMeetingUncheckedCreateInput = {
    id?: string
    date: Date | string
    location?: string | null
    videoLink?: string | null
    status: $Enums.MeetingStatus
    notes?: string | null
    mediationId: string
  }

  export type MediationMeetingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mediation?: MediationRequestUpdateOneRequiredWithoutMeetingsNestedInput
  }

  export type MediationMeetingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mediationId?: StringFieldUpdateOperationsInput | string
  }

  export type MediationMeetingCreateManyInput = {
    id?: string
    date: Date | string
    location?: string | null
    videoLink?: string | null
    status: $Enums.MeetingStatus
    notes?: string | null
    mediationId: string
  }

  export type MediationMeetingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediationMeetingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mediationId?: StringFieldUpdateOperationsInput | string
  }

  export type CaseEventCreateInput = {
    id?: string
    date: Date | string
    type: $Enums.EventType
    description: string
    actor: string
    case: CaseCreateNestedOneWithoutEventsInput
  }

  export type CaseEventUncheckedCreateInput = {
    id?: string
    date: Date | string
    type: $Enums.EventType
    description: string
    actor: string
    caseId: string
  }

  export type CaseEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    description?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    case?: CaseUpdateOneRequiredWithoutEventsNestedInput
  }

  export type CaseEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    description?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
  }

  export type CaseEventCreateManyInput = {
    id?: string
    date: Date | string
    type: $Enums.EventType
    description: string
    actor: string
    caseId: string
  }

  export type CaseEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    description?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
  }

  export type CaseEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    description?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CaseListRelationFilter = {
    every?: CaseWhereInput
    some?: CaseWhereInput
    none?: CaseWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type MediationRequestListRelationFilter = {
    every?: MediationRequestWhereInput
    some?: MediationRequestWhereInput
    none?: MediationRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediationRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    situation?: SortOrder
    type?: SortOrder
    properties?: SortOrder
    office?: SortOrder
    organization?: SortOrder
    service?: SortOrder
    function?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    properties?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    situation?: SortOrder
    type?: SortOrder
    properties?: SortOrder
    office?: SortOrder
    organization?: SortOrder
    service?: SortOrder
    function?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    situation?: SortOrder
    type?: SortOrder
    properties?: SortOrder
    office?: SortOrder
    organization?: SortOrder
    service?: SortOrder
    function?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    properties?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumCaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[]
    notIn?: $Enums.CaseStatus[]
    not?: NestedEnumCaseStatusFilter<$PrismaModel> | $Enums.CaseStatus
  }

  export type EnumProcedureStageFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcedureStage | EnumProcedureStageFieldRefInput<$PrismaModel>
    in?: $Enums.ProcedureStage[]
    notIn?: $Enums.ProcedureStage[]
    not?: NestedEnumProcedureStageFilter<$PrismaModel> | $Enums.ProcedureStage
  }

  export type EnumUrgencyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.UrgencyLevel | EnumUrgencyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UrgencyLevel[]
    notIn?: $Enums.UrgencyLevel[]
    not?: NestedEnumUrgencyLevelFilter<$PrismaModel> | $Enums.UrgencyLevel
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type CaseEventListRelationFilter = {
    every?: CaseEventWhereInput
    some?: CaseEventWhereInput
    none?: CaseEventWhereInput
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaseEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaseCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    stage?: SortOrder
    urgency?: SortOrder
    debtAmount?: SortOrder
    description?: SortOrder
    landlordId?: SortOrder
    tenantId?: SortOrder
    officerId?: SortOrder
    mediatorId?: SortOrder
    socialWorkerId?: SortOrder
    housingType?: SortOrder
    housingArea?: SortOrder
    rent?: SortOrder
    charges?: SortOrder
    deposit?: SortOrder
    leaseStartDate?: SortOrder
    leaseType?: SortOrder
    leaseDuration?: SortOrder
    address?: SortOrder
  }

  export type CaseAvgOrderByAggregateInput = {
    debtAmount?: SortOrder
    housingArea?: SortOrder
    rent?: SortOrder
    charges?: SortOrder
    deposit?: SortOrder
    leaseDuration?: SortOrder
  }

  export type CaseMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    stage?: SortOrder
    urgency?: SortOrder
    debtAmount?: SortOrder
    description?: SortOrder
    landlordId?: SortOrder
    tenantId?: SortOrder
    officerId?: SortOrder
    mediatorId?: SortOrder
    socialWorkerId?: SortOrder
    housingType?: SortOrder
    housingArea?: SortOrder
    rent?: SortOrder
    charges?: SortOrder
    deposit?: SortOrder
    leaseStartDate?: SortOrder
    leaseType?: SortOrder
    leaseDuration?: SortOrder
    address?: SortOrder
  }

  export type CaseMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    stage?: SortOrder
    urgency?: SortOrder
    debtAmount?: SortOrder
    description?: SortOrder
    landlordId?: SortOrder
    tenantId?: SortOrder
    officerId?: SortOrder
    mediatorId?: SortOrder
    socialWorkerId?: SortOrder
    housingType?: SortOrder
    housingArea?: SortOrder
    rent?: SortOrder
    charges?: SortOrder
    deposit?: SortOrder
    leaseStartDate?: SortOrder
    leaseType?: SortOrder
    leaseDuration?: SortOrder
    address?: SortOrder
  }

  export type CaseSumOrderByAggregateInput = {
    debtAmount?: SortOrder
    housingArea?: SortOrder
    rent?: SortOrder
    charges?: SortOrder
    deposit?: SortOrder
    leaseDuration?: SortOrder
  }

  export type EnumCaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[]
    notIn?: $Enums.CaseStatus[]
    not?: NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaseStatusFilter<$PrismaModel>
    _max?: NestedEnumCaseStatusFilter<$PrismaModel>
  }

  export type EnumProcedureStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcedureStage | EnumProcedureStageFieldRefInput<$PrismaModel>
    in?: $Enums.ProcedureStage[]
    notIn?: $Enums.ProcedureStage[]
    not?: NestedEnumProcedureStageWithAggregatesFilter<$PrismaModel> | $Enums.ProcedureStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcedureStageFilter<$PrismaModel>
    _max?: NestedEnumProcedureStageFilter<$PrismaModel>
  }

  export type EnumUrgencyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UrgencyLevel | EnumUrgencyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UrgencyLevel[]
    notIn?: $Enums.UrgencyLevel[]
    not?: NestedEnumUrgencyLevelWithAggregatesFilter<$PrismaModel> | $Enums.UrgencyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgencyLevelFilter<$PrismaModel>
    _max?: NestedEnumUrgencyLevelFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[]
    notIn?: $Enums.DocumentType[]
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type CaseScalarRelationFilter = {
    is?: CaseWhereInput
    isNot?: CaseWhereInput
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    uploadedAt?: SortOrder
    caseId?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    uploadedAt?: SortOrder
    caseId?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    uploadedAt?: SortOrder
    caseId?: SortOrder
  }

  export type EnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[]
    notIn?: $Enums.DocumentType[]
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CaseNullableScalarRelationFilter = {
    is?: CaseWhereInput | null
    isNot?: CaseWhereInput | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    caseId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    caseId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    caseId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumMediationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MediationStatus | EnumMediationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MediationStatus[]
    notIn?: $Enums.MediationStatus[]
    not?: NestedEnumMediationStatusFilter<$PrismaModel> | $Enums.MediationStatus
  }

  export type MediationMeetingListRelationFilter = {
    every?: MediationMeetingWhereInput
    some?: MediationMeetingWhereInput
    none?: MediationMeetingWhereInput
  }

  export type MediationMeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediationRequestCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    proposal?: SortOrder
    requesterId?: SortOrder
    mediatorId?: SortOrder
    caseId?: SortOrder
  }

  export type MediationRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    proposal?: SortOrder
    requesterId?: SortOrder
    mediatorId?: SortOrder
    caseId?: SortOrder
  }

  export type MediationRequestMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    proposal?: SortOrder
    requesterId?: SortOrder
    mediatorId?: SortOrder
    caseId?: SortOrder
  }

  export type EnumMediationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediationStatus | EnumMediationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MediationStatus[]
    notIn?: $Enums.MediationStatus[]
    not?: NestedEnumMediationStatusWithAggregatesFilter<$PrismaModel> | $Enums.MediationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediationStatusFilter<$PrismaModel>
    _max?: NestedEnumMediationStatusFilter<$PrismaModel>
  }

  export type EnumMeetingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingStatus | EnumMeetingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingStatus[]
    notIn?: $Enums.MeetingStatus[]
    not?: NestedEnumMeetingStatusFilter<$PrismaModel> | $Enums.MeetingStatus
  }

  export type MediationRequestScalarRelationFilter = {
    is?: MediationRequestWhereInput
    isNot?: MediationRequestWhereInput
  }

  export type MediationMeetingCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    location?: SortOrder
    videoLink?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    mediationId?: SortOrder
  }

  export type MediationMeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    location?: SortOrder
    videoLink?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    mediationId?: SortOrder
  }

  export type MediationMeetingMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    location?: SortOrder
    videoLink?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    mediationId?: SortOrder
  }

  export type EnumMeetingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingStatus | EnumMeetingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingStatus[]
    notIn?: $Enums.MeetingStatus[]
    not?: NestedEnumMeetingStatusWithAggregatesFilter<$PrismaModel> | $Enums.MeetingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeetingStatusFilter<$PrismaModel>
    _max?: NestedEnumMeetingStatusFilter<$PrismaModel>
  }

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[]
    notIn?: $Enums.EventType[]
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type CaseEventCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    description?: SortOrder
    actor?: SortOrder
    caseId?: SortOrder
  }

  export type CaseEventMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    description?: SortOrder
    actor?: SortOrder
    caseId?: SortOrder
  }

  export type CaseEventMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    description?: SortOrder
    actor?: SortOrder
    caseId?: SortOrder
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[]
    notIn?: $Enums.EventType[]
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type CaseCreateNestedManyWithoutLandlordInput = {
    create?: XOR<CaseCreateWithoutLandlordInput, CaseUncheckedCreateWithoutLandlordInput> | CaseCreateWithoutLandlordInput[] | CaseUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutLandlordInput | CaseCreateOrConnectWithoutLandlordInput[]
    createMany?: CaseCreateManyLandlordInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type CaseCreateNestedManyWithoutTenantInput = {
    create?: XOR<CaseCreateWithoutTenantInput, CaseUncheckedCreateWithoutTenantInput> | CaseCreateWithoutTenantInput[] | CaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutTenantInput | CaseCreateOrConnectWithoutTenantInput[]
    createMany?: CaseCreateManyTenantInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type CaseCreateNestedManyWithoutOfficerInput = {
    create?: XOR<CaseCreateWithoutOfficerInput, CaseUncheckedCreateWithoutOfficerInput> | CaseCreateWithoutOfficerInput[] | CaseUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutOfficerInput | CaseCreateOrConnectWithoutOfficerInput[]
    createMany?: CaseCreateManyOfficerInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type CaseCreateNestedManyWithoutMediatorInput = {
    create?: XOR<CaseCreateWithoutMediatorInput, CaseUncheckedCreateWithoutMediatorInput> | CaseCreateWithoutMediatorInput[] | CaseUncheckedCreateWithoutMediatorInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutMediatorInput | CaseCreateOrConnectWithoutMediatorInput[]
    createMany?: CaseCreateManyMediatorInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type CaseCreateNestedManyWithoutSocialWorkerInput = {
    create?: XOR<CaseCreateWithoutSocialWorkerInput, CaseUncheckedCreateWithoutSocialWorkerInput> | CaseCreateWithoutSocialWorkerInput[] | CaseUncheckedCreateWithoutSocialWorkerInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutSocialWorkerInput | CaseCreateOrConnectWithoutSocialWorkerInput[]
    createMany?: CaseCreateManySocialWorkerInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type MediationRequestCreateNestedManyWithoutRequesterInput = {
    create?: XOR<MediationRequestCreateWithoutRequesterInput, MediationRequestUncheckedCreateWithoutRequesterInput> | MediationRequestCreateWithoutRequesterInput[] | MediationRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: MediationRequestCreateOrConnectWithoutRequesterInput | MediationRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: MediationRequestCreateManyRequesterInputEnvelope
    connect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
  }

  export type MediationRequestCreateNestedManyWithoutMediatorInput = {
    create?: XOR<MediationRequestCreateWithoutMediatorInput, MediationRequestUncheckedCreateWithoutMediatorInput> | MediationRequestCreateWithoutMediatorInput[] | MediationRequestUncheckedCreateWithoutMediatorInput[]
    connectOrCreate?: MediationRequestCreateOrConnectWithoutMediatorInput | MediationRequestCreateOrConnectWithoutMediatorInput[]
    createMany?: MediationRequestCreateManyMediatorInputEnvelope
    connect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
  }

  export type CaseUncheckedCreateNestedManyWithoutLandlordInput = {
    create?: XOR<CaseCreateWithoutLandlordInput, CaseUncheckedCreateWithoutLandlordInput> | CaseCreateWithoutLandlordInput[] | CaseUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutLandlordInput | CaseCreateOrConnectWithoutLandlordInput[]
    createMany?: CaseCreateManyLandlordInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type CaseUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<CaseCreateWithoutTenantInput, CaseUncheckedCreateWithoutTenantInput> | CaseCreateWithoutTenantInput[] | CaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutTenantInput | CaseCreateOrConnectWithoutTenantInput[]
    createMany?: CaseCreateManyTenantInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type CaseUncheckedCreateNestedManyWithoutOfficerInput = {
    create?: XOR<CaseCreateWithoutOfficerInput, CaseUncheckedCreateWithoutOfficerInput> | CaseCreateWithoutOfficerInput[] | CaseUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutOfficerInput | CaseCreateOrConnectWithoutOfficerInput[]
    createMany?: CaseCreateManyOfficerInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type CaseUncheckedCreateNestedManyWithoutMediatorInput = {
    create?: XOR<CaseCreateWithoutMediatorInput, CaseUncheckedCreateWithoutMediatorInput> | CaseCreateWithoutMediatorInput[] | CaseUncheckedCreateWithoutMediatorInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutMediatorInput | CaseCreateOrConnectWithoutMediatorInput[]
    createMany?: CaseCreateManyMediatorInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type CaseUncheckedCreateNestedManyWithoutSocialWorkerInput = {
    create?: XOR<CaseCreateWithoutSocialWorkerInput, CaseUncheckedCreateWithoutSocialWorkerInput> | CaseCreateWithoutSocialWorkerInput[] | CaseUncheckedCreateWithoutSocialWorkerInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutSocialWorkerInput | CaseCreateOrConnectWithoutSocialWorkerInput[]
    createMany?: CaseCreateManySocialWorkerInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type MediationRequestUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<MediationRequestCreateWithoutRequesterInput, MediationRequestUncheckedCreateWithoutRequesterInput> | MediationRequestCreateWithoutRequesterInput[] | MediationRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: MediationRequestCreateOrConnectWithoutRequesterInput | MediationRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: MediationRequestCreateManyRequesterInputEnvelope
    connect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
  }

  export type MediationRequestUncheckedCreateNestedManyWithoutMediatorInput = {
    create?: XOR<MediationRequestCreateWithoutMediatorInput, MediationRequestUncheckedCreateWithoutMediatorInput> | MediationRequestCreateWithoutMediatorInput[] | MediationRequestUncheckedCreateWithoutMediatorInput[]
    connectOrCreate?: MediationRequestCreateOrConnectWithoutMediatorInput | MediationRequestCreateOrConnectWithoutMediatorInput[]
    createMany?: MediationRequestCreateManyMediatorInputEnvelope
    connect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CaseUpdateManyWithoutLandlordNestedInput = {
    create?: XOR<CaseCreateWithoutLandlordInput, CaseUncheckedCreateWithoutLandlordInput> | CaseCreateWithoutLandlordInput[] | CaseUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutLandlordInput | CaseCreateOrConnectWithoutLandlordInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutLandlordInput | CaseUpsertWithWhereUniqueWithoutLandlordInput[]
    createMany?: CaseCreateManyLandlordInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutLandlordInput | CaseUpdateWithWhereUniqueWithoutLandlordInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutLandlordInput | CaseUpdateManyWithWhereWithoutLandlordInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type CaseUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CaseCreateWithoutTenantInput, CaseUncheckedCreateWithoutTenantInput> | CaseCreateWithoutTenantInput[] | CaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutTenantInput | CaseCreateOrConnectWithoutTenantInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutTenantInput | CaseUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CaseCreateManyTenantInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutTenantInput | CaseUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutTenantInput | CaseUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type CaseUpdateManyWithoutOfficerNestedInput = {
    create?: XOR<CaseCreateWithoutOfficerInput, CaseUncheckedCreateWithoutOfficerInput> | CaseCreateWithoutOfficerInput[] | CaseUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutOfficerInput | CaseCreateOrConnectWithoutOfficerInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutOfficerInput | CaseUpsertWithWhereUniqueWithoutOfficerInput[]
    createMany?: CaseCreateManyOfficerInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutOfficerInput | CaseUpdateWithWhereUniqueWithoutOfficerInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutOfficerInput | CaseUpdateManyWithWhereWithoutOfficerInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type CaseUpdateManyWithoutMediatorNestedInput = {
    create?: XOR<CaseCreateWithoutMediatorInput, CaseUncheckedCreateWithoutMediatorInput> | CaseCreateWithoutMediatorInput[] | CaseUncheckedCreateWithoutMediatorInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutMediatorInput | CaseCreateOrConnectWithoutMediatorInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutMediatorInput | CaseUpsertWithWhereUniqueWithoutMediatorInput[]
    createMany?: CaseCreateManyMediatorInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutMediatorInput | CaseUpdateWithWhereUniqueWithoutMediatorInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutMediatorInput | CaseUpdateManyWithWhereWithoutMediatorInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type CaseUpdateManyWithoutSocialWorkerNestedInput = {
    create?: XOR<CaseCreateWithoutSocialWorkerInput, CaseUncheckedCreateWithoutSocialWorkerInput> | CaseCreateWithoutSocialWorkerInput[] | CaseUncheckedCreateWithoutSocialWorkerInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutSocialWorkerInput | CaseCreateOrConnectWithoutSocialWorkerInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutSocialWorkerInput | CaseUpsertWithWhereUniqueWithoutSocialWorkerInput[]
    createMany?: CaseCreateManySocialWorkerInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutSocialWorkerInput | CaseUpdateWithWhereUniqueWithoutSocialWorkerInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutSocialWorkerInput | CaseUpdateManyWithWhereWithoutSocialWorkerInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type MediationRequestUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<MediationRequestCreateWithoutRequesterInput, MediationRequestUncheckedCreateWithoutRequesterInput> | MediationRequestCreateWithoutRequesterInput[] | MediationRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: MediationRequestCreateOrConnectWithoutRequesterInput | MediationRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: MediationRequestUpsertWithWhereUniqueWithoutRequesterInput | MediationRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: MediationRequestCreateManyRequesterInputEnvelope
    set?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    disconnect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    delete?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    connect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    update?: MediationRequestUpdateWithWhereUniqueWithoutRequesterInput | MediationRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: MediationRequestUpdateManyWithWhereWithoutRequesterInput | MediationRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: MediationRequestScalarWhereInput | MediationRequestScalarWhereInput[]
  }

  export type MediationRequestUpdateManyWithoutMediatorNestedInput = {
    create?: XOR<MediationRequestCreateWithoutMediatorInput, MediationRequestUncheckedCreateWithoutMediatorInput> | MediationRequestCreateWithoutMediatorInput[] | MediationRequestUncheckedCreateWithoutMediatorInput[]
    connectOrCreate?: MediationRequestCreateOrConnectWithoutMediatorInput | MediationRequestCreateOrConnectWithoutMediatorInput[]
    upsert?: MediationRequestUpsertWithWhereUniqueWithoutMediatorInput | MediationRequestUpsertWithWhereUniqueWithoutMediatorInput[]
    createMany?: MediationRequestCreateManyMediatorInputEnvelope
    set?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    disconnect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    delete?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    connect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    update?: MediationRequestUpdateWithWhereUniqueWithoutMediatorInput | MediationRequestUpdateWithWhereUniqueWithoutMediatorInput[]
    updateMany?: MediationRequestUpdateManyWithWhereWithoutMediatorInput | MediationRequestUpdateManyWithWhereWithoutMediatorInput[]
    deleteMany?: MediationRequestScalarWhereInput | MediationRequestScalarWhereInput[]
  }

  export type CaseUncheckedUpdateManyWithoutLandlordNestedInput = {
    create?: XOR<CaseCreateWithoutLandlordInput, CaseUncheckedCreateWithoutLandlordInput> | CaseCreateWithoutLandlordInput[] | CaseUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutLandlordInput | CaseCreateOrConnectWithoutLandlordInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutLandlordInput | CaseUpsertWithWhereUniqueWithoutLandlordInput[]
    createMany?: CaseCreateManyLandlordInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutLandlordInput | CaseUpdateWithWhereUniqueWithoutLandlordInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutLandlordInput | CaseUpdateManyWithWhereWithoutLandlordInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type CaseUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CaseCreateWithoutTenantInput, CaseUncheckedCreateWithoutTenantInput> | CaseCreateWithoutTenantInput[] | CaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutTenantInput | CaseCreateOrConnectWithoutTenantInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutTenantInput | CaseUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CaseCreateManyTenantInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutTenantInput | CaseUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutTenantInput | CaseUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type CaseUncheckedUpdateManyWithoutOfficerNestedInput = {
    create?: XOR<CaseCreateWithoutOfficerInput, CaseUncheckedCreateWithoutOfficerInput> | CaseCreateWithoutOfficerInput[] | CaseUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutOfficerInput | CaseCreateOrConnectWithoutOfficerInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutOfficerInput | CaseUpsertWithWhereUniqueWithoutOfficerInput[]
    createMany?: CaseCreateManyOfficerInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutOfficerInput | CaseUpdateWithWhereUniqueWithoutOfficerInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutOfficerInput | CaseUpdateManyWithWhereWithoutOfficerInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type CaseUncheckedUpdateManyWithoutMediatorNestedInput = {
    create?: XOR<CaseCreateWithoutMediatorInput, CaseUncheckedCreateWithoutMediatorInput> | CaseCreateWithoutMediatorInput[] | CaseUncheckedCreateWithoutMediatorInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutMediatorInput | CaseCreateOrConnectWithoutMediatorInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutMediatorInput | CaseUpsertWithWhereUniqueWithoutMediatorInput[]
    createMany?: CaseCreateManyMediatorInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutMediatorInput | CaseUpdateWithWhereUniqueWithoutMediatorInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutMediatorInput | CaseUpdateManyWithWhereWithoutMediatorInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type CaseUncheckedUpdateManyWithoutSocialWorkerNestedInput = {
    create?: XOR<CaseCreateWithoutSocialWorkerInput, CaseUncheckedCreateWithoutSocialWorkerInput> | CaseCreateWithoutSocialWorkerInput[] | CaseUncheckedCreateWithoutSocialWorkerInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutSocialWorkerInput | CaseCreateOrConnectWithoutSocialWorkerInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutSocialWorkerInput | CaseUpsertWithWhereUniqueWithoutSocialWorkerInput[]
    createMany?: CaseCreateManySocialWorkerInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutSocialWorkerInput | CaseUpdateWithWhereUniqueWithoutSocialWorkerInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutSocialWorkerInput | CaseUpdateManyWithWhereWithoutSocialWorkerInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type MediationRequestUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<MediationRequestCreateWithoutRequesterInput, MediationRequestUncheckedCreateWithoutRequesterInput> | MediationRequestCreateWithoutRequesterInput[] | MediationRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: MediationRequestCreateOrConnectWithoutRequesterInput | MediationRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: MediationRequestUpsertWithWhereUniqueWithoutRequesterInput | MediationRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: MediationRequestCreateManyRequesterInputEnvelope
    set?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    disconnect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    delete?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    connect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    update?: MediationRequestUpdateWithWhereUniqueWithoutRequesterInput | MediationRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: MediationRequestUpdateManyWithWhereWithoutRequesterInput | MediationRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: MediationRequestScalarWhereInput | MediationRequestScalarWhereInput[]
  }

  export type MediationRequestUncheckedUpdateManyWithoutMediatorNestedInput = {
    create?: XOR<MediationRequestCreateWithoutMediatorInput, MediationRequestUncheckedCreateWithoutMediatorInput> | MediationRequestCreateWithoutMediatorInput[] | MediationRequestUncheckedCreateWithoutMediatorInput[]
    connectOrCreate?: MediationRequestCreateOrConnectWithoutMediatorInput | MediationRequestCreateOrConnectWithoutMediatorInput[]
    upsert?: MediationRequestUpsertWithWhereUniqueWithoutMediatorInput | MediationRequestUpsertWithWhereUniqueWithoutMediatorInput[]
    createMany?: MediationRequestCreateManyMediatorInputEnvelope
    set?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    disconnect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    delete?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    connect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    update?: MediationRequestUpdateWithWhereUniqueWithoutMediatorInput | MediationRequestUpdateWithWhereUniqueWithoutMediatorInput[]
    updateMany?: MediationRequestUpdateManyWithWhereWithoutMediatorInput | MediationRequestUpdateManyWithWhereWithoutMediatorInput[]
    deleteMany?: MediationRequestScalarWhereInput | MediationRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCasesAsLandlordInput = {
    create?: XOR<UserCreateWithoutCasesAsLandlordInput, UserUncheckedCreateWithoutCasesAsLandlordInput>
    connectOrCreate?: UserCreateOrConnectWithoutCasesAsLandlordInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCasesAsTenantInput = {
    create?: XOR<UserCreateWithoutCasesAsTenantInput, UserUncheckedCreateWithoutCasesAsTenantInput>
    connectOrCreate?: UserCreateOrConnectWithoutCasesAsTenantInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCasesAsOfficerInput = {
    create?: XOR<UserCreateWithoutCasesAsOfficerInput, UserUncheckedCreateWithoutCasesAsOfficerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCasesAsOfficerInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCasesAsMediatorInput = {
    create?: XOR<UserCreateWithoutCasesAsMediatorInput, UserUncheckedCreateWithoutCasesAsMediatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutCasesAsMediatorInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCasesAsSocialWorkerInput = {
    create?: XOR<UserCreateWithoutCasesAsSocialWorkerInput, UserUncheckedCreateWithoutCasesAsSocialWorkerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCasesAsSocialWorkerInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutCaseInput = {
    create?: XOR<DocumentCreateWithoutCaseInput, DocumentUncheckedCreateWithoutCaseInput> | DocumentCreateWithoutCaseInput[] | DocumentUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCaseInput | DocumentCreateOrConnectWithoutCaseInput[]
    createMany?: DocumentCreateManyCaseInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutCaseInput = {
    create?: XOR<NotificationCreateWithoutCaseInput, NotificationUncheckedCreateWithoutCaseInput> | NotificationCreateWithoutCaseInput[] | NotificationUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCaseInput | NotificationCreateOrConnectWithoutCaseInput[]
    createMany?: NotificationCreateManyCaseInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type MediationRequestCreateNestedManyWithoutCaseInput = {
    create?: XOR<MediationRequestCreateWithoutCaseInput, MediationRequestUncheckedCreateWithoutCaseInput> | MediationRequestCreateWithoutCaseInput[] | MediationRequestUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: MediationRequestCreateOrConnectWithoutCaseInput | MediationRequestCreateOrConnectWithoutCaseInput[]
    createMany?: MediationRequestCreateManyCaseInputEnvelope
    connect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
  }

  export type CaseEventCreateNestedManyWithoutCaseInput = {
    create?: XOR<CaseEventCreateWithoutCaseInput, CaseEventUncheckedCreateWithoutCaseInput> | CaseEventCreateWithoutCaseInput[] | CaseEventUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: CaseEventCreateOrConnectWithoutCaseInput | CaseEventCreateOrConnectWithoutCaseInput[]
    createMany?: CaseEventCreateManyCaseInputEnvelope
    connect?: CaseEventWhereUniqueInput | CaseEventWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutCaseInput = {
    create?: XOR<DocumentCreateWithoutCaseInput, DocumentUncheckedCreateWithoutCaseInput> | DocumentCreateWithoutCaseInput[] | DocumentUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCaseInput | DocumentCreateOrConnectWithoutCaseInput[]
    createMany?: DocumentCreateManyCaseInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutCaseInput = {
    create?: XOR<NotificationCreateWithoutCaseInput, NotificationUncheckedCreateWithoutCaseInput> | NotificationCreateWithoutCaseInput[] | NotificationUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCaseInput | NotificationCreateOrConnectWithoutCaseInput[]
    createMany?: NotificationCreateManyCaseInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type MediationRequestUncheckedCreateNestedManyWithoutCaseInput = {
    create?: XOR<MediationRequestCreateWithoutCaseInput, MediationRequestUncheckedCreateWithoutCaseInput> | MediationRequestCreateWithoutCaseInput[] | MediationRequestUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: MediationRequestCreateOrConnectWithoutCaseInput | MediationRequestCreateOrConnectWithoutCaseInput[]
    createMany?: MediationRequestCreateManyCaseInputEnvelope
    connect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
  }

  export type CaseEventUncheckedCreateNestedManyWithoutCaseInput = {
    create?: XOR<CaseEventCreateWithoutCaseInput, CaseEventUncheckedCreateWithoutCaseInput> | CaseEventCreateWithoutCaseInput[] | CaseEventUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: CaseEventCreateOrConnectWithoutCaseInput | CaseEventCreateOrConnectWithoutCaseInput[]
    createMany?: CaseEventCreateManyCaseInputEnvelope
    connect?: CaseEventWhereUniqueInput | CaseEventWhereUniqueInput[]
  }

  export type EnumCaseStatusFieldUpdateOperationsInput = {
    set?: $Enums.CaseStatus
  }

  export type EnumProcedureStageFieldUpdateOperationsInput = {
    set?: $Enums.ProcedureStage
  }

  export type EnumUrgencyLevelFieldUpdateOperationsInput = {
    set?: $Enums.UrgencyLevel
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutCasesAsLandlordNestedInput = {
    create?: XOR<UserCreateWithoutCasesAsLandlordInput, UserUncheckedCreateWithoutCasesAsLandlordInput>
    connectOrCreate?: UserCreateOrConnectWithoutCasesAsLandlordInput
    upsert?: UserUpsertWithoutCasesAsLandlordInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCasesAsLandlordInput, UserUpdateWithoutCasesAsLandlordInput>, UserUncheckedUpdateWithoutCasesAsLandlordInput>
  }

  export type UserUpdateOneRequiredWithoutCasesAsTenantNestedInput = {
    create?: XOR<UserCreateWithoutCasesAsTenantInput, UserUncheckedCreateWithoutCasesAsTenantInput>
    connectOrCreate?: UserCreateOrConnectWithoutCasesAsTenantInput
    upsert?: UserUpsertWithoutCasesAsTenantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCasesAsTenantInput, UserUpdateWithoutCasesAsTenantInput>, UserUncheckedUpdateWithoutCasesAsTenantInput>
  }

  export type UserUpdateOneWithoutCasesAsOfficerNestedInput = {
    create?: XOR<UserCreateWithoutCasesAsOfficerInput, UserUncheckedCreateWithoutCasesAsOfficerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCasesAsOfficerInput
    upsert?: UserUpsertWithoutCasesAsOfficerInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCasesAsOfficerInput, UserUpdateWithoutCasesAsOfficerInput>, UserUncheckedUpdateWithoutCasesAsOfficerInput>
  }

  export type UserUpdateOneWithoutCasesAsMediatorNestedInput = {
    create?: XOR<UserCreateWithoutCasesAsMediatorInput, UserUncheckedCreateWithoutCasesAsMediatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutCasesAsMediatorInput
    upsert?: UserUpsertWithoutCasesAsMediatorInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCasesAsMediatorInput, UserUpdateWithoutCasesAsMediatorInput>, UserUncheckedUpdateWithoutCasesAsMediatorInput>
  }

  export type UserUpdateOneWithoutCasesAsSocialWorkerNestedInput = {
    create?: XOR<UserCreateWithoutCasesAsSocialWorkerInput, UserUncheckedCreateWithoutCasesAsSocialWorkerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCasesAsSocialWorkerInput
    upsert?: UserUpsertWithoutCasesAsSocialWorkerInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCasesAsSocialWorkerInput, UserUpdateWithoutCasesAsSocialWorkerInput>, UserUncheckedUpdateWithoutCasesAsSocialWorkerInput>
  }

  export type DocumentUpdateManyWithoutCaseNestedInput = {
    create?: XOR<DocumentCreateWithoutCaseInput, DocumentUncheckedCreateWithoutCaseInput> | DocumentCreateWithoutCaseInput[] | DocumentUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCaseInput | DocumentCreateOrConnectWithoutCaseInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutCaseInput | DocumentUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: DocumentCreateManyCaseInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutCaseInput | DocumentUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutCaseInput | DocumentUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutCaseNestedInput = {
    create?: XOR<NotificationCreateWithoutCaseInput, NotificationUncheckedCreateWithoutCaseInput> | NotificationCreateWithoutCaseInput[] | NotificationUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCaseInput | NotificationCreateOrConnectWithoutCaseInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutCaseInput | NotificationUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: NotificationCreateManyCaseInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutCaseInput | NotificationUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutCaseInput | NotificationUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type MediationRequestUpdateManyWithoutCaseNestedInput = {
    create?: XOR<MediationRequestCreateWithoutCaseInput, MediationRequestUncheckedCreateWithoutCaseInput> | MediationRequestCreateWithoutCaseInput[] | MediationRequestUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: MediationRequestCreateOrConnectWithoutCaseInput | MediationRequestCreateOrConnectWithoutCaseInput[]
    upsert?: MediationRequestUpsertWithWhereUniqueWithoutCaseInput | MediationRequestUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: MediationRequestCreateManyCaseInputEnvelope
    set?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    disconnect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    delete?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    connect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    update?: MediationRequestUpdateWithWhereUniqueWithoutCaseInput | MediationRequestUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: MediationRequestUpdateManyWithWhereWithoutCaseInput | MediationRequestUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: MediationRequestScalarWhereInput | MediationRequestScalarWhereInput[]
  }

  export type CaseEventUpdateManyWithoutCaseNestedInput = {
    create?: XOR<CaseEventCreateWithoutCaseInput, CaseEventUncheckedCreateWithoutCaseInput> | CaseEventCreateWithoutCaseInput[] | CaseEventUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: CaseEventCreateOrConnectWithoutCaseInput | CaseEventCreateOrConnectWithoutCaseInput[]
    upsert?: CaseEventUpsertWithWhereUniqueWithoutCaseInput | CaseEventUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: CaseEventCreateManyCaseInputEnvelope
    set?: CaseEventWhereUniqueInput | CaseEventWhereUniqueInput[]
    disconnect?: CaseEventWhereUniqueInput | CaseEventWhereUniqueInput[]
    delete?: CaseEventWhereUniqueInput | CaseEventWhereUniqueInput[]
    connect?: CaseEventWhereUniqueInput | CaseEventWhereUniqueInput[]
    update?: CaseEventUpdateWithWhereUniqueWithoutCaseInput | CaseEventUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: CaseEventUpdateManyWithWhereWithoutCaseInput | CaseEventUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: CaseEventScalarWhereInput | CaseEventScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: XOR<DocumentCreateWithoutCaseInput, DocumentUncheckedCreateWithoutCaseInput> | DocumentCreateWithoutCaseInput[] | DocumentUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCaseInput | DocumentCreateOrConnectWithoutCaseInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutCaseInput | DocumentUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: DocumentCreateManyCaseInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutCaseInput | DocumentUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutCaseInput | DocumentUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: XOR<NotificationCreateWithoutCaseInput, NotificationUncheckedCreateWithoutCaseInput> | NotificationCreateWithoutCaseInput[] | NotificationUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCaseInput | NotificationCreateOrConnectWithoutCaseInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutCaseInput | NotificationUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: NotificationCreateManyCaseInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutCaseInput | NotificationUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutCaseInput | NotificationUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type MediationRequestUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: XOR<MediationRequestCreateWithoutCaseInput, MediationRequestUncheckedCreateWithoutCaseInput> | MediationRequestCreateWithoutCaseInput[] | MediationRequestUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: MediationRequestCreateOrConnectWithoutCaseInput | MediationRequestCreateOrConnectWithoutCaseInput[]
    upsert?: MediationRequestUpsertWithWhereUniqueWithoutCaseInput | MediationRequestUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: MediationRequestCreateManyCaseInputEnvelope
    set?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    disconnect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    delete?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    connect?: MediationRequestWhereUniqueInput | MediationRequestWhereUniqueInput[]
    update?: MediationRequestUpdateWithWhereUniqueWithoutCaseInput | MediationRequestUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: MediationRequestUpdateManyWithWhereWithoutCaseInput | MediationRequestUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: MediationRequestScalarWhereInput | MediationRequestScalarWhereInput[]
  }

  export type CaseEventUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: XOR<CaseEventCreateWithoutCaseInput, CaseEventUncheckedCreateWithoutCaseInput> | CaseEventCreateWithoutCaseInput[] | CaseEventUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: CaseEventCreateOrConnectWithoutCaseInput | CaseEventCreateOrConnectWithoutCaseInput[]
    upsert?: CaseEventUpsertWithWhereUniqueWithoutCaseInput | CaseEventUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: CaseEventCreateManyCaseInputEnvelope
    set?: CaseEventWhereUniqueInput | CaseEventWhereUniqueInput[]
    disconnect?: CaseEventWhereUniqueInput | CaseEventWhereUniqueInput[]
    delete?: CaseEventWhereUniqueInput | CaseEventWhereUniqueInput[]
    connect?: CaseEventWhereUniqueInput | CaseEventWhereUniqueInput[]
    update?: CaseEventUpdateWithWhereUniqueWithoutCaseInput | CaseEventUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: CaseEventUpdateManyWithWhereWithoutCaseInput | CaseEventUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: CaseEventScalarWhereInput | CaseEventScalarWhereInput[]
  }

  export type CaseCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<CaseCreateWithoutDocumentsInput, CaseUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: CaseCreateOrConnectWithoutDocumentsInput
    connect?: CaseWhereUniqueInput
  }

  export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType
  }

  export type CaseUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<CaseCreateWithoutDocumentsInput, CaseUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: CaseCreateOrConnectWithoutDocumentsInput
    upsert?: CaseUpsertWithoutDocumentsInput
    connect?: CaseWhereUniqueInput
    update?: XOR<XOR<CaseUpdateToOneWithWhereWithoutDocumentsInput, CaseUpdateWithoutDocumentsInput>, CaseUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type CaseCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<CaseCreateWithoutNotificationsInput, CaseUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: CaseCreateOrConnectWithoutNotificationsInput
    connect?: CaseWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type CaseUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<CaseCreateWithoutNotificationsInput, CaseUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: CaseCreateOrConnectWithoutNotificationsInput
    upsert?: CaseUpsertWithoutNotificationsInput
    disconnect?: CaseWhereInput | boolean
    delete?: CaseWhereInput | boolean
    connect?: CaseWhereUniqueInput
    update?: XOR<XOR<CaseUpdateToOneWithWhereWithoutNotificationsInput, CaseUpdateWithoutNotificationsInput>, CaseUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutMediationRequestsInput = {
    create?: XOR<UserCreateWithoutMediationRequestsInput, UserUncheckedCreateWithoutMediationRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediationRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMediationHandledInput = {
    create?: XOR<UserCreateWithoutMediationHandledInput, UserUncheckedCreateWithoutMediationHandledInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediationHandledInput
    connect?: UserWhereUniqueInput
  }

  export type CaseCreateNestedOneWithoutMediationRequestsInput = {
    create?: XOR<CaseCreateWithoutMediationRequestsInput, CaseUncheckedCreateWithoutMediationRequestsInput>
    connectOrCreate?: CaseCreateOrConnectWithoutMediationRequestsInput
    connect?: CaseWhereUniqueInput
  }

  export type MediationMeetingCreateNestedManyWithoutMediationInput = {
    create?: XOR<MediationMeetingCreateWithoutMediationInput, MediationMeetingUncheckedCreateWithoutMediationInput> | MediationMeetingCreateWithoutMediationInput[] | MediationMeetingUncheckedCreateWithoutMediationInput[]
    connectOrCreate?: MediationMeetingCreateOrConnectWithoutMediationInput | MediationMeetingCreateOrConnectWithoutMediationInput[]
    createMany?: MediationMeetingCreateManyMediationInputEnvelope
    connect?: MediationMeetingWhereUniqueInput | MediationMeetingWhereUniqueInput[]
  }

  export type MediationMeetingUncheckedCreateNestedManyWithoutMediationInput = {
    create?: XOR<MediationMeetingCreateWithoutMediationInput, MediationMeetingUncheckedCreateWithoutMediationInput> | MediationMeetingCreateWithoutMediationInput[] | MediationMeetingUncheckedCreateWithoutMediationInput[]
    connectOrCreate?: MediationMeetingCreateOrConnectWithoutMediationInput | MediationMeetingCreateOrConnectWithoutMediationInput[]
    createMany?: MediationMeetingCreateManyMediationInputEnvelope
    connect?: MediationMeetingWhereUniqueInput | MediationMeetingWhereUniqueInput[]
  }

  export type EnumMediationStatusFieldUpdateOperationsInput = {
    set?: $Enums.MediationStatus
  }

  export type UserUpdateOneRequiredWithoutMediationRequestsNestedInput = {
    create?: XOR<UserCreateWithoutMediationRequestsInput, UserUncheckedCreateWithoutMediationRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediationRequestsInput
    upsert?: UserUpsertWithoutMediationRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMediationRequestsInput, UserUpdateWithoutMediationRequestsInput>, UserUncheckedUpdateWithoutMediationRequestsInput>
  }

  export type UserUpdateOneWithoutMediationHandledNestedInput = {
    create?: XOR<UserCreateWithoutMediationHandledInput, UserUncheckedCreateWithoutMediationHandledInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediationHandledInput
    upsert?: UserUpsertWithoutMediationHandledInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMediationHandledInput, UserUpdateWithoutMediationHandledInput>, UserUncheckedUpdateWithoutMediationHandledInput>
  }

  export type CaseUpdateOneRequiredWithoutMediationRequestsNestedInput = {
    create?: XOR<CaseCreateWithoutMediationRequestsInput, CaseUncheckedCreateWithoutMediationRequestsInput>
    connectOrCreate?: CaseCreateOrConnectWithoutMediationRequestsInput
    upsert?: CaseUpsertWithoutMediationRequestsInput
    connect?: CaseWhereUniqueInput
    update?: XOR<XOR<CaseUpdateToOneWithWhereWithoutMediationRequestsInput, CaseUpdateWithoutMediationRequestsInput>, CaseUncheckedUpdateWithoutMediationRequestsInput>
  }

  export type MediationMeetingUpdateManyWithoutMediationNestedInput = {
    create?: XOR<MediationMeetingCreateWithoutMediationInput, MediationMeetingUncheckedCreateWithoutMediationInput> | MediationMeetingCreateWithoutMediationInput[] | MediationMeetingUncheckedCreateWithoutMediationInput[]
    connectOrCreate?: MediationMeetingCreateOrConnectWithoutMediationInput | MediationMeetingCreateOrConnectWithoutMediationInput[]
    upsert?: MediationMeetingUpsertWithWhereUniqueWithoutMediationInput | MediationMeetingUpsertWithWhereUniqueWithoutMediationInput[]
    createMany?: MediationMeetingCreateManyMediationInputEnvelope
    set?: MediationMeetingWhereUniqueInput | MediationMeetingWhereUniqueInput[]
    disconnect?: MediationMeetingWhereUniqueInput | MediationMeetingWhereUniqueInput[]
    delete?: MediationMeetingWhereUniqueInput | MediationMeetingWhereUniqueInput[]
    connect?: MediationMeetingWhereUniqueInput | MediationMeetingWhereUniqueInput[]
    update?: MediationMeetingUpdateWithWhereUniqueWithoutMediationInput | MediationMeetingUpdateWithWhereUniqueWithoutMediationInput[]
    updateMany?: MediationMeetingUpdateManyWithWhereWithoutMediationInput | MediationMeetingUpdateManyWithWhereWithoutMediationInput[]
    deleteMany?: MediationMeetingScalarWhereInput | MediationMeetingScalarWhereInput[]
  }

  export type MediationMeetingUncheckedUpdateManyWithoutMediationNestedInput = {
    create?: XOR<MediationMeetingCreateWithoutMediationInput, MediationMeetingUncheckedCreateWithoutMediationInput> | MediationMeetingCreateWithoutMediationInput[] | MediationMeetingUncheckedCreateWithoutMediationInput[]
    connectOrCreate?: MediationMeetingCreateOrConnectWithoutMediationInput | MediationMeetingCreateOrConnectWithoutMediationInput[]
    upsert?: MediationMeetingUpsertWithWhereUniqueWithoutMediationInput | MediationMeetingUpsertWithWhereUniqueWithoutMediationInput[]
    createMany?: MediationMeetingCreateManyMediationInputEnvelope
    set?: MediationMeetingWhereUniqueInput | MediationMeetingWhereUniqueInput[]
    disconnect?: MediationMeetingWhereUniqueInput | MediationMeetingWhereUniqueInput[]
    delete?: MediationMeetingWhereUniqueInput | MediationMeetingWhereUniqueInput[]
    connect?: MediationMeetingWhereUniqueInput | MediationMeetingWhereUniqueInput[]
    update?: MediationMeetingUpdateWithWhereUniqueWithoutMediationInput | MediationMeetingUpdateWithWhereUniqueWithoutMediationInput[]
    updateMany?: MediationMeetingUpdateManyWithWhereWithoutMediationInput | MediationMeetingUpdateManyWithWhereWithoutMediationInput[]
    deleteMany?: MediationMeetingScalarWhereInput | MediationMeetingScalarWhereInput[]
  }

  export type MediationRequestCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<MediationRequestCreateWithoutMeetingsInput, MediationRequestUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: MediationRequestCreateOrConnectWithoutMeetingsInput
    connect?: MediationRequestWhereUniqueInput
  }

  export type EnumMeetingStatusFieldUpdateOperationsInput = {
    set?: $Enums.MeetingStatus
  }

  export type MediationRequestUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<MediationRequestCreateWithoutMeetingsInput, MediationRequestUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: MediationRequestCreateOrConnectWithoutMeetingsInput
    upsert?: MediationRequestUpsertWithoutMeetingsInput
    connect?: MediationRequestWhereUniqueInput
    update?: XOR<XOR<MediationRequestUpdateToOneWithWhereWithoutMeetingsInput, MediationRequestUpdateWithoutMeetingsInput>, MediationRequestUncheckedUpdateWithoutMeetingsInput>
  }

  export type CaseCreateNestedOneWithoutEventsInput = {
    create?: XOR<CaseCreateWithoutEventsInput, CaseUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CaseCreateOrConnectWithoutEventsInput
    connect?: CaseWhereUniqueInput
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type CaseUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<CaseCreateWithoutEventsInput, CaseUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CaseCreateOrConnectWithoutEventsInput
    upsert?: CaseUpsertWithoutEventsInput
    connect?: CaseWhereUniqueInput
    update?: XOR<XOR<CaseUpdateToOneWithWhereWithoutEventsInput, CaseUpdateWithoutEventsInput>, CaseUncheckedUpdateWithoutEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[]
    notIn?: $Enums.CaseStatus[]
    not?: NestedEnumCaseStatusFilter<$PrismaModel> | $Enums.CaseStatus
  }

  export type NestedEnumProcedureStageFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcedureStage | EnumProcedureStageFieldRefInput<$PrismaModel>
    in?: $Enums.ProcedureStage[]
    notIn?: $Enums.ProcedureStage[]
    not?: NestedEnumProcedureStageFilter<$PrismaModel> | $Enums.ProcedureStage
  }

  export type NestedEnumUrgencyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.UrgencyLevel | EnumUrgencyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UrgencyLevel[]
    notIn?: $Enums.UrgencyLevel[]
    not?: NestedEnumUrgencyLevelFilter<$PrismaModel> | $Enums.UrgencyLevel
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[]
    notIn?: $Enums.CaseStatus[]
    not?: NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaseStatusFilter<$PrismaModel>
    _max?: NestedEnumCaseStatusFilter<$PrismaModel>
  }

  export type NestedEnumProcedureStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcedureStage | EnumProcedureStageFieldRefInput<$PrismaModel>
    in?: $Enums.ProcedureStage[]
    notIn?: $Enums.ProcedureStage[]
    not?: NestedEnumProcedureStageWithAggregatesFilter<$PrismaModel> | $Enums.ProcedureStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcedureStageFilter<$PrismaModel>
    _max?: NestedEnumProcedureStageFilter<$PrismaModel>
  }

  export type NestedEnumUrgencyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UrgencyLevel | EnumUrgencyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UrgencyLevel[]
    notIn?: $Enums.UrgencyLevel[]
    not?: NestedEnumUrgencyLevelWithAggregatesFilter<$PrismaModel> | $Enums.UrgencyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgencyLevelFilter<$PrismaModel>
    _max?: NestedEnumUrgencyLevelFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[]
    notIn?: $Enums.DocumentType[]
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[]
    notIn?: $Enums.DocumentType[]
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMediationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MediationStatus | EnumMediationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MediationStatus[]
    notIn?: $Enums.MediationStatus[]
    not?: NestedEnumMediationStatusFilter<$PrismaModel> | $Enums.MediationStatus
  }

  export type NestedEnumMediationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediationStatus | EnumMediationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MediationStatus[]
    notIn?: $Enums.MediationStatus[]
    not?: NestedEnumMediationStatusWithAggregatesFilter<$PrismaModel> | $Enums.MediationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediationStatusFilter<$PrismaModel>
    _max?: NestedEnumMediationStatusFilter<$PrismaModel>
  }

  export type NestedEnumMeetingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingStatus | EnumMeetingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingStatus[]
    notIn?: $Enums.MeetingStatus[]
    not?: NestedEnumMeetingStatusFilter<$PrismaModel> | $Enums.MeetingStatus
  }

  export type NestedEnumMeetingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingStatus | EnumMeetingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingStatus[]
    notIn?: $Enums.MeetingStatus[]
    not?: NestedEnumMeetingStatusWithAggregatesFilter<$PrismaModel> | $Enums.MeetingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeetingStatusFilter<$PrismaModel>
    _max?: NestedEnumMeetingStatusFilter<$PrismaModel>
  }

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[]
    notIn?: $Enums.EventType[]
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[]
    notIn?: $Enums.EventType[]
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type CaseCreateWithoutLandlordInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    tenant: UserCreateNestedOneWithoutCasesAsTenantInput
    officer?: UserCreateNestedOneWithoutCasesAsOfficerInput
    mediator?: UserCreateNestedOneWithoutCasesAsMediatorInput
    socialWorker?: UserCreateNestedOneWithoutCasesAsSocialWorkerInput
    documents?: DocumentCreateNestedManyWithoutCaseInput
    notifications?: NotificationCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestCreateNestedManyWithoutCaseInput
    events?: CaseEventCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutLandlordInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    tenantId: string
    officerId?: string | null
    mediatorId?: string | null
    socialWorkerId?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutCaseInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestUncheckedCreateNestedManyWithoutCaseInput
    events?: CaseEventUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutLandlordInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutLandlordInput, CaseUncheckedCreateWithoutLandlordInput>
  }

  export type CaseCreateManyLandlordInputEnvelope = {
    data: CaseCreateManyLandlordInput | CaseCreateManyLandlordInput[]
  }

  export type CaseCreateWithoutTenantInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    landlord: UserCreateNestedOneWithoutCasesAsLandlordInput
    officer?: UserCreateNestedOneWithoutCasesAsOfficerInput
    mediator?: UserCreateNestedOneWithoutCasesAsMediatorInput
    socialWorker?: UserCreateNestedOneWithoutCasesAsSocialWorkerInput
    documents?: DocumentCreateNestedManyWithoutCaseInput
    notifications?: NotificationCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestCreateNestedManyWithoutCaseInput
    events?: CaseEventCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutTenantInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    landlordId: string
    officerId?: string | null
    mediatorId?: string | null
    socialWorkerId?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutCaseInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestUncheckedCreateNestedManyWithoutCaseInput
    events?: CaseEventUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutTenantInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutTenantInput, CaseUncheckedCreateWithoutTenantInput>
  }

  export type CaseCreateManyTenantInputEnvelope = {
    data: CaseCreateManyTenantInput | CaseCreateManyTenantInput[]
  }

  export type CaseCreateWithoutOfficerInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    landlord: UserCreateNestedOneWithoutCasesAsLandlordInput
    tenant: UserCreateNestedOneWithoutCasesAsTenantInput
    mediator?: UserCreateNestedOneWithoutCasesAsMediatorInput
    socialWorker?: UserCreateNestedOneWithoutCasesAsSocialWorkerInput
    documents?: DocumentCreateNestedManyWithoutCaseInput
    notifications?: NotificationCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestCreateNestedManyWithoutCaseInput
    events?: CaseEventCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutOfficerInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    landlordId: string
    tenantId: string
    mediatorId?: string | null
    socialWorkerId?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutCaseInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestUncheckedCreateNestedManyWithoutCaseInput
    events?: CaseEventUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutOfficerInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutOfficerInput, CaseUncheckedCreateWithoutOfficerInput>
  }

  export type CaseCreateManyOfficerInputEnvelope = {
    data: CaseCreateManyOfficerInput | CaseCreateManyOfficerInput[]
  }

  export type CaseCreateWithoutMediatorInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    landlord: UserCreateNestedOneWithoutCasesAsLandlordInput
    tenant: UserCreateNestedOneWithoutCasesAsTenantInput
    officer?: UserCreateNestedOneWithoutCasesAsOfficerInput
    socialWorker?: UserCreateNestedOneWithoutCasesAsSocialWorkerInput
    documents?: DocumentCreateNestedManyWithoutCaseInput
    notifications?: NotificationCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestCreateNestedManyWithoutCaseInput
    events?: CaseEventCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutMediatorInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    landlordId: string
    tenantId: string
    officerId?: string | null
    socialWorkerId?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutCaseInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestUncheckedCreateNestedManyWithoutCaseInput
    events?: CaseEventUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutMediatorInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutMediatorInput, CaseUncheckedCreateWithoutMediatorInput>
  }

  export type CaseCreateManyMediatorInputEnvelope = {
    data: CaseCreateManyMediatorInput | CaseCreateManyMediatorInput[]
  }

  export type CaseCreateWithoutSocialWorkerInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    landlord: UserCreateNestedOneWithoutCasesAsLandlordInput
    tenant: UserCreateNestedOneWithoutCasesAsTenantInput
    officer?: UserCreateNestedOneWithoutCasesAsOfficerInput
    mediator?: UserCreateNestedOneWithoutCasesAsMediatorInput
    documents?: DocumentCreateNestedManyWithoutCaseInput
    notifications?: NotificationCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestCreateNestedManyWithoutCaseInput
    events?: CaseEventCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutSocialWorkerInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    landlordId: string
    tenantId: string
    officerId?: string | null
    mediatorId?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutCaseInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestUncheckedCreateNestedManyWithoutCaseInput
    events?: CaseEventUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutSocialWorkerInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutSocialWorkerInput, CaseUncheckedCreateWithoutSocialWorkerInput>
  }

  export type CaseCreateManySocialWorkerInputEnvelope = {
    data: CaseCreateManySocialWorkerInput | CaseCreateManySocialWorkerInput[]
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    read?: boolean
    case?: CaseCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    read?: boolean
    caseId?: string | null
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type MediationRequestCreateWithoutRequesterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.MediationStatus
    reason: string
    proposal?: string | null
    mediator?: UserCreateNestedOneWithoutMediationHandledInput
    case: CaseCreateNestedOneWithoutMediationRequestsInput
    meetings?: MediationMeetingCreateNestedManyWithoutMediationInput
  }

  export type MediationRequestUncheckedCreateWithoutRequesterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.MediationStatus
    reason: string
    proposal?: string | null
    mediatorId?: string | null
    caseId: string
    meetings?: MediationMeetingUncheckedCreateNestedManyWithoutMediationInput
  }

  export type MediationRequestCreateOrConnectWithoutRequesterInput = {
    where: MediationRequestWhereUniqueInput
    create: XOR<MediationRequestCreateWithoutRequesterInput, MediationRequestUncheckedCreateWithoutRequesterInput>
  }

  export type MediationRequestCreateManyRequesterInputEnvelope = {
    data: MediationRequestCreateManyRequesterInput | MediationRequestCreateManyRequesterInput[]
  }

  export type MediationRequestCreateWithoutMediatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.MediationStatus
    reason: string
    proposal?: string | null
    requester: UserCreateNestedOneWithoutMediationRequestsInput
    case: CaseCreateNestedOneWithoutMediationRequestsInput
    meetings?: MediationMeetingCreateNestedManyWithoutMediationInput
  }

  export type MediationRequestUncheckedCreateWithoutMediatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.MediationStatus
    reason: string
    proposal?: string | null
    requesterId: string
    caseId: string
    meetings?: MediationMeetingUncheckedCreateNestedManyWithoutMediationInput
  }

  export type MediationRequestCreateOrConnectWithoutMediatorInput = {
    where: MediationRequestWhereUniqueInput
    create: XOR<MediationRequestCreateWithoutMediatorInput, MediationRequestUncheckedCreateWithoutMediatorInput>
  }

  export type MediationRequestCreateManyMediatorInputEnvelope = {
    data: MediationRequestCreateManyMediatorInput | MediationRequestCreateManyMediatorInput[]
  }

  export type CaseUpsertWithWhereUniqueWithoutLandlordInput = {
    where: CaseWhereUniqueInput
    update: XOR<CaseUpdateWithoutLandlordInput, CaseUncheckedUpdateWithoutLandlordInput>
    create: XOR<CaseCreateWithoutLandlordInput, CaseUncheckedCreateWithoutLandlordInput>
  }

  export type CaseUpdateWithWhereUniqueWithoutLandlordInput = {
    where: CaseWhereUniqueInput
    data: XOR<CaseUpdateWithoutLandlordInput, CaseUncheckedUpdateWithoutLandlordInput>
  }

  export type CaseUpdateManyWithWhereWithoutLandlordInput = {
    where: CaseScalarWhereInput
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyWithoutLandlordInput>
  }

  export type CaseScalarWhereInput = {
    AND?: CaseScalarWhereInput | CaseScalarWhereInput[]
    OR?: CaseScalarWhereInput[]
    NOT?: CaseScalarWhereInput | CaseScalarWhereInput[]
    id?: StringFilter<"Case"> | string
    reference?: StringFilter<"Case"> | string
    createdAt?: DateTimeFilter<"Case"> | Date | string
    updatedAt?: DateTimeFilter<"Case"> | Date | string
    status?: EnumCaseStatusFilter<"Case"> | $Enums.CaseStatus
    stage?: EnumProcedureStageFilter<"Case"> | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFilter<"Case"> | $Enums.UrgencyLevel
    debtAmount?: FloatFilter<"Case"> | number
    description?: StringNullableFilter<"Case"> | string | null
    landlordId?: StringFilter<"Case"> | string
    tenantId?: StringFilter<"Case"> | string
    officerId?: StringNullableFilter<"Case"> | string | null
    mediatorId?: StringNullableFilter<"Case"> | string | null
    socialWorkerId?: StringNullableFilter<"Case"> | string | null
    housingType?: StringNullableFilter<"Case"> | string | null
    housingArea?: FloatNullableFilter<"Case"> | number | null
    rent?: FloatNullableFilter<"Case"> | number | null
    charges?: FloatNullableFilter<"Case"> | number | null
    deposit?: FloatNullableFilter<"Case"> | number | null
    leaseStartDate?: DateTimeNullableFilter<"Case"> | Date | string | null
    leaseType?: StringNullableFilter<"Case"> | string | null
    leaseDuration?: IntNullableFilter<"Case"> | number | null
    address?: StringNullableFilter<"Case"> | string | null
  }

  export type CaseUpsertWithWhereUniqueWithoutTenantInput = {
    where: CaseWhereUniqueInput
    update: XOR<CaseUpdateWithoutTenantInput, CaseUncheckedUpdateWithoutTenantInput>
    create: XOR<CaseCreateWithoutTenantInput, CaseUncheckedCreateWithoutTenantInput>
  }

  export type CaseUpdateWithWhereUniqueWithoutTenantInput = {
    where: CaseWhereUniqueInput
    data: XOR<CaseUpdateWithoutTenantInput, CaseUncheckedUpdateWithoutTenantInput>
  }

  export type CaseUpdateManyWithWhereWithoutTenantInput = {
    where: CaseScalarWhereInput
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyWithoutTenantInput>
  }

  export type CaseUpsertWithWhereUniqueWithoutOfficerInput = {
    where: CaseWhereUniqueInput
    update: XOR<CaseUpdateWithoutOfficerInput, CaseUncheckedUpdateWithoutOfficerInput>
    create: XOR<CaseCreateWithoutOfficerInput, CaseUncheckedCreateWithoutOfficerInput>
  }

  export type CaseUpdateWithWhereUniqueWithoutOfficerInput = {
    where: CaseWhereUniqueInput
    data: XOR<CaseUpdateWithoutOfficerInput, CaseUncheckedUpdateWithoutOfficerInput>
  }

  export type CaseUpdateManyWithWhereWithoutOfficerInput = {
    where: CaseScalarWhereInput
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyWithoutOfficerInput>
  }

  export type CaseUpsertWithWhereUniqueWithoutMediatorInput = {
    where: CaseWhereUniqueInput
    update: XOR<CaseUpdateWithoutMediatorInput, CaseUncheckedUpdateWithoutMediatorInput>
    create: XOR<CaseCreateWithoutMediatorInput, CaseUncheckedCreateWithoutMediatorInput>
  }

  export type CaseUpdateWithWhereUniqueWithoutMediatorInput = {
    where: CaseWhereUniqueInput
    data: XOR<CaseUpdateWithoutMediatorInput, CaseUncheckedUpdateWithoutMediatorInput>
  }

  export type CaseUpdateManyWithWhereWithoutMediatorInput = {
    where: CaseScalarWhereInput
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyWithoutMediatorInput>
  }

  export type CaseUpsertWithWhereUniqueWithoutSocialWorkerInput = {
    where: CaseWhereUniqueInput
    update: XOR<CaseUpdateWithoutSocialWorkerInput, CaseUncheckedUpdateWithoutSocialWorkerInput>
    create: XOR<CaseCreateWithoutSocialWorkerInput, CaseUncheckedCreateWithoutSocialWorkerInput>
  }

  export type CaseUpdateWithWhereUniqueWithoutSocialWorkerInput = {
    where: CaseWhereUniqueInput
    data: XOR<CaseUpdateWithoutSocialWorkerInput, CaseUncheckedUpdateWithoutSocialWorkerInput>
  }

  export type CaseUpdateManyWithWhereWithoutSocialWorkerInput = {
    where: CaseScalarWhereInput
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyWithoutSocialWorkerInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    content?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    read?: BoolFilter<"Notification"> | boolean
    userId?: StringFilter<"Notification"> | string
    caseId?: StringNullableFilter<"Notification"> | string | null
  }

  export type MediationRequestUpsertWithWhereUniqueWithoutRequesterInput = {
    where: MediationRequestWhereUniqueInput
    update: XOR<MediationRequestUpdateWithoutRequesterInput, MediationRequestUncheckedUpdateWithoutRequesterInput>
    create: XOR<MediationRequestCreateWithoutRequesterInput, MediationRequestUncheckedCreateWithoutRequesterInput>
  }

  export type MediationRequestUpdateWithWhereUniqueWithoutRequesterInput = {
    where: MediationRequestWhereUniqueInput
    data: XOR<MediationRequestUpdateWithoutRequesterInput, MediationRequestUncheckedUpdateWithoutRequesterInput>
  }

  export type MediationRequestUpdateManyWithWhereWithoutRequesterInput = {
    where: MediationRequestScalarWhereInput
    data: XOR<MediationRequestUpdateManyMutationInput, MediationRequestUncheckedUpdateManyWithoutRequesterInput>
  }

  export type MediationRequestScalarWhereInput = {
    AND?: MediationRequestScalarWhereInput | MediationRequestScalarWhereInput[]
    OR?: MediationRequestScalarWhereInput[]
    NOT?: MediationRequestScalarWhereInput | MediationRequestScalarWhereInput[]
    id?: StringFilter<"MediationRequest"> | string
    createdAt?: DateTimeFilter<"MediationRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MediationRequest"> | Date | string
    status?: EnumMediationStatusFilter<"MediationRequest"> | $Enums.MediationStatus
    reason?: StringFilter<"MediationRequest"> | string
    proposal?: StringNullableFilter<"MediationRequest"> | string | null
    requesterId?: StringFilter<"MediationRequest"> | string
    mediatorId?: StringNullableFilter<"MediationRequest"> | string | null
    caseId?: StringFilter<"MediationRequest"> | string
  }

  export type MediationRequestUpsertWithWhereUniqueWithoutMediatorInput = {
    where: MediationRequestWhereUniqueInput
    update: XOR<MediationRequestUpdateWithoutMediatorInput, MediationRequestUncheckedUpdateWithoutMediatorInput>
    create: XOR<MediationRequestCreateWithoutMediatorInput, MediationRequestUncheckedCreateWithoutMediatorInput>
  }

  export type MediationRequestUpdateWithWhereUniqueWithoutMediatorInput = {
    where: MediationRequestWhereUniqueInput
    data: XOR<MediationRequestUpdateWithoutMediatorInput, MediationRequestUncheckedUpdateWithoutMediatorInput>
  }

  export type MediationRequestUpdateManyWithWhereWithoutMediatorInput = {
    where: MediationRequestScalarWhereInput
    data: XOR<MediationRequestUpdateManyMutationInput, MediationRequestUncheckedUpdateManyWithoutMediatorInput>
  }

  export type UserCreateWithoutCasesAsLandlordInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsTenant?: CaseCreateNestedManyWithoutTenantInput
    casesAsOfficer?: CaseCreateNestedManyWithoutOfficerInput
    casesAsMediator?: CaseCreateNestedManyWithoutMediatorInput
    casesAsSocialWorker?: CaseCreateNestedManyWithoutSocialWorkerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    mediationRequests?: MediationRequestCreateNestedManyWithoutRequesterInput
    mediationHandled?: MediationRequestCreateNestedManyWithoutMediatorInput
  }

  export type UserUncheckedCreateWithoutCasesAsLandlordInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsTenant?: CaseUncheckedCreateNestedManyWithoutTenantInput
    casesAsOfficer?: CaseUncheckedCreateNestedManyWithoutOfficerInput
    casesAsMediator?: CaseUncheckedCreateNestedManyWithoutMediatorInput
    casesAsSocialWorker?: CaseUncheckedCreateNestedManyWithoutSocialWorkerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    mediationRequests?: MediationRequestUncheckedCreateNestedManyWithoutRequesterInput
    mediationHandled?: MediationRequestUncheckedCreateNestedManyWithoutMediatorInput
  }

  export type UserCreateOrConnectWithoutCasesAsLandlordInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCasesAsLandlordInput, UserUncheckedCreateWithoutCasesAsLandlordInput>
  }

  export type UserCreateWithoutCasesAsTenantInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsLandlord?: CaseCreateNestedManyWithoutLandlordInput
    casesAsOfficer?: CaseCreateNestedManyWithoutOfficerInput
    casesAsMediator?: CaseCreateNestedManyWithoutMediatorInput
    casesAsSocialWorker?: CaseCreateNestedManyWithoutSocialWorkerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    mediationRequests?: MediationRequestCreateNestedManyWithoutRequesterInput
    mediationHandled?: MediationRequestCreateNestedManyWithoutMediatorInput
  }

  export type UserUncheckedCreateWithoutCasesAsTenantInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsLandlord?: CaseUncheckedCreateNestedManyWithoutLandlordInput
    casesAsOfficer?: CaseUncheckedCreateNestedManyWithoutOfficerInput
    casesAsMediator?: CaseUncheckedCreateNestedManyWithoutMediatorInput
    casesAsSocialWorker?: CaseUncheckedCreateNestedManyWithoutSocialWorkerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    mediationRequests?: MediationRequestUncheckedCreateNestedManyWithoutRequesterInput
    mediationHandled?: MediationRequestUncheckedCreateNestedManyWithoutMediatorInput
  }

  export type UserCreateOrConnectWithoutCasesAsTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCasesAsTenantInput, UserUncheckedCreateWithoutCasesAsTenantInput>
  }

  export type UserCreateWithoutCasesAsOfficerInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsLandlord?: CaseCreateNestedManyWithoutLandlordInput
    casesAsTenant?: CaseCreateNestedManyWithoutTenantInput
    casesAsMediator?: CaseCreateNestedManyWithoutMediatorInput
    casesAsSocialWorker?: CaseCreateNestedManyWithoutSocialWorkerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    mediationRequests?: MediationRequestCreateNestedManyWithoutRequesterInput
    mediationHandled?: MediationRequestCreateNestedManyWithoutMediatorInput
  }

  export type UserUncheckedCreateWithoutCasesAsOfficerInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsLandlord?: CaseUncheckedCreateNestedManyWithoutLandlordInput
    casesAsTenant?: CaseUncheckedCreateNestedManyWithoutTenantInput
    casesAsMediator?: CaseUncheckedCreateNestedManyWithoutMediatorInput
    casesAsSocialWorker?: CaseUncheckedCreateNestedManyWithoutSocialWorkerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    mediationRequests?: MediationRequestUncheckedCreateNestedManyWithoutRequesterInput
    mediationHandled?: MediationRequestUncheckedCreateNestedManyWithoutMediatorInput
  }

  export type UserCreateOrConnectWithoutCasesAsOfficerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCasesAsOfficerInput, UserUncheckedCreateWithoutCasesAsOfficerInput>
  }

  export type UserCreateWithoutCasesAsMediatorInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsLandlord?: CaseCreateNestedManyWithoutLandlordInput
    casesAsTenant?: CaseCreateNestedManyWithoutTenantInput
    casesAsOfficer?: CaseCreateNestedManyWithoutOfficerInput
    casesAsSocialWorker?: CaseCreateNestedManyWithoutSocialWorkerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    mediationRequests?: MediationRequestCreateNestedManyWithoutRequesterInput
    mediationHandled?: MediationRequestCreateNestedManyWithoutMediatorInput
  }

  export type UserUncheckedCreateWithoutCasesAsMediatorInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsLandlord?: CaseUncheckedCreateNestedManyWithoutLandlordInput
    casesAsTenant?: CaseUncheckedCreateNestedManyWithoutTenantInput
    casesAsOfficer?: CaseUncheckedCreateNestedManyWithoutOfficerInput
    casesAsSocialWorker?: CaseUncheckedCreateNestedManyWithoutSocialWorkerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    mediationRequests?: MediationRequestUncheckedCreateNestedManyWithoutRequesterInput
    mediationHandled?: MediationRequestUncheckedCreateNestedManyWithoutMediatorInput
  }

  export type UserCreateOrConnectWithoutCasesAsMediatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCasesAsMediatorInput, UserUncheckedCreateWithoutCasesAsMediatorInput>
  }

  export type UserCreateWithoutCasesAsSocialWorkerInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsLandlord?: CaseCreateNestedManyWithoutLandlordInput
    casesAsTenant?: CaseCreateNestedManyWithoutTenantInput
    casesAsOfficer?: CaseCreateNestedManyWithoutOfficerInput
    casesAsMediator?: CaseCreateNestedManyWithoutMediatorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    mediationRequests?: MediationRequestCreateNestedManyWithoutRequesterInput
    mediationHandled?: MediationRequestCreateNestedManyWithoutMediatorInput
  }

  export type UserUncheckedCreateWithoutCasesAsSocialWorkerInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsLandlord?: CaseUncheckedCreateNestedManyWithoutLandlordInput
    casesAsTenant?: CaseUncheckedCreateNestedManyWithoutTenantInput
    casesAsOfficer?: CaseUncheckedCreateNestedManyWithoutOfficerInput
    casesAsMediator?: CaseUncheckedCreateNestedManyWithoutMediatorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    mediationRequests?: MediationRequestUncheckedCreateNestedManyWithoutRequesterInput
    mediationHandled?: MediationRequestUncheckedCreateNestedManyWithoutMediatorInput
  }

  export type UserCreateOrConnectWithoutCasesAsSocialWorkerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCasesAsSocialWorkerInput, UserUncheckedCreateWithoutCasesAsSocialWorkerInput>
  }

  export type DocumentCreateWithoutCaseInput = {
    id?: string
    title: string
    type: $Enums.DocumentType
    filePath: string
    uploadedAt?: Date | string
  }

  export type DocumentUncheckedCreateWithoutCaseInput = {
    id?: string
    title: string
    type: $Enums.DocumentType
    filePath: string
    uploadedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutCaseInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutCaseInput, DocumentUncheckedCreateWithoutCaseInput>
  }

  export type DocumentCreateManyCaseInputEnvelope = {
    data: DocumentCreateManyCaseInput | DocumentCreateManyCaseInput[]
  }

  export type NotificationCreateWithoutCaseInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    read?: boolean
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutCaseInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    read?: boolean
    userId: string
  }

  export type NotificationCreateOrConnectWithoutCaseInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutCaseInput, NotificationUncheckedCreateWithoutCaseInput>
  }

  export type NotificationCreateManyCaseInputEnvelope = {
    data: NotificationCreateManyCaseInput | NotificationCreateManyCaseInput[]
  }

  export type MediationRequestCreateWithoutCaseInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.MediationStatus
    reason: string
    proposal?: string | null
    requester: UserCreateNestedOneWithoutMediationRequestsInput
    mediator?: UserCreateNestedOneWithoutMediationHandledInput
    meetings?: MediationMeetingCreateNestedManyWithoutMediationInput
  }

  export type MediationRequestUncheckedCreateWithoutCaseInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.MediationStatus
    reason: string
    proposal?: string | null
    requesterId: string
    mediatorId?: string | null
    meetings?: MediationMeetingUncheckedCreateNestedManyWithoutMediationInput
  }

  export type MediationRequestCreateOrConnectWithoutCaseInput = {
    where: MediationRequestWhereUniqueInput
    create: XOR<MediationRequestCreateWithoutCaseInput, MediationRequestUncheckedCreateWithoutCaseInput>
  }

  export type MediationRequestCreateManyCaseInputEnvelope = {
    data: MediationRequestCreateManyCaseInput | MediationRequestCreateManyCaseInput[]
  }

  export type CaseEventCreateWithoutCaseInput = {
    id?: string
    date: Date | string
    type: $Enums.EventType
    description: string
    actor: string
  }

  export type CaseEventUncheckedCreateWithoutCaseInput = {
    id?: string
    date: Date | string
    type: $Enums.EventType
    description: string
    actor: string
  }

  export type CaseEventCreateOrConnectWithoutCaseInput = {
    where: CaseEventWhereUniqueInput
    create: XOR<CaseEventCreateWithoutCaseInput, CaseEventUncheckedCreateWithoutCaseInput>
  }

  export type CaseEventCreateManyCaseInputEnvelope = {
    data: CaseEventCreateManyCaseInput | CaseEventCreateManyCaseInput[]
  }

  export type UserUpsertWithoutCasesAsLandlordInput = {
    update: XOR<UserUpdateWithoutCasesAsLandlordInput, UserUncheckedUpdateWithoutCasesAsLandlordInput>
    create: XOR<UserCreateWithoutCasesAsLandlordInput, UserUncheckedCreateWithoutCasesAsLandlordInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCasesAsLandlordInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCasesAsLandlordInput, UserUncheckedUpdateWithoutCasesAsLandlordInput>
  }

  export type UserUpdateWithoutCasesAsLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsTenant?: CaseUpdateManyWithoutTenantNestedInput
    casesAsOfficer?: CaseUpdateManyWithoutOfficerNestedInput
    casesAsMediator?: CaseUpdateManyWithoutMediatorNestedInput
    casesAsSocialWorker?: CaseUpdateManyWithoutSocialWorkerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    mediationRequests?: MediationRequestUpdateManyWithoutRequesterNestedInput
    mediationHandled?: MediationRequestUpdateManyWithoutMediatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCasesAsLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsTenant?: CaseUncheckedUpdateManyWithoutTenantNestedInput
    casesAsOfficer?: CaseUncheckedUpdateManyWithoutOfficerNestedInput
    casesAsMediator?: CaseUncheckedUpdateManyWithoutMediatorNestedInput
    casesAsSocialWorker?: CaseUncheckedUpdateManyWithoutSocialWorkerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    mediationRequests?: MediationRequestUncheckedUpdateManyWithoutRequesterNestedInput
    mediationHandled?: MediationRequestUncheckedUpdateManyWithoutMediatorNestedInput
  }

  export type UserUpsertWithoutCasesAsTenantInput = {
    update: XOR<UserUpdateWithoutCasesAsTenantInput, UserUncheckedUpdateWithoutCasesAsTenantInput>
    create: XOR<UserCreateWithoutCasesAsTenantInput, UserUncheckedCreateWithoutCasesAsTenantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCasesAsTenantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCasesAsTenantInput, UserUncheckedUpdateWithoutCasesAsTenantInput>
  }

  export type UserUpdateWithoutCasesAsTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsLandlord?: CaseUpdateManyWithoutLandlordNestedInput
    casesAsOfficer?: CaseUpdateManyWithoutOfficerNestedInput
    casesAsMediator?: CaseUpdateManyWithoutMediatorNestedInput
    casesAsSocialWorker?: CaseUpdateManyWithoutSocialWorkerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    mediationRequests?: MediationRequestUpdateManyWithoutRequesterNestedInput
    mediationHandled?: MediationRequestUpdateManyWithoutMediatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCasesAsTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsLandlord?: CaseUncheckedUpdateManyWithoutLandlordNestedInput
    casesAsOfficer?: CaseUncheckedUpdateManyWithoutOfficerNestedInput
    casesAsMediator?: CaseUncheckedUpdateManyWithoutMediatorNestedInput
    casesAsSocialWorker?: CaseUncheckedUpdateManyWithoutSocialWorkerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    mediationRequests?: MediationRequestUncheckedUpdateManyWithoutRequesterNestedInput
    mediationHandled?: MediationRequestUncheckedUpdateManyWithoutMediatorNestedInput
  }

  export type UserUpsertWithoutCasesAsOfficerInput = {
    update: XOR<UserUpdateWithoutCasesAsOfficerInput, UserUncheckedUpdateWithoutCasesAsOfficerInput>
    create: XOR<UserCreateWithoutCasesAsOfficerInput, UserUncheckedCreateWithoutCasesAsOfficerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCasesAsOfficerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCasesAsOfficerInput, UserUncheckedUpdateWithoutCasesAsOfficerInput>
  }

  export type UserUpdateWithoutCasesAsOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsLandlord?: CaseUpdateManyWithoutLandlordNestedInput
    casesAsTenant?: CaseUpdateManyWithoutTenantNestedInput
    casesAsMediator?: CaseUpdateManyWithoutMediatorNestedInput
    casesAsSocialWorker?: CaseUpdateManyWithoutSocialWorkerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    mediationRequests?: MediationRequestUpdateManyWithoutRequesterNestedInput
    mediationHandled?: MediationRequestUpdateManyWithoutMediatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCasesAsOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsLandlord?: CaseUncheckedUpdateManyWithoutLandlordNestedInput
    casesAsTenant?: CaseUncheckedUpdateManyWithoutTenantNestedInput
    casesAsMediator?: CaseUncheckedUpdateManyWithoutMediatorNestedInput
    casesAsSocialWorker?: CaseUncheckedUpdateManyWithoutSocialWorkerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    mediationRequests?: MediationRequestUncheckedUpdateManyWithoutRequesterNestedInput
    mediationHandled?: MediationRequestUncheckedUpdateManyWithoutMediatorNestedInput
  }

  export type UserUpsertWithoutCasesAsMediatorInput = {
    update: XOR<UserUpdateWithoutCasesAsMediatorInput, UserUncheckedUpdateWithoutCasesAsMediatorInput>
    create: XOR<UserCreateWithoutCasesAsMediatorInput, UserUncheckedCreateWithoutCasesAsMediatorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCasesAsMediatorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCasesAsMediatorInput, UserUncheckedUpdateWithoutCasesAsMediatorInput>
  }

  export type UserUpdateWithoutCasesAsMediatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsLandlord?: CaseUpdateManyWithoutLandlordNestedInput
    casesAsTenant?: CaseUpdateManyWithoutTenantNestedInput
    casesAsOfficer?: CaseUpdateManyWithoutOfficerNestedInput
    casesAsSocialWorker?: CaseUpdateManyWithoutSocialWorkerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    mediationRequests?: MediationRequestUpdateManyWithoutRequesterNestedInput
    mediationHandled?: MediationRequestUpdateManyWithoutMediatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCasesAsMediatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsLandlord?: CaseUncheckedUpdateManyWithoutLandlordNestedInput
    casesAsTenant?: CaseUncheckedUpdateManyWithoutTenantNestedInput
    casesAsOfficer?: CaseUncheckedUpdateManyWithoutOfficerNestedInput
    casesAsSocialWorker?: CaseUncheckedUpdateManyWithoutSocialWorkerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    mediationRequests?: MediationRequestUncheckedUpdateManyWithoutRequesterNestedInput
    mediationHandled?: MediationRequestUncheckedUpdateManyWithoutMediatorNestedInput
  }

  export type UserUpsertWithoutCasesAsSocialWorkerInput = {
    update: XOR<UserUpdateWithoutCasesAsSocialWorkerInput, UserUncheckedUpdateWithoutCasesAsSocialWorkerInput>
    create: XOR<UserCreateWithoutCasesAsSocialWorkerInput, UserUncheckedCreateWithoutCasesAsSocialWorkerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCasesAsSocialWorkerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCasesAsSocialWorkerInput, UserUncheckedUpdateWithoutCasesAsSocialWorkerInput>
  }

  export type UserUpdateWithoutCasesAsSocialWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsLandlord?: CaseUpdateManyWithoutLandlordNestedInput
    casesAsTenant?: CaseUpdateManyWithoutTenantNestedInput
    casesAsOfficer?: CaseUpdateManyWithoutOfficerNestedInput
    casesAsMediator?: CaseUpdateManyWithoutMediatorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    mediationRequests?: MediationRequestUpdateManyWithoutRequesterNestedInput
    mediationHandled?: MediationRequestUpdateManyWithoutMediatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCasesAsSocialWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsLandlord?: CaseUncheckedUpdateManyWithoutLandlordNestedInput
    casesAsTenant?: CaseUncheckedUpdateManyWithoutTenantNestedInput
    casesAsOfficer?: CaseUncheckedUpdateManyWithoutOfficerNestedInput
    casesAsMediator?: CaseUncheckedUpdateManyWithoutMediatorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    mediationRequests?: MediationRequestUncheckedUpdateManyWithoutRequesterNestedInput
    mediationHandled?: MediationRequestUncheckedUpdateManyWithoutMediatorNestedInput
  }

  export type DocumentUpsertWithWhereUniqueWithoutCaseInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutCaseInput, DocumentUncheckedUpdateWithoutCaseInput>
    create: XOR<DocumentCreateWithoutCaseInput, DocumentUncheckedCreateWithoutCaseInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutCaseInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutCaseInput, DocumentUncheckedUpdateWithoutCaseInput>
  }

  export type DocumentUpdateManyWithWhereWithoutCaseInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutCaseInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    title?: StringFilter<"Document"> | string
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    filePath?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    caseId?: StringFilter<"Document"> | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutCaseInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutCaseInput, NotificationUncheckedUpdateWithoutCaseInput>
    create: XOR<NotificationCreateWithoutCaseInput, NotificationUncheckedCreateWithoutCaseInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutCaseInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutCaseInput, NotificationUncheckedUpdateWithoutCaseInput>
  }

  export type NotificationUpdateManyWithWhereWithoutCaseInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutCaseInput>
  }

  export type MediationRequestUpsertWithWhereUniqueWithoutCaseInput = {
    where: MediationRequestWhereUniqueInput
    update: XOR<MediationRequestUpdateWithoutCaseInput, MediationRequestUncheckedUpdateWithoutCaseInput>
    create: XOR<MediationRequestCreateWithoutCaseInput, MediationRequestUncheckedCreateWithoutCaseInput>
  }

  export type MediationRequestUpdateWithWhereUniqueWithoutCaseInput = {
    where: MediationRequestWhereUniqueInput
    data: XOR<MediationRequestUpdateWithoutCaseInput, MediationRequestUncheckedUpdateWithoutCaseInput>
  }

  export type MediationRequestUpdateManyWithWhereWithoutCaseInput = {
    where: MediationRequestScalarWhereInput
    data: XOR<MediationRequestUpdateManyMutationInput, MediationRequestUncheckedUpdateManyWithoutCaseInput>
  }

  export type CaseEventUpsertWithWhereUniqueWithoutCaseInput = {
    where: CaseEventWhereUniqueInput
    update: XOR<CaseEventUpdateWithoutCaseInput, CaseEventUncheckedUpdateWithoutCaseInput>
    create: XOR<CaseEventCreateWithoutCaseInput, CaseEventUncheckedCreateWithoutCaseInput>
  }

  export type CaseEventUpdateWithWhereUniqueWithoutCaseInput = {
    where: CaseEventWhereUniqueInput
    data: XOR<CaseEventUpdateWithoutCaseInput, CaseEventUncheckedUpdateWithoutCaseInput>
  }

  export type CaseEventUpdateManyWithWhereWithoutCaseInput = {
    where: CaseEventScalarWhereInput
    data: XOR<CaseEventUpdateManyMutationInput, CaseEventUncheckedUpdateManyWithoutCaseInput>
  }

  export type CaseEventScalarWhereInput = {
    AND?: CaseEventScalarWhereInput | CaseEventScalarWhereInput[]
    OR?: CaseEventScalarWhereInput[]
    NOT?: CaseEventScalarWhereInput | CaseEventScalarWhereInput[]
    id?: StringFilter<"CaseEvent"> | string
    date?: DateTimeFilter<"CaseEvent"> | Date | string
    type?: EnumEventTypeFilter<"CaseEvent"> | $Enums.EventType
    description?: StringFilter<"CaseEvent"> | string
    actor?: StringFilter<"CaseEvent"> | string
    caseId?: StringFilter<"CaseEvent"> | string
  }

  export type CaseCreateWithoutDocumentsInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    landlord: UserCreateNestedOneWithoutCasesAsLandlordInput
    tenant: UserCreateNestedOneWithoutCasesAsTenantInput
    officer?: UserCreateNestedOneWithoutCasesAsOfficerInput
    mediator?: UserCreateNestedOneWithoutCasesAsMediatorInput
    socialWorker?: UserCreateNestedOneWithoutCasesAsSocialWorkerInput
    notifications?: NotificationCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestCreateNestedManyWithoutCaseInput
    events?: CaseEventCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutDocumentsInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    landlordId: string
    tenantId: string
    officerId?: string | null
    mediatorId?: string | null
    socialWorkerId?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestUncheckedCreateNestedManyWithoutCaseInput
    events?: CaseEventUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutDocumentsInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutDocumentsInput, CaseUncheckedCreateWithoutDocumentsInput>
  }

  export type CaseUpsertWithoutDocumentsInput = {
    update: XOR<CaseUpdateWithoutDocumentsInput, CaseUncheckedUpdateWithoutDocumentsInput>
    create: XOR<CaseCreateWithoutDocumentsInput, CaseUncheckedCreateWithoutDocumentsInput>
    where?: CaseWhereInput
  }

  export type CaseUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: CaseWhereInput
    data: XOR<CaseUpdateWithoutDocumentsInput, CaseUncheckedUpdateWithoutDocumentsInput>
  }

  export type CaseUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlord?: UserUpdateOneRequiredWithoutCasesAsLandlordNestedInput
    tenant?: UserUpdateOneRequiredWithoutCasesAsTenantNestedInput
    officer?: UserUpdateOneWithoutCasesAsOfficerNestedInput
    mediator?: UserUpdateOneWithoutCasesAsMediatorNestedInput
    socialWorker?: UserUpdateOneWithoutCasesAsSocialWorkerNestedInput
    notifications?: NotificationUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUpdateManyWithoutCaseNestedInput
    events?: CaseEventUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    landlordId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    socialWorkerId?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUncheckedUpdateManyWithoutCaseNestedInput
    events?: CaseEventUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsLandlord?: CaseCreateNestedManyWithoutLandlordInput
    casesAsTenant?: CaseCreateNestedManyWithoutTenantInput
    casesAsOfficer?: CaseCreateNestedManyWithoutOfficerInput
    casesAsMediator?: CaseCreateNestedManyWithoutMediatorInput
    casesAsSocialWorker?: CaseCreateNestedManyWithoutSocialWorkerInput
    mediationRequests?: MediationRequestCreateNestedManyWithoutRequesterInput
    mediationHandled?: MediationRequestCreateNestedManyWithoutMediatorInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsLandlord?: CaseUncheckedCreateNestedManyWithoutLandlordInput
    casesAsTenant?: CaseUncheckedCreateNestedManyWithoutTenantInput
    casesAsOfficer?: CaseUncheckedCreateNestedManyWithoutOfficerInput
    casesAsMediator?: CaseUncheckedCreateNestedManyWithoutMediatorInput
    casesAsSocialWorker?: CaseUncheckedCreateNestedManyWithoutSocialWorkerInput
    mediationRequests?: MediationRequestUncheckedCreateNestedManyWithoutRequesterInput
    mediationHandled?: MediationRequestUncheckedCreateNestedManyWithoutMediatorInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type CaseCreateWithoutNotificationsInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    landlord: UserCreateNestedOneWithoutCasesAsLandlordInput
    tenant: UserCreateNestedOneWithoutCasesAsTenantInput
    officer?: UserCreateNestedOneWithoutCasesAsOfficerInput
    mediator?: UserCreateNestedOneWithoutCasesAsMediatorInput
    socialWorker?: UserCreateNestedOneWithoutCasesAsSocialWorkerInput
    documents?: DocumentCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestCreateNestedManyWithoutCaseInput
    events?: CaseEventCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutNotificationsInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    landlordId: string
    tenantId: string
    officerId?: string | null
    mediatorId?: string | null
    socialWorkerId?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestUncheckedCreateNestedManyWithoutCaseInput
    events?: CaseEventUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutNotificationsInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutNotificationsInput, CaseUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsLandlord?: CaseUpdateManyWithoutLandlordNestedInput
    casesAsTenant?: CaseUpdateManyWithoutTenantNestedInput
    casesAsOfficer?: CaseUpdateManyWithoutOfficerNestedInput
    casesAsMediator?: CaseUpdateManyWithoutMediatorNestedInput
    casesAsSocialWorker?: CaseUpdateManyWithoutSocialWorkerNestedInput
    mediationRequests?: MediationRequestUpdateManyWithoutRequesterNestedInput
    mediationHandled?: MediationRequestUpdateManyWithoutMediatorNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsLandlord?: CaseUncheckedUpdateManyWithoutLandlordNestedInput
    casesAsTenant?: CaseUncheckedUpdateManyWithoutTenantNestedInput
    casesAsOfficer?: CaseUncheckedUpdateManyWithoutOfficerNestedInput
    casesAsMediator?: CaseUncheckedUpdateManyWithoutMediatorNestedInput
    casesAsSocialWorker?: CaseUncheckedUpdateManyWithoutSocialWorkerNestedInput
    mediationRequests?: MediationRequestUncheckedUpdateManyWithoutRequesterNestedInput
    mediationHandled?: MediationRequestUncheckedUpdateManyWithoutMediatorNestedInput
  }

  export type CaseUpsertWithoutNotificationsInput = {
    update: XOR<CaseUpdateWithoutNotificationsInput, CaseUncheckedUpdateWithoutNotificationsInput>
    create: XOR<CaseCreateWithoutNotificationsInput, CaseUncheckedCreateWithoutNotificationsInput>
    where?: CaseWhereInput
  }

  export type CaseUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: CaseWhereInput
    data: XOR<CaseUpdateWithoutNotificationsInput, CaseUncheckedUpdateWithoutNotificationsInput>
  }

  export type CaseUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlord?: UserUpdateOneRequiredWithoutCasesAsLandlordNestedInput
    tenant?: UserUpdateOneRequiredWithoutCasesAsTenantNestedInput
    officer?: UserUpdateOneWithoutCasesAsOfficerNestedInput
    mediator?: UserUpdateOneWithoutCasesAsMediatorNestedInput
    socialWorker?: UserUpdateOneWithoutCasesAsSocialWorkerNestedInput
    documents?: DocumentUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUpdateManyWithoutCaseNestedInput
    events?: CaseEventUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    landlordId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    socialWorkerId?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUncheckedUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUncheckedUpdateManyWithoutCaseNestedInput
    events?: CaseEventUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type UserCreateWithoutMediationRequestsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsLandlord?: CaseCreateNestedManyWithoutLandlordInput
    casesAsTenant?: CaseCreateNestedManyWithoutTenantInput
    casesAsOfficer?: CaseCreateNestedManyWithoutOfficerInput
    casesAsMediator?: CaseCreateNestedManyWithoutMediatorInput
    casesAsSocialWorker?: CaseCreateNestedManyWithoutSocialWorkerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    mediationHandled?: MediationRequestCreateNestedManyWithoutMediatorInput
  }

  export type UserUncheckedCreateWithoutMediationRequestsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsLandlord?: CaseUncheckedCreateNestedManyWithoutLandlordInput
    casesAsTenant?: CaseUncheckedCreateNestedManyWithoutTenantInput
    casesAsOfficer?: CaseUncheckedCreateNestedManyWithoutOfficerInput
    casesAsMediator?: CaseUncheckedCreateNestedManyWithoutMediatorInput
    casesAsSocialWorker?: CaseUncheckedCreateNestedManyWithoutSocialWorkerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    mediationHandled?: MediationRequestUncheckedCreateNestedManyWithoutMediatorInput
  }

  export type UserCreateOrConnectWithoutMediationRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMediationRequestsInput, UserUncheckedCreateWithoutMediationRequestsInput>
  }

  export type UserCreateWithoutMediationHandledInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsLandlord?: CaseCreateNestedManyWithoutLandlordInput
    casesAsTenant?: CaseCreateNestedManyWithoutTenantInput
    casesAsOfficer?: CaseCreateNestedManyWithoutOfficerInput
    casesAsMediator?: CaseCreateNestedManyWithoutMediatorInput
    casesAsSocialWorker?: CaseCreateNestedManyWithoutSocialWorkerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    mediationRequests?: MediationRequestCreateNestedManyWithoutRequesterInput
  }

  export type UserUncheckedCreateWithoutMediationHandledInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    situation?: string | null
    type?: string | null
    properties?: number | null
    office?: string | null
    organization?: string | null
    service?: string | null
    function?: string | null
    casesAsLandlord?: CaseUncheckedCreateNestedManyWithoutLandlordInput
    casesAsTenant?: CaseUncheckedCreateNestedManyWithoutTenantInput
    casesAsOfficer?: CaseUncheckedCreateNestedManyWithoutOfficerInput
    casesAsMediator?: CaseUncheckedCreateNestedManyWithoutMediatorInput
    casesAsSocialWorker?: CaseUncheckedCreateNestedManyWithoutSocialWorkerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    mediationRequests?: MediationRequestUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type UserCreateOrConnectWithoutMediationHandledInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMediationHandledInput, UserUncheckedCreateWithoutMediationHandledInput>
  }

  export type CaseCreateWithoutMediationRequestsInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    landlord: UserCreateNestedOneWithoutCasesAsLandlordInput
    tenant: UserCreateNestedOneWithoutCasesAsTenantInput
    officer?: UserCreateNestedOneWithoutCasesAsOfficerInput
    mediator?: UserCreateNestedOneWithoutCasesAsMediatorInput
    socialWorker?: UserCreateNestedOneWithoutCasesAsSocialWorkerInput
    documents?: DocumentCreateNestedManyWithoutCaseInput
    notifications?: NotificationCreateNestedManyWithoutCaseInput
    events?: CaseEventCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutMediationRequestsInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    landlordId: string
    tenantId: string
    officerId?: string | null
    mediatorId?: string | null
    socialWorkerId?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutCaseInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCaseInput
    events?: CaseEventUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutMediationRequestsInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutMediationRequestsInput, CaseUncheckedCreateWithoutMediationRequestsInput>
  }

  export type MediationMeetingCreateWithoutMediationInput = {
    id?: string
    date: Date | string
    location?: string | null
    videoLink?: string | null
    status: $Enums.MeetingStatus
    notes?: string | null
  }

  export type MediationMeetingUncheckedCreateWithoutMediationInput = {
    id?: string
    date: Date | string
    location?: string | null
    videoLink?: string | null
    status: $Enums.MeetingStatus
    notes?: string | null
  }

  export type MediationMeetingCreateOrConnectWithoutMediationInput = {
    where: MediationMeetingWhereUniqueInput
    create: XOR<MediationMeetingCreateWithoutMediationInput, MediationMeetingUncheckedCreateWithoutMediationInput>
  }

  export type MediationMeetingCreateManyMediationInputEnvelope = {
    data: MediationMeetingCreateManyMediationInput | MediationMeetingCreateManyMediationInput[]
  }

  export type UserUpsertWithoutMediationRequestsInput = {
    update: XOR<UserUpdateWithoutMediationRequestsInput, UserUncheckedUpdateWithoutMediationRequestsInput>
    create: XOR<UserCreateWithoutMediationRequestsInput, UserUncheckedCreateWithoutMediationRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMediationRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMediationRequestsInput, UserUncheckedUpdateWithoutMediationRequestsInput>
  }

  export type UserUpdateWithoutMediationRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsLandlord?: CaseUpdateManyWithoutLandlordNestedInput
    casesAsTenant?: CaseUpdateManyWithoutTenantNestedInput
    casesAsOfficer?: CaseUpdateManyWithoutOfficerNestedInput
    casesAsMediator?: CaseUpdateManyWithoutMediatorNestedInput
    casesAsSocialWorker?: CaseUpdateManyWithoutSocialWorkerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    mediationHandled?: MediationRequestUpdateManyWithoutMediatorNestedInput
  }

  export type UserUncheckedUpdateWithoutMediationRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsLandlord?: CaseUncheckedUpdateManyWithoutLandlordNestedInput
    casesAsTenant?: CaseUncheckedUpdateManyWithoutTenantNestedInput
    casesAsOfficer?: CaseUncheckedUpdateManyWithoutOfficerNestedInput
    casesAsMediator?: CaseUncheckedUpdateManyWithoutMediatorNestedInput
    casesAsSocialWorker?: CaseUncheckedUpdateManyWithoutSocialWorkerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    mediationHandled?: MediationRequestUncheckedUpdateManyWithoutMediatorNestedInput
  }

  export type UserUpsertWithoutMediationHandledInput = {
    update: XOR<UserUpdateWithoutMediationHandledInput, UserUncheckedUpdateWithoutMediationHandledInput>
    create: XOR<UserCreateWithoutMediationHandledInput, UserUncheckedCreateWithoutMediationHandledInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMediationHandledInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMediationHandledInput, UserUncheckedUpdateWithoutMediationHandledInput>
  }

  export type UserUpdateWithoutMediationHandledInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsLandlord?: CaseUpdateManyWithoutLandlordNestedInput
    casesAsTenant?: CaseUpdateManyWithoutTenantNestedInput
    casesAsOfficer?: CaseUpdateManyWithoutOfficerNestedInput
    casesAsMediator?: CaseUpdateManyWithoutMediatorNestedInput
    casesAsSocialWorker?: CaseUpdateManyWithoutSocialWorkerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    mediationRequests?: MediationRequestUpdateManyWithoutRequesterNestedInput
  }

  export type UserUncheckedUpdateWithoutMediationHandledInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableIntFieldUpdateOperationsInput | number | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    function?: NullableStringFieldUpdateOperationsInput | string | null
    casesAsLandlord?: CaseUncheckedUpdateManyWithoutLandlordNestedInput
    casesAsTenant?: CaseUncheckedUpdateManyWithoutTenantNestedInput
    casesAsOfficer?: CaseUncheckedUpdateManyWithoutOfficerNestedInput
    casesAsMediator?: CaseUncheckedUpdateManyWithoutMediatorNestedInput
    casesAsSocialWorker?: CaseUncheckedUpdateManyWithoutSocialWorkerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    mediationRequests?: MediationRequestUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type CaseUpsertWithoutMediationRequestsInput = {
    update: XOR<CaseUpdateWithoutMediationRequestsInput, CaseUncheckedUpdateWithoutMediationRequestsInput>
    create: XOR<CaseCreateWithoutMediationRequestsInput, CaseUncheckedCreateWithoutMediationRequestsInput>
    where?: CaseWhereInput
  }

  export type CaseUpdateToOneWithWhereWithoutMediationRequestsInput = {
    where?: CaseWhereInput
    data: XOR<CaseUpdateWithoutMediationRequestsInput, CaseUncheckedUpdateWithoutMediationRequestsInput>
  }

  export type CaseUpdateWithoutMediationRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlord?: UserUpdateOneRequiredWithoutCasesAsLandlordNestedInput
    tenant?: UserUpdateOneRequiredWithoutCasesAsTenantNestedInput
    officer?: UserUpdateOneWithoutCasesAsOfficerNestedInput
    mediator?: UserUpdateOneWithoutCasesAsMediatorNestedInput
    socialWorker?: UserUpdateOneWithoutCasesAsSocialWorkerNestedInput
    documents?: DocumentUpdateManyWithoutCaseNestedInput
    notifications?: NotificationUpdateManyWithoutCaseNestedInput
    events?: CaseEventUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutMediationRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    landlordId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    socialWorkerId?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUncheckedUpdateManyWithoutCaseNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCaseNestedInput
    events?: CaseEventUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type MediationMeetingUpsertWithWhereUniqueWithoutMediationInput = {
    where: MediationMeetingWhereUniqueInput
    update: XOR<MediationMeetingUpdateWithoutMediationInput, MediationMeetingUncheckedUpdateWithoutMediationInput>
    create: XOR<MediationMeetingCreateWithoutMediationInput, MediationMeetingUncheckedCreateWithoutMediationInput>
  }

  export type MediationMeetingUpdateWithWhereUniqueWithoutMediationInput = {
    where: MediationMeetingWhereUniqueInput
    data: XOR<MediationMeetingUpdateWithoutMediationInput, MediationMeetingUncheckedUpdateWithoutMediationInput>
  }

  export type MediationMeetingUpdateManyWithWhereWithoutMediationInput = {
    where: MediationMeetingScalarWhereInput
    data: XOR<MediationMeetingUpdateManyMutationInput, MediationMeetingUncheckedUpdateManyWithoutMediationInput>
  }

  export type MediationMeetingScalarWhereInput = {
    AND?: MediationMeetingScalarWhereInput | MediationMeetingScalarWhereInput[]
    OR?: MediationMeetingScalarWhereInput[]
    NOT?: MediationMeetingScalarWhereInput | MediationMeetingScalarWhereInput[]
    id?: StringFilter<"MediationMeeting"> | string
    date?: DateTimeFilter<"MediationMeeting"> | Date | string
    location?: StringNullableFilter<"MediationMeeting"> | string | null
    videoLink?: StringNullableFilter<"MediationMeeting"> | string | null
    status?: EnumMeetingStatusFilter<"MediationMeeting"> | $Enums.MeetingStatus
    notes?: StringNullableFilter<"MediationMeeting"> | string | null
    mediationId?: StringFilter<"MediationMeeting"> | string
  }

  export type MediationRequestCreateWithoutMeetingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.MediationStatus
    reason: string
    proposal?: string | null
    requester: UserCreateNestedOneWithoutMediationRequestsInput
    mediator?: UserCreateNestedOneWithoutMediationHandledInput
    case: CaseCreateNestedOneWithoutMediationRequestsInput
  }

  export type MediationRequestUncheckedCreateWithoutMeetingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.MediationStatus
    reason: string
    proposal?: string | null
    requesterId: string
    mediatorId?: string | null
    caseId: string
  }

  export type MediationRequestCreateOrConnectWithoutMeetingsInput = {
    where: MediationRequestWhereUniqueInput
    create: XOR<MediationRequestCreateWithoutMeetingsInput, MediationRequestUncheckedCreateWithoutMeetingsInput>
  }

  export type MediationRequestUpsertWithoutMeetingsInput = {
    update: XOR<MediationRequestUpdateWithoutMeetingsInput, MediationRequestUncheckedUpdateWithoutMeetingsInput>
    create: XOR<MediationRequestCreateWithoutMeetingsInput, MediationRequestUncheckedCreateWithoutMeetingsInput>
    where?: MediationRequestWhereInput
  }

  export type MediationRequestUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: MediationRequestWhereInput
    data: XOR<MediationRequestUpdateWithoutMeetingsInput, MediationRequestUncheckedUpdateWithoutMeetingsInput>
  }

  export type MediationRequestUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMediationStatusFieldUpdateOperationsInput | $Enums.MediationStatus
    reason?: StringFieldUpdateOperationsInput | string
    proposal?: NullableStringFieldUpdateOperationsInput | string | null
    requester?: UserUpdateOneRequiredWithoutMediationRequestsNestedInput
    mediator?: UserUpdateOneWithoutMediationHandledNestedInput
    case?: CaseUpdateOneRequiredWithoutMediationRequestsNestedInput
  }

  export type MediationRequestUncheckedUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMediationStatusFieldUpdateOperationsInput | $Enums.MediationStatus
    reason?: StringFieldUpdateOperationsInput | string
    proposal?: NullableStringFieldUpdateOperationsInput | string | null
    requesterId?: StringFieldUpdateOperationsInput | string
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    caseId?: StringFieldUpdateOperationsInput | string
  }

  export type CaseCreateWithoutEventsInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    landlord: UserCreateNestedOneWithoutCasesAsLandlordInput
    tenant: UserCreateNestedOneWithoutCasesAsTenantInput
    officer?: UserCreateNestedOneWithoutCasesAsOfficerInput
    mediator?: UserCreateNestedOneWithoutCasesAsMediatorInput
    socialWorker?: UserCreateNestedOneWithoutCasesAsSocialWorkerInput
    documents?: DocumentCreateNestedManyWithoutCaseInput
    notifications?: NotificationCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutEventsInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    landlordId: string
    tenantId: string
    officerId?: string | null
    mediatorId?: string | null
    socialWorkerId?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutCaseInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCaseInput
    mediationRequests?: MediationRequestUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutEventsInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutEventsInput, CaseUncheckedCreateWithoutEventsInput>
  }

  export type CaseUpsertWithoutEventsInput = {
    update: XOR<CaseUpdateWithoutEventsInput, CaseUncheckedUpdateWithoutEventsInput>
    create: XOR<CaseCreateWithoutEventsInput, CaseUncheckedCreateWithoutEventsInput>
    where?: CaseWhereInput
  }

  export type CaseUpdateToOneWithWhereWithoutEventsInput = {
    where?: CaseWhereInput
    data: XOR<CaseUpdateWithoutEventsInput, CaseUncheckedUpdateWithoutEventsInput>
  }

  export type CaseUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlord?: UserUpdateOneRequiredWithoutCasesAsLandlordNestedInput
    tenant?: UserUpdateOneRequiredWithoutCasesAsTenantNestedInput
    officer?: UserUpdateOneWithoutCasesAsOfficerNestedInput
    mediator?: UserUpdateOneWithoutCasesAsMediatorNestedInput
    socialWorker?: UserUpdateOneWithoutCasesAsSocialWorkerNestedInput
    documents?: DocumentUpdateManyWithoutCaseNestedInput
    notifications?: NotificationUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    landlordId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    socialWorkerId?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUncheckedUpdateManyWithoutCaseNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseCreateManyLandlordInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    tenantId: string
    officerId?: string | null
    mediatorId?: string | null
    socialWorkerId?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
  }

  export type CaseCreateManyTenantInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    landlordId: string
    officerId?: string | null
    mediatorId?: string | null
    socialWorkerId?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
  }

  export type CaseCreateManyOfficerInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    landlordId: string
    tenantId: string
    mediatorId?: string | null
    socialWorkerId?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
  }

  export type CaseCreateManyMediatorInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    landlordId: string
    tenantId: string
    officerId?: string | null
    socialWorkerId?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
  }

  export type CaseCreateManySocialWorkerInput = {
    id?: string
    reference: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.CaseStatus
    stage: $Enums.ProcedureStage
    urgency: $Enums.UrgencyLevel
    debtAmount: number
    description?: string | null
    landlordId: string
    tenantId: string
    officerId?: string | null
    mediatorId?: string | null
    housingType?: string | null
    housingArea?: number | null
    rent?: number | null
    charges?: number | null
    deposit?: number | null
    leaseStartDate?: Date | string | null
    leaseType?: string | null
    leaseDuration?: number | null
    address?: string | null
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    read?: boolean
    caseId?: string | null
  }

  export type MediationRequestCreateManyRequesterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.MediationStatus
    reason: string
    proposal?: string | null
    mediatorId?: string | null
    caseId: string
  }

  export type MediationRequestCreateManyMediatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.MediationStatus
    reason: string
    proposal?: string | null
    requesterId: string
    caseId: string
  }

  export type CaseUpdateWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: UserUpdateOneRequiredWithoutCasesAsTenantNestedInput
    officer?: UserUpdateOneWithoutCasesAsOfficerNestedInput
    mediator?: UserUpdateOneWithoutCasesAsMediatorNestedInput
    socialWorker?: UserUpdateOneWithoutCasesAsSocialWorkerNestedInput
    documents?: DocumentUpdateManyWithoutCaseNestedInput
    notifications?: NotificationUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUpdateManyWithoutCaseNestedInput
    events?: CaseEventUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    socialWorkerId?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUncheckedUpdateManyWithoutCaseNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUncheckedUpdateManyWithoutCaseNestedInput
    events?: CaseEventUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateManyWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    socialWorkerId?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaseUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlord?: UserUpdateOneRequiredWithoutCasesAsLandlordNestedInput
    officer?: UserUpdateOneWithoutCasesAsOfficerNestedInput
    mediator?: UserUpdateOneWithoutCasesAsMediatorNestedInput
    socialWorker?: UserUpdateOneWithoutCasesAsSocialWorkerNestedInput
    documents?: DocumentUpdateManyWithoutCaseNestedInput
    notifications?: NotificationUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUpdateManyWithoutCaseNestedInput
    events?: CaseEventUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    landlordId?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    socialWorkerId?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUncheckedUpdateManyWithoutCaseNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUncheckedUpdateManyWithoutCaseNestedInput
    events?: CaseEventUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    landlordId?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    socialWorkerId?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaseUpdateWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlord?: UserUpdateOneRequiredWithoutCasesAsLandlordNestedInput
    tenant?: UserUpdateOneRequiredWithoutCasesAsTenantNestedInput
    mediator?: UserUpdateOneWithoutCasesAsMediatorNestedInput
    socialWorker?: UserUpdateOneWithoutCasesAsSocialWorkerNestedInput
    documents?: DocumentUpdateManyWithoutCaseNestedInput
    notifications?: NotificationUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUpdateManyWithoutCaseNestedInput
    events?: CaseEventUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    landlordId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    socialWorkerId?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUncheckedUpdateManyWithoutCaseNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUncheckedUpdateManyWithoutCaseNestedInput
    events?: CaseEventUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateManyWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    landlordId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    socialWorkerId?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaseUpdateWithoutMediatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlord?: UserUpdateOneRequiredWithoutCasesAsLandlordNestedInput
    tenant?: UserUpdateOneRequiredWithoutCasesAsTenantNestedInput
    officer?: UserUpdateOneWithoutCasesAsOfficerNestedInput
    socialWorker?: UserUpdateOneWithoutCasesAsSocialWorkerNestedInput
    documents?: DocumentUpdateManyWithoutCaseNestedInput
    notifications?: NotificationUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUpdateManyWithoutCaseNestedInput
    events?: CaseEventUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutMediatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    landlordId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    socialWorkerId?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUncheckedUpdateManyWithoutCaseNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUncheckedUpdateManyWithoutCaseNestedInput
    events?: CaseEventUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateManyWithoutMediatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    landlordId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    socialWorkerId?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaseUpdateWithoutSocialWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlord?: UserUpdateOneRequiredWithoutCasesAsLandlordNestedInput
    tenant?: UserUpdateOneRequiredWithoutCasesAsTenantNestedInput
    officer?: UserUpdateOneWithoutCasesAsOfficerNestedInput
    mediator?: UserUpdateOneWithoutCasesAsMediatorNestedInput
    documents?: DocumentUpdateManyWithoutCaseNestedInput
    notifications?: NotificationUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUpdateManyWithoutCaseNestedInput
    events?: CaseEventUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutSocialWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    landlordId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUncheckedUpdateManyWithoutCaseNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCaseNestedInput
    mediationRequests?: MediationRequestUncheckedUpdateManyWithoutCaseNestedInput
    events?: CaseEventUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateManyWithoutSocialWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    stage?: EnumProcedureStageFieldUpdateOperationsInput | $Enums.ProcedureStage
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    debtAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    landlordId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    housingType?: NullableStringFieldUpdateOperationsInput | string | null
    housingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rent?: NullableFloatFieldUpdateOperationsInput | number | null
    charges?: NullableFloatFieldUpdateOperationsInput | number | null
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    leaseStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseType?: NullableStringFieldUpdateOperationsInput | string | null
    leaseDuration?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    case?: CaseUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    caseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    caseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediationRequestUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMediationStatusFieldUpdateOperationsInput | $Enums.MediationStatus
    reason?: StringFieldUpdateOperationsInput | string
    proposal?: NullableStringFieldUpdateOperationsInput | string | null
    mediator?: UserUpdateOneWithoutMediationHandledNestedInput
    case?: CaseUpdateOneRequiredWithoutMediationRequestsNestedInput
    meetings?: MediationMeetingUpdateManyWithoutMediationNestedInput
  }

  export type MediationRequestUncheckedUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMediationStatusFieldUpdateOperationsInput | $Enums.MediationStatus
    reason?: StringFieldUpdateOperationsInput | string
    proposal?: NullableStringFieldUpdateOperationsInput | string | null
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    caseId?: StringFieldUpdateOperationsInput | string
    meetings?: MediationMeetingUncheckedUpdateManyWithoutMediationNestedInput
  }

  export type MediationRequestUncheckedUpdateManyWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMediationStatusFieldUpdateOperationsInput | $Enums.MediationStatus
    reason?: StringFieldUpdateOperationsInput | string
    proposal?: NullableStringFieldUpdateOperationsInput | string | null
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    caseId?: StringFieldUpdateOperationsInput | string
  }

  export type MediationRequestUpdateWithoutMediatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMediationStatusFieldUpdateOperationsInput | $Enums.MediationStatus
    reason?: StringFieldUpdateOperationsInput | string
    proposal?: NullableStringFieldUpdateOperationsInput | string | null
    requester?: UserUpdateOneRequiredWithoutMediationRequestsNestedInput
    case?: CaseUpdateOneRequiredWithoutMediationRequestsNestedInput
    meetings?: MediationMeetingUpdateManyWithoutMediationNestedInput
  }

  export type MediationRequestUncheckedUpdateWithoutMediatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMediationStatusFieldUpdateOperationsInput | $Enums.MediationStatus
    reason?: StringFieldUpdateOperationsInput | string
    proposal?: NullableStringFieldUpdateOperationsInput | string | null
    requesterId?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
    meetings?: MediationMeetingUncheckedUpdateManyWithoutMediationNestedInput
  }

  export type MediationRequestUncheckedUpdateManyWithoutMediatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMediationStatusFieldUpdateOperationsInput | $Enums.MediationStatus
    reason?: StringFieldUpdateOperationsInput | string
    proposal?: NullableStringFieldUpdateOperationsInput | string | null
    requesterId?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCreateManyCaseInput = {
    id?: string
    title: string
    type: $Enums.DocumentType
    filePath: string
    uploadedAt?: Date | string
  }

  export type NotificationCreateManyCaseInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    read?: boolean
    userId: string
  }

  export type MediationRequestCreateManyCaseInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.MediationStatus
    reason: string
    proposal?: string | null
    requesterId: string
    mediatorId?: string | null
  }

  export type CaseEventCreateManyCaseInput = {
    id?: string
    date: Date | string
    type: $Enums.EventType
    description: string
    actor: string
  }

  export type DocumentUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    filePath?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    filePath?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    filePath?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateManyWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MediationRequestUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMediationStatusFieldUpdateOperationsInput | $Enums.MediationStatus
    reason?: StringFieldUpdateOperationsInput | string
    proposal?: NullableStringFieldUpdateOperationsInput | string | null
    requester?: UserUpdateOneRequiredWithoutMediationRequestsNestedInput
    mediator?: UserUpdateOneWithoutMediationHandledNestedInput
    meetings?: MediationMeetingUpdateManyWithoutMediationNestedInput
  }

  export type MediationRequestUncheckedUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMediationStatusFieldUpdateOperationsInput | $Enums.MediationStatus
    reason?: StringFieldUpdateOperationsInput | string
    proposal?: NullableStringFieldUpdateOperationsInput | string | null
    requesterId?: StringFieldUpdateOperationsInput | string
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
    meetings?: MediationMeetingUncheckedUpdateManyWithoutMediationNestedInput
  }

  export type MediationRequestUncheckedUpdateManyWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMediationStatusFieldUpdateOperationsInput | $Enums.MediationStatus
    reason?: StringFieldUpdateOperationsInput | string
    proposal?: NullableStringFieldUpdateOperationsInput | string | null
    requesterId?: StringFieldUpdateOperationsInput | string
    mediatorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaseEventUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    description?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
  }

  export type CaseEventUncheckedUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    description?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
  }

  export type CaseEventUncheckedUpdateManyWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    description?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
  }

  export type MediationMeetingCreateManyMediationInput = {
    id?: string
    date: Date | string
    location?: string | null
    videoLink?: string | null
    status: $Enums.MeetingStatus
    notes?: string | null
  }

  export type MediationMeetingUpdateWithoutMediationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediationMeetingUncheckedUpdateWithoutMediationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediationMeetingUncheckedUpdateManyWithoutMediationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}