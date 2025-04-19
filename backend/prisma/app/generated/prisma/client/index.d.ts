
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
 * Model Dispositivo
 * 
 */
export type Dispositivo = $Result.DefaultSelection<Prisma.$DispositivoPayload>
/**
 * Model Config
 * 
 */
export type Config = $Result.DefaultSelection<Prisma.$ConfigPayload>
/**
 * Model Historico
 * 
 */
export type Historico = $Result.DefaultSelection<Prisma.$HistoricoPayload>
/**
 * Model Historico_temp
 * 
 */
export type Historico_temp = $Result.DefaultSelection<Prisma.$Historico_tempPayload>
/**
 * Model Historico_mov
 * 
 */
export type Historico_mov = $Result.DefaultSelection<Prisma.$Historico_movPayload>

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
   * `prisma.dispositivo`: Exposes CRUD operations for the **Dispositivo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dispositivos
    * const dispositivos = await prisma.dispositivo.findMany()
    * ```
    */
  get dispositivo(): Prisma.DispositivoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.config`: Exposes CRUD operations for the **Config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configs
    * const configs = await prisma.config.findMany()
    * ```
    */
  get config(): Prisma.ConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historico`: Exposes CRUD operations for the **Historico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historicos
    * const historicos = await prisma.historico.findMany()
    * ```
    */
  get historico(): Prisma.HistoricoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historico_temp`: Exposes CRUD operations for the **Historico_temp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historico_temps
    * const historico_temps = await prisma.historico_temp.findMany()
    * ```
    */
  get historico_temp(): Prisma.Historico_tempDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historico_mov`: Exposes CRUD operations for the **Historico_mov** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historico_movs
    * const historico_movs = await prisma.historico_mov.findMany()
    * ```
    */
  get historico_mov(): Prisma.Historico_movDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Dispositivo: 'Dispositivo',
    Config: 'Config',
    Historico: 'Historico',
    Historico_temp: 'Historico_temp',
    Historico_mov: 'Historico_mov'
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
      modelProps: "user" | "dispositivo" | "config" | "historico" | "historico_temp" | "historico_mov"
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
      Dispositivo: {
        payload: Prisma.$DispositivoPayload<ExtArgs>
        fields: Prisma.DispositivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DispositivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DispositivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          findFirst: {
            args: Prisma.DispositivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DispositivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          findMany: {
            args: Prisma.DispositivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>[]
          }
          create: {
            args: Prisma.DispositivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          createMany: {
            args: Prisma.DispositivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DispositivoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>[]
          }
          delete: {
            args: Prisma.DispositivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          update: {
            args: Prisma.DispositivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          deleteMany: {
            args: Prisma.DispositivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DispositivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DispositivoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>[]
          }
          upsert: {
            args: Prisma.DispositivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          aggregate: {
            args: Prisma.DispositivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDispositivo>
          }
          groupBy: {
            args: Prisma.DispositivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DispositivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DispositivoCountArgs<ExtArgs>
            result: $Utils.Optional<DispositivoCountAggregateOutputType> | number
          }
        }
      }
      Config: {
        payload: Prisma.$ConfigPayload<ExtArgs>
        fields: Prisma.ConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          findFirst: {
            args: Prisma.ConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          findMany: {
            args: Prisma.ConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>[]
          }
          create: {
            args: Prisma.ConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          createMany: {
            args: Prisma.ConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>[]
          }
          delete: {
            args: Prisma.ConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          update: {
            args: Prisma.ConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          deleteMany: {
            args: Prisma.ConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>[]
          }
          upsert: {
            args: Prisma.ConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          aggregate: {
            args: Prisma.ConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfig>
          }
          groupBy: {
            args: Prisma.ConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfigCountArgs<ExtArgs>
            result: $Utils.Optional<ConfigCountAggregateOutputType> | number
          }
        }
      }
      Historico: {
        payload: Prisma.$HistoricoPayload<ExtArgs>
        fields: Prisma.HistoricoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoricoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoricoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          findFirst: {
            args: Prisma.HistoricoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoricoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          findMany: {
            args: Prisma.HistoricoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>[]
          }
          create: {
            args: Prisma.HistoricoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          createMany: {
            args: Prisma.HistoricoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoricoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>[]
          }
          delete: {
            args: Prisma.HistoricoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          update: {
            args: Prisma.HistoricoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          deleteMany: {
            args: Prisma.HistoricoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoricoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoricoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>[]
          }
          upsert: {
            args: Prisma.HistoricoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          aggregate: {
            args: Prisma.HistoricoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorico>
          }
          groupBy: {
            args: Prisma.HistoricoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoricoCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoCountAggregateOutputType> | number
          }
        }
      }
      Historico_temp: {
        payload: Prisma.$Historico_tempPayload<ExtArgs>
        fields: Prisma.Historico_tempFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Historico_tempFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_tempPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Historico_tempFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_tempPayload>
          }
          findFirst: {
            args: Prisma.Historico_tempFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_tempPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Historico_tempFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_tempPayload>
          }
          findMany: {
            args: Prisma.Historico_tempFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_tempPayload>[]
          }
          create: {
            args: Prisma.Historico_tempCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_tempPayload>
          }
          createMany: {
            args: Prisma.Historico_tempCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Historico_tempCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_tempPayload>[]
          }
          delete: {
            args: Prisma.Historico_tempDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_tempPayload>
          }
          update: {
            args: Prisma.Historico_tempUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_tempPayload>
          }
          deleteMany: {
            args: Prisma.Historico_tempDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Historico_tempUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Historico_tempUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_tempPayload>[]
          }
          upsert: {
            args: Prisma.Historico_tempUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_tempPayload>
          }
          aggregate: {
            args: Prisma.Historico_tempAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorico_temp>
          }
          groupBy: {
            args: Prisma.Historico_tempGroupByArgs<ExtArgs>
            result: $Utils.Optional<Historico_tempGroupByOutputType>[]
          }
          count: {
            args: Prisma.Historico_tempCountArgs<ExtArgs>
            result: $Utils.Optional<Historico_tempCountAggregateOutputType> | number
          }
        }
      }
      Historico_mov: {
        payload: Prisma.$Historico_movPayload<ExtArgs>
        fields: Prisma.Historico_movFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Historico_movFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_movPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Historico_movFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_movPayload>
          }
          findFirst: {
            args: Prisma.Historico_movFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_movPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Historico_movFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_movPayload>
          }
          findMany: {
            args: Prisma.Historico_movFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_movPayload>[]
          }
          create: {
            args: Prisma.Historico_movCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_movPayload>
          }
          createMany: {
            args: Prisma.Historico_movCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Historico_movCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_movPayload>[]
          }
          delete: {
            args: Prisma.Historico_movDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_movPayload>
          }
          update: {
            args: Prisma.Historico_movUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_movPayload>
          }
          deleteMany: {
            args: Prisma.Historico_movDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Historico_movUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Historico_movUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_movPayload>[]
          }
          upsert: {
            args: Prisma.Historico_movUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_movPayload>
          }
          aggregate: {
            args: Prisma.Historico_movAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorico_mov>
          }
          groupBy: {
            args: Prisma.Historico_movGroupByArgs<ExtArgs>
            result: $Utils.Optional<Historico_movGroupByOutputType>[]
          }
          count: {
            args: Prisma.Historico_movCountArgs<ExtArgs>
            result: $Utils.Optional<Historico_movCountAggregateOutputType> | number
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
    dispositivo?: DispositivoOmit
    config?: ConfigOmit
    historico?: HistoricoOmit
    historico_temp?: Historico_tempOmit
    historico_mov?: Historico_movOmit
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
    dispositivos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispositivos?: boolean | UserCountOutputTypeCountDispositivosArgs
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
  export type UserCountOutputTypeCountDispositivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispositivoWhereInput
  }


  /**
   * Count Type DispositivoCountOutputType
   */

  export type DispositivoCountOutputType = {
    config: number
    historico: number
  }

  export type DispositivoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    config?: boolean | DispositivoCountOutputTypeCountConfigArgs
    historico?: boolean | DispositivoCountOutputTypeCountHistoricoArgs
  }

  // Custom InputTypes
  /**
   * DispositivoCountOutputType without action
   */
  export type DispositivoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispositivoCountOutputType
     */
    select?: DispositivoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DispositivoCountOutputType without action
   */
  export type DispositivoCountOutputTypeCountConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfigWhereInput
  }

  /**
   * DispositivoCountOutputType without action
   */
  export type DispositivoCountOutputTypeCountHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoWhereInput
  }


  /**
   * Count Type HistoricoCountOutputType
   */

  export type HistoricoCountOutputType = {
    historico_temp: number
    historico_mov: number
  }

  export type HistoricoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historico_temp?: boolean | HistoricoCountOutputTypeCountHistorico_tempArgs
    historico_mov?: boolean | HistoricoCountOutputTypeCountHistorico_movArgs
  }

  // Custom InputTypes
  /**
   * HistoricoCountOutputType without action
   */
  export type HistoricoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoCountOutputType
     */
    select?: HistoricoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HistoricoCountOutputType without action
   */
  export type HistoricoCountOutputTypeCountHistorico_tempArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Historico_tempWhereInput
  }

  /**
   * HistoricoCountOutputType without action
   */
  export type HistoricoCountOutputTypeCountHistorico_movArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Historico_movWhereInput
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    senha: string | null
    createdAt: Date | null
    UpdatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    senha: string | null
    createdAt: Date | null
    UpdatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    senha: number
    createdAt: number
    UpdatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    senha?: true
    createdAt?: true
    UpdatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    senha?: true
    createdAt?: true
    UpdatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    senha?: true
    createdAt?: true
    UpdatedAt?: true
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
    id: number
    username: string | null
    email: string
    senha: string
    createdAt: Date
    UpdatedAt: Date
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
    username?: boolean
    email?: boolean
    senha?: boolean
    createdAt?: boolean
    UpdatedAt?: boolean
    dispositivos?: boolean | User$dispositivosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    senha?: boolean
    createdAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    senha?: boolean
    createdAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    senha?: boolean
    createdAt?: boolean
    UpdatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "senha" | "createdAt" | "UpdatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispositivos?: boolean | User$dispositivosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      dispositivos: Prisma.$DispositivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string | null
      email: string
      senha: string
      createdAt: Date
      UpdatedAt: Date
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
    dispositivos<T extends User$dispositivosArgs<ExtArgs> = {}>(args?: Subset<T, User$dispositivosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly senha: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly UpdatedAt: FieldRef<"User", 'DateTime'>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
   * User.dispositivos
   */
  export type User$dispositivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    where?: DispositivoWhereInput
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    cursor?: DispositivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
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
   * Model Dispositivo
   */

  export type AggregateDispositivo = {
    _count: DispositivoCountAggregateOutputType | null
    _avg: DispositivoAvgAggregateOutputType | null
    _sum: DispositivoSumAggregateOutputType | null
    _min: DispositivoMinAggregateOutputType | null
    _max: DispositivoMaxAggregateOutputType | null
  }

  export type DispositivoAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DispositivoSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DispositivoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    userId: number | null
  }

  export type DispositivoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    userId: number | null
  }

  export type DispositivoCountAggregateOutputType = {
    id: number
    nome: number
    userId: number
    _all: number
  }


  export type DispositivoAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DispositivoSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DispositivoMinAggregateInputType = {
    id?: true
    nome?: true
    userId?: true
  }

  export type DispositivoMaxAggregateInputType = {
    id?: true
    nome?: true
    userId?: true
  }

  export type DispositivoCountAggregateInputType = {
    id?: true
    nome?: true
    userId?: true
    _all?: true
  }

  export type DispositivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispositivo to aggregate.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dispositivos
    **/
    _count?: true | DispositivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DispositivoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DispositivoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DispositivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DispositivoMaxAggregateInputType
  }

  export type GetDispositivoAggregateType<T extends DispositivoAggregateArgs> = {
        [P in keyof T & keyof AggregateDispositivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispositivo[P]>
      : GetScalarType<T[P], AggregateDispositivo[P]>
  }




  export type DispositivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispositivoWhereInput
    orderBy?: DispositivoOrderByWithAggregationInput | DispositivoOrderByWithAggregationInput[]
    by: DispositivoScalarFieldEnum[] | DispositivoScalarFieldEnum
    having?: DispositivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DispositivoCountAggregateInputType | true
    _avg?: DispositivoAvgAggregateInputType
    _sum?: DispositivoSumAggregateInputType
    _min?: DispositivoMinAggregateInputType
    _max?: DispositivoMaxAggregateInputType
  }

  export type DispositivoGroupByOutputType = {
    id: number
    nome: string
    userId: number
    _count: DispositivoCountAggregateOutputType | null
    _avg: DispositivoAvgAggregateOutputType | null
    _sum: DispositivoSumAggregateOutputType | null
    _min: DispositivoMinAggregateOutputType | null
    _max: DispositivoMaxAggregateOutputType | null
  }

  type GetDispositivoGroupByPayload<T extends DispositivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DispositivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DispositivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DispositivoGroupByOutputType[P]>
            : GetScalarType<T[P], DispositivoGroupByOutputType[P]>
        }
      >
    >


  export type DispositivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    userId?: boolean
    user?: boolean | Dispositivo$userArgs<ExtArgs>
    config?: boolean | Dispositivo$configArgs<ExtArgs>
    historico?: boolean | Dispositivo$historicoArgs<ExtArgs>
    _count?: boolean | DispositivoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispositivo"]>

  export type DispositivoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    userId?: boolean
    user?: boolean | Dispositivo$userArgs<ExtArgs>
  }, ExtArgs["result"]["dispositivo"]>

  export type DispositivoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    userId?: boolean
    user?: boolean | Dispositivo$userArgs<ExtArgs>
  }, ExtArgs["result"]["dispositivo"]>

  export type DispositivoSelectScalar = {
    id?: boolean
    nome?: boolean
    userId?: boolean
  }

  export type DispositivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "userId", ExtArgs["result"]["dispositivo"]>
  export type DispositivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Dispositivo$userArgs<ExtArgs>
    config?: boolean | Dispositivo$configArgs<ExtArgs>
    historico?: boolean | Dispositivo$historicoArgs<ExtArgs>
    _count?: boolean | DispositivoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DispositivoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Dispositivo$userArgs<ExtArgs>
  }
  export type DispositivoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Dispositivo$userArgs<ExtArgs>
  }

  export type $DispositivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dispositivo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      config: Prisma.$ConfigPayload<ExtArgs>[]
      historico: Prisma.$HistoricoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      userId: number
    }, ExtArgs["result"]["dispositivo"]>
    composites: {}
  }

  type DispositivoGetPayload<S extends boolean | null | undefined | DispositivoDefaultArgs> = $Result.GetResult<Prisma.$DispositivoPayload, S>

  type DispositivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DispositivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DispositivoCountAggregateInputType | true
    }

  export interface DispositivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dispositivo'], meta: { name: 'Dispositivo' } }
    /**
     * Find zero or one Dispositivo that matches the filter.
     * @param {DispositivoFindUniqueArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DispositivoFindUniqueArgs>(args: SelectSubset<T, DispositivoFindUniqueArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dispositivo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DispositivoFindUniqueOrThrowArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DispositivoFindUniqueOrThrowArgs>(args: SelectSubset<T, DispositivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispositivo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoFindFirstArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DispositivoFindFirstArgs>(args?: SelectSubset<T, DispositivoFindFirstArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispositivo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoFindFirstOrThrowArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DispositivoFindFirstOrThrowArgs>(args?: SelectSubset<T, DispositivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dispositivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dispositivos
     * const dispositivos = await prisma.dispositivo.findMany()
     * 
     * // Get first 10 Dispositivos
     * const dispositivos = await prisma.dispositivo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dispositivoWithIdOnly = await prisma.dispositivo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DispositivoFindManyArgs>(args?: SelectSubset<T, DispositivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dispositivo.
     * @param {DispositivoCreateArgs} args - Arguments to create a Dispositivo.
     * @example
     * // Create one Dispositivo
     * const Dispositivo = await prisma.dispositivo.create({
     *   data: {
     *     // ... data to create a Dispositivo
     *   }
     * })
     * 
     */
    create<T extends DispositivoCreateArgs>(args: SelectSubset<T, DispositivoCreateArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dispositivos.
     * @param {DispositivoCreateManyArgs} args - Arguments to create many Dispositivos.
     * @example
     * // Create many Dispositivos
     * const dispositivo = await prisma.dispositivo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DispositivoCreateManyArgs>(args?: SelectSubset<T, DispositivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dispositivos and returns the data saved in the database.
     * @param {DispositivoCreateManyAndReturnArgs} args - Arguments to create many Dispositivos.
     * @example
     * // Create many Dispositivos
     * const dispositivo = await prisma.dispositivo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dispositivos and only return the `id`
     * const dispositivoWithIdOnly = await prisma.dispositivo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DispositivoCreateManyAndReturnArgs>(args?: SelectSubset<T, DispositivoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dispositivo.
     * @param {DispositivoDeleteArgs} args - Arguments to delete one Dispositivo.
     * @example
     * // Delete one Dispositivo
     * const Dispositivo = await prisma.dispositivo.delete({
     *   where: {
     *     // ... filter to delete one Dispositivo
     *   }
     * })
     * 
     */
    delete<T extends DispositivoDeleteArgs>(args: SelectSubset<T, DispositivoDeleteArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dispositivo.
     * @param {DispositivoUpdateArgs} args - Arguments to update one Dispositivo.
     * @example
     * // Update one Dispositivo
     * const dispositivo = await prisma.dispositivo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DispositivoUpdateArgs>(args: SelectSubset<T, DispositivoUpdateArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dispositivos.
     * @param {DispositivoDeleteManyArgs} args - Arguments to filter Dispositivos to delete.
     * @example
     * // Delete a few Dispositivos
     * const { count } = await prisma.dispositivo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DispositivoDeleteManyArgs>(args?: SelectSubset<T, DispositivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dispositivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dispositivos
     * const dispositivo = await prisma.dispositivo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DispositivoUpdateManyArgs>(args: SelectSubset<T, DispositivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dispositivos and returns the data updated in the database.
     * @param {DispositivoUpdateManyAndReturnArgs} args - Arguments to update many Dispositivos.
     * @example
     * // Update many Dispositivos
     * const dispositivo = await prisma.dispositivo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dispositivos and only return the `id`
     * const dispositivoWithIdOnly = await prisma.dispositivo.updateManyAndReturn({
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
    updateManyAndReturn<T extends DispositivoUpdateManyAndReturnArgs>(args: SelectSubset<T, DispositivoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dispositivo.
     * @param {DispositivoUpsertArgs} args - Arguments to update or create a Dispositivo.
     * @example
     * // Update or create a Dispositivo
     * const dispositivo = await prisma.dispositivo.upsert({
     *   create: {
     *     // ... data to create a Dispositivo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dispositivo we want to update
     *   }
     * })
     */
    upsert<T extends DispositivoUpsertArgs>(args: SelectSubset<T, DispositivoUpsertArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dispositivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoCountArgs} args - Arguments to filter Dispositivos to count.
     * @example
     * // Count the number of Dispositivos
     * const count = await prisma.dispositivo.count({
     *   where: {
     *     // ... the filter for the Dispositivos we want to count
     *   }
     * })
    **/
    count<T extends DispositivoCountArgs>(
      args?: Subset<T, DispositivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DispositivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dispositivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DispositivoAggregateArgs>(args: Subset<T, DispositivoAggregateArgs>): Prisma.PrismaPromise<GetDispositivoAggregateType<T>>

    /**
     * Group by Dispositivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoGroupByArgs} args - Group by arguments.
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
      T extends DispositivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DispositivoGroupByArgs['orderBy'] }
        : { orderBy?: DispositivoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DispositivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDispositivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dispositivo model
   */
  readonly fields: DispositivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dispositivo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DispositivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Dispositivo$userArgs<ExtArgs> = {}>(args?: Subset<T, Dispositivo$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    config<T extends Dispositivo$configArgs<ExtArgs> = {}>(args?: Subset<T, Dispositivo$configArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historico<T extends Dispositivo$historicoArgs<ExtArgs> = {}>(args?: Subset<T, Dispositivo$historicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Dispositivo model
   */
  interface DispositivoFieldRefs {
    readonly id: FieldRef<"Dispositivo", 'Int'>
    readonly nome: FieldRef<"Dispositivo", 'String'>
    readonly userId: FieldRef<"Dispositivo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Dispositivo findUnique
   */
  export type DispositivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo findUniqueOrThrow
   */
  export type DispositivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo findFirst
   */
  export type DispositivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispositivos.
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispositivos.
     */
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * Dispositivo findFirstOrThrow
   */
  export type DispositivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispositivos.
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispositivos.
     */
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * Dispositivo findMany
   */
  export type DispositivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivos to fetch.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dispositivos.
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * Dispositivo create
   */
  export type DispositivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * The data needed to create a Dispositivo.
     */
    data: XOR<DispositivoCreateInput, DispositivoUncheckedCreateInput>
  }

  /**
   * Dispositivo createMany
   */
  export type DispositivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dispositivos.
     */
    data: DispositivoCreateManyInput | DispositivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dispositivo createManyAndReturn
   */
  export type DispositivoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * The data used to create many Dispositivos.
     */
    data: DispositivoCreateManyInput | DispositivoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dispositivo update
   */
  export type DispositivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * The data needed to update a Dispositivo.
     */
    data: XOR<DispositivoUpdateInput, DispositivoUncheckedUpdateInput>
    /**
     * Choose, which Dispositivo to update.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo updateMany
   */
  export type DispositivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dispositivos.
     */
    data: XOR<DispositivoUpdateManyMutationInput, DispositivoUncheckedUpdateManyInput>
    /**
     * Filter which Dispositivos to update
     */
    where?: DispositivoWhereInput
    /**
     * Limit how many Dispositivos to update.
     */
    limit?: number
  }

  /**
   * Dispositivo updateManyAndReturn
   */
  export type DispositivoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * The data used to update Dispositivos.
     */
    data: XOR<DispositivoUpdateManyMutationInput, DispositivoUncheckedUpdateManyInput>
    /**
     * Filter which Dispositivos to update
     */
    where?: DispositivoWhereInput
    /**
     * Limit how many Dispositivos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dispositivo upsert
   */
  export type DispositivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * The filter to search for the Dispositivo to update in case it exists.
     */
    where: DispositivoWhereUniqueInput
    /**
     * In case the Dispositivo found by the `where` argument doesn't exist, create a new Dispositivo with this data.
     */
    create: XOR<DispositivoCreateInput, DispositivoUncheckedCreateInput>
    /**
     * In case the Dispositivo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DispositivoUpdateInput, DispositivoUncheckedUpdateInput>
  }

  /**
   * Dispositivo delete
   */
  export type DispositivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter which Dispositivo to delete.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo deleteMany
   */
  export type DispositivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispositivos to delete
     */
    where?: DispositivoWhereInput
    /**
     * Limit how many Dispositivos to delete.
     */
    limit?: number
  }

  /**
   * Dispositivo.user
   */
  export type Dispositivo$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Dispositivo.config
   */
  export type Dispositivo$configArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigInclude<ExtArgs> | null
    where?: ConfigWhereInput
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    cursor?: ConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Dispositivo.historico
   */
  export type Dispositivo$historicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    where?: HistoricoWhereInput
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    cursor?: HistoricoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Dispositivo without action
   */
  export type DispositivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
  }


  /**
   * Model Config
   */

  export type AggregateConfig = {
    _count: ConfigCountAggregateOutputType | null
    _avg: ConfigAvgAggregateOutputType | null
    _sum: ConfigSumAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  export type ConfigAvgAggregateOutputType = {
    id: number | null
    temperatura: number | null
    temperaturaMax: number | null
    temperaturaMin: number | null
    umidade: number | null
    distanciaSensor: number | null
    motionMax: number | null
    dispositivosId: number | null
  }

  export type ConfigSumAggregateOutputType = {
    id: number | null
    temperatura: number | null
    temperaturaMax: number | null
    temperaturaMin: number | null
    umidade: number | null
    distanciaSensor: number | null
    motionMax: number | null
    dispositivosId: number | null
  }

  export type ConfigMinAggregateOutputType = {
    id: number | null
    temperatura: number | null
    temperaturaMax: number | null
    temperaturaMin: number | null
    umidade: number | null
    sensor: boolean | null
    distanciaSensor: number | null
    ligado: boolean | null
    motionMax: number | null
    createdAt: Date | null
    updatedAt: Date | null
    dispositivosId: number | null
  }

  export type ConfigMaxAggregateOutputType = {
    id: number | null
    temperatura: number | null
    temperaturaMax: number | null
    temperaturaMin: number | null
    umidade: number | null
    sensor: boolean | null
    distanciaSensor: number | null
    ligado: boolean | null
    motionMax: number | null
    createdAt: Date | null
    updatedAt: Date | null
    dispositivosId: number | null
  }

  export type ConfigCountAggregateOutputType = {
    id: number
    temperatura: number
    temperaturaMax: number
    temperaturaMin: number
    umidade: number
    sensor: number
    distanciaSensor: number
    ligado: number
    motionMax: number
    createdAt: number
    updatedAt: number
    dispositivosId: number
    _all: number
  }


  export type ConfigAvgAggregateInputType = {
    id?: true
    temperatura?: true
    temperaturaMax?: true
    temperaturaMin?: true
    umidade?: true
    distanciaSensor?: true
    motionMax?: true
    dispositivosId?: true
  }

  export type ConfigSumAggregateInputType = {
    id?: true
    temperatura?: true
    temperaturaMax?: true
    temperaturaMin?: true
    umidade?: true
    distanciaSensor?: true
    motionMax?: true
    dispositivosId?: true
  }

  export type ConfigMinAggregateInputType = {
    id?: true
    temperatura?: true
    temperaturaMax?: true
    temperaturaMin?: true
    umidade?: true
    sensor?: true
    distanciaSensor?: true
    ligado?: true
    motionMax?: true
    createdAt?: true
    updatedAt?: true
    dispositivosId?: true
  }

  export type ConfigMaxAggregateInputType = {
    id?: true
    temperatura?: true
    temperaturaMax?: true
    temperaturaMin?: true
    umidade?: true
    sensor?: true
    distanciaSensor?: true
    ligado?: true
    motionMax?: true
    createdAt?: true
    updatedAt?: true
    dispositivosId?: true
  }

  export type ConfigCountAggregateInputType = {
    id?: true
    temperatura?: true
    temperaturaMax?: true
    temperaturaMin?: true
    umidade?: true
    sensor?: true
    distanciaSensor?: true
    ligado?: true
    motionMax?: true
    createdAt?: true
    updatedAt?: true
    dispositivosId?: true
    _all?: true
  }

  export type ConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Config to aggregate.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configs
    **/
    _count?: true | ConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigMaxAggregateInputType
  }

  export type GetConfigAggregateType<T extends ConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfig[P]>
      : GetScalarType<T[P], AggregateConfig[P]>
  }




  export type ConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfigWhereInput
    orderBy?: ConfigOrderByWithAggregationInput | ConfigOrderByWithAggregationInput[]
    by: ConfigScalarFieldEnum[] | ConfigScalarFieldEnum
    having?: ConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigCountAggregateInputType | true
    _avg?: ConfigAvgAggregateInputType
    _sum?: ConfigSumAggregateInputType
    _min?: ConfigMinAggregateInputType
    _max?: ConfigMaxAggregateInputType
  }

  export type ConfigGroupByOutputType = {
    id: number
    temperatura: number
    temperaturaMax: number
    temperaturaMin: number
    umidade: number
    sensor: boolean
    distanciaSensor: number
    ligado: boolean
    motionMax: number
    createdAt: Date
    updatedAt: Date | null
    dispositivosId: number
    _count: ConfigCountAggregateOutputType | null
    _avg: ConfigAvgAggregateOutputType | null
    _sum: ConfigSumAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  type GetConfigGroupByPayload<T extends ConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigGroupByOutputType[P]>
        }
      >
    >


  export type ConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    temperatura?: boolean
    temperaturaMax?: boolean
    temperaturaMin?: boolean
    umidade?: boolean
    sensor?: boolean
    distanciaSensor?: boolean
    ligado?: boolean
    motionMax?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dispositivosId?: boolean
    dispositivos?: boolean | Config$dispositivosArgs<ExtArgs>
  }, ExtArgs["result"]["config"]>

  export type ConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    temperatura?: boolean
    temperaturaMax?: boolean
    temperaturaMin?: boolean
    umidade?: boolean
    sensor?: boolean
    distanciaSensor?: boolean
    ligado?: boolean
    motionMax?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dispositivosId?: boolean
    dispositivos?: boolean | Config$dispositivosArgs<ExtArgs>
  }, ExtArgs["result"]["config"]>

  export type ConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    temperatura?: boolean
    temperaturaMax?: boolean
    temperaturaMin?: boolean
    umidade?: boolean
    sensor?: boolean
    distanciaSensor?: boolean
    ligado?: boolean
    motionMax?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dispositivosId?: boolean
    dispositivos?: boolean | Config$dispositivosArgs<ExtArgs>
  }, ExtArgs["result"]["config"]>

  export type ConfigSelectScalar = {
    id?: boolean
    temperatura?: boolean
    temperaturaMax?: boolean
    temperaturaMin?: boolean
    umidade?: boolean
    sensor?: boolean
    distanciaSensor?: boolean
    ligado?: boolean
    motionMax?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dispositivosId?: boolean
  }

  export type ConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "temperatura" | "temperaturaMax" | "temperaturaMin" | "umidade" | "sensor" | "distanciaSensor" | "ligado" | "motionMax" | "createdAt" | "updatedAt" | "dispositivosId", ExtArgs["result"]["config"]>
  export type ConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispositivos?: boolean | Config$dispositivosArgs<ExtArgs>
  }
  export type ConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispositivos?: boolean | Config$dispositivosArgs<ExtArgs>
  }
  export type ConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispositivos?: boolean | Config$dispositivosArgs<ExtArgs>
  }

  export type $ConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Config"
    objects: {
      dispositivos: Prisma.$DispositivoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      temperatura: number
      temperaturaMax: number
      temperaturaMin: number
      umidade: number
      sensor: boolean
      distanciaSensor: number
      ligado: boolean
      motionMax: number
      createdAt: Date
      updatedAt: Date | null
      dispositivosId: number
    }, ExtArgs["result"]["config"]>
    composites: {}
  }

  type ConfigGetPayload<S extends boolean | null | undefined | ConfigDefaultArgs> = $Result.GetResult<Prisma.$ConfigPayload, S>

  type ConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfigCountAggregateInputType | true
    }

  export interface ConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Config'], meta: { name: 'Config' } }
    /**
     * Find zero or one Config that matches the filter.
     * @param {ConfigFindUniqueArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfigFindUniqueArgs>(args: SelectSubset<T, ConfigFindUniqueArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Config that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfigFindUniqueOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfigFindFirstArgs>(args?: SelectSubset<T, ConfigFindFirstArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configs
     * const configs = await prisma.config.findMany()
     * 
     * // Get first 10 Configs
     * const configs = await prisma.config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configWithIdOnly = await prisma.config.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfigFindManyArgs>(args?: SelectSubset<T, ConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Config.
     * @param {ConfigCreateArgs} args - Arguments to create a Config.
     * @example
     * // Create one Config
     * const Config = await prisma.config.create({
     *   data: {
     *     // ... data to create a Config
     *   }
     * })
     * 
     */
    create<T extends ConfigCreateArgs>(args: SelectSubset<T, ConfigCreateArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configs.
     * @param {ConfigCreateManyArgs} args - Arguments to create many Configs.
     * @example
     * // Create many Configs
     * const config = await prisma.config.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfigCreateManyArgs>(args?: SelectSubset<T, ConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configs and returns the data saved in the database.
     * @param {ConfigCreateManyAndReturnArgs} args - Arguments to create many Configs.
     * @example
     * // Create many Configs
     * const config = await prisma.config.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configs and only return the `id`
     * const configWithIdOnly = await prisma.config.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Config.
     * @param {ConfigDeleteArgs} args - Arguments to delete one Config.
     * @example
     * // Delete one Config
     * const Config = await prisma.config.delete({
     *   where: {
     *     // ... filter to delete one Config
     *   }
     * })
     * 
     */
    delete<T extends ConfigDeleteArgs>(args: SelectSubset<T, ConfigDeleteArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Config.
     * @param {ConfigUpdateArgs} args - Arguments to update one Config.
     * @example
     * // Update one Config
     * const config = await prisma.config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfigUpdateArgs>(args: SelectSubset<T, ConfigUpdateArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configs.
     * @param {ConfigDeleteManyArgs} args - Arguments to filter Configs to delete.
     * @example
     * // Delete a few Configs
     * const { count } = await prisma.config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfigDeleteManyArgs>(args?: SelectSubset<T, ConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configs
     * const config = await prisma.config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfigUpdateManyArgs>(args: SelectSubset<T, ConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configs and returns the data updated in the database.
     * @param {ConfigUpdateManyAndReturnArgs} args - Arguments to update many Configs.
     * @example
     * // Update many Configs
     * const config = await prisma.config.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Configs and only return the `id`
     * const configWithIdOnly = await prisma.config.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Config.
     * @param {ConfigUpsertArgs} args - Arguments to update or create a Config.
     * @example
     * // Update or create a Config
     * const config = await prisma.config.upsert({
     *   create: {
     *     // ... data to create a Config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Config we want to update
     *   }
     * })
     */
    upsert<T extends ConfigUpsertArgs>(args: SelectSubset<T, ConfigUpsertArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigCountArgs} args - Arguments to filter Configs to count.
     * @example
     * // Count the number of Configs
     * const count = await prisma.config.count({
     *   where: {
     *     // ... the filter for the Configs we want to count
     *   }
     * })
    **/
    count<T extends ConfigCountArgs>(
      args?: Subset<T, ConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfigAggregateArgs>(args: Subset<T, ConfigAggregateArgs>): Prisma.PrismaPromise<GetConfigAggregateType<T>>

    /**
     * Group by Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigGroupByArgs} args - Group by arguments.
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
      T extends ConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigGroupByArgs['orderBy'] }
        : { orderBy?: ConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Config model
   */
  readonly fields: ConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dispositivos<T extends Config$dispositivosArgs<ExtArgs> = {}>(args?: Subset<T, Config$dispositivosArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Config model
   */
  interface ConfigFieldRefs {
    readonly id: FieldRef<"Config", 'Int'>
    readonly temperatura: FieldRef<"Config", 'Int'>
    readonly temperaturaMax: FieldRef<"Config", 'Int'>
    readonly temperaturaMin: FieldRef<"Config", 'Int'>
    readonly umidade: FieldRef<"Config", 'Int'>
    readonly sensor: FieldRef<"Config", 'Boolean'>
    readonly distanciaSensor: FieldRef<"Config", 'Int'>
    readonly ligado: FieldRef<"Config", 'Boolean'>
    readonly motionMax: FieldRef<"Config", 'Int'>
    readonly createdAt: FieldRef<"Config", 'DateTime'>
    readonly updatedAt: FieldRef<"Config", 'DateTime'>
    readonly dispositivosId: FieldRef<"Config", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Config findUnique
   */
  export type ConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigInclude<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config findUniqueOrThrow
   */
  export type ConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigInclude<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config findFirst
   */
  export type ConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigInclude<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config findFirstOrThrow
   */
  export type ConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigInclude<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config findMany
   */
  export type ConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigInclude<ExtArgs> | null
    /**
     * Filter, which Configs to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config create
   */
  export type ConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a Config.
     */
    data: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
  }

  /**
   * Config createMany
   */
  export type ConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configs.
     */
    data: ConfigCreateManyInput | ConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Config createManyAndReturn
   */
  export type ConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data used to create many Configs.
     */
    data: ConfigCreateManyInput | ConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Config update
   */
  export type ConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a Config.
     */
    data: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
    /**
     * Choose, which Config to update.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config updateMany
   */
  export type ConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configs.
     */
    data: XOR<ConfigUpdateManyMutationInput, ConfigUncheckedUpdateManyInput>
    /**
     * Filter which Configs to update
     */
    where?: ConfigWhereInput
    /**
     * Limit how many Configs to update.
     */
    limit?: number
  }

  /**
   * Config updateManyAndReturn
   */
  export type ConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data used to update Configs.
     */
    data: XOR<ConfigUpdateManyMutationInput, ConfigUncheckedUpdateManyInput>
    /**
     * Filter which Configs to update
     */
    where?: ConfigWhereInput
    /**
     * Limit how many Configs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Config upsert
   */
  export type ConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the Config to update in case it exists.
     */
    where: ConfigWhereUniqueInput
    /**
     * In case the Config found by the `where` argument doesn't exist, create a new Config with this data.
     */
    create: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
    /**
     * In case the Config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
  }

  /**
   * Config delete
   */
  export type ConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigInclude<ExtArgs> | null
    /**
     * Filter which Config to delete.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config deleteMany
   */
  export type ConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configs to delete
     */
    where?: ConfigWhereInput
    /**
     * Limit how many Configs to delete.
     */
    limit?: number
  }

  /**
   * Config.dispositivos
   */
  export type Config$dispositivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    where?: DispositivoWhereInput
  }

  /**
   * Config without action
   */
  export type ConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigInclude<ExtArgs> | null
  }


  /**
   * Model Historico
   */

  export type AggregateHistorico = {
    _count: HistoricoCountAggregateOutputType | null
    _avg: HistoricoAvgAggregateOutputType | null
    _sum: HistoricoSumAggregateOutputType | null
    _min: HistoricoMinAggregateOutputType | null
    _max: HistoricoMaxAggregateOutputType | null
  }

  export type HistoricoAvgAggregateOutputType = {
    id: number | null
    dispositivoId: number | null
  }

  export type HistoricoSumAggregateOutputType = {
    id: number | null
    dispositivoId: number | null
  }

  export type HistoricoMinAggregateOutputType = {
    id: number | null
    dispositivoId: number | null
  }

  export type HistoricoMaxAggregateOutputType = {
    id: number | null
    dispositivoId: number | null
  }

  export type HistoricoCountAggregateOutputType = {
    id: number
    dispositivoId: number
    _all: number
  }


  export type HistoricoAvgAggregateInputType = {
    id?: true
    dispositivoId?: true
  }

  export type HistoricoSumAggregateInputType = {
    id?: true
    dispositivoId?: true
  }

  export type HistoricoMinAggregateInputType = {
    id?: true
    dispositivoId?: true
  }

  export type HistoricoMaxAggregateInputType = {
    id?: true
    dispositivoId?: true
  }

  export type HistoricoCountAggregateInputType = {
    id?: true
    dispositivoId?: true
    _all?: true
  }

  export type HistoricoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historico to aggregate.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Historicos
    **/
    _count?: true | HistoricoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoricoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoricoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoMaxAggregateInputType
  }

  export type GetHistoricoAggregateType<T extends HistoricoAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorico[P]>
      : GetScalarType<T[P], AggregateHistorico[P]>
  }




  export type HistoricoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoWhereInput
    orderBy?: HistoricoOrderByWithAggregationInput | HistoricoOrderByWithAggregationInput[]
    by: HistoricoScalarFieldEnum[] | HistoricoScalarFieldEnum
    having?: HistoricoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoCountAggregateInputType | true
    _avg?: HistoricoAvgAggregateInputType
    _sum?: HistoricoSumAggregateInputType
    _min?: HistoricoMinAggregateInputType
    _max?: HistoricoMaxAggregateInputType
  }

  export type HistoricoGroupByOutputType = {
    id: number
    dispositivoId: number | null
    _count: HistoricoCountAggregateOutputType | null
    _avg: HistoricoAvgAggregateOutputType | null
    _sum: HistoricoSumAggregateOutputType | null
    _min: HistoricoMinAggregateOutputType | null
    _max: HistoricoMaxAggregateOutputType | null
  }

  type GetHistoricoGroupByPayload<T extends HistoricoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoGroupByOutputType[P]>
        }
      >
    >


  export type HistoricoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dispositivoId?: boolean
    Dispositivo?: boolean | Historico$DispositivoArgs<ExtArgs>
    historico_temp?: boolean | Historico$historico_tempArgs<ExtArgs>
    historico_mov?: boolean | Historico$historico_movArgs<ExtArgs>
    _count?: boolean | HistoricoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico"]>

  export type HistoricoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dispositivoId?: boolean
    Dispositivo?: boolean | Historico$DispositivoArgs<ExtArgs>
  }, ExtArgs["result"]["historico"]>

  export type HistoricoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dispositivoId?: boolean
    Dispositivo?: boolean | Historico$DispositivoArgs<ExtArgs>
  }, ExtArgs["result"]["historico"]>

  export type HistoricoSelectScalar = {
    id?: boolean
    dispositivoId?: boolean
  }

  export type HistoricoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dispositivoId", ExtArgs["result"]["historico"]>
  export type HistoricoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dispositivo?: boolean | Historico$DispositivoArgs<ExtArgs>
    historico_temp?: boolean | Historico$historico_tempArgs<ExtArgs>
    historico_mov?: boolean | Historico$historico_movArgs<ExtArgs>
    _count?: boolean | HistoricoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HistoricoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dispositivo?: boolean | Historico$DispositivoArgs<ExtArgs>
  }
  export type HistoricoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dispositivo?: boolean | Historico$DispositivoArgs<ExtArgs>
  }

  export type $HistoricoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Historico"
    objects: {
      Dispositivo: Prisma.$DispositivoPayload<ExtArgs> | null
      historico_temp: Prisma.$Historico_tempPayload<ExtArgs>[]
      historico_mov: Prisma.$Historico_movPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dispositivoId: number | null
    }, ExtArgs["result"]["historico"]>
    composites: {}
  }

  type HistoricoGetPayload<S extends boolean | null | undefined | HistoricoDefaultArgs> = $Result.GetResult<Prisma.$HistoricoPayload, S>

  type HistoricoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoricoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricoCountAggregateInputType | true
    }

  export interface HistoricoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Historico'], meta: { name: 'Historico' } }
    /**
     * Find zero or one Historico that matches the filter.
     * @param {HistoricoFindUniqueArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoricoFindUniqueArgs>(args: SelectSubset<T, HistoricoFindUniqueArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoricoFindUniqueOrThrowArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoricoFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindFirstArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoricoFindFirstArgs>(args?: SelectSubset<T, HistoricoFindFirstArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindFirstOrThrowArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoricoFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historicos
     * const historicos = await prisma.historico.findMany()
     * 
     * // Get first 10 Historicos
     * const historicos = await prisma.historico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicoWithIdOnly = await prisma.historico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoricoFindManyArgs>(args?: SelectSubset<T, HistoricoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historico.
     * @param {HistoricoCreateArgs} args - Arguments to create a Historico.
     * @example
     * // Create one Historico
     * const Historico = await prisma.historico.create({
     *   data: {
     *     // ... data to create a Historico
     *   }
     * })
     * 
     */
    create<T extends HistoricoCreateArgs>(args: SelectSubset<T, HistoricoCreateArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historicos.
     * @param {HistoricoCreateManyArgs} args - Arguments to create many Historicos.
     * @example
     * // Create many Historicos
     * const historico = await prisma.historico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoricoCreateManyArgs>(args?: SelectSubset<T, HistoricoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Historicos and returns the data saved in the database.
     * @param {HistoricoCreateManyAndReturnArgs} args - Arguments to create many Historicos.
     * @example
     * // Create many Historicos
     * const historico = await prisma.historico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Historicos and only return the `id`
     * const historicoWithIdOnly = await prisma.historico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoricoCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoricoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Historico.
     * @param {HistoricoDeleteArgs} args - Arguments to delete one Historico.
     * @example
     * // Delete one Historico
     * const Historico = await prisma.historico.delete({
     *   where: {
     *     // ... filter to delete one Historico
     *   }
     * })
     * 
     */
    delete<T extends HistoricoDeleteArgs>(args: SelectSubset<T, HistoricoDeleteArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historico.
     * @param {HistoricoUpdateArgs} args - Arguments to update one Historico.
     * @example
     * // Update one Historico
     * const historico = await prisma.historico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoricoUpdateArgs>(args: SelectSubset<T, HistoricoUpdateArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historicos.
     * @param {HistoricoDeleteManyArgs} args - Arguments to filter Historicos to delete.
     * @example
     * // Delete a few Historicos
     * const { count } = await prisma.historico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoricoDeleteManyArgs>(args?: SelectSubset<T, HistoricoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historicos
     * const historico = await prisma.historico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoricoUpdateManyArgs>(args: SelectSubset<T, HistoricoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historicos and returns the data updated in the database.
     * @param {HistoricoUpdateManyAndReturnArgs} args - Arguments to update many Historicos.
     * @example
     * // Update many Historicos
     * const historico = await prisma.historico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Historicos and only return the `id`
     * const historicoWithIdOnly = await prisma.historico.updateManyAndReturn({
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
    updateManyAndReturn<T extends HistoricoUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoricoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Historico.
     * @param {HistoricoUpsertArgs} args - Arguments to update or create a Historico.
     * @example
     * // Update or create a Historico
     * const historico = await prisma.historico.upsert({
     *   create: {
     *     // ... data to create a Historico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historico we want to update
     *   }
     * })
     */
    upsert<T extends HistoricoUpsertArgs>(args: SelectSubset<T, HistoricoUpsertArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoCountArgs} args - Arguments to filter Historicos to count.
     * @example
     * // Count the number of Historicos
     * const count = await prisma.historico.count({
     *   where: {
     *     // ... the filter for the Historicos we want to count
     *   }
     * })
    **/
    count<T extends HistoricoCountArgs>(
      args?: Subset<T, HistoricoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoricoAggregateArgs>(args: Subset<T, HistoricoAggregateArgs>): Prisma.PrismaPromise<GetHistoricoAggregateType<T>>

    /**
     * Group by Historico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoGroupByArgs} args - Group by arguments.
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
      T extends HistoricoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricoGroupByArgs['orderBy'] }
        : { orderBy?: HistoricoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoricoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Historico model
   */
  readonly fields: HistoricoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Historico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoricoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Dispositivo<T extends Historico$DispositivoArgs<ExtArgs> = {}>(args?: Subset<T, Historico$DispositivoArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    historico_temp<T extends Historico$historico_tempArgs<ExtArgs> = {}>(args?: Subset<T, Historico$historico_tempArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historico_tempPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historico_mov<T extends Historico$historico_movArgs<ExtArgs> = {}>(args?: Subset<T, Historico$historico_movArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historico_movPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Historico model
   */
  interface HistoricoFieldRefs {
    readonly id: FieldRef<"Historico", 'Int'>
    readonly dispositivoId: FieldRef<"Historico", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Historico findUnique
   */
  export type HistoricoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico findUniqueOrThrow
   */
  export type HistoricoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico findFirst
   */
  export type HistoricoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historicos.
     */
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico findFirstOrThrow
   */
  export type HistoricoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historicos.
     */
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico findMany
   */
  export type HistoricoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historicos to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico create
   */
  export type HistoricoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The data needed to create a Historico.
     */
    data?: XOR<HistoricoCreateInput, HistoricoUncheckedCreateInput>
  }

  /**
   * Historico createMany
   */
  export type HistoricoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Historicos.
     */
    data: HistoricoCreateManyInput | HistoricoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Historico createManyAndReturn
   */
  export type HistoricoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * The data used to create many Historicos.
     */
    data: HistoricoCreateManyInput | HistoricoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Historico update
   */
  export type HistoricoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The data needed to update a Historico.
     */
    data: XOR<HistoricoUpdateInput, HistoricoUncheckedUpdateInput>
    /**
     * Choose, which Historico to update.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico updateMany
   */
  export type HistoricoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Historicos.
     */
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyInput>
    /**
     * Filter which Historicos to update
     */
    where?: HistoricoWhereInput
    /**
     * Limit how many Historicos to update.
     */
    limit?: number
  }

  /**
   * Historico updateManyAndReturn
   */
  export type HistoricoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * The data used to update Historicos.
     */
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyInput>
    /**
     * Filter which Historicos to update
     */
    where?: HistoricoWhereInput
    /**
     * Limit how many Historicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Historico upsert
   */
  export type HistoricoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The filter to search for the Historico to update in case it exists.
     */
    where: HistoricoWhereUniqueInput
    /**
     * In case the Historico found by the `where` argument doesn't exist, create a new Historico with this data.
     */
    create: XOR<HistoricoCreateInput, HistoricoUncheckedCreateInput>
    /**
     * In case the Historico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoricoUpdateInput, HistoricoUncheckedUpdateInput>
  }

  /**
   * Historico delete
   */
  export type HistoricoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter which Historico to delete.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico deleteMany
   */
  export type HistoricoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historicos to delete
     */
    where?: HistoricoWhereInput
    /**
     * Limit how many Historicos to delete.
     */
    limit?: number
  }

  /**
   * Historico.Dispositivo
   */
  export type Historico$DispositivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    where?: DispositivoWhereInput
  }

  /**
   * Historico.historico_temp
   */
  export type Historico$historico_tempArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_temp
     */
    select?: Historico_tempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_temp
     */
    omit?: Historico_tempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_tempInclude<ExtArgs> | null
    where?: Historico_tempWhereInput
    orderBy?: Historico_tempOrderByWithRelationInput | Historico_tempOrderByWithRelationInput[]
    cursor?: Historico_tempWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historico_tempScalarFieldEnum | Historico_tempScalarFieldEnum[]
  }

  /**
   * Historico.historico_mov
   */
  export type Historico$historico_movArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_mov
     */
    select?: Historico_movSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_mov
     */
    omit?: Historico_movOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_movInclude<ExtArgs> | null
    where?: Historico_movWhereInput
    orderBy?: Historico_movOrderByWithRelationInput | Historico_movOrderByWithRelationInput[]
    cursor?: Historico_movWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historico_movScalarFieldEnum | Historico_movScalarFieldEnum[]
  }

  /**
   * Historico without action
   */
  export type HistoricoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
  }


  /**
   * Model Historico_temp
   */

  export type AggregateHistorico_temp = {
    _count: Historico_tempCountAggregateOutputType | null
    _avg: Historico_tempAvgAggregateOutputType | null
    _sum: Historico_tempSumAggregateOutputType | null
    _min: Historico_tempMinAggregateOutputType | null
    _max: Historico_tempMaxAggregateOutputType | null
  }

  export type Historico_tempAvgAggregateOutputType = {
    id: number | null
    temperatura: number | null
    historicoId: number | null
  }

  export type Historico_tempSumAggregateOutputType = {
    id: number | null
    temperatura: number | null
    historicoId: number | null
  }

  export type Historico_tempMinAggregateOutputType = {
    id: number | null
    temperatura: number | null
    updatedAt: Date | null
    historicoId: number | null
  }

  export type Historico_tempMaxAggregateOutputType = {
    id: number | null
    temperatura: number | null
    updatedAt: Date | null
    historicoId: number | null
  }

  export type Historico_tempCountAggregateOutputType = {
    id: number
    temperatura: number
    updatedAt: number
    historicoId: number
    _all: number
  }


  export type Historico_tempAvgAggregateInputType = {
    id?: true
    temperatura?: true
    historicoId?: true
  }

  export type Historico_tempSumAggregateInputType = {
    id?: true
    temperatura?: true
    historicoId?: true
  }

  export type Historico_tempMinAggregateInputType = {
    id?: true
    temperatura?: true
    updatedAt?: true
    historicoId?: true
  }

  export type Historico_tempMaxAggregateInputType = {
    id?: true
    temperatura?: true
    updatedAt?: true
    historicoId?: true
  }

  export type Historico_tempCountAggregateInputType = {
    id?: true
    temperatura?: true
    updatedAt?: true
    historicoId?: true
    _all?: true
  }

  export type Historico_tempAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historico_temp to aggregate.
     */
    where?: Historico_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historico_temps to fetch.
     */
    orderBy?: Historico_tempOrderByWithRelationInput | Historico_tempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Historico_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historico_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historico_temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Historico_temps
    **/
    _count?: true | Historico_tempCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Historico_tempAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Historico_tempSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Historico_tempMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Historico_tempMaxAggregateInputType
  }

  export type GetHistorico_tempAggregateType<T extends Historico_tempAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorico_temp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorico_temp[P]>
      : GetScalarType<T[P], AggregateHistorico_temp[P]>
  }




  export type Historico_tempGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Historico_tempWhereInput
    orderBy?: Historico_tempOrderByWithAggregationInput | Historico_tempOrderByWithAggregationInput[]
    by: Historico_tempScalarFieldEnum[] | Historico_tempScalarFieldEnum
    having?: Historico_tempScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Historico_tempCountAggregateInputType | true
    _avg?: Historico_tempAvgAggregateInputType
    _sum?: Historico_tempSumAggregateInputType
    _min?: Historico_tempMinAggregateInputType
    _max?: Historico_tempMaxAggregateInputType
  }

  export type Historico_tempGroupByOutputType = {
    id: number
    temperatura: number
    updatedAt: Date
    historicoId: number | null
    _count: Historico_tempCountAggregateOutputType | null
    _avg: Historico_tempAvgAggregateOutputType | null
    _sum: Historico_tempSumAggregateOutputType | null
    _min: Historico_tempMinAggregateOutputType | null
    _max: Historico_tempMaxAggregateOutputType | null
  }

  type GetHistorico_tempGroupByPayload<T extends Historico_tempGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Historico_tempGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Historico_tempGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Historico_tempGroupByOutputType[P]>
            : GetScalarType<T[P], Historico_tempGroupByOutputType[P]>
        }
      >
    >


  export type Historico_tempSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    temperatura?: boolean
    updatedAt?: boolean
    historicoId?: boolean
    Historico?: boolean | Historico_temp$HistoricoArgs<ExtArgs>
  }, ExtArgs["result"]["historico_temp"]>

  export type Historico_tempSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    temperatura?: boolean
    updatedAt?: boolean
    historicoId?: boolean
    Historico?: boolean | Historico_temp$HistoricoArgs<ExtArgs>
  }, ExtArgs["result"]["historico_temp"]>

  export type Historico_tempSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    temperatura?: boolean
    updatedAt?: boolean
    historicoId?: boolean
    Historico?: boolean | Historico_temp$HistoricoArgs<ExtArgs>
  }, ExtArgs["result"]["historico_temp"]>

  export type Historico_tempSelectScalar = {
    id?: boolean
    temperatura?: boolean
    updatedAt?: boolean
    historicoId?: boolean
  }

  export type Historico_tempOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "temperatura" | "updatedAt" | "historicoId", ExtArgs["result"]["historico_temp"]>
  export type Historico_tempInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Historico?: boolean | Historico_temp$HistoricoArgs<ExtArgs>
  }
  export type Historico_tempIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Historico?: boolean | Historico_temp$HistoricoArgs<ExtArgs>
  }
  export type Historico_tempIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Historico?: boolean | Historico_temp$HistoricoArgs<ExtArgs>
  }

  export type $Historico_tempPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Historico_temp"
    objects: {
      Historico: Prisma.$HistoricoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      temperatura: number
      updatedAt: Date
      historicoId: number | null
    }, ExtArgs["result"]["historico_temp"]>
    composites: {}
  }

  type Historico_tempGetPayload<S extends boolean | null | undefined | Historico_tempDefaultArgs> = $Result.GetResult<Prisma.$Historico_tempPayload, S>

  type Historico_tempCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Historico_tempFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Historico_tempCountAggregateInputType | true
    }

  export interface Historico_tempDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Historico_temp'], meta: { name: 'Historico_temp' } }
    /**
     * Find zero or one Historico_temp that matches the filter.
     * @param {Historico_tempFindUniqueArgs} args - Arguments to find a Historico_temp
     * @example
     * // Get one Historico_temp
     * const historico_temp = await prisma.historico_temp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Historico_tempFindUniqueArgs>(args: SelectSubset<T, Historico_tempFindUniqueArgs<ExtArgs>>): Prisma__Historico_tempClient<$Result.GetResult<Prisma.$Historico_tempPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historico_temp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Historico_tempFindUniqueOrThrowArgs} args - Arguments to find a Historico_temp
     * @example
     * // Get one Historico_temp
     * const historico_temp = await prisma.historico_temp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Historico_tempFindUniqueOrThrowArgs>(args: SelectSubset<T, Historico_tempFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Historico_tempClient<$Result.GetResult<Prisma.$Historico_tempPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico_temp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_tempFindFirstArgs} args - Arguments to find a Historico_temp
     * @example
     * // Get one Historico_temp
     * const historico_temp = await prisma.historico_temp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Historico_tempFindFirstArgs>(args?: SelectSubset<T, Historico_tempFindFirstArgs<ExtArgs>>): Prisma__Historico_tempClient<$Result.GetResult<Prisma.$Historico_tempPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico_temp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_tempFindFirstOrThrowArgs} args - Arguments to find a Historico_temp
     * @example
     * // Get one Historico_temp
     * const historico_temp = await prisma.historico_temp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Historico_tempFindFirstOrThrowArgs>(args?: SelectSubset<T, Historico_tempFindFirstOrThrowArgs<ExtArgs>>): Prisma__Historico_tempClient<$Result.GetResult<Prisma.$Historico_tempPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historico_temps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_tempFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historico_temps
     * const historico_temps = await prisma.historico_temp.findMany()
     * 
     * // Get first 10 Historico_temps
     * const historico_temps = await prisma.historico_temp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historico_tempWithIdOnly = await prisma.historico_temp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Historico_tempFindManyArgs>(args?: SelectSubset<T, Historico_tempFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historico_tempPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historico_temp.
     * @param {Historico_tempCreateArgs} args - Arguments to create a Historico_temp.
     * @example
     * // Create one Historico_temp
     * const Historico_temp = await prisma.historico_temp.create({
     *   data: {
     *     // ... data to create a Historico_temp
     *   }
     * })
     * 
     */
    create<T extends Historico_tempCreateArgs>(args: SelectSubset<T, Historico_tempCreateArgs<ExtArgs>>): Prisma__Historico_tempClient<$Result.GetResult<Prisma.$Historico_tempPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historico_temps.
     * @param {Historico_tempCreateManyArgs} args - Arguments to create many Historico_temps.
     * @example
     * // Create many Historico_temps
     * const historico_temp = await prisma.historico_temp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Historico_tempCreateManyArgs>(args?: SelectSubset<T, Historico_tempCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Historico_temps and returns the data saved in the database.
     * @param {Historico_tempCreateManyAndReturnArgs} args - Arguments to create many Historico_temps.
     * @example
     * // Create many Historico_temps
     * const historico_temp = await prisma.historico_temp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Historico_temps and only return the `id`
     * const historico_tempWithIdOnly = await prisma.historico_temp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Historico_tempCreateManyAndReturnArgs>(args?: SelectSubset<T, Historico_tempCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historico_tempPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Historico_temp.
     * @param {Historico_tempDeleteArgs} args - Arguments to delete one Historico_temp.
     * @example
     * // Delete one Historico_temp
     * const Historico_temp = await prisma.historico_temp.delete({
     *   where: {
     *     // ... filter to delete one Historico_temp
     *   }
     * })
     * 
     */
    delete<T extends Historico_tempDeleteArgs>(args: SelectSubset<T, Historico_tempDeleteArgs<ExtArgs>>): Prisma__Historico_tempClient<$Result.GetResult<Prisma.$Historico_tempPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historico_temp.
     * @param {Historico_tempUpdateArgs} args - Arguments to update one Historico_temp.
     * @example
     * // Update one Historico_temp
     * const historico_temp = await prisma.historico_temp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Historico_tempUpdateArgs>(args: SelectSubset<T, Historico_tempUpdateArgs<ExtArgs>>): Prisma__Historico_tempClient<$Result.GetResult<Prisma.$Historico_tempPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historico_temps.
     * @param {Historico_tempDeleteManyArgs} args - Arguments to filter Historico_temps to delete.
     * @example
     * // Delete a few Historico_temps
     * const { count } = await prisma.historico_temp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Historico_tempDeleteManyArgs>(args?: SelectSubset<T, Historico_tempDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historico_temps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_tempUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historico_temps
     * const historico_temp = await prisma.historico_temp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Historico_tempUpdateManyArgs>(args: SelectSubset<T, Historico_tempUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historico_temps and returns the data updated in the database.
     * @param {Historico_tempUpdateManyAndReturnArgs} args - Arguments to update many Historico_temps.
     * @example
     * // Update many Historico_temps
     * const historico_temp = await prisma.historico_temp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Historico_temps and only return the `id`
     * const historico_tempWithIdOnly = await prisma.historico_temp.updateManyAndReturn({
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
    updateManyAndReturn<T extends Historico_tempUpdateManyAndReturnArgs>(args: SelectSubset<T, Historico_tempUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historico_tempPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Historico_temp.
     * @param {Historico_tempUpsertArgs} args - Arguments to update or create a Historico_temp.
     * @example
     * // Update or create a Historico_temp
     * const historico_temp = await prisma.historico_temp.upsert({
     *   create: {
     *     // ... data to create a Historico_temp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historico_temp we want to update
     *   }
     * })
     */
    upsert<T extends Historico_tempUpsertArgs>(args: SelectSubset<T, Historico_tempUpsertArgs<ExtArgs>>): Prisma__Historico_tempClient<$Result.GetResult<Prisma.$Historico_tempPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historico_temps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_tempCountArgs} args - Arguments to filter Historico_temps to count.
     * @example
     * // Count the number of Historico_temps
     * const count = await prisma.historico_temp.count({
     *   where: {
     *     // ... the filter for the Historico_temps we want to count
     *   }
     * })
    **/
    count<T extends Historico_tempCountArgs>(
      args?: Subset<T, Historico_tempCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Historico_tempCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historico_temp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_tempAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Historico_tempAggregateArgs>(args: Subset<T, Historico_tempAggregateArgs>): Prisma.PrismaPromise<GetHistorico_tempAggregateType<T>>

    /**
     * Group by Historico_temp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_tempGroupByArgs} args - Group by arguments.
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
      T extends Historico_tempGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Historico_tempGroupByArgs['orderBy'] }
        : { orderBy?: Historico_tempGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Historico_tempGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorico_tempGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Historico_temp model
   */
  readonly fields: Historico_tempFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Historico_temp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Historico_tempClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Historico<T extends Historico_temp$HistoricoArgs<ExtArgs> = {}>(args?: Subset<T, Historico_temp$HistoricoArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Historico_temp model
   */
  interface Historico_tempFieldRefs {
    readonly id: FieldRef<"Historico_temp", 'Int'>
    readonly temperatura: FieldRef<"Historico_temp", 'Int'>
    readonly updatedAt: FieldRef<"Historico_temp", 'DateTime'>
    readonly historicoId: FieldRef<"Historico_temp", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Historico_temp findUnique
   */
  export type Historico_tempFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_temp
     */
    select?: Historico_tempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_temp
     */
    omit?: Historico_tempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_tempInclude<ExtArgs> | null
    /**
     * Filter, which Historico_temp to fetch.
     */
    where: Historico_tempWhereUniqueInput
  }

  /**
   * Historico_temp findUniqueOrThrow
   */
  export type Historico_tempFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_temp
     */
    select?: Historico_tempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_temp
     */
    omit?: Historico_tempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_tempInclude<ExtArgs> | null
    /**
     * Filter, which Historico_temp to fetch.
     */
    where: Historico_tempWhereUniqueInput
  }

  /**
   * Historico_temp findFirst
   */
  export type Historico_tempFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_temp
     */
    select?: Historico_tempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_temp
     */
    omit?: Historico_tempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_tempInclude<ExtArgs> | null
    /**
     * Filter, which Historico_temp to fetch.
     */
    where?: Historico_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historico_temps to fetch.
     */
    orderBy?: Historico_tempOrderByWithRelationInput | Historico_tempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historico_temps.
     */
    cursor?: Historico_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historico_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historico_temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historico_temps.
     */
    distinct?: Historico_tempScalarFieldEnum | Historico_tempScalarFieldEnum[]
  }

  /**
   * Historico_temp findFirstOrThrow
   */
  export type Historico_tempFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_temp
     */
    select?: Historico_tempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_temp
     */
    omit?: Historico_tempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_tempInclude<ExtArgs> | null
    /**
     * Filter, which Historico_temp to fetch.
     */
    where?: Historico_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historico_temps to fetch.
     */
    orderBy?: Historico_tempOrderByWithRelationInput | Historico_tempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historico_temps.
     */
    cursor?: Historico_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historico_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historico_temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historico_temps.
     */
    distinct?: Historico_tempScalarFieldEnum | Historico_tempScalarFieldEnum[]
  }

  /**
   * Historico_temp findMany
   */
  export type Historico_tempFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_temp
     */
    select?: Historico_tempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_temp
     */
    omit?: Historico_tempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_tempInclude<ExtArgs> | null
    /**
     * Filter, which Historico_temps to fetch.
     */
    where?: Historico_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historico_temps to fetch.
     */
    orderBy?: Historico_tempOrderByWithRelationInput | Historico_tempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Historico_temps.
     */
    cursor?: Historico_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historico_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historico_temps.
     */
    skip?: number
    distinct?: Historico_tempScalarFieldEnum | Historico_tempScalarFieldEnum[]
  }

  /**
   * Historico_temp create
   */
  export type Historico_tempCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_temp
     */
    select?: Historico_tempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_temp
     */
    omit?: Historico_tempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_tempInclude<ExtArgs> | null
    /**
     * The data needed to create a Historico_temp.
     */
    data?: XOR<Historico_tempCreateInput, Historico_tempUncheckedCreateInput>
  }

  /**
   * Historico_temp createMany
   */
  export type Historico_tempCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Historico_temps.
     */
    data: Historico_tempCreateManyInput | Historico_tempCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Historico_temp createManyAndReturn
   */
  export type Historico_tempCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_temp
     */
    select?: Historico_tempSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_temp
     */
    omit?: Historico_tempOmit<ExtArgs> | null
    /**
     * The data used to create many Historico_temps.
     */
    data: Historico_tempCreateManyInput | Historico_tempCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_tempIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Historico_temp update
   */
  export type Historico_tempUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_temp
     */
    select?: Historico_tempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_temp
     */
    omit?: Historico_tempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_tempInclude<ExtArgs> | null
    /**
     * The data needed to update a Historico_temp.
     */
    data: XOR<Historico_tempUpdateInput, Historico_tempUncheckedUpdateInput>
    /**
     * Choose, which Historico_temp to update.
     */
    where: Historico_tempWhereUniqueInput
  }

  /**
   * Historico_temp updateMany
   */
  export type Historico_tempUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Historico_temps.
     */
    data: XOR<Historico_tempUpdateManyMutationInput, Historico_tempUncheckedUpdateManyInput>
    /**
     * Filter which Historico_temps to update
     */
    where?: Historico_tempWhereInput
    /**
     * Limit how many Historico_temps to update.
     */
    limit?: number
  }

  /**
   * Historico_temp updateManyAndReturn
   */
  export type Historico_tempUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_temp
     */
    select?: Historico_tempSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_temp
     */
    omit?: Historico_tempOmit<ExtArgs> | null
    /**
     * The data used to update Historico_temps.
     */
    data: XOR<Historico_tempUpdateManyMutationInput, Historico_tempUncheckedUpdateManyInput>
    /**
     * Filter which Historico_temps to update
     */
    where?: Historico_tempWhereInput
    /**
     * Limit how many Historico_temps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_tempIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Historico_temp upsert
   */
  export type Historico_tempUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_temp
     */
    select?: Historico_tempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_temp
     */
    omit?: Historico_tempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_tempInclude<ExtArgs> | null
    /**
     * The filter to search for the Historico_temp to update in case it exists.
     */
    where: Historico_tempWhereUniqueInput
    /**
     * In case the Historico_temp found by the `where` argument doesn't exist, create a new Historico_temp with this data.
     */
    create: XOR<Historico_tempCreateInput, Historico_tempUncheckedCreateInput>
    /**
     * In case the Historico_temp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Historico_tempUpdateInput, Historico_tempUncheckedUpdateInput>
  }

  /**
   * Historico_temp delete
   */
  export type Historico_tempDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_temp
     */
    select?: Historico_tempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_temp
     */
    omit?: Historico_tempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_tempInclude<ExtArgs> | null
    /**
     * Filter which Historico_temp to delete.
     */
    where: Historico_tempWhereUniqueInput
  }

  /**
   * Historico_temp deleteMany
   */
  export type Historico_tempDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historico_temps to delete
     */
    where?: Historico_tempWhereInput
    /**
     * Limit how many Historico_temps to delete.
     */
    limit?: number
  }

  /**
   * Historico_temp.Historico
   */
  export type Historico_temp$HistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    where?: HistoricoWhereInput
  }

  /**
   * Historico_temp without action
   */
  export type Historico_tempDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_temp
     */
    select?: Historico_tempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_temp
     */
    omit?: Historico_tempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_tempInclude<ExtArgs> | null
  }


  /**
   * Model Historico_mov
   */

  export type AggregateHistorico_mov = {
    _count: Historico_movCountAggregateOutputType | null
    _avg: Historico_movAvgAggregateOutputType | null
    _sum: Historico_movSumAggregateOutputType | null
    _min: Historico_movMinAggregateOutputType | null
    _max: Historico_movMaxAggregateOutputType | null
  }

  export type Historico_movAvgAggregateOutputType = {
    id: number | null
    motion: number | null
    historicoId: number | null
  }

  export type Historico_movSumAggregateOutputType = {
    id: number | null
    motion: number | null
    historicoId: number | null
  }

  export type Historico_movMinAggregateOutputType = {
    id: number | null
    motion: number | null
    updatedAt: Date | null
    historicoId: number | null
  }

  export type Historico_movMaxAggregateOutputType = {
    id: number | null
    motion: number | null
    updatedAt: Date | null
    historicoId: number | null
  }

  export type Historico_movCountAggregateOutputType = {
    id: number
    motion: number
    updatedAt: number
    historicoId: number
    _all: number
  }


  export type Historico_movAvgAggregateInputType = {
    id?: true
    motion?: true
    historicoId?: true
  }

  export type Historico_movSumAggregateInputType = {
    id?: true
    motion?: true
    historicoId?: true
  }

  export type Historico_movMinAggregateInputType = {
    id?: true
    motion?: true
    updatedAt?: true
    historicoId?: true
  }

  export type Historico_movMaxAggregateInputType = {
    id?: true
    motion?: true
    updatedAt?: true
    historicoId?: true
  }

  export type Historico_movCountAggregateInputType = {
    id?: true
    motion?: true
    updatedAt?: true
    historicoId?: true
    _all?: true
  }

  export type Historico_movAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historico_mov to aggregate.
     */
    where?: Historico_movWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historico_movs to fetch.
     */
    orderBy?: Historico_movOrderByWithRelationInput | Historico_movOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Historico_movWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historico_movs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historico_movs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Historico_movs
    **/
    _count?: true | Historico_movCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Historico_movAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Historico_movSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Historico_movMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Historico_movMaxAggregateInputType
  }

  export type GetHistorico_movAggregateType<T extends Historico_movAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorico_mov]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorico_mov[P]>
      : GetScalarType<T[P], AggregateHistorico_mov[P]>
  }




  export type Historico_movGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Historico_movWhereInput
    orderBy?: Historico_movOrderByWithAggregationInput | Historico_movOrderByWithAggregationInput[]
    by: Historico_movScalarFieldEnum[] | Historico_movScalarFieldEnum
    having?: Historico_movScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Historico_movCountAggregateInputType | true
    _avg?: Historico_movAvgAggregateInputType
    _sum?: Historico_movSumAggregateInputType
    _min?: Historico_movMinAggregateInputType
    _max?: Historico_movMaxAggregateInputType
  }

  export type Historico_movGroupByOutputType = {
    id: number
    motion: number
    updatedAt: Date
    historicoId: number | null
    _count: Historico_movCountAggregateOutputType | null
    _avg: Historico_movAvgAggregateOutputType | null
    _sum: Historico_movSumAggregateOutputType | null
    _min: Historico_movMinAggregateOutputType | null
    _max: Historico_movMaxAggregateOutputType | null
  }

  type GetHistorico_movGroupByPayload<T extends Historico_movGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Historico_movGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Historico_movGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Historico_movGroupByOutputType[P]>
            : GetScalarType<T[P], Historico_movGroupByOutputType[P]>
        }
      >
    >


  export type Historico_movSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    motion?: boolean
    updatedAt?: boolean
    historicoId?: boolean
    Historico?: boolean | Historico_mov$HistoricoArgs<ExtArgs>
  }, ExtArgs["result"]["historico_mov"]>

  export type Historico_movSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    motion?: boolean
    updatedAt?: boolean
    historicoId?: boolean
    Historico?: boolean | Historico_mov$HistoricoArgs<ExtArgs>
  }, ExtArgs["result"]["historico_mov"]>

  export type Historico_movSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    motion?: boolean
    updatedAt?: boolean
    historicoId?: boolean
    Historico?: boolean | Historico_mov$HistoricoArgs<ExtArgs>
  }, ExtArgs["result"]["historico_mov"]>

  export type Historico_movSelectScalar = {
    id?: boolean
    motion?: boolean
    updatedAt?: boolean
    historicoId?: boolean
  }

  export type Historico_movOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "motion" | "updatedAt" | "historicoId", ExtArgs["result"]["historico_mov"]>
  export type Historico_movInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Historico?: boolean | Historico_mov$HistoricoArgs<ExtArgs>
  }
  export type Historico_movIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Historico?: boolean | Historico_mov$HistoricoArgs<ExtArgs>
  }
  export type Historico_movIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Historico?: boolean | Historico_mov$HistoricoArgs<ExtArgs>
  }

  export type $Historico_movPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Historico_mov"
    objects: {
      Historico: Prisma.$HistoricoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      motion: number
      updatedAt: Date
      historicoId: number | null
    }, ExtArgs["result"]["historico_mov"]>
    composites: {}
  }

  type Historico_movGetPayload<S extends boolean | null | undefined | Historico_movDefaultArgs> = $Result.GetResult<Prisma.$Historico_movPayload, S>

  type Historico_movCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Historico_movFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Historico_movCountAggregateInputType | true
    }

  export interface Historico_movDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Historico_mov'], meta: { name: 'Historico_mov' } }
    /**
     * Find zero or one Historico_mov that matches the filter.
     * @param {Historico_movFindUniqueArgs} args - Arguments to find a Historico_mov
     * @example
     * // Get one Historico_mov
     * const historico_mov = await prisma.historico_mov.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Historico_movFindUniqueArgs>(args: SelectSubset<T, Historico_movFindUniqueArgs<ExtArgs>>): Prisma__Historico_movClient<$Result.GetResult<Prisma.$Historico_movPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historico_mov that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Historico_movFindUniqueOrThrowArgs} args - Arguments to find a Historico_mov
     * @example
     * // Get one Historico_mov
     * const historico_mov = await prisma.historico_mov.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Historico_movFindUniqueOrThrowArgs>(args: SelectSubset<T, Historico_movFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Historico_movClient<$Result.GetResult<Prisma.$Historico_movPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico_mov that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_movFindFirstArgs} args - Arguments to find a Historico_mov
     * @example
     * // Get one Historico_mov
     * const historico_mov = await prisma.historico_mov.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Historico_movFindFirstArgs>(args?: SelectSubset<T, Historico_movFindFirstArgs<ExtArgs>>): Prisma__Historico_movClient<$Result.GetResult<Prisma.$Historico_movPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico_mov that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_movFindFirstOrThrowArgs} args - Arguments to find a Historico_mov
     * @example
     * // Get one Historico_mov
     * const historico_mov = await prisma.historico_mov.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Historico_movFindFirstOrThrowArgs>(args?: SelectSubset<T, Historico_movFindFirstOrThrowArgs<ExtArgs>>): Prisma__Historico_movClient<$Result.GetResult<Prisma.$Historico_movPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historico_movs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_movFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historico_movs
     * const historico_movs = await prisma.historico_mov.findMany()
     * 
     * // Get first 10 Historico_movs
     * const historico_movs = await prisma.historico_mov.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historico_movWithIdOnly = await prisma.historico_mov.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Historico_movFindManyArgs>(args?: SelectSubset<T, Historico_movFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historico_movPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historico_mov.
     * @param {Historico_movCreateArgs} args - Arguments to create a Historico_mov.
     * @example
     * // Create one Historico_mov
     * const Historico_mov = await prisma.historico_mov.create({
     *   data: {
     *     // ... data to create a Historico_mov
     *   }
     * })
     * 
     */
    create<T extends Historico_movCreateArgs>(args: SelectSubset<T, Historico_movCreateArgs<ExtArgs>>): Prisma__Historico_movClient<$Result.GetResult<Prisma.$Historico_movPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historico_movs.
     * @param {Historico_movCreateManyArgs} args - Arguments to create many Historico_movs.
     * @example
     * // Create many Historico_movs
     * const historico_mov = await prisma.historico_mov.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Historico_movCreateManyArgs>(args?: SelectSubset<T, Historico_movCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Historico_movs and returns the data saved in the database.
     * @param {Historico_movCreateManyAndReturnArgs} args - Arguments to create many Historico_movs.
     * @example
     * // Create many Historico_movs
     * const historico_mov = await prisma.historico_mov.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Historico_movs and only return the `id`
     * const historico_movWithIdOnly = await prisma.historico_mov.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Historico_movCreateManyAndReturnArgs>(args?: SelectSubset<T, Historico_movCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historico_movPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Historico_mov.
     * @param {Historico_movDeleteArgs} args - Arguments to delete one Historico_mov.
     * @example
     * // Delete one Historico_mov
     * const Historico_mov = await prisma.historico_mov.delete({
     *   where: {
     *     // ... filter to delete one Historico_mov
     *   }
     * })
     * 
     */
    delete<T extends Historico_movDeleteArgs>(args: SelectSubset<T, Historico_movDeleteArgs<ExtArgs>>): Prisma__Historico_movClient<$Result.GetResult<Prisma.$Historico_movPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historico_mov.
     * @param {Historico_movUpdateArgs} args - Arguments to update one Historico_mov.
     * @example
     * // Update one Historico_mov
     * const historico_mov = await prisma.historico_mov.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Historico_movUpdateArgs>(args: SelectSubset<T, Historico_movUpdateArgs<ExtArgs>>): Prisma__Historico_movClient<$Result.GetResult<Prisma.$Historico_movPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historico_movs.
     * @param {Historico_movDeleteManyArgs} args - Arguments to filter Historico_movs to delete.
     * @example
     * // Delete a few Historico_movs
     * const { count } = await prisma.historico_mov.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Historico_movDeleteManyArgs>(args?: SelectSubset<T, Historico_movDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historico_movs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_movUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historico_movs
     * const historico_mov = await prisma.historico_mov.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Historico_movUpdateManyArgs>(args: SelectSubset<T, Historico_movUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historico_movs and returns the data updated in the database.
     * @param {Historico_movUpdateManyAndReturnArgs} args - Arguments to update many Historico_movs.
     * @example
     * // Update many Historico_movs
     * const historico_mov = await prisma.historico_mov.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Historico_movs and only return the `id`
     * const historico_movWithIdOnly = await prisma.historico_mov.updateManyAndReturn({
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
    updateManyAndReturn<T extends Historico_movUpdateManyAndReturnArgs>(args: SelectSubset<T, Historico_movUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historico_movPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Historico_mov.
     * @param {Historico_movUpsertArgs} args - Arguments to update or create a Historico_mov.
     * @example
     * // Update or create a Historico_mov
     * const historico_mov = await prisma.historico_mov.upsert({
     *   create: {
     *     // ... data to create a Historico_mov
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historico_mov we want to update
     *   }
     * })
     */
    upsert<T extends Historico_movUpsertArgs>(args: SelectSubset<T, Historico_movUpsertArgs<ExtArgs>>): Prisma__Historico_movClient<$Result.GetResult<Prisma.$Historico_movPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historico_movs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_movCountArgs} args - Arguments to filter Historico_movs to count.
     * @example
     * // Count the number of Historico_movs
     * const count = await prisma.historico_mov.count({
     *   where: {
     *     // ... the filter for the Historico_movs we want to count
     *   }
     * })
    **/
    count<T extends Historico_movCountArgs>(
      args?: Subset<T, Historico_movCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Historico_movCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historico_mov.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_movAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Historico_movAggregateArgs>(args: Subset<T, Historico_movAggregateArgs>): Prisma.PrismaPromise<GetHistorico_movAggregateType<T>>

    /**
     * Group by Historico_mov.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_movGroupByArgs} args - Group by arguments.
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
      T extends Historico_movGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Historico_movGroupByArgs['orderBy'] }
        : { orderBy?: Historico_movGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Historico_movGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorico_movGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Historico_mov model
   */
  readonly fields: Historico_movFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Historico_mov.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Historico_movClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Historico<T extends Historico_mov$HistoricoArgs<ExtArgs> = {}>(args?: Subset<T, Historico_mov$HistoricoArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Historico_mov model
   */
  interface Historico_movFieldRefs {
    readonly id: FieldRef<"Historico_mov", 'Int'>
    readonly motion: FieldRef<"Historico_mov", 'Int'>
    readonly updatedAt: FieldRef<"Historico_mov", 'DateTime'>
    readonly historicoId: FieldRef<"Historico_mov", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Historico_mov findUnique
   */
  export type Historico_movFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_mov
     */
    select?: Historico_movSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_mov
     */
    omit?: Historico_movOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_movInclude<ExtArgs> | null
    /**
     * Filter, which Historico_mov to fetch.
     */
    where: Historico_movWhereUniqueInput
  }

  /**
   * Historico_mov findUniqueOrThrow
   */
  export type Historico_movFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_mov
     */
    select?: Historico_movSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_mov
     */
    omit?: Historico_movOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_movInclude<ExtArgs> | null
    /**
     * Filter, which Historico_mov to fetch.
     */
    where: Historico_movWhereUniqueInput
  }

  /**
   * Historico_mov findFirst
   */
  export type Historico_movFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_mov
     */
    select?: Historico_movSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_mov
     */
    omit?: Historico_movOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_movInclude<ExtArgs> | null
    /**
     * Filter, which Historico_mov to fetch.
     */
    where?: Historico_movWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historico_movs to fetch.
     */
    orderBy?: Historico_movOrderByWithRelationInput | Historico_movOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historico_movs.
     */
    cursor?: Historico_movWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historico_movs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historico_movs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historico_movs.
     */
    distinct?: Historico_movScalarFieldEnum | Historico_movScalarFieldEnum[]
  }

  /**
   * Historico_mov findFirstOrThrow
   */
  export type Historico_movFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_mov
     */
    select?: Historico_movSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_mov
     */
    omit?: Historico_movOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_movInclude<ExtArgs> | null
    /**
     * Filter, which Historico_mov to fetch.
     */
    where?: Historico_movWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historico_movs to fetch.
     */
    orderBy?: Historico_movOrderByWithRelationInput | Historico_movOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historico_movs.
     */
    cursor?: Historico_movWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historico_movs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historico_movs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historico_movs.
     */
    distinct?: Historico_movScalarFieldEnum | Historico_movScalarFieldEnum[]
  }

  /**
   * Historico_mov findMany
   */
  export type Historico_movFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_mov
     */
    select?: Historico_movSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_mov
     */
    omit?: Historico_movOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_movInclude<ExtArgs> | null
    /**
     * Filter, which Historico_movs to fetch.
     */
    where?: Historico_movWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historico_movs to fetch.
     */
    orderBy?: Historico_movOrderByWithRelationInput | Historico_movOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Historico_movs.
     */
    cursor?: Historico_movWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historico_movs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historico_movs.
     */
    skip?: number
    distinct?: Historico_movScalarFieldEnum | Historico_movScalarFieldEnum[]
  }

  /**
   * Historico_mov create
   */
  export type Historico_movCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_mov
     */
    select?: Historico_movSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_mov
     */
    omit?: Historico_movOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_movInclude<ExtArgs> | null
    /**
     * The data needed to create a Historico_mov.
     */
    data: XOR<Historico_movCreateInput, Historico_movUncheckedCreateInput>
  }

  /**
   * Historico_mov createMany
   */
  export type Historico_movCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Historico_movs.
     */
    data: Historico_movCreateManyInput | Historico_movCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Historico_mov createManyAndReturn
   */
  export type Historico_movCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_mov
     */
    select?: Historico_movSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_mov
     */
    omit?: Historico_movOmit<ExtArgs> | null
    /**
     * The data used to create many Historico_movs.
     */
    data: Historico_movCreateManyInput | Historico_movCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_movIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Historico_mov update
   */
  export type Historico_movUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_mov
     */
    select?: Historico_movSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_mov
     */
    omit?: Historico_movOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_movInclude<ExtArgs> | null
    /**
     * The data needed to update a Historico_mov.
     */
    data: XOR<Historico_movUpdateInput, Historico_movUncheckedUpdateInput>
    /**
     * Choose, which Historico_mov to update.
     */
    where: Historico_movWhereUniqueInput
  }

  /**
   * Historico_mov updateMany
   */
  export type Historico_movUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Historico_movs.
     */
    data: XOR<Historico_movUpdateManyMutationInput, Historico_movUncheckedUpdateManyInput>
    /**
     * Filter which Historico_movs to update
     */
    where?: Historico_movWhereInput
    /**
     * Limit how many Historico_movs to update.
     */
    limit?: number
  }

  /**
   * Historico_mov updateManyAndReturn
   */
  export type Historico_movUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_mov
     */
    select?: Historico_movSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_mov
     */
    omit?: Historico_movOmit<ExtArgs> | null
    /**
     * The data used to update Historico_movs.
     */
    data: XOR<Historico_movUpdateManyMutationInput, Historico_movUncheckedUpdateManyInput>
    /**
     * Filter which Historico_movs to update
     */
    where?: Historico_movWhereInput
    /**
     * Limit how many Historico_movs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_movIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Historico_mov upsert
   */
  export type Historico_movUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_mov
     */
    select?: Historico_movSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_mov
     */
    omit?: Historico_movOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_movInclude<ExtArgs> | null
    /**
     * The filter to search for the Historico_mov to update in case it exists.
     */
    where: Historico_movWhereUniqueInput
    /**
     * In case the Historico_mov found by the `where` argument doesn't exist, create a new Historico_mov with this data.
     */
    create: XOR<Historico_movCreateInput, Historico_movUncheckedCreateInput>
    /**
     * In case the Historico_mov was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Historico_movUpdateInput, Historico_movUncheckedUpdateInput>
  }

  /**
   * Historico_mov delete
   */
  export type Historico_movDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_mov
     */
    select?: Historico_movSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_mov
     */
    omit?: Historico_movOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_movInclude<ExtArgs> | null
    /**
     * Filter which Historico_mov to delete.
     */
    where: Historico_movWhereUniqueInput
  }

  /**
   * Historico_mov deleteMany
   */
  export type Historico_movDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historico_movs to delete
     */
    where?: Historico_movWhereInput
    /**
     * Limit how many Historico_movs to delete.
     */
    limit?: number
  }

  /**
   * Historico_mov.Historico
   */
  export type Historico_mov$HistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    where?: HistoricoWhereInput
  }

  /**
   * Historico_mov without action
   */
  export type Historico_movDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_mov
     */
    select?: Historico_movSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_mov
     */
    omit?: Historico_movOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_movInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    senha: 'senha',
    createdAt: 'createdAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DispositivoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    userId: 'userId'
  };

  export type DispositivoScalarFieldEnum = (typeof DispositivoScalarFieldEnum)[keyof typeof DispositivoScalarFieldEnum]


  export const ConfigScalarFieldEnum: {
    id: 'id',
    temperatura: 'temperatura',
    temperaturaMax: 'temperaturaMax',
    temperaturaMin: 'temperaturaMin',
    umidade: 'umidade',
    sensor: 'sensor',
    distanciaSensor: 'distanciaSensor',
    ligado: 'ligado',
    motionMax: 'motionMax',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    dispositivosId: 'dispositivosId'
  };

  export type ConfigScalarFieldEnum = (typeof ConfigScalarFieldEnum)[keyof typeof ConfigScalarFieldEnum]


  export const HistoricoScalarFieldEnum: {
    id: 'id',
    dispositivoId: 'dispositivoId'
  };

  export type HistoricoScalarFieldEnum = (typeof HistoricoScalarFieldEnum)[keyof typeof HistoricoScalarFieldEnum]


  export const Historico_tempScalarFieldEnum: {
    id: 'id',
    temperatura: 'temperatura',
    updatedAt: 'updatedAt',
    historicoId: 'historicoId'
  };

  export type Historico_tempScalarFieldEnum = (typeof Historico_tempScalarFieldEnum)[keyof typeof Historico_tempScalarFieldEnum]


  export const Historico_movScalarFieldEnum: {
    id: 'id',
    motion: 'motion',
    updatedAt: 'updatedAt',
    historicoId: 'historicoId'
  };

  export type Historico_movScalarFieldEnum = (typeof Historico_movScalarFieldEnum)[keyof typeof Historico_movScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    UpdatedAt?: DateTimeFilter<"User"> | Date | string
    dispositivos?: DispositivoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    UpdatedAt?: SortOrder
    dispositivos?: DispositivoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    UpdatedAt?: DateTimeFilter<"User"> | Date | string
    dispositivos?: DispositivoListRelationFilter
  }, "id" | "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    UpdatedAt?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    senha?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DispositivoWhereInput = {
    AND?: DispositivoWhereInput | DispositivoWhereInput[]
    OR?: DispositivoWhereInput[]
    NOT?: DispositivoWhereInput | DispositivoWhereInput[]
    id?: IntFilter<"Dispositivo"> | number
    nome?: StringFilter<"Dispositivo"> | string
    userId?: IntFilter<"Dispositivo"> | number
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    config?: ConfigListRelationFilter
    historico?: HistoricoListRelationFilter
  }

  export type DispositivoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    config?: ConfigOrderByRelationAggregateInput
    historico?: HistoricoOrderByRelationAggregateInput
  }

  export type DispositivoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DispositivoWhereInput | DispositivoWhereInput[]
    OR?: DispositivoWhereInput[]
    NOT?: DispositivoWhereInput | DispositivoWhereInput[]
    nome?: StringFilter<"Dispositivo"> | string
    userId?: IntFilter<"Dispositivo"> | number
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    config?: ConfigListRelationFilter
    historico?: HistoricoListRelationFilter
  }, "id" | "id">

  export type DispositivoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    userId?: SortOrder
    _count?: DispositivoCountOrderByAggregateInput
    _avg?: DispositivoAvgOrderByAggregateInput
    _max?: DispositivoMaxOrderByAggregateInput
    _min?: DispositivoMinOrderByAggregateInput
    _sum?: DispositivoSumOrderByAggregateInput
  }

  export type DispositivoScalarWhereWithAggregatesInput = {
    AND?: DispositivoScalarWhereWithAggregatesInput | DispositivoScalarWhereWithAggregatesInput[]
    OR?: DispositivoScalarWhereWithAggregatesInput[]
    NOT?: DispositivoScalarWhereWithAggregatesInput | DispositivoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dispositivo"> | number
    nome?: StringWithAggregatesFilter<"Dispositivo"> | string
    userId?: IntWithAggregatesFilter<"Dispositivo"> | number
  }

  export type ConfigWhereInput = {
    AND?: ConfigWhereInput | ConfigWhereInput[]
    OR?: ConfigWhereInput[]
    NOT?: ConfigWhereInput | ConfigWhereInput[]
    id?: IntFilter<"Config"> | number
    temperatura?: IntFilter<"Config"> | number
    temperaturaMax?: IntFilter<"Config"> | number
    temperaturaMin?: IntFilter<"Config"> | number
    umidade?: IntFilter<"Config"> | number
    sensor?: BoolFilter<"Config"> | boolean
    distanciaSensor?: IntFilter<"Config"> | number
    ligado?: BoolFilter<"Config"> | boolean
    motionMax?: IntFilter<"Config"> | number
    createdAt?: DateTimeFilter<"Config"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Config"> | Date | string | null
    dispositivosId?: IntFilter<"Config"> | number
    dispositivos?: XOR<DispositivoNullableScalarRelationFilter, DispositivoWhereInput> | null
  }

  export type ConfigOrderByWithRelationInput = {
    id?: SortOrder
    temperatura?: SortOrder
    temperaturaMax?: SortOrder
    temperaturaMin?: SortOrder
    umidade?: SortOrder
    sensor?: SortOrder
    distanciaSensor?: SortOrder
    ligado?: SortOrder
    motionMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    dispositivosId?: SortOrder
    dispositivos?: DispositivoOrderByWithRelationInput
  }

  export type ConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    dispositivosId?: number
    AND?: ConfigWhereInput | ConfigWhereInput[]
    OR?: ConfigWhereInput[]
    NOT?: ConfigWhereInput | ConfigWhereInput[]
    temperatura?: IntFilter<"Config"> | number
    temperaturaMax?: IntFilter<"Config"> | number
    temperaturaMin?: IntFilter<"Config"> | number
    umidade?: IntFilter<"Config"> | number
    sensor?: BoolFilter<"Config"> | boolean
    distanciaSensor?: IntFilter<"Config"> | number
    ligado?: BoolFilter<"Config"> | boolean
    motionMax?: IntFilter<"Config"> | number
    createdAt?: DateTimeFilter<"Config"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Config"> | Date | string | null
    dispositivos?: XOR<DispositivoNullableScalarRelationFilter, DispositivoWhereInput> | null
  }, "id" | "id" | "dispositivosId">

  export type ConfigOrderByWithAggregationInput = {
    id?: SortOrder
    temperatura?: SortOrder
    temperaturaMax?: SortOrder
    temperaturaMin?: SortOrder
    umidade?: SortOrder
    sensor?: SortOrder
    distanciaSensor?: SortOrder
    ligado?: SortOrder
    motionMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    dispositivosId?: SortOrder
    _count?: ConfigCountOrderByAggregateInput
    _avg?: ConfigAvgOrderByAggregateInput
    _max?: ConfigMaxOrderByAggregateInput
    _min?: ConfigMinOrderByAggregateInput
    _sum?: ConfigSumOrderByAggregateInput
  }

  export type ConfigScalarWhereWithAggregatesInput = {
    AND?: ConfigScalarWhereWithAggregatesInput | ConfigScalarWhereWithAggregatesInput[]
    OR?: ConfigScalarWhereWithAggregatesInput[]
    NOT?: ConfigScalarWhereWithAggregatesInput | ConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Config"> | number
    temperatura?: IntWithAggregatesFilter<"Config"> | number
    temperaturaMax?: IntWithAggregatesFilter<"Config"> | number
    temperaturaMin?: IntWithAggregatesFilter<"Config"> | number
    umidade?: IntWithAggregatesFilter<"Config"> | number
    sensor?: BoolWithAggregatesFilter<"Config"> | boolean
    distanciaSensor?: IntWithAggregatesFilter<"Config"> | number
    ligado?: BoolWithAggregatesFilter<"Config"> | boolean
    motionMax?: IntWithAggregatesFilter<"Config"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Config"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Config"> | Date | string | null
    dispositivosId?: IntWithAggregatesFilter<"Config"> | number
  }

  export type HistoricoWhereInput = {
    AND?: HistoricoWhereInput | HistoricoWhereInput[]
    OR?: HistoricoWhereInput[]
    NOT?: HistoricoWhereInput | HistoricoWhereInput[]
    id?: IntFilter<"Historico"> | number
    dispositivoId?: IntNullableFilter<"Historico"> | number | null
    Dispositivo?: XOR<DispositivoNullableScalarRelationFilter, DispositivoWhereInput> | null
    historico_temp?: Historico_tempListRelationFilter
    historico_mov?: Historico_movListRelationFilter
  }

  export type HistoricoOrderByWithRelationInput = {
    id?: SortOrder
    dispositivoId?: SortOrderInput | SortOrder
    Dispositivo?: DispositivoOrderByWithRelationInput
    historico_temp?: Historico_tempOrderByRelationAggregateInput
    historico_mov?: Historico_movOrderByRelationAggregateInput
  }

  export type HistoricoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistoricoWhereInput | HistoricoWhereInput[]
    OR?: HistoricoWhereInput[]
    NOT?: HistoricoWhereInput | HistoricoWhereInput[]
    dispositivoId?: IntNullableFilter<"Historico"> | number | null
    Dispositivo?: XOR<DispositivoNullableScalarRelationFilter, DispositivoWhereInput> | null
    historico_temp?: Historico_tempListRelationFilter
    historico_mov?: Historico_movListRelationFilter
  }, "id" | "id">

  export type HistoricoOrderByWithAggregationInput = {
    id?: SortOrder
    dispositivoId?: SortOrderInput | SortOrder
    _count?: HistoricoCountOrderByAggregateInput
    _avg?: HistoricoAvgOrderByAggregateInput
    _max?: HistoricoMaxOrderByAggregateInput
    _min?: HistoricoMinOrderByAggregateInput
    _sum?: HistoricoSumOrderByAggregateInput
  }

  export type HistoricoScalarWhereWithAggregatesInput = {
    AND?: HistoricoScalarWhereWithAggregatesInput | HistoricoScalarWhereWithAggregatesInput[]
    OR?: HistoricoScalarWhereWithAggregatesInput[]
    NOT?: HistoricoScalarWhereWithAggregatesInput | HistoricoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Historico"> | number
    dispositivoId?: IntNullableWithAggregatesFilter<"Historico"> | number | null
  }

  export type Historico_tempWhereInput = {
    AND?: Historico_tempWhereInput | Historico_tempWhereInput[]
    OR?: Historico_tempWhereInput[]
    NOT?: Historico_tempWhereInput | Historico_tempWhereInput[]
    id?: IntFilter<"Historico_temp"> | number
    temperatura?: IntFilter<"Historico_temp"> | number
    updatedAt?: DateTimeFilter<"Historico_temp"> | Date | string
    historicoId?: IntNullableFilter<"Historico_temp"> | number | null
    Historico?: XOR<HistoricoNullableScalarRelationFilter, HistoricoWhereInput> | null
  }

  export type Historico_tempOrderByWithRelationInput = {
    id?: SortOrder
    temperatura?: SortOrder
    updatedAt?: SortOrder
    historicoId?: SortOrderInput | SortOrder
    Historico?: HistoricoOrderByWithRelationInput
  }

  export type Historico_tempWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Historico_tempWhereInput | Historico_tempWhereInput[]
    OR?: Historico_tempWhereInput[]
    NOT?: Historico_tempWhereInput | Historico_tempWhereInput[]
    temperatura?: IntFilter<"Historico_temp"> | number
    updatedAt?: DateTimeFilter<"Historico_temp"> | Date | string
    historicoId?: IntNullableFilter<"Historico_temp"> | number | null
    Historico?: XOR<HistoricoNullableScalarRelationFilter, HistoricoWhereInput> | null
  }, "id" | "id">

  export type Historico_tempOrderByWithAggregationInput = {
    id?: SortOrder
    temperatura?: SortOrder
    updatedAt?: SortOrder
    historicoId?: SortOrderInput | SortOrder
    _count?: Historico_tempCountOrderByAggregateInput
    _avg?: Historico_tempAvgOrderByAggregateInput
    _max?: Historico_tempMaxOrderByAggregateInput
    _min?: Historico_tempMinOrderByAggregateInput
    _sum?: Historico_tempSumOrderByAggregateInput
  }

  export type Historico_tempScalarWhereWithAggregatesInput = {
    AND?: Historico_tempScalarWhereWithAggregatesInput | Historico_tempScalarWhereWithAggregatesInput[]
    OR?: Historico_tempScalarWhereWithAggregatesInput[]
    NOT?: Historico_tempScalarWhereWithAggregatesInput | Historico_tempScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Historico_temp"> | number
    temperatura?: IntWithAggregatesFilter<"Historico_temp"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Historico_temp"> | Date | string
    historicoId?: IntNullableWithAggregatesFilter<"Historico_temp"> | number | null
  }

  export type Historico_movWhereInput = {
    AND?: Historico_movWhereInput | Historico_movWhereInput[]
    OR?: Historico_movWhereInput[]
    NOT?: Historico_movWhereInput | Historico_movWhereInput[]
    id?: IntFilter<"Historico_mov"> | number
    motion?: IntFilter<"Historico_mov"> | number
    updatedAt?: DateTimeFilter<"Historico_mov"> | Date | string
    historicoId?: IntNullableFilter<"Historico_mov"> | number | null
    Historico?: XOR<HistoricoNullableScalarRelationFilter, HistoricoWhereInput> | null
  }

  export type Historico_movOrderByWithRelationInput = {
    id?: SortOrder
    motion?: SortOrder
    updatedAt?: SortOrder
    historicoId?: SortOrderInput | SortOrder
    Historico?: HistoricoOrderByWithRelationInput
  }

  export type Historico_movWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Historico_movWhereInput | Historico_movWhereInput[]
    OR?: Historico_movWhereInput[]
    NOT?: Historico_movWhereInput | Historico_movWhereInput[]
    motion?: IntFilter<"Historico_mov"> | number
    updatedAt?: DateTimeFilter<"Historico_mov"> | Date | string
    historicoId?: IntNullableFilter<"Historico_mov"> | number | null
    Historico?: XOR<HistoricoNullableScalarRelationFilter, HistoricoWhereInput> | null
  }, "id" | "id">

  export type Historico_movOrderByWithAggregationInput = {
    id?: SortOrder
    motion?: SortOrder
    updatedAt?: SortOrder
    historicoId?: SortOrderInput | SortOrder
    _count?: Historico_movCountOrderByAggregateInput
    _avg?: Historico_movAvgOrderByAggregateInput
    _max?: Historico_movMaxOrderByAggregateInput
    _min?: Historico_movMinOrderByAggregateInput
    _sum?: Historico_movSumOrderByAggregateInput
  }

  export type Historico_movScalarWhereWithAggregatesInput = {
    AND?: Historico_movScalarWhereWithAggregatesInput | Historico_movScalarWhereWithAggregatesInput[]
    OR?: Historico_movScalarWhereWithAggregatesInput[]
    NOT?: Historico_movScalarWhereWithAggregatesInput | Historico_movScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Historico_mov"> | number
    motion?: IntWithAggregatesFilter<"Historico_mov"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Historico_mov"> | Date | string
    historicoId?: IntNullableWithAggregatesFilter<"Historico_mov"> | number | null
  }

  export type UserCreateInput = {
    username?: string | null
    email: string
    senha: string
    createdAt?: Date | string
    UpdatedAt?: Date | string
    dispositivos?: DispositivoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username?: string | null
    email: string
    senha: string
    createdAt?: Date | string
    UpdatedAt?: Date | string
    dispositivos?: DispositivoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispositivos?: DispositivoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispositivos?: DispositivoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username?: string | null
    email: string
    senha: string
    createdAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DispositivoCreateInput = {
    nome: string
    user?: UserCreateNestedOneWithoutDispositivosInput
    config?: ConfigCreateNestedManyWithoutDispositivosInput
    historico?: HistoricoCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoUncheckedCreateInput = {
    id?: number
    nome: string
    userId: number
    config?: ConfigUncheckedCreateNestedManyWithoutDispositivosInput
    historico?: HistoricoUncheckedCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutDispositivosNestedInput
    config?: ConfigUpdateManyWithoutDispositivosNestedInput
    historico?: HistoricoUpdateManyWithoutDispositivoNestedInput
  }

  export type DispositivoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    config?: ConfigUncheckedUpdateManyWithoutDispositivosNestedInput
    historico?: HistoricoUncheckedUpdateManyWithoutDispositivoNestedInput
  }

  export type DispositivoCreateManyInput = {
    id?: number
    nome: string
    userId: number
  }

  export type DispositivoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type DispositivoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ConfigCreateInput = {
    temperatura?: number
    temperaturaMax?: number
    temperaturaMin?: number
    umidade?: number
    sensor?: boolean
    distanciaSensor?: number
    ligado?: boolean
    motionMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    dispositivos?: DispositivoCreateNestedOneWithoutConfigInput
  }

  export type ConfigUncheckedCreateInput = {
    id?: number
    temperatura?: number
    temperaturaMax?: number
    temperaturaMin?: number
    umidade?: number
    sensor?: boolean
    distanciaSensor?: number
    ligado?: boolean
    motionMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    dispositivosId: number
  }

  export type ConfigUpdateInput = {
    temperatura?: IntFieldUpdateOperationsInput | number
    temperaturaMax?: IntFieldUpdateOperationsInput | number
    temperaturaMin?: IntFieldUpdateOperationsInput | number
    umidade?: IntFieldUpdateOperationsInput | number
    sensor?: BoolFieldUpdateOperationsInput | boolean
    distanciaSensor?: IntFieldUpdateOperationsInput | number
    ligado?: BoolFieldUpdateOperationsInput | boolean
    motionMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dispositivos?: DispositivoUpdateOneWithoutConfigNestedInput
  }

  export type ConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    temperatura?: IntFieldUpdateOperationsInput | number
    temperaturaMax?: IntFieldUpdateOperationsInput | number
    temperaturaMin?: IntFieldUpdateOperationsInput | number
    umidade?: IntFieldUpdateOperationsInput | number
    sensor?: BoolFieldUpdateOperationsInput | boolean
    distanciaSensor?: IntFieldUpdateOperationsInput | number
    ligado?: BoolFieldUpdateOperationsInput | boolean
    motionMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dispositivosId?: IntFieldUpdateOperationsInput | number
  }

  export type ConfigCreateManyInput = {
    id?: number
    temperatura?: number
    temperaturaMax?: number
    temperaturaMin?: number
    umidade?: number
    sensor?: boolean
    distanciaSensor?: number
    ligado?: boolean
    motionMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    dispositivosId: number
  }

  export type ConfigUpdateManyMutationInput = {
    temperatura?: IntFieldUpdateOperationsInput | number
    temperaturaMax?: IntFieldUpdateOperationsInput | number
    temperaturaMin?: IntFieldUpdateOperationsInput | number
    umidade?: IntFieldUpdateOperationsInput | number
    sensor?: BoolFieldUpdateOperationsInput | boolean
    distanciaSensor?: IntFieldUpdateOperationsInput | number
    ligado?: BoolFieldUpdateOperationsInput | boolean
    motionMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    temperatura?: IntFieldUpdateOperationsInput | number
    temperaturaMax?: IntFieldUpdateOperationsInput | number
    temperaturaMin?: IntFieldUpdateOperationsInput | number
    umidade?: IntFieldUpdateOperationsInput | number
    sensor?: BoolFieldUpdateOperationsInput | boolean
    distanciaSensor?: IntFieldUpdateOperationsInput | number
    ligado?: BoolFieldUpdateOperationsInput | boolean
    motionMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dispositivosId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricoCreateInput = {
    Dispositivo?: DispositivoCreateNestedOneWithoutHistoricoInput
    historico_temp?: Historico_tempCreateNestedManyWithoutHistoricoInput
    historico_mov?: Historico_movCreateNestedManyWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateInput = {
    id?: number
    dispositivoId?: number | null
    historico_temp?: Historico_tempUncheckedCreateNestedManyWithoutHistoricoInput
    historico_mov?: Historico_movUncheckedCreateNestedManyWithoutHistoricoInput
  }

  export type HistoricoUpdateInput = {
    Dispositivo?: DispositivoUpdateOneWithoutHistoricoNestedInput
    historico_temp?: Historico_tempUpdateManyWithoutHistoricoNestedInput
    historico_mov?: Historico_movUpdateManyWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dispositivoId?: NullableIntFieldUpdateOperationsInput | number | null
    historico_temp?: Historico_tempUncheckedUpdateManyWithoutHistoricoNestedInput
    historico_mov?: Historico_movUncheckedUpdateManyWithoutHistoricoNestedInput
  }

  export type HistoricoCreateManyInput = {
    id?: number
    dispositivoId?: number | null
  }

  export type HistoricoUpdateManyMutationInput = {

  }

  export type HistoricoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dispositivoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Historico_tempCreateInput = {
    temperatura?: number
    updatedAt?: Date | string
    Historico?: HistoricoCreateNestedOneWithoutHistorico_tempInput
  }

  export type Historico_tempUncheckedCreateInput = {
    id?: number
    temperatura?: number
    updatedAt?: Date | string
    historicoId?: number | null
  }

  export type Historico_tempUpdateInput = {
    temperatura?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Historico?: HistoricoUpdateOneWithoutHistorico_tempNestedInput
  }

  export type Historico_tempUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    temperatura?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historicoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Historico_tempCreateManyInput = {
    id?: number
    temperatura?: number
    updatedAt?: Date | string
    historicoId?: number | null
  }

  export type Historico_tempUpdateManyMutationInput = {
    temperatura?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Historico_tempUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    temperatura?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historicoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Historico_movCreateInput = {
    motion: number
    updatedAt?: Date | string
    Historico?: HistoricoCreateNestedOneWithoutHistorico_movInput
  }

  export type Historico_movUncheckedCreateInput = {
    id?: number
    motion: number
    updatedAt?: Date | string
    historicoId?: number | null
  }

  export type Historico_movUpdateInput = {
    motion?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Historico?: HistoricoUpdateOneWithoutHistorico_movNestedInput
  }

  export type Historico_movUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    motion?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historicoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Historico_movCreateManyInput = {
    id?: number
    motion: number
    updatedAt?: Date | string
    historicoId?: number | null
  }

  export type Historico_movUpdateManyMutationInput = {
    motion?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Historico_movUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    motion?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historicoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DispositivoListRelationFilter = {
    every?: DispositivoWhereInput
    some?: DispositivoWhereInput
    none?: DispositivoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DispositivoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ConfigListRelationFilter = {
    every?: ConfigWhereInput
    some?: ConfigWhereInput
    none?: ConfigWhereInput
  }

  export type HistoricoListRelationFilter = {
    every?: HistoricoWhereInput
    some?: HistoricoWhereInput
    none?: HistoricoWhereInput
  }

  export type ConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoricoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DispositivoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    userId?: SortOrder
  }

  export type DispositivoAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DispositivoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    userId?: SortOrder
  }

  export type DispositivoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    userId?: SortOrder
  }

  export type DispositivoSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DispositivoNullableScalarRelationFilter = {
    is?: DispositivoWhereInput | null
    isNot?: DispositivoWhereInput | null
  }

  export type ConfigCountOrderByAggregateInput = {
    id?: SortOrder
    temperatura?: SortOrder
    temperaturaMax?: SortOrder
    temperaturaMin?: SortOrder
    umidade?: SortOrder
    sensor?: SortOrder
    distanciaSensor?: SortOrder
    ligado?: SortOrder
    motionMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dispositivosId?: SortOrder
  }

  export type ConfigAvgOrderByAggregateInput = {
    id?: SortOrder
    temperatura?: SortOrder
    temperaturaMax?: SortOrder
    temperaturaMin?: SortOrder
    umidade?: SortOrder
    distanciaSensor?: SortOrder
    motionMax?: SortOrder
    dispositivosId?: SortOrder
  }

  export type ConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    temperatura?: SortOrder
    temperaturaMax?: SortOrder
    temperaturaMin?: SortOrder
    umidade?: SortOrder
    sensor?: SortOrder
    distanciaSensor?: SortOrder
    ligado?: SortOrder
    motionMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dispositivosId?: SortOrder
  }

  export type ConfigMinOrderByAggregateInput = {
    id?: SortOrder
    temperatura?: SortOrder
    temperaturaMax?: SortOrder
    temperaturaMin?: SortOrder
    umidade?: SortOrder
    sensor?: SortOrder
    distanciaSensor?: SortOrder
    ligado?: SortOrder
    motionMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dispositivosId?: SortOrder
  }

  export type ConfigSumOrderByAggregateInput = {
    id?: SortOrder
    temperatura?: SortOrder
    temperaturaMax?: SortOrder
    temperaturaMin?: SortOrder
    umidade?: SortOrder
    distanciaSensor?: SortOrder
    motionMax?: SortOrder
    dispositivosId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Historico_tempListRelationFilter = {
    every?: Historico_tempWhereInput
    some?: Historico_tempWhereInput
    none?: Historico_tempWhereInput
  }

  export type Historico_movListRelationFilter = {
    every?: Historico_movWhereInput
    some?: Historico_movWhereInput
    none?: Historico_movWhereInput
  }

  export type Historico_tempOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Historico_movOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoricoCountOrderByAggregateInput = {
    id?: SortOrder
    dispositivoId?: SortOrder
  }

  export type HistoricoAvgOrderByAggregateInput = {
    id?: SortOrder
    dispositivoId?: SortOrder
  }

  export type HistoricoMaxOrderByAggregateInput = {
    id?: SortOrder
    dispositivoId?: SortOrder
  }

  export type HistoricoMinOrderByAggregateInput = {
    id?: SortOrder
    dispositivoId?: SortOrder
  }

  export type HistoricoSumOrderByAggregateInput = {
    id?: SortOrder
    dispositivoId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type HistoricoNullableScalarRelationFilter = {
    is?: HistoricoWhereInput | null
    isNot?: HistoricoWhereInput | null
  }

  export type Historico_tempCountOrderByAggregateInput = {
    id?: SortOrder
    temperatura?: SortOrder
    updatedAt?: SortOrder
    historicoId?: SortOrder
  }

  export type Historico_tempAvgOrderByAggregateInput = {
    id?: SortOrder
    temperatura?: SortOrder
    historicoId?: SortOrder
  }

  export type Historico_tempMaxOrderByAggregateInput = {
    id?: SortOrder
    temperatura?: SortOrder
    updatedAt?: SortOrder
    historicoId?: SortOrder
  }

  export type Historico_tempMinOrderByAggregateInput = {
    id?: SortOrder
    temperatura?: SortOrder
    updatedAt?: SortOrder
    historicoId?: SortOrder
  }

  export type Historico_tempSumOrderByAggregateInput = {
    id?: SortOrder
    temperatura?: SortOrder
    historicoId?: SortOrder
  }

  export type Historico_movCountOrderByAggregateInput = {
    id?: SortOrder
    motion?: SortOrder
    updatedAt?: SortOrder
    historicoId?: SortOrder
  }

  export type Historico_movAvgOrderByAggregateInput = {
    id?: SortOrder
    motion?: SortOrder
    historicoId?: SortOrder
  }

  export type Historico_movMaxOrderByAggregateInput = {
    id?: SortOrder
    motion?: SortOrder
    updatedAt?: SortOrder
    historicoId?: SortOrder
  }

  export type Historico_movMinOrderByAggregateInput = {
    id?: SortOrder
    motion?: SortOrder
    updatedAt?: SortOrder
    historicoId?: SortOrder
  }

  export type Historico_movSumOrderByAggregateInput = {
    id?: SortOrder
    motion?: SortOrder
    historicoId?: SortOrder
  }

  export type DispositivoCreateNestedManyWithoutUserInput = {
    create?: XOR<DispositivoCreateWithoutUserInput, DispositivoUncheckedCreateWithoutUserInput> | DispositivoCreateWithoutUserInput[] | DispositivoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DispositivoCreateOrConnectWithoutUserInput | DispositivoCreateOrConnectWithoutUserInput[]
    createMany?: DispositivoCreateManyUserInputEnvelope
    connect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
  }

  export type DispositivoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DispositivoCreateWithoutUserInput, DispositivoUncheckedCreateWithoutUserInput> | DispositivoCreateWithoutUserInput[] | DispositivoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DispositivoCreateOrConnectWithoutUserInput | DispositivoCreateOrConnectWithoutUserInput[]
    createMany?: DispositivoCreateManyUserInputEnvelope
    connect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DispositivoUpdateManyWithoutUserNestedInput = {
    create?: XOR<DispositivoCreateWithoutUserInput, DispositivoUncheckedCreateWithoutUserInput> | DispositivoCreateWithoutUserInput[] | DispositivoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DispositivoCreateOrConnectWithoutUserInput | DispositivoCreateOrConnectWithoutUserInput[]
    upsert?: DispositivoUpsertWithWhereUniqueWithoutUserInput | DispositivoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DispositivoCreateManyUserInputEnvelope
    set?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    disconnect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    delete?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    connect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    update?: DispositivoUpdateWithWhereUniqueWithoutUserInput | DispositivoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DispositivoUpdateManyWithWhereWithoutUserInput | DispositivoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DispositivoScalarWhereInput | DispositivoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DispositivoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DispositivoCreateWithoutUserInput, DispositivoUncheckedCreateWithoutUserInput> | DispositivoCreateWithoutUserInput[] | DispositivoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DispositivoCreateOrConnectWithoutUserInput | DispositivoCreateOrConnectWithoutUserInput[]
    upsert?: DispositivoUpsertWithWhereUniqueWithoutUserInput | DispositivoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DispositivoCreateManyUserInputEnvelope
    set?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    disconnect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    delete?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    connect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    update?: DispositivoUpdateWithWhereUniqueWithoutUserInput | DispositivoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DispositivoUpdateManyWithWhereWithoutUserInput | DispositivoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DispositivoScalarWhereInput | DispositivoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDispositivosInput = {
    create?: XOR<UserCreateWithoutDispositivosInput, UserUncheckedCreateWithoutDispositivosInput>
    connectOrCreate?: UserCreateOrConnectWithoutDispositivosInput
    connect?: UserWhereUniqueInput
  }

  export type ConfigCreateNestedManyWithoutDispositivosInput = {
    create?: XOR<ConfigCreateWithoutDispositivosInput, ConfigUncheckedCreateWithoutDispositivosInput> | ConfigCreateWithoutDispositivosInput[] | ConfigUncheckedCreateWithoutDispositivosInput[]
    connectOrCreate?: ConfigCreateOrConnectWithoutDispositivosInput | ConfigCreateOrConnectWithoutDispositivosInput[]
    createMany?: ConfigCreateManyDispositivosInputEnvelope
    connect?: ConfigWhereUniqueInput | ConfigWhereUniqueInput[]
  }

  export type HistoricoCreateNestedManyWithoutDispositivoInput = {
    create?: XOR<HistoricoCreateWithoutDispositivoInput, HistoricoUncheckedCreateWithoutDispositivoInput> | HistoricoCreateWithoutDispositivoInput[] | HistoricoUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutDispositivoInput | HistoricoCreateOrConnectWithoutDispositivoInput[]
    createMany?: HistoricoCreateManyDispositivoInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type ConfigUncheckedCreateNestedManyWithoutDispositivosInput = {
    create?: XOR<ConfigCreateWithoutDispositivosInput, ConfigUncheckedCreateWithoutDispositivosInput> | ConfigCreateWithoutDispositivosInput[] | ConfigUncheckedCreateWithoutDispositivosInput[]
    connectOrCreate?: ConfigCreateOrConnectWithoutDispositivosInput | ConfigCreateOrConnectWithoutDispositivosInput[]
    createMany?: ConfigCreateManyDispositivosInputEnvelope
    connect?: ConfigWhereUniqueInput | ConfigWhereUniqueInput[]
  }

  export type HistoricoUncheckedCreateNestedManyWithoutDispositivoInput = {
    create?: XOR<HistoricoCreateWithoutDispositivoInput, HistoricoUncheckedCreateWithoutDispositivoInput> | HistoricoCreateWithoutDispositivoInput[] | HistoricoUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutDispositivoInput | HistoricoCreateOrConnectWithoutDispositivoInput[]
    createMany?: HistoricoCreateManyDispositivoInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutDispositivosNestedInput = {
    create?: XOR<UserCreateWithoutDispositivosInput, UserUncheckedCreateWithoutDispositivosInput>
    connectOrCreate?: UserCreateOrConnectWithoutDispositivosInput
    upsert?: UserUpsertWithoutDispositivosInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDispositivosInput, UserUpdateWithoutDispositivosInput>, UserUncheckedUpdateWithoutDispositivosInput>
  }

  export type ConfigUpdateManyWithoutDispositivosNestedInput = {
    create?: XOR<ConfigCreateWithoutDispositivosInput, ConfigUncheckedCreateWithoutDispositivosInput> | ConfigCreateWithoutDispositivosInput[] | ConfigUncheckedCreateWithoutDispositivosInput[]
    connectOrCreate?: ConfigCreateOrConnectWithoutDispositivosInput | ConfigCreateOrConnectWithoutDispositivosInput[]
    upsert?: ConfigUpsertWithWhereUniqueWithoutDispositivosInput | ConfigUpsertWithWhereUniqueWithoutDispositivosInput[]
    createMany?: ConfigCreateManyDispositivosInputEnvelope
    set?: ConfigWhereUniqueInput | ConfigWhereUniqueInput[]
    disconnect?: ConfigWhereUniqueInput | ConfigWhereUniqueInput[]
    delete?: ConfigWhereUniqueInput | ConfigWhereUniqueInput[]
    connect?: ConfigWhereUniqueInput | ConfigWhereUniqueInput[]
    update?: ConfigUpdateWithWhereUniqueWithoutDispositivosInput | ConfigUpdateWithWhereUniqueWithoutDispositivosInput[]
    updateMany?: ConfigUpdateManyWithWhereWithoutDispositivosInput | ConfigUpdateManyWithWhereWithoutDispositivosInput[]
    deleteMany?: ConfigScalarWhereInput | ConfigScalarWhereInput[]
  }

  export type HistoricoUpdateManyWithoutDispositivoNestedInput = {
    create?: XOR<HistoricoCreateWithoutDispositivoInput, HistoricoUncheckedCreateWithoutDispositivoInput> | HistoricoCreateWithoutDispositivoInput[] | HistoricoUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutDispositivoInput | HistoricoCreateOrConnectWithoutDispositivoInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutDispositivoInput | HistoricoUpsertWithWhereUniqueWithoutDispositivoInput[]
    createMany?: HistoricoCreateManyDispositivoInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutDispositivoInput | HistoricoUpdateWithWhereUniqueWithoutDispositivoInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutDispositivoInput | HistoricoUpdateManyWithWhereWithoutDispositivoInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type ConfigUncheckedUpdateManyWithoutDispositivosNestedInput = {
    create?: XOR<ConfigCreateWithoutDispositivosInput, ConfigUncheckedCreateWithoutDispositivosInput> | ConfigCreateWithoutDispositivosInput[] | ConfigUncheckedCreateWithoutDispositivosInput[]
    connectOrCreate?: ConfigCreateOrConnectWithoutDispositivosInput | ConfigCreateOrConnectWithoutDispositivosInput[]
    upsert?: ConfigUpsertWithWhereUniqueWithoutDispositivosInput | ConfigUpsertWithWhereUniqueWithoutDispositivosInput[]
    createMany?: ConfigCreateManyDispositivosInputEnvelope
    set?: ConfigWhereUniqueInput | ConfigWhereUniqueInput[]
    disconnect?: ConfigWhereUniqueInput | ConfigWhereUniqueInput[]
    delete?: ConfigWhereUniqueInput | ConfigWhereUniqueInput[]
    connect?: ConfigWhereUniqueInput | ConfigWhereUniqueInput[]
    update?: ConfigUpdateWithWhereUniqueWithoutDispositivosInput | ConfigUpdateWithWhereUniqueWithoutDispositivosInput[]
    updateMany?: ConfigUpdateManyWithWhereWithoutDispositivosInput | ConfigUpdateManyWithWhereWithoutDispositivosInput[]
    deleteMany?: ConfigScalarWhereInput | ConfigScalarWhereInput[]
  }

  export type HistoricoUncheckedUpdateManyWithoutDispositivoNestedInput = {
    create?: XOR<HistoricoCreateWithoutDispositivoInput, HistoricoUncheckedCreateWithoutDispositivoInput> | HistoricoCreateWithoutDispositivoInput[] | HistoricoUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutDispositivoInput | HistoricoCreateOrConnectWithoutDispositivoInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutDispositivoInput | HistoricoUpsertWithWhereUniqueWithoutDispositivoInput[]
    createMany?: HistoricoCreateManyDispositivoInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutDispositivoInput | HistoricoUpdateWithWhereUniqueWithoutDispositivoInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutDispositivoInput | HistoricoUpdateManyWithWhereWithoutDispositivoInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type DispositivoCreateNestedOneWithoutConfigInput = {
    create?: XOR<DispositivoCreateWithoutConfigInput, DispositivoUncheckedCreateWithoutConfigInput>
    connectOrCreate?: DispositivoCreateOrConnectWithoutConfigInput
    connect?: DispositivoWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DispositivoUpdateOneWithoutConfigNestedInput = {
    create?: XOR<DispositivoCreateWithoutConfigInput, DispositivoUncheckedCreateWithoutConfigInput>
    connectOrCreate?: DispositivoCreateOrConnectWithoutConfigInput
    upsert?: DispositivoUpsertWithoutConfigInput
    disconnect?: DispositivoWhereInput | boolean
    delete?: DispositivoWhereInput | boolean
    connect?: DispositivoWhereUniqueInput
    update?: XOR<XOR<DispositivoUpdateToOneWithWhereWithoutConfigInput, DispositivoUpdateWithoutConfigInput>, DispositivoUncheckedUpdateWithoutConfigInput>
  }

  export type DispositivoCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<DispositivoCreateWithoutHistoricoInput, DispositivoUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: DispositivoCreateOrConnectWithoutHistoricoInput
    connect?: DispositivoWhereUniqueInput
  }

  export type Historico_tempCreateNestedManyWithoutHistoricoInput = {
    create?: XOR<Historico_tempCreateWithoutHistoricoInput, Historico_tempUncheckedCreateWithoutHistoricoInput> | Historico_tempCreateWithoutHistoricoInput[] | Historico_tempUncheckedCreateWithoutHistoricoInput[]
    connectOrCreate?: Historico_tempCreateOrConnectWithoutHistoricoInput | Historico_tempCreateOrConnectWithoutHistoricoInput[]
    createMany?: Historico_tempCreateManyHistoricoInputEnvelope
    connect?: Historico_tempWhereUniqueInput | Historico_tempWhereUniqueInput[]
  }

  export type Historico_movCreateNestedManyWithoutHistoricoInput = {
    create?: XOR<Historico_movCreateWithoutHistoricoInput, Historico_movUncheckedCreateWithoutHistoricoInput> | Historico_movCreateWithoutHistoricoInput[] | Historico_movUncheckedCreateWithoutHistoricoInput[]
    connectOrCreate?: Historico_movCreateOrConnectWithoutHistoricoInput | Historico_movCreateOrConnectWithoutHistoricoInput[]
    createMany?: Historico_movCreateManyHistoricoInputEnvelope
    connect?: Historico_movWhereUniqueInput | Historico_movWhereUniqueInput[]
  }

  export type Historico_tempUncheckedCreateNestedManyWithoutHistoricoInput = {
    create?: XOR<Historico_tempCreateWithoutHistoricoInput, Historico_tempUncheckedCreateWithoutHistoricoInput> | Historico_tempCreateWithoutHistoricoInput[] | Historico_tempUncheckedCreateWithoutHistoricoInput[]
    connectOrCreate?: Historico_tempCreateOrConnectWithoutHistoricoInput | Historico_tempCreateOrConnectWithoutHistoricoInput[]
    createMany?: Historico_tempCreateManyHistoricoInputEnvelope
    connect?: Historico_tempWhereUniqueInput | Historico_tempWhereUniqueInput[]
  }

  export type Historico_movUncheckedCreateNestedManyWithoutHistoricoInput = {
    create?: XOR<Historico_movCreateWithoutHistoricoInput, Historico_movUncheckedCreateWithoutHistoricoInput> | Historico_movCreateWithoutHistoricoInput[] | Historico_movUncheckedCreateWithoutHistoricoInput[]
    connectOrCreate?: Historico_movCreateOrConnectWithoutHistoricoInput | Historico_movCreateOrConnectWithoutHistoricoInput[]
    createMany?: Historico_movCreateManyHistoricoInputEnvelope
    connect?: Historico_movWhereUniqueInput | Historico_movWhereUniqueInput[]
  }

  export type DispositivoUpdateOneWithoutHistoricoNestedInput = {
    create?: XOR<DispositivoCreateWithoutHistoricoInput, DispositivoUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: DispositivoCreateOrConnectWithoutHistoricoInput
    upsert?: DispositivoUpsertWithoutHistoricoInput
    disconnect?: DispositivoWhereInput | boolean
    delete?: DispositivoWhereInput | boolean
    connect?: DispositivoWhereUniqueInput
    update?: XOR<XOR<DispositivoUpdateToOneWithWhereWithoutHistoricoInput, DispositivoUpdateWithoutHistoricoInput>, DispositivoUncheckedUpdateWithoutHistoricoInput>
  }

  export type Historico_tempUpdateManyWithoutHistoricoNestedInput = {
    create?: XOR<Historico_tempCreateWithoutHistoricoInput, Historico_tempUncheckedCreateWithoutHistoricoInput> | Historico_tempCreateWithoutHistoricoInput[] | Historico_tempUncheckedCreateWithoutHistoricoInput[]
    connectOrCreate?: Historico_tempCreateOrConnectWithoutHistoricoInput | Historico_tempCreateOrConnectWithoutHistoricoInput[]
    upsert?: Historico_tempUpsertWithWhereUniqueWithoutHistoricoInput | Historico_tempUpsertWithWhereUniqueWithoutHistoricoInput[]
    createMany?: Historico_tempCreateManyHistoricoInputEnvelope
    set?: Historico_tempWhereUniqueInput | Historico_tempWhereUniqueInput[]
    disconnect?: Historico_tempWhereUniqueInput | Historico_tempWhereUniqueInput[]
    delete?: Historico_tempWhereUniqueInput | Historico_tempWhereUniqueInput[]
    connect?: Historico_tempWhereUniqueInput | Historico_tempWhereUniqueInput[]
    update?: Historico_tempUpdateWithWhereUniqueWithoutHistoricoInput | Historico_tempUpdateWithWhereUniqueWithoutHistoricoInput[]
    updateMany?: Historico_tempUpdateManyWithWhereWithoutHistoricoInput | Historico_tempUpdateManyWithWhereWithoutHistoricoInput[]
    deleteMany?: Historico_tempScalarWhereInput | Historico_tempScalarWhereInput[]
  }

  export type Historico_movUpdateManyWithoutHistoricoNestedInput = {
    create?: XOR<Historico_movCreateWithoutHistoricoInput, Historico_movUncheckedCreateWithoutHistoricoInput> | Historico_movCreateWithoutHistoricoInput[] | Historico_movUncheckedCreateWithoutHistoricoInput[]
    connectOrCreate?: Historico_movCreateOrConnectWithoutHistoricoInput | Historico_movCreateOrConnectWithoutHistoricoInput[]
    upsert?: Historico_movUpsertWithWhereUniqueWithoutHistoricoInput | Historico_movUpsertWithWhereUniqueWithoutHistoricoInput[]
    createMany?: Historico_movCreateManyHistoricoInputEnvelope
    set?: Historico_movWhereUniqueInput | Historico_movWhereUniqueInput[]
    disconnect?: Historico_movWhereUniqueInput | Historico_movWhereUniqueInput[]
    delete?: Historico_movWhereUniqueInput | Historico_movWhereUniqueInput[]
    connect?: Historico_movWhereUniqueInput | Historico_movWhereUniqueInput[]
    update?: Historico_movUpdateWithWhereUniqueWithoutHistoricoInput | Historico_movUpdateWithWhereUniqueWithoutHistoricoInput[]
    updateMany?: Historico_movUpdateManyWithWhereWithoutHistoricoInput | Historico_movUpdateManyWithWhereWithoutHistoricoInput[]
    deleteMany?: Historico_movScalarWhereInput | Historico_movScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Historico_tempUncheckedUpdateManyWithoutHistoricoNestedInput = {
    create?: XOR<Historico_tempCreateWithoutHistoricoInput, Historico_tempUncheckedCreateWithoutHistoricoInput> | Historico_tempCreateWithoutHistoricoInput[] | Historico_tempUncheckedCreateWithoutHistoricoInput[]
    connectOrCreate?: Historico_tempCreateOrConnectWithoutHistoricoInput | Historico_tempCreateOrConnectWithoutHistoricoInput[]
    upsert?: Historico_tempUpsertWithWhereUniqueWithoutHistoricoInput | Historico_tempUpsertWithWhereUniqueWithoutHistoricoInput[]
    createMany?: Historico_tempCreateManyHistoricoInputEnvelope
    set?: Historico_tempWhereUniqueInput | Historico_tempWhereUniqueInput[]
    disconnect?: Historico_tempWhereUniqueInput | Historico_tempWhereUniqueInput[]
    delete?: Historico_tempWhereUniqueInput | Historico_tempWhereUniqueInput[]
    connect?: Historico_tempWhereUniqueInput | Historico_tempWhereUniqueInput[]
    update?: Historico_tempUpdateWithWhereUniqueWithoutHistoricoInput | Historico_tempUpdateWithWhereUniqueWithoutHistoricoInput[]
    updateMany?: Historico_tempUpdateManyWithWhereWithoutHistoricoInput | Historico_tempUpdateManyWithWhereWithoutHistoricoInput[]
    deleteMany?: Historico_tempScalarWhereInput | Historico_tempScalarWhereInput[]
  }

  export type Historico_movUncheckedUpdateManyWithoutHistoricoNestedInput = {
    create?: XOR<Historico_movCreateWithoutHistoricoInput, Historico_movUncheckedCreateWithoutHistoricoInput> | Historico_movCreateWithoutHistoricoInput[] | Historico_movUncheckedCreateWithoutHistoricoInput[]
    connectOrCreate?: Historico_movCreateOrConnectWithoutHistoricoInput | Historico_movCreateOrConnectWithoutHistoricoInput[]
    upsert?: Historico_movUpsertWithWhereUniqueWithoutHistoricoInput | Historico_movUpsertWithWhereUniqueWithoutHistoricoInput[]
    createMany?: Historico_movCreateManyHistoricoInputEnvelope
    set?: Historico_movWhereUniqueInput | Historico_movWhereUniqueInput[]
    disconnect?: Historico_movWhereUniqueInput | Historico_movWhereUniqueInput[]
    delete?: Historico_movWhereUniqueInput | Historico_movWhereUniqueInput[]
    connect?: Historico_movWhereUniqueInput | Historico_movWhereUniqueInput[]
    update?: Historico_movUpdateWithWhereUniqueWithoutHistoricoInput | Historico_movUpdateWithWhereUniqueWithoutHistoricoInput[]
    updateMany?: Historico_movUpdateManyWithWhereWithoutHistoricoInput | Historico_movUpdateManyWithWhereWithoutHistoricoInput[]
    deleteMany?: Historico_movScalarWhereInput | Historico_movScalarWhereInput[]
  }

  export type HistoricoCreateNestedOneWithoutHistorico_tempInput = {
    create?: XOR<HistoricoCreateWithoutHistorico_tempInput, HistoricoUncheckedCreateWithoutHistorico_tempInput>
    connectOrCreate?: HistoricoCreateOrConnectWithoutHistorico_tempInput
    connect?: HistoricoWhereUniqueInput
  }

  export type HistoricoUpdateOneWithoutHistorico_tempNestedInput = {
    create?: XOR<HistoricoCreateWithoutHistorico_tempInput, HistoricoUncheckedCreateWithoutHistorico_tempInput>
    connectOrCreate?: HistoricoCreateOrConnectWithoutHistorico_tempInput
    upsert?: HistoricoUpsertWithoutHistorico_tempInput
    disconnect?: HistoricoWhereInput | boolean
    delete?: HistoricoWhereInput | boolean
    connect?: HistoricoWhereUniqueInput
    update?: XOR<XOR<HistoricoUpdateToOneWithWhereWithoutHistorico_tempInput, HistoricoUpdateWithoutHistorico_tempInput>, HistoricoUncheckedUpdateWithoutHistorico_tempInput>
  }

  export type HistoricoCreateNestedOneWithoutHistorico_movInput = {
    create?: XOR<HistoricoCreateWithoutHistorico_movInput, HistoricoUncheckedCreateWithoutHistorico_movInput>
    connectOrCreate?: HistoricoCreateOrConnectWithoutHistorico_movInput
    connect?: HistoricoWhereUniqueInput
  }

  export type HistoricoUpdateOneWithoutHistorico_movNestedInput = {
    create?: XOR<HistoricoCreateWithoutHistorico_movInput, HistoricoUncheckedCreateWithoutHistorico_movInput>
    connectOrCreate?: HistoricoCreateOrConnectWithoutHistorico_movInput
    upsert?: HistoricoUpsertWithoutHistorico_movInput
    disconnect?: HistoricoWhereInput | boolean
    delete?: HistoricoWhereInput | boolean
    connect?: HistoricoWhereUniqueInput
    update?: XOR<XOR<HistoricoUpdateToOneWithWhereWithoutHistorico_movInput, HistoricoUpdateWithoutHistorico_movInput>, HistoricoUncheckedUpdateWithoutHistorico_movInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DispositivoCreateWithoutUserInput = {
    nome: string
    config?: ConfigCreateNestedManyWithoutDispositivosInput
    historico?: HistoricoCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoUncheckedCreateWithoutUserInput = {
    id?: number
    nome: string
    config?: ConfigUncheckedCreateNestedManyWithoutDispositivosInput
    historico?: HistoricoUncheckedCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoCreateOrConnectWithoutUserInput = {
    where: DispositivoWhereUniqueInput
    create: XOR<DispositivoCreateWithoutUserInput, DispositivoUncheckedCreateWithoutUserInput>
  }

  export type DispositivoCreateManyUserInputEnvelope = {
    data: DispositivoCreateManyUserInput | DispositivoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DispositivoUpsertWithWhereUniqueWithoutUserInput = {
    where: DispositivoWhereUniqueInput
    update: XOR<DispositivoUpdateWithoutUserInput, DispositivoUncheckedUpdateWithoutUserInput>
    create: XOR<DispositivoCreateWithoutUserInput, DispositivoUncheckedCreateWithoutUserInput>
  }

  export type DispositivoUpdateWithWhereUniqueWithoutUserInput = {
    where: DispositivoWhereUniqueInput
    data: XOR<DispositivoUpdateWithoutUserInput, DispositivoUncheckedUpdateWithoutUserInput>
  }

  export type DispositivoUpdateManyWithWhereWithoutUserInput = {
    where: DispositivoScalarWhereInput
    data: XOR<DispositivoUpdateManyMutationInput, DispositivoUncheckedUpdateManyWithoutUserInput>
  }

  export type DispositivoScalarWhereInput = {
    AND?: DispositivoScalarWhereInput | DispositivoScalarWhereInput[]
    OR?: DispositivoScalarWhereInput[]
    NOT?: DispositivoScalarWhereInput | DispositivoScalarWhereInput[]
    id?: IntFilter<"Dispositivo"> | number
    nome?: StringFilter<"Dispositivo"> | string
    userId?: IntFilter<"Dispositivo"> | number
  }

  export type UserCreateWithoutDispositivosInput = {
    username?: string | null
    email: string
    senha: string
    createdAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutDispositivosInput = {
    id?: number
    username?: string | null
    email: string
    senha: string
    createdAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutDispositivosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDispositivosInput, UserUncheckedCreateWithoutDispositivosInput>
  }

  export type ConfigCreateWithoutDispositivosInput = {
    temperatura?: number
    temperaturaMax?: number
    temperaturaMin?: number
    umidade?: number
    sensor?: boolean
    distanciaSensor?: number
    ligado?: boolean
    motionMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ConfigUncheckedCreateWithoutDispositivosInput = {
    id?: number
    temperatura?: number
    temperaturaMax?: number
    temperaturaMin?: number
    umidade?: number
    sensor?: boolean
    distanciaSensor?: number
    ligado?: boolean
    motionMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ConfigCreateOrConnectWithoutDispositivosInput = {
    where: ConfigWhereUniqueInput
    create: XOR<ConfigCreateWithoutDispositivosInput, ConfigUncheckedCreateWithoutDispositivosInput>
  }

  export type ConfigCreateManyDispositivosInputEnvelope = {
    data: ConfigCreateManyDispositivosInput | ConfigCreateManyDispositivosInput[]
    skipDuplicates?: boolean
  }

  export type HistoricoCreateWithoutDispositivoInput = {
    historico_temp?: Historico_tempCreateNestedManyWithoutHistoricoInput
    historico_mov?: Historico_movCreateNestedManyWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateWithoutDispositivoInput = {
    id?: number
    historico_temp?: Historico_tempUncheckedCreateNestedManyWithoutHistoricoInput
    historico_mov?: Historico_movUncheckedCreateNestedManyWithoutHistoricoInput
  }

  export type HistoricoCreateOrConnectWithoutDispositivoInput = {
    where: HistoricoWhereUniqueInput
    create: XOR<HistoricoCreateWithoutDispositivoInput, HistoricoUncheckedCreateWithoutDispositivoInput>
  }

  export type HistoricoCreateManyDispositivoInputEnvelope = {
    data: HistoricoCreateManyDispositivoInput | HistoricoCreateManyDispositivoInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDispositivosInput = {
    update: XOR<UserUpdateWithoutDispositivosInput, UserUncheckedUpdateWithoutDispositivosInput>
    create: XOR<UserCreateWithoutDispositivosInput, UserUncheckedCreateWithoutDispositivosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDispositivosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDispositivosInput, UserUncheckedUpdateWithoutDispositivosInput>
  }

  export type UserUpdateWithoutDispositivosInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutDispositivosInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigUpsertWithWhereUniqueWithoutDispositivosInput = {
    where: ConfigWhereUniqueInput
    update: XOR<ConfigUpdateWithoutDispositivosInput, ConfigUncheckedUpdateWithoutDispositivosInput>
    create: XOR<ConfigCreateWithoutDispositivosInput, ConfigUncheckedCreateWithoutDispositivosInput>
  }

  export type ConfigUpdateWithWhereUniqueWithoutDispositivosInput = {
    where: ConfigWhereUniqueInput
    data: XOR<ConfigUpdateWithoutDispositivosInput, ConfigUncheckedUpdateWithoutDispositivosInput>
  }

  export type ConfigUpdateManyWithWhereWithoutDispositivosInput = {
    where: ConfigScalarWhereInput
    data: XOR<ConfigUpdateManyMutationInput, ConfigUncheckedUpdateManyWithoutDispositivosInput>
  }

  export type ConfigScalarWhereInput = {
    AND?: ConfigScalarWhereInput | ConfigScalarWhereInput[]
    OR?: ConfigScalarWhereInput[]
    NOT?: ConfigScalarWhereInput | ConfigScalarWhereInput[]
    id?: IntFilter<"Config"> | number
    temperatura?: IntFilter<"Config"> | number
    temperaturaMax?: IntFilter<"Config"> | number
    temperaturaMin?: IntFilter<"Config"> | number
    umidade?: IntFilter<"Config"> | number
    sensor?: BoolFilter<"Config"> | boolean
    distanciaSensor?: IntFilter<"Config"> | number
    ligado?: BoolFilter<"Config"> | boolean
    motionMax?: IntFilter<"Config"> | number
    createdAt?: DateTimeFilter<"Config"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Config"> | Date | string | null
    dispositivosId?: IntFilter<"Config"> | number
  }

  export type HistoricoUpsertWithWhereUniqueWithoutDispositivoInput = {
    where: HistoricoWhereUniqueInput
    update: XOR<HistoricoUpdateWithoutDispositivoInput, HistoricoUncheckedUpdateWithoutDispositivoInput>
    create: XOR<HistoricoCreateWithoutDispositivoInput, HistoricoUncheckedCreateWithoutDispositivoInput>
  }

  export type HistoricoUpdateWithWhereUniqueWithoutDispositivoInput = {
    where: HistoricoWhereUniqueInput
    data: XOR<HistoricoUpdateWithoutDispositivoInput, HistoricoUncheckedUpdateWithoutDispositivoInput>
  }

  export type HistoricoUpdateManyWithWhereWithoutDispositivoInput = {
    where: HistoricoScalarWhereInput
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyWithoutDispositivoInput>
  }

  export type HistoricoScalarWhereInput = {
    AND?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
    OR?: HistoricoScalarWhereInput[]
    NOT?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
    id?: IntFilter<"Historico"> | number
    dispositivoId?: IntNullableFilter<"Historico"> | number | null
  }

  export type DispositivoCreateWithoutConfigInput = {
    nome: string
    user?: UserCreateNestedOneWithoutDispositivosInput
    historico?: HistoricoCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoUncheckedCreateWithoutConfigInput = {
    id?: number
    nome: string
    userId: number
    historico?: HistoricoUncheckedCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoCreateOrConnectWithoutConfigInput = {
    where: DispositivoWhereUniqueInput
    create: XOR<DispositivoCreateWithoutConfigInput, DispositivoUncheckedCreateWithoutConfigInput>
  }

  export type DispositivoUpsertWithoutConfigInput = {
    update: XOR<DispositivoUpdateWithoutConfigInput, DispositivoUncheckedUpdateWithoutConfigInput>
    create: XOR<DispositivoCreateWithoutConfigInput, DispositivoUncheckedCreateWithoutConfigInput>
    where?: DispositivoWhereInput
  }

  export type DispositivoUpdateToOneWithWhereWithoutConfigInput = {
    where?: DispositivoWhereInput
    data: XOR<DispositivoUpdateWithoutConfigInput, DispositivoUncheckedUpdateWithoutConfigInput>
  }

  export type DispositivoUpdateWithoutConfigInput = {
    nome?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutDispositivosNestedInput
    historico?: HistoricoUpdateManyWithoutDispositivoNestedInput
  }

  export type DispositivoUncheckedUpdateWithoutConfigInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    historico?: HistoricoUncheckedUpdateManyWithoutDispositivoNestedInput
  }

  export type DispositivoCreateWithoutHistoricoInput = {
    nome: string
    user?: UserCreateNestedOneWithoutDispositivosInput
    config?: ConfigCreateNestedManyWithoutDispositivosInput
  }

  export type DispositivoUncheckedCreateWithoutHistoricoInput = {
    id?: number
    nome: string
    userId: number
    config?: ConfigUncheckedCreateNestedManyWithoutDispositivosInput
  }

  export type DispositivoCreateOrConnectWithoutHistoricoInput = {
    where: DispositivoWhereUniqueInput
    create: XOR<DispositivoCreateWithoutHistoricoInput, DispositivoUncheckedCreateWithoutHistoricoInput>
  }

  export type Historico_tempCreateWithoutHistoricoInput = {
    temperatura?: number
    updatedAt?: Date | string
  }

  export type Historico_tempUncheckedCreateWithoutHistoricoInput = {
    id?: number
    temperatura?: number
    updatedAt?: Date | string
  }

  export type Historico_tempCreateOrConnectWithoutHistoricoInput = {
    where: Historico_tempWhereUniqueInput
    create: XOR<Historico_tempCreateWithoutHistoricoInput, Historico_tempUncheckedCreateWithoutHistoricoInput>
  }

  export type Historico_tempCreateManyHistoricoInputEnvelope = {
    data: Historico_tempCreateManyHistoricoInput | Historico_tempCreateManyHistoricoInput[]
    skipDuplicates?: boolean
  }

  export type Historico_movCreateWithoutHistoricoInput = {
    motion: number
    updatedAt?: Date | string
  }

  export type Historico_movUncheckedCreateWithoutHistoricoInput = {
    id?: number
    motion: number
    updatedAt?: Date | string
  }

  export type Historico_movCreateOrConnectWithoutHistoricoInput = {
    where: Historico_movWhereUniqueInput
    create: XOR<Historico_movCreateWithoutHistoricoInput, Historico_movUncheckedCreateWithoutHistoricoInput>
  }

  export type Historico_movCreateManyHistoricoInputEnvelope = {
    data: Historico_movCreateManyHistoricoInput | Historico_movCreateManyHistoricoInput[]
    skipDuplicates?: boolean
  }

  export type DispositivoUpsertWithoutHistoricoInput = {
    update: XOR<DispositivoUpdateWithoutHistoricoInput, DispositivoUncheckedUpdateWithoutHistoricoInput>
    create: XOR<DispositivoCreateWithoutHistoricoInput, DispositivoUncheckedCreateWithoutHistoricoInput>
    where?: DispositivoWhereInput
  }

  export type DispositivoUpdateToOneWithWhereWithoutHistoricoInput = {
    where?: DispositivoWhereInput
    data: XOR<DispositivoUpdateWithoutHistoricoInput, DispositivoUncheckedUpdateWithoutHistoricoInput>
  }

  export type DispositivoUpdateWithoutHistoricoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutDispositivosNestedInput
    config?: ConfigUpdateManyWithoutDispositivosNestedInput
  }

  export type DispositivoUncheckedUpdateWithoutHistoricoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    config?: ConfigUncheckedUpdateManyWithoutDispositivosNestedInput
  }

  export type Historico_tempUpsertWithWhereUniqueWithoutHistoricoInput = {
    where: Historico_tempWhereUniqueInput
    update: XOR<Historico_tempUpdateWithoutHistoricoInput, Historico_tempUncheckedUpdateWithoutHistoricoInput>
    create: XOR<Historico_tempCreateWithoutHistoricoInput, Historico_tempUncheckedCreateWithoutHistoricoInput>
  }

  export type Historico_tempUpdateWithWhereUniqueWithoutHistoricoInput = {
    where: Historico_tempWhereUniqueInput
    data: XOR<Historico_tempUpdateWithoutHistoricoInput, Historico_tempUncheckedUpdateWithoutHistoricoInput>
  }

  export type Historico_tempUpdateManyWithWhereWithoutHistoricoInput = {
    where: Historico_tempScalarWhereInput
    data: XOR<Historico_tempUpdateManyMutationInput, Historico_tempUncheckedUpdateManyWithoutHistoricoInput>
  }

  export type Historico_tempScalarWhereInput = {
    AND?: Historico_tempScalarWhereInput | Historico_tempScalarWhereInput[]
    OR?: Historico_tempScalarWhereInput[]
    NOT?: Historico_tempScalarWhereInput | Historico_tempScalarWhereInput[]
    id?: IntFilter<"Historico_temp"> | number
    temperatura?: IntFilter<"Historico_temp"> | number
    updatedAt?: DateTimeFilter<"Historico_temp"> | Date | string
    historicoId?: IntNullableFilter<"Historico_temp"> | number | null
  }

  export type Historico_movUpsertWithWhereUniqueWithoutHistoricoInput = {
    where: Historico_movWhereUniqueInput
    update: XOR<Historico_movUpdateWithoutHistoricoInput, Historico_movUncheckedUpdateWithoutHistoricoInput>
    create: XOR<Historico_movCreateWithoutHistoricoInput, Historico_movUncheckedCreateWithoutHistoricoInput>
  }

  export type Historico_movUpdateWithWhereUniqueWithoutHistoricoInput = {
    where: Historico_movWhereUniqueInput
    data: XOR<Historico_movUpdateWithoutHistoricoInput, Historico_movUncheckedUpdateWithoutHistoricoInput>
  }

  export type Historico_movUpdateManyWithWhereWithoutHistoricoInput = {
    where: Historico_movScalarWhereInput
    data: XOR<Historico_movUpdateManyMutationInput, Historico_movUncheckedUpdateManyWithoutHistoricoInput>
  }

  export type Historico_movScalarWhereInput = {
    AND?: Historico_movScalarWhereInput | Historico_movScalarWhereInput[]
    OR?: Historico_movScalarWhereInput[]
    NOT?: Historico_movScalarWhereInput | Historico_movScalarWhereInput[]
    id?: IntFilter<"Historico_mov"> | number
    motion?: IntFilter<"Historico_mov"> | number
    updatedAt?: DateTimeFilter<"Historico_mov"> | Date | string
    historicoId?: IntNullableFilter<"Historico_mov"> | number | null
  }

  export type HistoricoCreateWithoutHistorico_tempInput = {
    Dispositivo?: DispositivoCreateNestedOneWithoutHistoricoInput
    historico_mov?: Historico_movCreateNestedManyWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateWithoutHistorico_tempInput = {
    id?: number
    dispositivoId?: number | null
    historico_mov?: Historico_movUncheckedCreateNestedManyWithoutHistoricoInput
  }

  export type HistoricoCreateOrConnectWithoutHistorico_tempInput = {
    where: HistoricoWhereUniqueInput
    create: XOR<HistoricoCreateWithoutHistorico_tempInput, HistoricoUncheckedCreateWithoutHistorico_tempInput>
  }

  export type HistoricoUpsertWithoutHistorico_tempInput = {
    update: XOR<HistoricoUpdateWithoutHistorico_tempInput, HistoricoUncheckedUpdateWithoutHistorico_tempInput>
    create: XOR<HistoricoCreateWithoutHistorico_tempInput, HistoricoUncheckedCreateWithoutHistorico_tempInput>
    where?: HistoricoWhereInput
  }

  export type HistoricoUpdateToOneWithWhereWithoutHistorico_tempInput = {
    where?: HistoricoWhereInput
    data: XOR<HistoricoUpdateWithoutHistorico_tempInput, HistoricoUncheckedUpdateWithoutHistorico_tempInput>
  }

  export type HistoricoUpdateWithoutHistorico_tempInput = {
    Dispositivo?: DispositivoUpdateOneWithoutHistoricoNestedInput
    historico_mov?: Historico_movUpdateManyWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateWithoutHistorico_tempInput = {
    id?: IntFieldUpdateOperationsInput | number
    dispositivoId?: NullableIntFieldUpdateOperationsInput | number | null
    historico_mov?: Historico_movUncheckedUpdateManyWithoutHistoricoNestedInput
  }

  export type HistoricoCreateWithoutHistorico_movInput = {
    Dispositivo?: DispositivoCreateNestedOneWithoutHistoricoInput
    historico_temp?: Historico_tempCreateNestedManyWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateWithoutHistorico_movInput = {
    id?: number
    dispositivoId?: number | null
    historico_temp?: Historico_tempUncheckedCreateNestedManyWithoutHistoricoInput
  }

  export type HistoricoCreateOrConnectWithoutHistorico_movInput = {
    where: HistoricoWhereUniqueInput
    create: XOR<HistoricoCreateWithoutHistorico_movInput, HistoricoUncheckedCreateWithoutHistorico_movInput>
  }

  export type HistoricoUpsertWithoutHistorico_movInput = {
    update: XOR<HistoricoUpdateWithoutHistorico_movInput, HistoricoUncheckedUpdateWithoutHistorico_movInput>
    create: XOR<HistoricoCreateWithoutHistorico_movInput, HistoricoUncheckedCreateWithoutHistorico_movInput>
    where?: HistoricoWhereInput
  }

  export type HistoricoUpdateToOneWithWhereWithoutHistorico_movInput = {
    where?: HistoricoWhereInput
    data: XOR<HistoricoUpdateWithoutHistorico_movInput, HistoricoUncheckedUpdateWithoutHistorico_movInput>
  }

  export type HistoricoUpdateWithoutHistorico_movInput = {
    Dispositivo?: DispositivoUpdateOneWithoutHistoricoNestedInput
    historico_temp?: Historico_tempUpdateManyWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateWithoutHistorico_movInput = {
    id?: IntFieldUpdateOperationsInput | number
    dispositivoId?: NullableIntFieldUpdateOperationsInput | number | null
    historico_temp?: Historico_tempUncheckedUpdateManyWithoutHistoricoNestedInput
  }

  export type DispositivoCreateManyUserInput = {
    id?: number
    nome: string
  }

  export type DispositivoUpdateWithoutUserInput = {
    nome?: StringFieldUpdateOperationsInput | string
    config?: ConfigUpdateManyWithoutDispositivosNestedInput
    historico?: HistoricoUpdateManyWithoutDispositivoNestedInput
  }

  export type DispositivoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    config?: ConfigUncheckedUpdateManyWithoutDispositivosNestedInput
    historico?: HistoricoUncheckedUpdateManyWithoutDispositivoNestedInput
  }

  export type DispositivoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ConfigCreateManyDispositivosInput = {
    id?: number
    temperatura?: number
    temperaturaMax?: number
    temperaturaMin?: number
    umidade?: number
    sensor?: boolean
    distanciaSensor?: number
    ligado?: boolean
    motionMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type HistoricoCreateManyDispositivoInput = {
    id?: number
  }

  export type ConfigUpdateWithoutDispositivosInput = {
    temperatura?: IntFieldUpdateOperationsInput | number
    temperaturaMax?: IntFieldUpdateOperationsInput | number
    temperaturaMin?: IntFieldUpdateOperationsInput | number
    umidade?: IntFieldUpdateOperationsInput | number
    sensor?: BoolFieldUpdateOperationsInput | boolean
    distanciaSensor?: IntFieldUpdateOperationsInput | number
    ligado?: BoolFieldUpdateOperationsInput | boolean
    motionMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConfigUncheckedUpdateWithoutDispositivosInput = {
    id?: IntFieldUpdateOperationsInput | number
    temperatura?: IntFieldUpdateOperationsInput | number
    temperaturaMax?: IntFieldUpdateOperationsInput | number
    temperaturaMin?: IntFieldUpdateOperationsInput | number
    umidade?: IntFieldUpdateOperationsInput | number
    sensor?: BoolFieldUpdateOperationsInput | boolean
    distanciaSensor?: IntFieldUpdateOperationsInput | number
    ligado?: BoolFieldUpdateOperationsInput | boolean
    motionMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConfigUncheckedUpdateManyWithoutDispositivosInput = {
    id?: IntFieldUpdateOperationsInput | number
    temperatura?: IntFieldUpdateOperationsInput | number
    temperaturaMax?: IntFieldUpdateOperationsInput | number
    temperaturaMin?: IntFieldUpdateOperationsInput | number
    umidade?: IntFieldUpdateOperationsInput | number
    sensor?: BoolFieldUpdateOperationsInput | boolean
    distanciaSensor?: IntFieldUpdateOperationsInput | number
    ligado?: BoolFieldUpdateOperationsInput | boolean
    motionMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoricoUpdateWithoutDispositivoInput = {
    historico_temp?: Historico_tempUpdateManyWithoutHistoricoNestedInput
    historico_mov?: Historico_movUpdateManyWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateWithoutDispositivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    historico_temp?: Historico_tempUncheckedUpdateManyWithoutHistoricoNestedInput
    historico_mov?: Historico_movUncheckedUpdateManyWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateManyWithoutDispositivoInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type Historico_tempCreateManyHistoricoInput = {
    id?: number
    temperatura?: number
    updatedAt?: Date | string
  }

  export type Historico_movCreateManyHistoricoInput = {
    id?: number
    motion: number
    updatedAt?: Date | string
  }

  export type Historico_tempUpdateWithoutHistoricoInput = {
    temperatura?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Historico_tempUncheckedUpdateWithoutHistoricoInput = {
    id?: IntFieldUpdateOperationsInput | number
    temperatura?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Historico_tempUncheckedUpdateManyWithoutHistoricoInput = {
    id?: IntFieldUpdateOperationsInput | number
    temperatura?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Historico_movUpdateWithoutHistoricoInput = {
    motion?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Historico_movUncheckedUpdateWithoutHistoricoInput = {
    id?: IntFieldUpdateOperationsInput | number
    motion?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Historico_movUncheckedUpdateManyWithoutHistoricoInput = {
    id?: IntFieldUpdateOperationsInput | number
    motion?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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