
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
 * Model Pasien
 * 
 */
export type Pasien = $Result.DefaultSelection<Prisma.$PasienPayload>
/**
 * Model Gejala
 * 
 */
export type Gejala = $Result.DefaultSelection<Prisma.$GejalaPayload>
/**
 * Model Penyakit
 * 
 */
export type Penyakit = $Result.DefaultSelection<Prisma.$PenyakitPayload>
/**
 * Model Solusi
 * 
 */
export type Solusi = $Result.DefaultSelection<Prisma.$SolusiPayload>
/**
 * Model Pengetahuan
 * 
 */
export type Pengetahuan = $Result.DefaultSelection<Prisma.$PengetahuanPayload>
/**
 * Model Hasil
 * 
 */
export type Hasil = $Result.DefaultSelection<Prisma.$HasilPayload>
/**
 * Model DiagnosaDetail
 * 
 */
export type DiagnosaDetail = $Result.DefaultSelection<Prisma.$DiagnosaDetailPayload>

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.pasien`: Exposes CRUD operations for the **Pasien** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pasiens
    * const pasiens = await prisma.pasien.findMany()
    * ```
    */
  get pasien(): Prisma.PasienDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gejala`: Exposes CRUD operations for the **Gejala** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gejalas
    * const gejalas = await prisma.gejala.findMany()
    * ```
    */
  get gejala(): Prisma.GejalaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.penyakit`: Exposes CRUD operations for the **Penyakit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penyakits
    * const penyakits = await prisma.penyakit.findMany()
    * ```
    */
  get penyakit(): Prisma.PenyakitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solusi`: Exposes CRUD operations for the **Solusi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solusis
    * const solusis = await prisma.solusi.findMany()
    * ```
    */
  get solusi(): Prisma.SolusiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pengetahuan`: Exposes CRUD operations for the **Pengetahuan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pengetahuans
    * const pengetahuans = await prisma.pengetahuan.findMany()
    * ```
    */
  get pengetahuan(): Prisma.PengetahuanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hasil`: Exposes CRUD operations for the **Hasil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hasils
    * const hasils = await prisma.hasil.findMany()
    * ```
    */
  get hasil(): Prisma.HasilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnosaDetail`: Exposes CRUD operations for the **DiagnosaDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiagnosaDetails
    * const diagnosaDetails = await prisma.diagnosaDetail.findMany()
    * ```
    */
  get diagnosaDetail(): Prisma.DiagnosaDetailDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    Pasien: 'Pasien',
    Gejala: 'Gejala',
    Penyakit: 'Penyakit',
    Solusi: 'Solusi',
    Pengetahuan: 'Pengetahuan',
    Hasil: 'Hasil',
    DiagnosaDetail: 'DiagnosaDetail'
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
      modelProps: "user" | "pasien" | "gejala" | "penyakit" | "solusi" | "pengetahuan" | "hasil" | "diagnosaDetail"
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
      Pasien: {
        payload: Prisma.$PasienPayload<ExtArgs>
        fields: Prisma.PasienFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasienFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasienFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          findFirst: {
            args: Prisma.PasienFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasienFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          findMany: {
            args: Prisma.PasienFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>[]
          }
          create: {
            args: Prisma.PasienCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          createMany: {
            args: Prisma.PasienCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasienCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>[]
          }
          delete: {
            args: Prisma.PasienDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          update: {
            args: Prisma.PasienUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          deleteMany: {
            args: Prisma.PasienDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasienUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasienUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>[]
          }
          upsert: {
            args: Prisma.PasienUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          aggregate: {
            args: Prisma.PasienAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasien>
          }
          groupBy: {
            args: Prisma.PasienGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasienGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasienCountArgs<ExtArgs>
            result: $Utils.Optional<PasienCountAggregateOutputType> | number
          }
        }
      }
      Gejala: {
        payload: Prisma.$GejalaPayload<ExtArgs>
        fields: Prisma.GejalaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GejalaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GejalaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GejalaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GejalaPayload>
          }
          findFirst: {
            args: Prisma.GejalaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GejalaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GejalaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GejalaPayload>
          }
          findMany: {
            args: Prisma.GejalaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GejalaPayload>[]
          }
          create: {
            args: Prisma.GejalaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GejalaPayload>
          }
          createMany: {
            args: Prisma.GejalaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GejalaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GejalaPayload>[]
          }
          delete: {
            args: Prisma.GejalaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GejalaPayload>
          }
          update: {
            args: Prisma.GejalaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GejalaPayload>
          }
          deleteMany: {
            args: Prisma.GejalaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GejalaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GejalaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GejalaPayload>[]
          }
          upsert: {
            args: Prisma.GejalaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GejalaPayload>
          }
          aggregate: {
            args: Prisma.GejalaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGejala>
          }
          groupBy: {
            args: Prisma.GejalaGroupByArgs<ExtArgs>
            result: $Utils.Optional<GejalaGroupByOutputType>[]
          }
          count: {
            args: Prisma.GejalaCountArgs<ExtArgs>
            result: $Utils.Optional<GejalaCountAggregateOutputType> | number
          }
        }
      }
      Penyakit: {
        payload: Prisma.$PenyakitPayload<ExtArgs>
        fields: Prisma.PenyakitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PenyakitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenyakitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PenyakitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenyakitPayload>
          }
          findFirst: {
            args: Prisma.PenyakitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenyakitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PenyakitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenyakitPayload>
          }
          findMany: {
            args: Prisma.PenyakitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenyakitPayload>[]
          }
          create: {
            args: Prisma.PenyakitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenyakitPayload>
          }
          createMany: {
            args: Prisma.PenyakitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PenyakitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenyakitPayload>[]
          }
          delete: {
            args: Prisma.PenyakitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenyakitPayload>
          }
          update: {
            args: Prisma.PenyakitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenyakitPayload>
          }
          deleteMany: {
            args: Prisma.PenyakitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PenyakitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PenyakitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenyakitPayload>[]
          }
          upsert: {
            args: Prisma.PenyakitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenyakitPayload>
          }
          aggregate: {
            args: Prisma.PenyakitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePenyakit>
          }
          groupBy: {
            args: Prisma.PenyakitGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenyakitGroupByOutputType>[]
          }
          count: {
            args: Prisma.PenyakitCountArgs<ExtArgs>
            result: $Utils.Optional<PenyakitCountAggregateOutputType> | number
          }
        }
      }
      Solusi: {
        payload: Prisma.$SolusiPayload<ExtArgs>
        fields: Prisma.SolusiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolusiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolusiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolusiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolusiPayload>
          }
          findFirst: {
            args: Prisma.SolusiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolusiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolusiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolusiPayload>
          }
          findMany: {
            args: Prisma.SolusiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolusiPayload>[]
          }
          create: {
            args: Prisma.SolusiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolusiPayload>
          }
          createMany: {
            args: Prisma.SolusiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolusiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolusiPayload>[]
          }
          delete: {
            args: Prisma.SolusiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolusiPayload>
          }
          update: {
            args: Prisma.SolusiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolusiPayload>
          }
          deleteMany: {
            args: Prisma.SolusiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolusiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolusiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolusiPayload>[]
          }
          upsert: {
            args: Prisma.SolusiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolusiPayload>
          }
          aggregate: {
            args: Prisma.SolusiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolusi>
          }
          groupBy: {
            args: Prisma.SolusiGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolusiGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolusiCountArgs<ExtArgs>
            result: $Utils.Optional<SolusiCountAggregateOutputType> | number
          }
        }
      }
      Pengetahuan: {
        payload: Prisma.$PengetahuanPayload<ExtArgs>
        fields: Prisma.PengetahuanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PengetahuanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengetahuanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PengetahuanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengetahuanPayload>
          }
          findFirst: {
            args: Prisma.PengetahuanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengetahuanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PengetahuanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengetahuanPayload>
          }
          findMany: {
            args: Prisma.PengetahuanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengetahuanPayload>[]
          }
          create: {
            args: Prisma.PengetahuanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengetahuanPayload>
          }
          createMany: {
            args: Prisma.PengetahuanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PengetahuanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengetahuanPayload>[]
          }
          delete: {
            args: Prisma.PengetahuanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengetahuanPayload>
          }
          update: {
            args: Prisma.PengetahuanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengetahuanPayload>
          }
          deleteMany: {
            args: Prisma.PengetahuanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PengetahuanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PengetahuanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengetahuanPayload>[]
          }
          upsert: {
            args: Prisma.PengetahuanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengetahuanPayload>
          }
          aggregate: {
            args: Prisma.PengetahuanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePengetahuan>
          }
          groupBy: {
            args: Prisma.PengetahuanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PengetahuanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PengetahuanCountArgs<ExtArgs>
            result: $Utils.Optional<PengetahuanCountAggregateOutputType> | number
          }
        }
      }
      Hasil: {
        payload: Prisma.$HasilPayload<ExtArgs>
        fields: Prisma.HasilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HasilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HasilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPayload>
          }
          findFirst: {
            args: Prisma.HasilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HasilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPayload>
          }
          findMany: {
            args: Prisma.HasilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPayload>[]
          }
          create: {
            args: Prisma.HasilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPayload>
          }
          createMany: {
            args: Prisma.HasilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HasilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPayload>[]
          }
          delete: {
            args: Prisma.HasilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPayload>
          }
          update: {
            args: Prisma.HasilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPayload>
          }
          deleteMany: {
            args: Prisma.HasilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HasilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HasilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPayload>[]
          }
          upsert: {
            args: Prisma.HasilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPayload>
          }
          aggregate: {
            args: Prisma.HasilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHasil>
          }
          groupBy: {
            args: Prisma.HasilGroupByArgs<ExtArgs>
            result: $Utils.Optional<HasilGroupByOutputType>[]
          }
          count: {
            args: Prisma.HasilCountArgs<ExtArgs>
            result: $Utils.Optional<HasilCountAggregateOutputType> | number
          }
        }
      }
      DiagnosaDetail: {
        payload: Prisma.$DiagnosaDetailPayload<ExtArgs>
        fields: Prisma.DiagnosaDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosaDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosaDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosaDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosaDetailPayload>
          }
          findFirst: {
            args: Prisma.DiagnosaDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosaDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosaDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosaDetailPayload>
          }
          findMany: {
            args: Prisma.DiagnosaDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosaDetailPayload>[]
          }
          create: {
            args: Prisma.DiagnosaDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosaDetailPayload>
          }
          createMany: {
            args: Prisma.DiagnosaDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiagnosaDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosaDetailPayload>[]
          }
          delete: {
            args: Prisma.DiagnosaDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosaDetailPayload>
          }
          update: {
            args: Prisma.DiagnosaDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosaDetailPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosaDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosaDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiagnosaDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosaDetailPayload>[]
          }
          upsert: {
            args: Prisma.DiagnosaDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosaDetailPayload>
          }
          aggregate: {
            args: Prisma.DiagnosaDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnosaDetail>
          }
          groupBy: {
            args: Prisma.DiagnosaDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosaDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosaDetailCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosaDetailCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    pasien?: PasienOmit
    gejala?: GejalaOmit
    penyakit?: PenyakitOmit
    solusi?: SolusiOmit
    pengetahuan?: PengetahuanOmit
    hasil?: HasilOmit
    diagnosaDetail?: DiagnosaDetailOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type PasienCountOutputType
   */

  export type PasienCountOutputType = {
    diagnosa: number
  }

  export type PasienCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosa?: boolean | PasienCountOutputTypeCountDiagnosaArgs
  }

  // Custom InputTypes
  /**
   * PasienCountOutputType without action
   */
  export type PasienCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasienCountOutputType
     */
    select?: PasienCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PasienCountOutputType without action
   */
  export type PasienCountOutputTypeCountDiagnosaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HasilWhereInput
  }


  /**
   * Count Type GejalaCountOutputType
   */

  export type GejalaCountOutputType = {
    pengetahuan: number
  }

  export type GejalaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengetahuan?: boolean | GejalaCountOutputTypeCountPengetahuanArgs
  }

  // Custom InputTypes
  /**
   * GejalaCountOutputType without action
   */
  export type GejalaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GejalaCountOutputType
     */
    select?: GejalaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GejalaCountOutputType without action
   */
  export type GejalaCountOutputTypeCountPengetahuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PengetahuanWhereInput
  }


  /**
   * Count Type PenyakitCountOutputType
   */

  export type PenyakitCountOutputType = {
    pengetahuan: number
    solusi: number
  }

  export type PenyakitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengetahuan?: boolean | PenyakitCountOutputTypeCountPengetahuanArgs
    solusi?: boolean | PenyakitCountOutputTypeCountSolusiArgs
  }

  // Custom InputTypes
  /**
   * PenyakitCountOutputType without action
   */
  export type PenyakitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenyakitCountOutputType
     */
    select?: PenyakitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PenyakitCountOutputType without action
   */
  export type PenyakitCountOutputTypeCountPengetahuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PengetahuanWhereInput
  }

  /**
   * PenyakitCountOutputType without action
   */
  export type PenyakitCountOutputTypeCountSolusiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolusiWhereInput
  }


  /**
   * Count Type HasilCountOutputType
   */

  export type HasilCountOutputType = {
    details: number
  }

  export type HasilCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | HasilCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * HasilCountOutputType without action
   */
  export type HasilCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilCountOutputType
     */
    select?: HasilCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HasilCountOutputType without action
   */
  export type HasilCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosaDetailWhereInput
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
    nama: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nama: number
    username: number
    password: number
    createdAt: number
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
    nama?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nama?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nama?: true
    username?: true
    password?: true
    createdAt?: true
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
    nama: string | null
    username: string
    password: string | null
    createdAt: Date
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
    nama?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nama?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "username" | "password" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string | null
      username: string
      password: string | null
      createdAt: Date
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
    readonly nama: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
  }


  /**
   * Model Pasien
   */

  export type AggregatePasien = {
    _count: PasienCountAggregateOutputType | null
    _avg: PasienAvgAggregateOutputType | null
    _sum: PasienSumAggregateOutputType | null
    _min: PasienMinAggregateOutputType | null
    _max: PasienMaxAggregateOutputType | null
  }

  export type PasienAvgAggregateOutputType = {
    id: number | null
    umur: number | null
  }

  export type PasienSumAggregateOutputType = {
    id: number | null
    umur: number | null
  }

  export type PasienMinAggregateOutputType = {
    id: number | null
    nik: string | null
    nama_lengkap: string | null
    tanggal_lahir: Date | null
    umur: number | null
    jenis_kelamin: string | null
    phone: string | null
    alamat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PasienMaxAggregateOutputType = {
    id: number | null
    nik: string | null
    nama_lengkap: string | null
    tanggal_lahir: Date | null
    umur: number | null
    jenis_kelamin: string | null
    phone: string | null
    alamat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PasienCountAggregateOutputType = {
    id: number
    nik: number
    nama_lengkap: number
    tanggal_lahir: number
    umur: number
    jenis_kelamin: number
    phone: number
    alamat: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PasienAvgAggregateInputType = {
    id?: true
    umur?: true
  }

  export type PasienSumAggregateInputType = {
    id?: true
    umur?: true
  }

  export type PasienMinAggregateInputType = {
    id?: true
    nik?: true
    nama_lengkap?: true
    tanggal_lahir?: true
    umur?: true
    jenis_kelamin?: true
    phone?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PasienMaxAggregateInputType = {
    id?: true
    nik?: true
    nama_lengkap?: true
    tanggal_lahir?: true
    umur?: true
    jenis_kelamin?: true
    phone?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PasienCountAggregateInputType = {
    id?: true
    nik?: true
    nama_lengkap?: true
    tanggal_lahir?: true
    umur?: true
    jenis_kelamin?: true
    phone?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PasienAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pasien to aggregate.
     */
    where?: PasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasiens to fetch.
     */
    orderBy?: PasienOrderByWithRelationInput | PasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pasiens
    **/
    _count?: true | PasienCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasienAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasienSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasienMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasienMaxAggregateInputType
  }

  export type GetPasienAggregateType<T extends PasienAggregateArgs> = {
        [P in keyof T & keyof AggregatePasien]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasien[P]>
      : GetScalarType<T[P], AggregatePasien[P]>
  }




  export type PasienGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasienWhereInput
    orderBy?: PasienOrderByWithAggregationInput | PasienOrderByWithAggregationInput[]
    by: PasienScalarFieldEnum[] | PasienScalarFieldEnum
    having?: PasienScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasienCountAggregateInputType | true
    _avg?: PasienAvgAggregateInputType
    _sum?: PasienSumAggregateInputType
    _min?: PasienMinAggregateInputType
    _max?: PasienMaxAggregateInputType
  }

  export type PasienGroupByOutputType = {
    id: number
    nik: string
    nama_lengkap: string
    tanggal_lahir: Date
    umur: number
    jenis_kelamin: string
    phone: string
    alamat: string
    createdAt: Date
    updatedAt: Date
    _count: PasienCountAggregateOutputType | null
    _avg: PasienAvgAggregateOutputType | null
    _sum: PasienSumAggregateOutputType | null
    _min: PasienMinAggregateOutputType | null
    _max: PasienMaxAggregateOutputType | null
  }

  type GetPasienGroupByPayload<T extends PasienGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasienGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasienGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasienGroupByOutputType[P]>
            : GetScalarType<T[P], PasienGroupByOutputType[P]>
        }
      >
    >


  export type PasienSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nik?: boolean
    nama_lengkap?: boolean
    tanggal_lahir?: boolean
    umur?: boolean
    jenis_kelamin?: boolean
    phone?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diagnosa?: boolean | Pasien$diagnosaArgs<ExtArgs>
    _count?: boolean | PasienCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pasien"]>

  export type PasienSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nik?: boolean
    nama_lengkap?: boolean
    tanggal_lahir?: boolean
    umur?: boolean
    jenis_kelamin?: boolean
    phone?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pasien"]>

  export type PasienSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nik?: boolean
    nama_lengkap?: boolean
    tanggal_lahir?: boolean
    umur?: boolean
    jenis_kelamin?: boolean
    phone?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pasien"]>

  export type PasienSelectScalar = {
    id?: boolean
    nik?: boolean
    nama_lengkap?: boolean
    tanggal_lahir?: boolean
    umur?: boolean
    jenis_kelamin?: boolean
    phone?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PasienOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nik" | "nama_lengkap" | "tanggal_lahir" | "umur" | "jenis_kelamin" | "phone" | "alamat" | "createdAt" | "updatedAt", ExtArgs["result"]["pasien"]>
  export type PasienInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosa?: boolean | Pasien$diagnosaArgs<ExtArgs>
    _count?: boolean | PasienCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PasienIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PasienIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PasienPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pasien"
    objects: {
      diagnosa: Prisma.$HasilPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nik: string
      nama_lengkap: string
      tanggal_lahir: Date
      umur: number
      jenis_kelamin: string
      phone: string
      alamat: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pasien"]>
    composites: {}
  }

  type PasienGetPayload<S extends boolean | null | undefined | PasienDefaultArgs> = $Result.GetResult<Prisma.$PasienPayload, S>

  type PasienCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasienFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasienCountAggregateInputType | true
    }

  export interface PasienDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pasien'], meta: { name: 'Pasien' } }
    /**
     * Find zero or one Pasien that matches the filter.
     * @param {PasienFindUniqueArgs} args - Arguments to find a Pasien
     * @example
     * // Get one Pasien
     * const pasien = await prisma.pasien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasienFindUniqueArgs>(args: SelectSubset<T, PasienFindUniqueArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pasien that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasienFindUniqueOrThrowArgs} args - Arguments to find a Pasien
     * @example
     * // Get one Pasien
     * const pasien = await prisma.pasien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasienFindUniqueOrThrowArgs>(args: SelectSubset<T, PasienFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pasien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienFindFirstArgs} args - Arguments to find a Pasien
     * @example
     * // Get one Pasien
     * const pasien = await prisma.pasien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasienFindFirstArgs>(args?: SelectSubset<T, PasienFindFirstArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pasien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienFindFirstOrThrowArgs} args - Arguments to find a Pasien
     * @example
     * // Get one Pasien
     * const pasien = await prisma.pasien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasienFindFirstOrThrowArgs>(args?: SelectSubset<T, PasienFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pasiens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pasiens
     * const pasiens = await prisma.pasien.findMany()
     * 
     * // Get first 10 Pasiens
     * const pasiens = await prisma.pasien.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pasienWithIdOnly = await prisma.pasien.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasienFindManyArgs>(args?: SelectSubset<T, PasienFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pasien.
     * @param {PasienCreateArgs} args - Arguments to create a Pasien.
     * @example
     * // Create one Pasien
     * const Pasien = await prisma.pasien.create({
     *   data: {
     *     // ... data to create a Pasien
     *   }
     * })
     * 
     */
    create<T extends PasienCreateArgs>(args: SelectSubset<T, PasienCreateArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pasiens.
     * @param {PasienCreateManyArgs} args - Arguments to create many Pasiens.
     * @example
     * // Create many Pasiens
     * const pasien = await prisma.pasien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasienCreateManyArgs>(args?: SelectSubset<T, PasienCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pasiens and returns the data saved in the database.
     * @param {PasienCreateManyAndReturnArgs} args - Arguments to create many Pasiens.
     * @example
     * // Create many Pasiens
     * const pasien = await prisma.pasien.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pasiens and only return the `id`
     * const pasienWithIdOnly = await prisma.pasien.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasienCreateManyAndReturnArgs>(args?: SelectSubset<T, PasienCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pasien.
     * @param {PasienDeleteArgs} args - Arguments to delete one Pasien.
     * @example
     * // Delete one Pasien
     * const Pasien = await prisma.pasien.delete({
     *   where: {
     *     // ... filter to delete one Pasien
     *   }
     * })
     * 
     */
    delete<T extends PasienDeleteArgs>(args: SelectSubset<T, PasienDeleteArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pasien.
     * @param {PasienUpdateArgs} args - Arguments to update one Pasien.
     * @example
     * // Update one Pasien
     * const pasien = await prisma.pasien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasienUpdateArgs>(args: SelectSubset<T, PasienUpdateArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pasiens.
     * @param {PasienDeleteManyArgs} args - Arguments to filter Pasiens to delete.
     * @example
     * // Delete a few Pasiens
     * const { count } = await prisma.pasien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasienDeleteManyArgs>(args?: SelectSubset<T, PasienDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pasiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pasiens
     * const pasien = await prisma.pasien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasienUpdateManyArgs>(args: SelectSubset<T, PasienUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pasiens and returns the data updated in the database.
     * @param {PasienUpdateManyAndReturnArgs} args - Arguments to update many Pasiens.
     * @example
     * // Update many Pasiens
     * const pasien = await prisma.pasien.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pasiens and only return the `id`
     * const pasienWithIdOnly = await prisma.pasien.updateManyAndReturn({
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
    updateManyAndReturn<T extends PasienUpdateManyAndReturnArgs>(args: SelectSubset<T, PasienUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pasien.
     * @param {PasienUpsertArgs} args - Arguments to update or create a Pasien.
     * @example
     * // Update or create a Pasien
     * const pasien = await prisma.pasien.upsert({
     *   create: {
     *     // ... data to create a Pasien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pasien we want to update
     *   }
     * })
     */
    upsert<T extends PasienUpsertArgs>(args: SelectSubset<T, PasienUpsertArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pasiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienCountArgs} args - Arguments to filter Pasiens to count.
     * @example
     * // Count the number of Pasiens
     * const count = await prisma.pasien.count({
     *   where: {
     *     // ... the filter for the Pasiens we want to count
     *   }
     * })
    **/
    count<T extends PasienCountArgs>(
      args?: Subset<T, PasienCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasienCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pasien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasienAggregateArgs>(args: Subset<T, PasienAggregateArgs>): Prisma.PrismaPromise<GetPasienAggregateType<T>>

    /**
     * Group by Pasien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienGroupByArgs} args - Group by arguments.
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
      T extends PasienGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasienGroupByArgs['orderBy'] }
        : { orderBy?: PasienGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pasien model
   */
  readonly fields: PasienFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pasien.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasienClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnosa<T extends Pasien$diagnosaArgs<ExtArgs> = {}>(args?: Subset<T, Pasien$diagnosaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HasilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pasien model
   */
  interface PasienFieldRefs {
    readonly id: FieldRef<"Pasien", 'Int'>
    readonly nik: FieldRef<"Pasien", 'String'>
    readonly nama_lengkap: FieldRef<"Pasien", 'String'>
    readonly tanggal_lahir: FieldRef<"Pasien", 'DateTime'>
    readonly umur: FieldRef<"Pasien", 'Int'>
    readonly jenis_kelamin: FieldRef<"Pasien", 'String'>
    readonly phone: FieldRef<"Pasien", 'String'>
    readonly alamat: FieldRef<"Pasien", 'String'>
    readonly createdAt: FieldRef<"Pasien", 'DateTime'>
    readonly updatedAt: FieldRef<"Pasien", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pasien findUnique
   */
  export type PasienFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter, which Pasien to fetch.
     */
    where: PasienWhereUniqueInput
  }

  /**
   * Pasien findUniqueOrThrow
   */
  export type PasienFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter, which Pasien to fetch.
     */
    where: PasienWhereUniqueInput
  }

  /**
   * Pasien findFirst
   */
  export type PasienFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter, which Pasien to fetch.
     */
    where?: PasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasiens to fetch.
     */
    orderBy?: PasienOrderByWithRelationInput | PasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pasiens.
     */
    cursor?: PasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pasiens.
     */
    distinct?: PasienScalarFieldEnum | PasienScalarFieldEnum[]
  }

  /**
   * Pasien findFirstOrThrow
   */
  export type PasienFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter, which Pasien to fetch.
     */
    where?: PasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasiens to fetch.
     */
    orderBy?: PasienOrderByWithRelationInput | PasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pasiens.
     */
    cursor?: PasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pasiens.
     */
    distinct?: PasienScalarFieldEnum | PasienScalarFieldEnum[]
  }

  /**
   * Pasien findMany
   */
  export type PasienFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter, which Pasiens to fetch.
     */
    where?: PasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasiens to fetch.
     */
    orderBy?: PasienOrderByWithRelationInput | PasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pasiens.
     */
    cursor?: PasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasiens.
     */
    skip?: number
    distinct?: PasienScalarFieldEnum | PasienScalarFieldEnum[]
  }

  /**
   * Pasien create
   */
  export type PasienCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * The data needed to create a Pasien.
     */
    data: XOR<PasienCreateInput, PasienUncheckedCreateInput>
  }

  /**
   * Pasien createMany
   */
  export type PasienCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pasiens.
     */
    data: PasienCreateManyInput | PasienCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pasien createManyAndReturn
   */
  export type PasienCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * The data used to create many Pasiens.
     */
    data: PasienCreateManyInput | PasienCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pasien update
   */
  export type PasienUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * The data needed to update a Pasien.
     */
    data: XOR<PasienUpdateInput, PasienUncheckedUpdateInput>
    /**
     * Choose, which Pasien to update.
     */
    where: PasienWhereUniqueInput
  }

  /**
   * Pasien updateMany
   */
  export type PasienUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pasiens.
     */
    data: XOR<PasienUpdateManyMutationInput, PasienUncheckedUpdateManyInput>
    /**
     * Filter which Pasiens to update
     */
    where?: PasienWhereInput
    /**
     * Limit how many Pasiens to update.
     */
    limit?: number
  }

  /**
   * Pasien updateManyAndReturn
   */
  export type PasienUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * The data used to update Pasiens.
     */
    data: XOR<PasienUpdateManyMutationInput, PasienUncheckedUpdateManyInput>
    /**
     * Filter which Pasiens to update
     */
    where?: PasienWhereInput
    /**
     * Limit how many Pasiens to update.
     */
    limit?: number
  }

  /**
   * Pasien upsert
   */
  export type PasienUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * The filter to search for the Pasien to update in case it exists.
     */
    where: PasienWhereUniqueInput
    /**
     * In case the Pasien found by the `where` argument doesn't exist, create a new Pasien with this data.
     */
    create: XOR<PasienCreateInput, PasienUncheckedCreateInput>
    /**
     * In case the Pasien was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasienUpdateInput, PasienUncheckedUpdateInput>
  }

  /**
   * Pasien delete
   */
  export type PasienDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter which Pasien to delete.
     */
    where: PasienWhereUniqueInput
  }

  /**
   * Pasien deleteMany
   */
  export type PasienDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pasiens to delete
     */
    where?: PasienWhereInput
    /**
     * Limit how many Pasiens to delete.
     */
    limit?: number
  }

  /**
   * Pasien.diagnosa
   */
  export type Pasien$diagnosaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hasil
     */
    select?: HasilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hasil
     */
    omit?: HasilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilInclude<ExtArgs> | null
    where?: HasilWhereInput
    orderBy?: HasilOrderByWithRelationInput | HasilOrderByWithRelationInput[]
    cursor?: HasilWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HasilScalarFieldEnum | HasilScalarFieldEnum[]
  }

  /**
   * Pasien without action
   */
  export type PasienDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
  }


  /**
   * Model Gejala
   */

  export type AggregateGejala = {
    _count: GejalaCountAggregateOutputType | null
    _min: GejalaMinAggregateOutputType | null
    _max: GejalaMaxAggregateOutputType | null
  }

  export type GejalaMinAggregateOutputType = {
    kd_gejala: string | null
    nama_gejala: string | null
    poin_gejala: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GejalaMaxAggregateOutputType = {
    kd_gejala: string | null
    nama_gejala: string | null
    poin_gejala: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GejalaCountAggregateOutputType = {
    kd_gejala: number
    nama_gejala: number
    poin_gejala: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GejalaMinAggregateInputType = {
    kd_gejala?: true
    nama_gejala?: true
    poin_gejala?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GejalaMaxAggregateInputType = {
    kd_gejala?: true
    nama_gejala?: true
    poin_gejala?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GejalaCountAggregateInputType = {
    kd_gejala?: true
    nama_gejala?: true
    poin_gejala?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GejalaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gejala to aggregate.
     */
    where?: GejalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gejalas to fetch.
     */
    orderBy?: GejalaOrderByWithRelationInput | GejalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GejalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gejalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gejalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gejalas
    **/
    _count?: true | GejalaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GejalaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GejalaMaxAggregateInputType
  }

  export type GetGejalaAggregateType<T extends GejalaAggregateArgs> = {
        [P in keyof T & keyof AggregateGejala]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGejala[P]>
      : GetScalarType<T[P], AggregateGejala[P]>
  }




  export type GejalaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GejalaWhereInput
    orderBy?: GejalaOrderByWithAggregationInput | GejalaOrderByWithAggregationInput[]
    by: GejalaScalarFieldEnum[] | GejalaScalarFieldEnum
    having?: GejalaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GejalaCountAggregateInputType | true
    _min?: GejalaMinAggregateInputType
    _max?: GejalaMaxAggregateInputType
  }

  export type GejalaGroupByOutputType = {
    kd_gejala: string
    nama_gejala: string
    poin_gejala: string | null
    createdAt: Date
    updatedAt: Date
    _count: GejalaCountAggregateOutputType | null
    _min: GejalaMinAggregateOutputType | null
    _max: GejalaMaxAggregateOutputType | null
  }

  type GetGejalaGroupByPayload<T extends GejalaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GejalaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GejalaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GejalaGroupByOutputType[P]>
            : GetScalarType<T[P], GejalaGroupByOutputType[P]>
        }
      >
    >


  export type GejalaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kd_gejala?: boolean
    nama_gejala?: boolean
    poin_gejala?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pengetahuan?: boolean | Gejala$pengetahuanArgs<ExtArgs>
    _count?: boolean | GejalaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gejala"]>

  export type GejalaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kd_gejala?: boolean
    nama_gejala?: boolean
    poin_gejala?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gejala"]>

  export type GejalaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kd_gejala?: boolean
    nama_gejala?: boolean
    poin_gejala?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gejala"]>

  export type GejalaSelectScalar = {
    kd_gejala?: boolean
    nama_gejala?: boolean
    poin_gejala?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GejalaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kd_gejala" | "nama_gejala" | "poin_gejala" | "createdAt" | "updatedAt", ExtArgs["result"]["gejala"]>
  export type GejalaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengetahuan?: boolean | Gejala$pengetahuanArgs<ExtArgs>
    _count?: boolean | GejalaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GejalaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GejalaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GejalaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gejala"
    objects: {
      pengetahuan: Prisma.$PengetahuanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      kd_gejala: string
      nama_gejala: string
      poin_gejala: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gejala"]>
    composites: {}
  }

  type GejalaGetPayload<S extends boolean | null | undefined | GejalaDefaultArgs> = $Result.GetResult<Prisma.$GejalaPayload, S>

  type GejalaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GejalaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GejalaCountAggregateInputType | true
    }

  export interface GejalaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gejala'], meta: { name: 'Gejala' } }
    /**
     * Find zero or one Gejala that matches the filter.
     * @param {GejalaFindUniqueArgs} args - Arguments to find a Gejala
     * @example
     * // Get one Gejala
     * const gejala = await prisma.gejala.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GejalaFindUniqueArgs>(args: SelectSubset<T, GejalaFindUniqueArgs<ExtArgs>>): Prisma__GejalaClient<$Result.GetResult<Prisma.$GejalaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gejala that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GejalaFindUniqueOrThrowArgs} args - Arguments to find a Gejala
     * @example
     * // Get one Gejala
     * const gejala = await prisma.gejala.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GejalaFindUniqueOrThrowArgs>(args: SelectSubset<T, GejalaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GejalaClient<$Result.GetResult<Prisma.$GejalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gejala that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GejalaFindFirstArgs} args - Arguments to find a Gejala
     * @example
     * // Get one Gejala
     * const gejala = await prisma.gejala.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GejalaFindFirstArgs>(args?: SelectSubset<T, GejalaFindFirstArgs<ExtArgs>>): Prisma__GejalaClient<$Result.GetResult<Prisma.$GejalaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gejala that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GejalaFindFirstOrThrowArgs} args - Arguments to find a Gejala
     * @example
     * // Get one Gejala
     * const gejala = await prisma.gejala.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GejalaFindFirstOrThrowArgs>(args?: SelectSubset<T, GejalaFindFirstOrThrowArgs<ExtArgs>>): Prisma__GejalaClient<$Result.GetResult<Prisma.$GejalaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gejalas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GejalaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gejalas
     * const gejalas = await prisma.gejala.findMany()
     * 
     * // Get first 10 Gejalas
     * const gejalas = await prisma.gejala.findMany({ take: 10 })
     * 
     * // Only select the `kd_gejala`
     * const gejalaWithKd_gejalaOnly = await prisma.gejala.findMany({ select: { kd_gejala: true } })
     * 
     */
    findMany<T extends GejalaFindManyArgs>(args?: SelectSubset<T, GejalaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GejalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gejala.
     * @param {GejalaCreateArgs} args - Arguments to create a Gejala.
     * @example
     * // Create one Gejala
     * const Gejala = await prisma.gejala.create({
     *   data: {
     *     // ... data to create a Gejala
     *   }
     * })
     * 
     */
    create<T extends GejalaCreateArgs>(args: SelectSubset<T, GejalaCreateArgs<ExtArgs>>): Prisma__GejalaClient<$Result.GetResult<Prisma.$GejalaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gejalas.
     * @param {GejalaCreateManyArgs} args - Arguments to create many Gejalas.
     * @example
     * // Create many Gejalas
     * const gejala = await prisma.gejala.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GejalaCreateManyArgs>(args?: SelectSubset<T, GejalaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gejalas and returns the data saved in the database.
     * @param {GejalaCreateManyAndReturnArgs} args - Arguments to create many Gejalas.
     * @example
     * // Create many Gejalas
     * const gejala = await prisma.gejala.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gejalas and only return the `kd_gejala`
     * const gejalaWithKd_gejalaOnly = await prisma.gejala.createManyAndReturn({
     *   select: { kd_gejala: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GejalaCreateManyAndReturnArgs>(args?: SelectSubset<T, GejalaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GejalaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gejala.
     * @param {GejalaDeleteArgs} args - Arguments to delete one Gejala.
     * @example
     * // Delete one Gejala
     * const Gejala = await prisma.gejala.delete({
     *   where: {
     *     // ... filter to delete one Gejala
     *   }
     * })
     * 
     */
    delete<T extends GejalaDeleteArgs>(args: SelectSubset<T, GejalaDeleteArgs<ExtArgs>>): Prisma__GejalaClient<$Result.GetResult<Prisma.$GejalaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gejala.
     * @param {GejalaUpdateArgs} args - Arguments to update one Gejala.
     * @example
     * // Update one Gejala
     * const gejala = await prisma.gejala.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GejalaUpdateArgs>(args: SelectSubset<T, GejalaUpdateArgs<ExtArgs>>): Prisma__GejalaClient<$Result.GetResult<Prisma.$GejalaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gejalas.
     * @param {GejalaDeleteManyArgs} args - Arguments to filter Gejalas to delete.
     * @example
     * // Delete a few Gejalas
     * const { count } = await prisma.gejala.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GejalaDeleteManyArgs>(args?: SelectSubset<T, GejalaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gejalas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GejalaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gejalas
     * const gejala = await prisma.gejala.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GejalaUpdateManyArgs>(args: SelectSubset<T, GejalaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gejalas and returns the data updated in the database.
     * @param {GejalaUpdateManyAndReturnArgs} args - Arguments to update many Gejalas.
     * @example
     * // Update many Gejalas
     * const gejala = await prisma.gejala.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gejalas and only return the `kd_gejala`
     * const gejalaWithKd_gejalaOnly = await prisma.gejala.updateManyAndReturn({
     *   select: { kd_gejala: true },
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
    updateManyAndReturn<T extends GejalaUpdateManyAndReturnArgs>(args: SelectSubset<T, GejalaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GejalaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gejala.
     * @param {GejalaUpsertArgs} args - Arguments to update or create a Gejala.
     * @example
     * // Update or create a Gejala
     * const gejala = await prisma.gejala.upsert({
     *   create: {
     *     // ... data to create a Gejala
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gejala we want to update
     *   }
     * })
     */
    upsert<T extends GejalaUpsertArgs>(args: SelectSubset<T, GejalaUpsertArgs<ExtArgs>>): Prisma__GejalaClient<$Result.GetResult<Prisma.$GejalaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gejalas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GejalaCountArgs} args - Arguments to filter Gejalas to count.
     * @example
     * // Count the number of Gejalas
     * const count = await prisma.gejala.count({
     *   where: {
     *     // ... the filter for the Gejalas we want to count
     *   }
     * })
    **/
    count<T extends GejalaCountArgs>(
      args?: Subset<T, GejalaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GejalaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gejala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GejalaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GejalaAggregateArgs>(args: Subset<T, GejalaAggregateArgs>): Prisma.PrismaPromise<GetGejalaAggregateType<T>>

    /**
     * Group by Gejala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GejalaGroupByArgs} args - Group by arguments.
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
      T extends GejalaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GejalaGroupByArgs['orderBy'] }
        : { orderBy?: GejalaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GejalaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGejalaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gejala model
   */
  readonly fields: GejalaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gejala.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GejalaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pengetahuan<T extends Gejala$pengetahuanArgs<ExtArgs> = {}>(args?: Subset<T, Gejala$pengetahuanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengetahuanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Gejala model
   */
  interface GejalaFieldRefs {
    readonly kd_gejala: FieldRef<"Gejala", 'String'>
    readonly nama_gejala: FieldRef<"Gejala", 'String'>
    readonly poin_gejala: FieldRef<"Gejala", 'String'>
    readonly createdAt: FieldRef<"Gejala", 'DateTime'>
    readonly updatedAt: FieldRef<"Gejala", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gejala findUnique
   */
  export type GejalaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gejala
     */
    select?: GejalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gejala
     */
    omit?: GejalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GejalaInclude<ExtArgs> | null
    /**
     * Filter, which Gejala to fetch.
     */
    where: GejalaWhereUniqueInput
  }

  /**
   * Gejala findUniqueOrThrow
   */
  export type GejalaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gejala
     */
    select?: GejalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gejala
     */
    omit?: GejalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GejalaInclude<ExtArgs> | null
    /**
     * Filter, which Gejala to fetch.
     */
    where: GejalaWhereUniqueInput
  }

  /**
   * Gejala findFirst
   */
  export type GejalaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gejala
     */
    select?: GejalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gejala
     */
    omit?: GejalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GejalaInclude<ExtArgs> | null
    /**
     * Filter, which Gejala to fetch.
     */
    where?: GejalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gejalas to fetch.
     */
    orderBy?: GejalaOrderByWithRelationInput | GejalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gejalas.
     */
    cursor?: GejalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gejalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gejalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gejalas.
     */
    distinct?: GejalaScalarFieldEnum | GejalaScalarFieldEnum[]
  }

  /**
   * Gejala findFirstOrThrow
   */
  export type GejalaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gejala
     */
    select?: GejalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gejala
     */
    omit?: GejalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GejalaInclude<ExtArgs> | null
    /**
     * Filter, which Gejala to fetch.
     */
    where?: GejalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gejalas to fetch.
     */
    orderBy?: GejalaOrderByWithRelationInput | GejalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gejalas.
     */
    cursor?: GejalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gejalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gejalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gejalas.
     */
    distinct?: GejalaScalarFieldEnum | GejalaScalarFieldEnum[]
  }

  /**
   * Gejala findMany
   */
  export type GejalaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gejala
     */
    select?: GejalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gejala
     */
    omit?: GejalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GejalaInclude<ExtArgs> | null
    /**
     * Filter, which Gejalas to fetch.
     */
    where?: GejalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gejalas to fetch.
     */
    orderBy?: GejalaOrderByWithRelationInput | GejalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gejalas.
     */
    cursor?: GejalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gejalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gejalas.
     */
    skip?: number
    distinct?: GejalaScalarFieldEnum | GejalaScalarFieldEnum[]
  }

  /**
   * Gejala create
   */
  export type GejalaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gejala
     */
    select?: GejalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gejala
     */
    omit?: GejalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GejalaInclude<ExtArgs> | null
    /**
     * The data needed to create a Gejala.
     */
    data: XOR<GejalaCreateInput, GejalaUncheckedCreateInput>
  }

  /**
   * Gejala createMany
   */
  export type GejalaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gejalas.
     */
    data: GejalaCreateManyInput | GejalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gejala createManyAndReturn
   */
  export type GejalaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gejala
     */
    select?: GejalaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gejala
     */
    omit?: GejalaOmit<ExtArgs> | null
    /**
     * The data used to create many Gejalas.
     */
    data: GejalaCreateManyInput | GejalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gejala update
   */
  export type GejalaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gejala
     */
    select?: GejalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gejala
     */
    omit?: GejalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GejalaInclude<ExtArgs> | null
    /**
     * The data needed to update a Gejala.
     */
    data: XOR<GejalaUpdateInput, GejalaUncheckedUpdateInput>
    /**
     * Choose, which Gejala to update.
     */
    where: GejalaWhereUniqueInput
  }

  /**
   * Gejala updateMany
   */
  export type GejalaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gejalas.
     */
    data: XOR<GejalaUpdateManyMutationInput, GejalaUncheckedUpdateManyInput>
    /**
     * Filter which Gejalas to update
     */
    where?: GejalaWhereInput
    /**
     * Limit how many Gejalas to update.
     */
    limit?: number
  }

  /**
   * Gejala updateManyAndReturn
   */
  export type GejalaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gejala
     */
    select?: GejalaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gejala
     */
    omit?: GejalaOmit<ExtArgs> | null
    /**
     * The data used to update Gejalas.
     */
    data: XOR<GejalaUpdateManyMutationInput, GejalaUncheckedUpdateManyInput>
    /**
     * Filter which Gejalas to update
     */
    where?: GejalaWhereInput
    /**
     * Limit how many Gejalas to update.
     */
    limit?: number
  }

  /**
   * Gejala upsert
   */
  export type GejalaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gejala
     */
    select?: GejalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gejala
     */
    omit?: GejalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GejalaInclude<ExtArgs> | null
    /**
     * The filter to search for the Gejala to update in case it exists.
     */
    where: GejalaWhereUniqueInput
    /**
     * In case the Gejala found by the `where` argument doesn't exist, create a new Gejala with this data.
     */
    create: XOR<GejalaCreateInput, GejalaUncheckedCreateInput>
    /**
     * In case the Gejala was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GejalaUpdateInput, GejalaUncheckedUpdateInput>
  }

  /**
   * Gejala delete
   */
  export type GejalaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gejala
     */
    select?: GejalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gejala
     */
    omit?: GejalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GejalaInclude<ExtArgs> | null
    /**
     * Filter which Gejala to delete.
     */
    where: GejalaWhereUniqueInput
  }

  /**
   * Gejala deleteMany
   */
  export type GejalaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gejalas to delete
     */
    where?: GejalaWhereInput
    /**
     * Limit how many Gejalas to delete.
     */
    limit?: number
  }

  /**
   * Gejala.pengetahuan
   */
  export type Gejala$pengetahuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengetahuan
     */
    select?: PengetahuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengetahuan
     */
    omit?: PengetahuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengetahuanInclude<ExtArgs> | null
    where?: PengetahuanWhereInput
    orderBy?: PengetahuanOrderByWithRelationInput | PengetahuanOrderByWithRelationInput[]
    cursor?: PengetahuanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PengetahuanScalarFieldEnum | PengetahuanScalarFieldEnum[]
  }

  /**
   * Gejala without action
   */
  export type GejalaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gejala
     */
    select?: GejalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gejala
     */
    omit?: GejalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GejalaInclude<ExtArgs> | null
  }


  /**
   * Model Penyakit
   */

  export type AggregatePenyakit = {
    _count: PenyakitCountAggregateOutputType | null
    _min: PenyakitMinAggregateOutputType | null
    _max: PenyakitMaxAggregateOutputType | null
  }

  export type PenyakitMinAggregateOutputType = {
    kd_penyakit: string | null
    nama_penyakit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PenyakitMaxAggregateOutputType = {
    kd_penyakit: string | null
    nama_penyakit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PenyakitCountAggregateOutputType = {
    kd_penyakit: number
    nama_penyakit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PenyakitMinAggregateInputType = {
    kd_penyakit?: true
    nama_penyakit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PenyakitMaxAggregateInputType = {
    kd_penyakit?: true
    nama_penyakit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PenyakitCountAggregateInputType = {
    kd_penyakit?: true
    nama_penyakit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PenyakitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penyakit to aggregate.
     */
    where?: PenyakitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penyakits to fetch.
     */
    orderBy?: PenyakitOrderByWithRelationInput | PenyakitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PenyakitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penyakits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penyakits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Penyakits
    **/
    _count?: true | PenyakitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenyakitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenyakitMaxAggregateInputType
  }

  export type GetPenyakitAggregateType<T extends PenyakitAggregateArgs> = {
        [P in keyof T & keyof AggregatePenyakit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenyakit[P]>
      : GetScalarType<T[P], AggregatePenyakit[P]>
  }




  export type PenyakitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenyakitWhereInput
    orderBy?: PenyakitOrderByWithAggregationInput | PenyakitOrderByWithAggregationInput[]
    by: PenyakitScalarFieldEnum[] | PenyakitScalarFieldEnum
    having?: PenyakitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenyakitCountAggregateInputType | true
    _min?: PenyakitMinAggregateInputType
    _max?: PenyakitMaxAggregateInputType
  }

  export type PenyakitGroupByOutputType = {
    kd_penyakit: string
    nama_penyakit: string
    createdAt: Date
    updatedAt: Date
    _count: PenyakitCountAggregateOutputType | null
    _min: PenyakitMinAggregateOutputType | null
    _max: PenyakitMaxAggregateOutputType | null
  }

  type GetPenyakitGroupByPayload<T extends PenyakitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenyakitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenyakitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenyakitGroupByOutputType[P]>
            : GetScalarType<T[P], PenyakitGroupByOutputType[P]>
        }
      >
    >


  export type PenyakitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kd_penyakit?: boolean
    nama_penyakit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pengetahuan?: boolean | Penyakit$pengetahuanArgs<ExtArgs>
    solusi?: boolean | Penyakit$solusiArgs<ExtArgs>
    _count?: boolean | PenyakitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penyakit"]>

  export type PenyakitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kd_penyakit?: boolean
    nama_penyakit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["penyakit"]>

  export type PenyakitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kd_penyakit?: boolean
    nama_penyakit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["penyakit"]>

  export type PenyakitSelectScalar = {
    kd_penyakit?: boolean
    nama_penyakit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PenyakitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kd_penyakit" | "nama_penyakit" | "createdAt" | "updatedAt", ExtArgs["result"]["penyakit"]>
  export type PenyakitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengetahuan?: boolean | Penyakit$pengetahuanArgs<ExtArgs>
    solusi?: boolean | Penyakit$solusiArgs<ExtArgs>
    _count?: boolean | PenyakitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PenyakitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PenyakitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PenyakitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Penyakit"
    objects: {
      pengetahuan: Prisma.$PengetahuanPayload<ExtArgs>[]
      solusi: Prisma.$SolusiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      kd_penyakit: string
      nama_penyakit: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["penyakit"]>
    composites: {}
  }

  type PenyakitGetPayload<S extends boolean | null | undefined | PenyakitDefaultArgs> = $Result.GetResult<Prisma.$PenyakitPayload, S>

  type PenyakitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PenyakitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenyakitCountAggregateInputType | true
    }

  export interface PenyakitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Penyakit'], meta: { name: 'Penyakit' } }
    /**
     * Find zero or one Penyakit that matches the filter.
     * @param {PenyakitFindUniqueArgs} args - Arguments to find a Penyakit
     * @example
     * // Get one Penyakit
     * const penyakit = await prisma.penyakit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PenyakitFindUniqueArgs>(args: SelectSubset<T, PenyakitFindUniqueArgs<ExtArgs>>): Prisma__PenyakitClient<$Result.GetResult<Prisma.$PenyakitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Penyakit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PenyakitFindUniqueOrThrowArgs} args - Arguments to find a Penyakit
     * @example
     * // Get one Penyakit
     * const penyakit = await prisma.penyakit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PenyakitFindUniqueOrThrowArgs>(args: SelectSubset<T, PenyakitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PenyakitClient<$Result.GetResult<Prisma.$PenyakitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penyakit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenyakitFindFirstArgs} args - Arguments to find a Penyakit
     * @example
     * // Get one Penyakit
     * const penyakit = await prisma.penyakit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PenyakitFindFirstArgs>(args?: SelectSubset<T, PenyakitFindFirstArgs<ExtArgs>>): Prisma__PenyakitClient<$Result.GetResult<Prisma.$PenyakitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penyakit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenyakitFindFirstOrThrowArgs} args - Arguments to find a Penyakit
     * @example
     * // Get one Penyakit
     * const penyakit = await prisma.penyakit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PenyakitFindFirstOrThrowArgs>(args?: SelectSubset<T, PenyakitFindFirstOrThrowArgs<ExtArgs>>): Prisma__PenyakitClient<$Result.GetResult<Prisma.$PenyakitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penyakits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenyakitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penyakits
     * const penyakits = await prisma.penyakit.findMany()
     * 
     * // Get first 10 Penyakits
     * const penyakits = await prisma.penyakit.findMany({ take: 10 })
     * 
     * // Only select the `kd_penyakit`
     * const penyakitWithKd_penyakitOnly = await prisma.penyakit.findMany({ select: { kd_penyakit: true } })
     * 
     */
    findMany<T extends PenyakitFindManyArgs>(args?: SelectSubset<T, PenyakitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenyakitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Penyakit.
     * @param {PenyakitCreateArgs} args - Arguments to create a Penyakit.
     * @example
     * // Create one Penyakit
     * const Penyakit = await prisma.penyakit.create({
     *   data: {
     *     // ... data to create a Penyakit
     *   }
     * })
     * 
     */
    create<T extends PenyakitCreateArgs>(args: SelectSubset<T, PenyakitCreateArgs<ExtArgs>>): Prisma__PenyakitClient<$Result.GetResult<Prisma.$PenyakitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penyakits.
     * @param {PenyakitCreateManyArgs} args - Arguments to create many Penyakits.
     * @example
     * // Create many Penyakits
     * const penyakit = await prisma.penyakit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PenyakitCreateManyArgs>(args?: SelectSubset<T, PenyakitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Penyakits and returns the data saved in the database.
     * @param {PenyakitCreateManyAndReturnArgs} args - Arguments to create many Penyakits.
     * @example
     * // Create many Penyakits
     * const penyakit = await prisma.penyakit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Penyakits and only return the `kd_penyakit`
     * const penyakitWithKd_penyakitOnly = await prisma.penyakit.createManyAndReturn({
     *   select: { kd_penyakit: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PenyakitCreateManyAndReturnArgs>(args?: SelectSubset<T, PenyakitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenyakitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Penyakit.
     * @param {PenyakitDeleteArgs} args - Arguments to delete one Penyakit.
     * @example
     * // Delete one Penyakit
     * const Penyakit = await prisma.penyakit.delete({
     *   where: {
     *     // ... filter to delete one Penyakit
     *   }
     * })
     * 
     */
    delete<T extends PenyakitDeleteArgs>(args: SelectSubset<T, PenyakitDeleteArgs<ExtArgs>>): Prisma__PenyakitClient<$Result.GetResult<Prisma.$PenyakitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Penyakit.
     * @param {PenyakitUpdateArgs} args - Arguments to update one Penyakit.
     * @example
     * // Update one Penyakit
     * const penyakit = await prisma.penyakit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PenyakitUpdateArgs>(args: SelectSubset<T, PenyakitUpdateArgs<ExtArgs>>): Prisma__PenyakitClient<$Result.GetResult<Prisma.$PenyakitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penyakits.
     * @param {PenyakitDeleteManyArgs} args - Arguments to filter Penyakits to delete.
     * @example
     * // Delete a few Penyakits
     * const { count } = await prisma.penyakit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PenyakitDeleteManyArgs>(args?: SelectSubset<T, PenyakitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penyakits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenyakitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penyakits
     * const penyakit = await prisma.penyakit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PenyakitUpdateManyArgs>(args: SelectSubset<T, PenyakitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penyakits and returns the data updated in the database.
     * @param {PenyakitUpdateManyAndReturnArgs} args - Arguments to update many Penyakits.
     * @example
     * // Update many Penyakits
     * const penyakit = await prisma.penyakit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Penyakits and only return the `kd_penyakit`
     * const penyakitWithKd_penyakitOnly = await prisma.penyakit.updateManyAndReturn({
     *   select: { kd_penyakit: true },
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
    updateManyAndReturn<T extends PenyakitUpdateManyAndReturnArgs>(args: SelectSubset<T, PenyakitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenyakitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Penyakit.
     * @param {PenyakitUpsertArgs} args - Arguments to update or create a Penyakit.
     * @example
     * // Update or create a Penyakit
     * const penyakit = await prisma.penyakit.upsert({
     *   create: {
     *     // ... data to create a Penyakit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Penyakit we want to update
     *   }
     * })
     */
    upsert<T extends PenyakitUpsertArgs>(args: SelectSubset<T, PenyakitUpsertArgs<ExtArgs>>): Prisma__PenyakitClient<$Result.GetResult<Prisma.$PenyakitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penyakits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenyakitCountArgs} args - Arguments to filter Penyakits to count.
     * @example
     * // Count the number of Penyakits
     * const count = await prisma.penyakit.count({
     *   where: {
     *     // ... the filter for the Penyakits we want to count
     *   }
     * })
    **/
    count<T extends PenyakitCountArgs>(
      args?: Subset<T, PenyakitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenyakitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Penyakit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenyakitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenyakitAggregateArgs>(args: Subset<T, PenyakitAggregateArgs>): Prisma.PrismaPromise<GetPenyakitAggregateType<T>>

    /**
     * Group by Penyakit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenyakitGroupByArgs} args - Group by arguments.
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
      T extends PenyakitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PenyakitGroupByArgs['orderBy'] }
        : { orderBy?: PenyakitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PenyakitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenyakitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Penyakit model
   */
  readonly fields: PenyakitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Penyakit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PenyakitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pengetahuan<T extends Penyakit$pengetahuanArgs<ExtArgs> = {}>(args?: Subset<T, Penyakit$pengetahuanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengetahuanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solusi<T extends Penyakit$solusiArgs<ExtArgs> = {}>(args?: Subset<T, Penyakit$solusiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolusiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Penyakit model
   */
  interface PenyakitFieldRefs {
    readonly kd_penyakit: FieldRef<"Penyakit", 'String'>
    readonly nama_penyakit: FieldRef<"Penyakit", 'String'>
    readonly createdAt: FieldRef<"Penyakit", 'DateTime'>
    readonly updatedAt: FieldRef<"Penyakit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Penyakit findUnique
   */
  export type PenyakitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penyakit
     */
    select?: PenyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penyakit
     */
    omit?: PenyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenyakitInclude<ExtArgs> | null
    /**
     * Filter, which Penyakit to fetch.
     */
    where: PenyakitWhereUniqueInput
  }

  /**
   * Penyakit findUniqueOrThrow
   */
  export type PenyakitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penyakit
     */
    select?: PenyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penyakit
     */
    omit?: PenyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenyakitInclude<ExtArgs> | null
    /**
     * Filter, which Penyakit to fetch.
     */
    where: PenyakitWhereUniqueInput
  }

  /**
   * Penyakit findFirst
   */
  export type PenyakitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penyakit
     */
    select?: PenyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penyakit
     */
    omit?: PenyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenyakitInclude<ExtArgs> | null
    /**
     * Filter, which Penyakit to fetch.
     */
    where?: PenyakitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penyakits to fetch.
     */
    orderBy?: PenyakitOrderByWithRelationInput | PenyakitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penyakits.
     */
    cursor?: PenyakitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penyakits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penyakits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penyakits.
     */
    distinct?: PenyakitScalarFieldEnum | PenyakitScalarFieldEnum[]
  }

  /**
   * Penyakit findFirstOrThrow
   */
  export type PenyakitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penyakit
     */
    select?: PenyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penyakit
     */
    omit?: PenyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenyakitInclude<ExtArgs> | null
    /**
     * Filter, which Penyakit to fetch.
     */
    where?: PenyakitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penyakits to fetch.
     */
    orderBy?: PenyakitOrderByWithRelationInput | PenyakitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penyakits.
     */
    cursor?: PenyakitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penyakits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penyakits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penyakits.
     */
    distinct?: PenyakitScalarFieldEnum | PenyakitScalarFieldEnum[]
  }

  /**
   * Penyakit findMany
   */
  export type PenyakitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penyakit
     */
    select?: PenyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penyakit
     */
    omit?: PenyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenyakitInclude<ExtArgs> | null
    /**
     * Filter, which Penyakits to fetch.
     */
    where?: PenyakitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penyakits to fetch.
     */
    orderBy?: PenyakitOrderByWithRelationInput | PenyakitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Penyakits.
     */
    cursor?: PenyakitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penyakits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penyakits.
     */
    skip?: number
    distinct?: PenyakitScalarFieldEnum | PenyakitScalarFieldEnum[]
  }

  /**
   * Penyakit create
   */
  export type PenyakitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penyakit
     */
    select?: PenyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penyakit
     */
    omit?: PenyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenyakitInclude<ExtArgs> | null
    /**
     * The data needed to create a Penyakit.
     */
    data: XOR<PenyakitCreateInput, PenyakitUncheckedCreateInput>
  }

  /**
   * Penyakit createMany
   */
  export type PenyakitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Penyakits.
     */
    data: PenyakitCreateManyInput | PenyakitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Penyakit createManyAndReturn
   */
  export type PenyakitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penyakit
     */
    select?: PenyakitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Penyakit
     */
    omit?: PenyakitOmit<ExtArgs> | null
    /**
     * The data used to create many Penyakits.
     */
    data: PenyakitCreateManyInput | PenyakitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Penyakit update
   */
  export type PenyakitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penyakit
     */
    select?: PenyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penyakit
     */
    omit?: PenyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenyakitInclude<ExtArgs> | null
    /**
     * The data needed to update a Penyakit.
     */
    data: XOR<PenyakitUpdateInput, PenyakitUncheckedUpdateInput>
    /**
     * Choose, which Penyakit to update.
     */
    where: PenyakitWhereUniqueInput
  }

  /**
   * Penyakit updateMany
   */
  export type PenyakitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Penyakits.
     */
    data: XOR<PenyakitUpdateManyMutationInput, PenyakitUncheckedUpdateManyInput>
    /**
     * Filter which Penyakits to update
     */
    where?: PenyakitWhereInput
    /**
     * Limit how many Penyakits to update.
     */
    limit?: number
  }

  /**
   * Penyakit updateManyAndReturn
   */
  export type PenyakitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penyakit
     */
    select?: PenyakitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Penyakit
     */
    omit?: PenyakitOmit<ExtArgs> | null
    /**
     * The data used to update Penyakits.
     */
    data: XOR<PenyakitUpdateManyMutationInput, PenyakitUncheckedUpdateManyInput>
    /**
     * Filter which Penyakits to update
     */
    where?: PenyakitWhereInput
    /**
     * Limit how many Penyakits to update.
     */
    limit?: number
  }

  /**
   * Penyakit upsert
   */
  export type PenyakitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penyakit
     */
    select?: PenyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penyakit
     */
    omit?: PenyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenyakitInclude<ExtArgs> | null
    /**
     * The filter to search for the Penyakit to update in case it exists.
     */
    where: PenyakitWhereUniqueInput
    /**
     * In case the Penyakit found by the `where` argument doesn't exist, create a new Penyakit with this data.
     */
    create: XOR<PenyakitCreateInput, PenyakitUncheckedCreateInput>
    /**
     * In case the Penyakit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PenyakitUpdateInput, PenyakitUncheckedUpdateInput>
  }

  /**
   * Penyakit delete
   */
  export type PenyakitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penyakit
     */
    select?: PenyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penyakit
     */
    omit?: PenyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenyakitInclude<ExtArgs> | null
    /**
     * Filter which Penyakit to delete.
     */
    where: PenyakitWhereUniqueInput
  }

  /**
   * Penyakit deleteMany
   */
  export type PenyakitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penyakits to delete
     */
    where?: PenyakitWhereInput
    /**
     * Limit how many Penyakits to delete.
     */
    limit?: number
  }

  /**
   * Penyakit.pengetahuan
   */
  export type Penyakit$pengetahuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengetahuan
     */
    select?: PengetahuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengetahuan
     */
    omit?: PengetahuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengetahuanInclude<ExtArgs> | null
    where?: PengetahuanWhereInput
    orderBy?: PengetahuanOrderByWithRelationInput | PengetahuanOrderByWithRelationInput[]
    cursor?: PengetahuanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PengetahuanScalarFieldEnum | PengetahuanScalarFieldEnum[]
  }

  /**
   * Penyakit.solusi
   */
  export type Penyakit$solusiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solusi
     */
    select?: SolusiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solusi
     */
    omit?: SolusiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolusiInclude<ExtArgs> | null
    where?: SolusiWhereInput
    orderBy?: SolusiOrderByWithRelationInput | SolusiOrderByWithRelationInput[]
    cursor?: SolusiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolusiScalarFieldEnum | SolusiScalarFieldEnum[]
  }

  /**
   * Penyakit without action
   */
  export type PenyakitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penyakit
     */
    select?: PenyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penyakit
     */
    omit?: PenyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenyakitInclude<ExtArgs> | null
  }


  /**
   * Model Solusi
   */

  export type AggregateSolusi = {
    _count: SolusiCountAggregateOutputType | null
    _avg: SolusiAvgAggregateOutputType | null
    _sum: SolusiSumAggregateOutputType | null
    _min: SolusiMinAggregateOutputType | null
    _max: SolusiMaxAggregateOutputType | null
  }

  export type SolusiAvgAggregateOutputType = {
    id: number | null
  }

  export type SolusiSumAggregateOutputType = {
    id: number | null
  }

  export type SolusiMinAggregateOutputType = {
    id: number | null
    solusi: string | null
    kd_penyakit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolusiMaxAggregateOutputType = {
    id: number | null
    solusi: string | null
    kd_penyakit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolusiCountAggregateOutputType = {
    id: number
    solusi: number
    kd_penyakit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SolusiAvgAggregateInputType = {
    id?: true
  }

  export type SolusiSumAggregateInputType = {
    id?: true
  }

  export type SolusiMinAggregateInputType = {
    id?: true
    solusi?: true
    kd_penyakit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolusiMaxAggregateInputType = {
    id?: true
    solusi?: true
    kd_penyakit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolusiCountAggregateInputType = {
    id?: true
    solusi?: true
    kd_penyakit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SolusiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solusi to aggregate.
     */
    where?: SolusiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solusis to fetch.
     */
    orderBy?: SolusiOrderByWithRelationInput | SolusiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolusiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solusis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solusis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Solusis
    **/
    _count?: true | SolusiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SolusiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SolusiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolusiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolusiMaxAggregateInputType
  }

  export type GetSolusiAggregateType<T extends SolusiAggregateArgs> = {
        [P in keyof T & keyof AggregateSolusi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolusi[P]>
      : GetScalarType<T[P], AggregateSolusi[P]>
  }




  export type SolusiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolusiWhereInput
    orderBy?: SolusiOrderByWithAggregationInput | SolusiOrderByWithAggregationInput[]
    by: SolusiScalarFieldEnum[] | SolusiScalarFieldEnum
    having?: SolusiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolusiCountAggregateInputType | true
    _avg?: SolusiAvgAggregateInputType
    _sum?: SolusiSumAggregateInputType
    _min?: SolusiMinAggregateInputType
    _max?: SolusiMaxAggregateInputType
  }

  export type SolusiGroupByOutputType = {
    id: number
    solusi: string
    kd_penyakit: string
    createdAt: Date
    updatedAt: Date
    _count: SolusiCountAggregateOutputType | null
    _avg: SolusiAvgAggregateOutputType | null
    _sum: SolusiSumAggregateOutputType | null
    _min: SolusiMinAggregateOutputType | null
    _max: SolusiMaxAggregateOutputType | null
  }

  type GetSolusiGroupByPayload<T extends SolusiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolusiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolusiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolusiGroupByOutputType[P]>
            : GetScalarType<T[P], SolusiGroupByOutputType[P]>
        }
      >
    >


  export type SolusiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solusi?: boolean
    kd_penyakit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    penyakit?: boolean | PenyakitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solusi"]>

  export type SolusiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solusi?: boolean
    kd_penyakit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    penyakit?: boolean | PenyakitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solusi"]>

  export type SolusiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solusi?: boolean
    kd_penyakit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    penyakit?: boolean | PenyakitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solusi"]>

  export type SolusiSelectScalar = {
    id?: boolean
    solusi?: boolean
    kd_penyakit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SolusiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "solusi" | "kd_penyakit" | "createdAt" | "updatedAt", ExtArgs["result"]["solusi"]>
  export type SolusiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penyakit?: boolean | PenyakitDefaultArgs<ExtArgs>
  }
  export type SolusiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penyakit?: boolean | PenyakitDefaultArgs<ExtArgs>
  }
  export type SolusiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penyakit?: boolean | PenyakitDefaultArgs<ExtArgs>
  }

  export type $SolusiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Solusi"
    objects: {
      penyakit: Prisma.$PenyakitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      solusi: string
      kd_penyakit: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["solusi"]>
    composites: {}
  }

  type SolusiGetPayload<S extends boolean | null | undefined | SolusiDefaultArgs> = $Result.GetResult<Prisma.$SolusiPayload, S>

  type SolusiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolusiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolusiCountAggregateInputType | true
    }

  export interface SolusiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Solusi'], meta: { name: 'Solusi' } }
    /**
     * Find zero or one Solusi that matches the filter.
     * @param {SolusiFindUniqueArgs} args - Arguments to find a Solusi
     * @example
     * // Get one Solusi
     * const solusi = await prisma.solusi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolusiFindUniqueArgs>(args: SelectSubset<T, SolusiFindUniqueArgs<ExtArgs>>): Prisma__SolusiClient<$Result.GetResult<Prisma.$SolusiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Solusi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolusiFindUniqueOrThrowArgs} args - Arguments to find a Solusi
     * @example
     * // Get one Solusi
     * const solusi = await prisma.solusi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolusiFindUniqueOrThrowArgs>(args: SelectSubset<T, SolusiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolusiClient<$Result.GetResult<Prisma.$SolusiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solusi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolusiFindFirstArgs} args - Arguments to find a Solusi
     * @example
     * // Get one Solusi
     * const solusi = await prisma.solusi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolusiFindFirstArgs>(args?: SelectSubset<T, SolusiFindFirstArgs<ExtArgs>>): Prisma__SolusiClient<$Result.GetResult<Prisma.$SolusiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solusi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolusiFindFirstOrThrowArgs} args - Arguments to find a Solusi
     * @example
     * // Get one Solusi
     * const solusi = await prisma.solusi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolusiFindFirstOrThrowArgs>(args?: SelectSubset<T, SolusiFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolusiClient<$Result.GetResult<Prisma.$SolusiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Solusis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolusiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solusis
     * const solusis = await prisma.solusi.findMany()
     * 
     * // Get first 10 Solusis
     * const solusis = await prisma.solusi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solusiWithIdOnly = await prisma.solusi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolusiFindManyArgs>(args?: SelectSubset<T, SolusiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolusiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Solusi.
     * @param {SolusiCreateArgs} args - Arguments to create a Solusi.
     * @example
     * // Create one Solusi
     * const Solusi = await prisma.solusi.create({
     *   data: {
     *     // ... data to create a Solusi
     *   }
     * })
     * 
     */
    create<T extends SolusiCreateArgs>(args: SelectSubset<T, SolusiCreateArgs<ExtArgs>>): Prisma__SolusiClient<$Result.GetResult<Prisma.$SolusiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Solusis.
     * @param {SolusiCreateManyArgs} args - Arguments to create many Solusis.
     * @example
     * // Create many Solusis
     * const solusi = await prisma.solusi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolusiCreateManyArgs>(args?: SelectSubset<T, SolusiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Solusis and returns the data saved in the database.
     * @param {SolusiCreateManyAndReturnArgs} args - Arguments to create many Solusis.
     * @example
     * // Create many Solusis
     * const solusi = await prisma.solusi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Solusis and only return the `id`
     * const solusiWithIdOnly = await prisma.solusi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolusiCreateManyAndReturnArgs>(args?: SelectSubset<T, SolusiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolusiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Solusi.
     * @param {SolusiDeleteArgs} args - Arguments to delete one Solusi.
     * @example
     * // Delete one Solusi
     * const Solusi = await prisma.solusi.delete({
     *   where: {
     *     // ... filter to delete one Solusi
     *   }
     * })
     * 
     */
    delete<T extends SolusiDeleteArgs>(args: SelectSubset<T, SolusiDeleteArgs<ExtArgs>>): Prisma__SolusiClient<$Result.GetResult<Prisma.$SolusiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Solusi.
     * @param {SolusiUpdateArgs} args - Arguments to update one Solusi.
     * @example
     * // Update one Solusi
     * const solusi = await prisma.solusi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolusiUpdateArgs>(args: SelectSubset<T, SolusiUpdateArgs<ExtArgs>>): Prisma__SolusiClient<$Result.GetResult<Prisma.$SolusiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Solusis.
     * @param {SolusiDeleteManyArgs} args - Arguments to filter Solusis to delete.
     * @example
     * // Delete a few Solusis
     * const { count } = await prisma.solusi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolusiDeleteManyArgs>(args?: SelectSubset<T, SolusiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solusis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolusiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solusis
     * const solusi = await prisma.solusi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolusiUpdateManyArgs>(args: SelectSubset<T, SolusiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solusis and returns the data updated in the database.
     * @param {SolusiUpdateManyAndReturnArgs} args - Arguments to update many Solusis.
     * @example
     * // Update many Solusis
     * const solusi = await prisma.solusi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Solusis and only return the `id`
     * const solusiWithIdOnly = await prisma.solusi.updateManyAndReturn({
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
    updateManyAndReturn<T extends SolusiUpdateManyAndReturnArgs>(args: SelectSubset<T, SolusiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolusiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Solusi.
     * @param {SolusiUpsertArgs} args - Arguments to update or create a Solusi.
     * @example
     * // Update or create a Solusi
     * const solusi = await prisma.solusi.upsert({
     *   create: {
     *     // ... data to create a Solusi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solusi we want to update
     *   }
     * })
     */
    upsert<T extends SolusiUpsertArgs>(args: SelectSubset<T, SolusiUpsertArgs<ExtArgs>>): Prisma__SolusiClient<$Result.GetResult<Prisma.$SolusiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Solusis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolusiCountArgs} args - Arguments to filter Solusis to count.
     * @example
     * // Count the number of Solusis
     * const count = await prisma.solusi.count({
     *   where: {
     *     // ... the filter for the Solusis we want to count
     *   }
     * })
    **/
    count<T extends SolusiCountArgs>(
      args?: Subset<T, SolusiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolusiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solusi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolusiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolusiAggregateArgs>(args: Subset<T, SolusiAggregateArgs>): Prisma.PrismaPromise<GetSolusiAggregateType<T>>

    /**
     * Group by Solusi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolusiGroupByArgs} args - Group by arguments.
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
      T extends SolusiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolusiGroupByArgs['orderBy'] }
        : { orderBy?: SolusiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SolusiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolusiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Solusi model
   */
  readonly fields: SolusiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Solusi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolusiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    penyakit<T extends PenyakitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PenyakitDefaultArgs<ExtArgs>>): Prisma__PenyakitClient<$Result.GetResult<Prisma.$PenyakitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Solusi model
   */
  interface SolusiFieldRefs {
    readonly id: FieldRef<"Solusi", 'Int'>
    readonly solusi: FieldRef<"Solusi", 'String'>
    readonly kd_penyakit: FieldRef<"Solusi", 'String'>
    readonly createdAt: FieldRef<"Solusi", 'DateTime'>
    readonly updatedAt: FieldRef<"Solusi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Solusi findUnique
   */
  export type SolusiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solusi
     */
    select?: SolusiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solusi
     */
    omit?: SolusiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolusiInclude<ExtArgs> | null
    /**
     * Filter, which Solusi to fetch.
     */
    where: SolusiWhereUniqueInput
  }

  /**
   * Solusi findUniqueOrThrow
   */
  export type SolusiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solusi
     */
    select?: SolusiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solusi
     */
    omit?: SolusiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolusiInclude<ExtArgs> | null
    /**
     * Filter, which Solusi to fetch.
     */
    where: SolusiWhereUniqueInput
  }

  /**
   * Solusi findFirst
   */
  export type SolusiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solusi
     */
    select?: SolusiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solusi
     */
    omit?: SolusiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolusiInclude<ExtArgs> | null
    /**
     * Filter, which Solusi to fetch.
     */
    where?: SolusiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solusis to fetch.
     */
    orderBy?: SolusiOrderByWithRelationInput | SolusiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solusis.
     */
    cursor?: SolusiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solusis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solusis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solusis.
     */
    distinct?: SolusiScalarFieldEnum | SolusiScalarFieldEnum[]
  }

  /**
   * Solusi findFirstOrThrow
   */
  export type SolusiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solusi
     */
    select?: SolusiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solusi
     */
    omit?: SolusiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolusiInclude<ExtArgs> | null
    /**
     * Filter, which Solusi to fetch.
     */
    where?: SolusiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solusis to fetch.
     */
    orderBy?: SolusiOrderByWithRelationInput | SolusiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solusis.
     */
    cursor?: SolusiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solusis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solusis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solusis.
     */
    distinct?: SolusiScalarFieldEnum | SolusiScalarFieldEnum[]
  }

  /**
   * Solusi findMany
   */
  export type SolusiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solusi
     */
    select?: SolusiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solusi
     */
    omit?: SolusiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolusiInclude<ExtArgs> | null
    /**
     * Filter, which Solusis to fetch.
     */
    where?: SolusiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solusis to fetch.
     */
    orderBy?: SolusiOrderByWithRelationInput | SolusiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Solusis.
     */
    cursor?: SolusiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solusis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solusis.
     */
    skip?: number
    distinct?: SolusiScalarFieldEnum | SolusiScalarFieldEnum[]
  }

  /**
   * Solusi create
   */
  export type SolusiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solusi
     */
    select?: SolusiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solusi
     */
    omit?: SolusiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolusiInclude<ExtArgs> | null
    /**
     * The data needed to create a Solusi.
     */
    data: XOR<SolusiCreateInput, SolusiUncheckedCreateInput>
  }

  /**
   * Solusi createMany
   */
  export type SolusiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Solusis.
     */
    data: SolusiCreateManyInput | SolusiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Solusi createManyAndReturn
   */
  export type SolusiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solusi
     */
    select?: SolusiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solusi
     */
    omit?: SolusiOmit<ExtArgs> | null
    /**
     * The data used to create many Solusis.
     */
    data: SolusiCreateManyInput | SolusiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolusiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Solusi update
   */
  export type SolusiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solusi
     */
    select?: SolusiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solusi
     */
    omit?: SolusiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolusiInclude<ExtArgs> | null
    /**
     * The data needed to update a Solusi.
     */
    data: XOR<SolusiUpdateInput, SolusiUncheckedUpdateInput>
    /**
     * Choose, which Solusi to update.
     */
    where: SolusiWhereUniqueInput
  }

  /**
   * Solusi updateMany
   */
  export type SolusiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Solusis.
     */
    data: XOR<SolusiUpdateManyMutationInput, SolusiUncheckedUpdateManyInput>
    /**
     * Filter which Solusis to update
     */
    where?: SolusiWhereInput
    /**
     * Limit how many Solusis to update.
     */
    limit?: number
  }

  /**
   * Solusi updateManyAndReturn
   */
  export type SolusiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solusi
     */
    select?: SolusiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solusi
     */
    omit?: SolusiOmit<ExtArgs> | null
    /**
     * The data used to update Solusis.
     */
    data: XOR<SolusiUpdateManyMutationInput, SolusiUncheckedUpdateManyInput>
    /**
     * Filter which Solusis to update
     */
    where?: SolusiWhereInput
    /**
     * Limit how many Solusis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolusiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Solusi upsert
   */
  export type SolusiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solusi
     */
    select?: SolusiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solusi
     */
    omit?: SolusiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolusiInclude<ExtArgs> | null
    /**
     * The filter to search for the Solusi to update in case it exists.
     */
    where: SolusiWhereUniqueInput
    /**
     * In case the Solusi found by the `where` argument doesn't exist, create a new Solusi with this data.
     */
    create: XOR<SolusiCreateInput, SolusiUncheckedCreateInput>
    /**
     * In case the Solusi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolusiUpdateInput, SolusiUncheckedUpdateInput>
  }

  /**
   * Solusi delete
   */
  export type SolusiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solusi
     */
    select?: SolusiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solusi
     */
    omit?: SolusiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolusiInclude<ExtArgs> | null
    /**
     * Filter which Solusi to delete.
     */
    where: SolusiWhereUniqueInput
  }

  /**
   * Solusi deleteMany
   */
  export type SolusiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solusis to delete
     */
    where?: SolusiWhereInput
    /**
     * Limit how many Solusis to delete.
     */
    limit?: number
  }

  /**
   * Solusi without action
   */
  export type SolusiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solusi
     */
    select?: SolusiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solusi
     */
    omit?: SolusiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolusiInclude<ExtArgs> | null
  }


  /**
   * Model Pengetahuan
   */

  export type AggregatePengetahuan = {
    _count: PengetahuanCountAggregateOutputType | null
    _avg: PengetahuanAvgAggregateOutputType | null
    _sum: PengetahuanSumAggregateOutputType | null
    _min: PengetahuanMinAggregateOutputType | null
    _max: PengetahuanMaxAggregateOutputType | null
  }

  export type PengetahuanAvgAggregateOutputType = {
    id: number | null
  }

  export type PengetahuanSumAggregateOutputType = {
    id: number | null
  }

  export type PengetahuanMinAggregateOutputType = {
    id: number | null
    kd_pengetahuan: string | null
    kd_gejala: string | null
    kd_penyakit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PengetahuanMaxAggregateOutputType = {
    id: number | null
    kd_pengetahuan: string | null
    kd_gejala: string | null
    kd_penyakit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PengetahuanCountAggregateOutputType = {
    id: number
    kd_pengetahuan: number
    kd_gejala: number
    kd_penyakit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PengetahuanAvgAggregateInputType = {
    id?: true
  }

  export type PengetahuanSumAggregateInputType = {
    id?: true
  }

  export type PengetahuanMinAggregateInputType = {
    id?: true
    kd_pengetahuan?: true
    kd_gejala?: true
    kd_penyakit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PengetahuanMaxAggregateInputType = {
    id?: true
    kd_pengetahuan?: true
    kd_gejala?: true
    kd_penyakit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PengetahuanCountAggregateInputType = {
    id?: true
    kd_pengetahuan?: true
    kd_gejala?: true
    kd_penyakit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PengetahuanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pengetahuan to aggregate.
     */
    where?: PengetahuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengetahuans to fetch.
     */
    orderBy?: PengetahuanOrderByWithRelationInput | PengetahuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PengetahuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengetahuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengetahuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pengetahuans
    **/
    _count?: true | PengetahuanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PengetahuanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PengetahuanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PengetahuanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PengetahuanMaxAggregateInputType
  }

  export type GetPengetahuanAggregateType<T extends PengetahuanAggregateArgs> = {
        [P in keyof T & keyof AggregatePengetahuan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengetahuan[P]>
      : GetScalarType<T[P], AggregatePengetahuan[P]>
  }




  export type PengetahuanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PengetahuanWhereInput
    orderBy?: PengetahuanOrderByWithAggregationInput | PengetahuanOrderByWithAggregationInput[]
    by: PengetahuanScalarFieldEnum[] | PengetahuanScalarFieldEnum
    having?: PengetahuanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PengetahuanCountAggregateInputType | true
    _avg?: PengetahuanAvgAggregateInputType
    _sum?: PengetahuanSumAggregateInputType
    _min?: PengetahuanMinAggregateInputType
    _max?: PengetahuanMaxAggregateInputType
  }

  export type PengetahuanGroupByOutputType = {
    id: number
    kd_pengetahuan: string
    kd_gejala: string
    kd_penyakit: string
    createdAt: Date
    updatedAt: Date
    _count: PengetahuanCountAggregateOutputType | null
    _avg: PengetahuanAvgAggregateOutputType | null
    _sum: PengetahuanSumAggregateOutputType | null
    _min: PengetahuanMinAggregateOutputType | null
    _max: PengetahuanMaxAggregateOutputType | null
  }

  type GetPengetahuanGroupByPayload<T extends PengetahuanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PengetahuanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PengetahuanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PengetahuanGroupByOutputType[P]>
            : GetScalarType<T[P], PengetahuanGroupByOutputType[P]>
        }
      >
    >


  export type PengetahuanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kd_pengetahuan?: boolean
    kd_gejala?: boolean
    kd_penyakit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gejala?: boolean | GejalaDefaultArgs<ExtArgs>
    penyakit?: boolean | PenyakitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pengetahuan"]>

  export type PengetahuanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kd_pengetahuan?: boolean
    kd_gejala?: boolean
    kd_penyakit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gejala?: boolean | GejalaDefaultArgs<ExtArgs>
    penyakit?: boolean | PenyakitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pengetahuan"]>

  export type PengetahuanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kd_pengetahuan?: boolean
    kd_gejala?: boolean
    kd_penyakit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gejala?: boolean | GejalaDefaultArgs<ExtArgs>
    penyakit?: boolean | PenyakitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pengetahuan"]>

  export type PengetahuanSelectScalar = {
    id?: boolean
    kd_pengetahuan?: boolean
    kd_gejala?: boolean
    kd_penyakit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PengetahuanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kd_pengetahuan" | "kd_gejala" | "kd_penyakit" | "createdAt" | "updatedAt", ExtArgs["result"]["pengetahuan"]>
  export type PengetahuanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gejala?: boolean | GejalaDefaultArgs<ExtArgs>
    penyakit?: boolean | PenyakitDefaultArgs<ExtArgs>
  }
  export type PengetahuanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gejala?: boolean | GejalaDefaultArgs<ExtArgs>
    penyakit?: boolean | PenyakitDefaultArgs<ExtArgs>
  }
  export type PengetahuanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gejala?: boolean | GejalaDefaultArgs<ExtArgs>
    penyakit?: boolean | PenyakitDefaultArgs<ExtArgs>
  }

  export type $PengetahuanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pengetahuan"
    objects: {
      gejala: Prisma.$GejalaPayload<ExtArgs>
      penyakit: Prisma.$PenyakitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kd_pengetahuan: string
      kd_gejala: string
      kd_penyakit: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pengetahuan"]>
    composites: {}
  }

  type PengetahuanGetPayload<S extends boolean | null | undefined | PengetahuanDefaultArgs> = $Result.GetResult<Prisma.$PengetahuanPayload, S>

  type PengetahuanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PengetahuanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PengetahuanCountAggregateInputType | true
    }

  export interface PengetahuanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pengetahuan'], meta: { name: 'Pengetahuan' } }
    /**
     * Find zero or one Pengetahuan that matches the filter.
     * @param {PengetahuanFindUniqueArgs} args - Arguments to find a Pengetahuan
     * @example
     * // Get one Pengetahuan
     * const pengetahuan = await prisma.pengetahuan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PengetahuanFindUniqueArgs>(args: SelectSubset<T, PengetahuanFindUniqueArgs<ExtArgs>>): Prisma__PengetahuanClient<$Result.GetResult<Prisma.$PengetahuanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pengetahuan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PengetahuanFindUniqueOrThrowArgs} args - Arguments to find a Pengetahuan
     * @example
     * // Get one Pengetahuan
     * const pengetahuan = await prisma.pengetahuan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PengetahuanFindUniqueOrThrowArgs>(args: SelectSubset<T, PengetahuanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PengetahuanClient<$Result.GetResult<Prisma.$PengetahuanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengetahuan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengetahuanFindFirstArgs} args - Arguments to find a Pengetahuan
     * @example
     * // Get one Pengetahuan
     * const pengetahuan = await prisma.pengetahuan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PengetahuanFindFirstArgs>(args?: SelectSubset<T, PengetahuanFindFirstArgs<ExtArgs>>): Prisma__PengetahuanClient<$Result.GetResult<Prisma.$PengetahuanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengetahuan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengetahuanFindFirstOrThrowArgs} args - Arguments to find a Pengetahuan
     * @example
     * // Get one Pengetahuan
     * const pengetahuan = await prisma.pengetahuan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PengetahuanFindFirstOrThrowArgs>(args?: SelectSubset<T, PengetahuanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PengetahuanClient<$Result.GetResult<Prisma.$PengetahuanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pengetahuans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengetahuanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pengetahuans
     * const pengetahuans = await prisma.pengetahuan.findMany()
     * 
     * // Get first 10 Pengetahuans
     * const pengetahuans = await prisma.pengetahuan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pengetahuanWithIdOnly = await prisma.pengetahuan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PengetahuanFindManyArgs>(args?: SelectSubset<T, PengetahuanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengetahuanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pengetahuan.
     * @param {PengetahuanCreateArgs} args - Arguments to create a Pengetahuan.
     * @example
     * // Create one Pengetahuan
     * const Pengetahuan = await prisma.pengetahuan.create({
     *   data: {
     *     // ... data to create a Pengetahuan
     *   }
     * })
     * 
     */
    create<T extends PengetahuanCreateArgs>(args: SelectSubset<T, PengetahuanCreateArgs<ExtArgs>>): Prisma__PengetahuanClient<$Result.GetResult<Prisma.$PengetahuanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pengetahuans.
     * @param {PengetahuanCreateManyArgs} args - Arguments to create many Pengetahuans.
     * @example
     * // Create many Pengetahuans
     * const pengetahuan = await prisma.pengetahuan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PengetahuanCreateManyArgs>(args?: SelectSubset<T, PengetahuanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pengetahuans and returns the data saved in the database.
     * @param {PengetahuanCreateManyAndReturnArgs} args - Arguments to create many Pengetahuans.
     * @example
     * // Create many Pengetahuans
     * const pengetahuan = await prisma.pengetahuan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pengetahuans and only return the `id`
     * const pengetahuanWithIdOnly = await prisma.pengetahuan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PengetahuanCreateManyAndReturnArgs>(args?: SelectSubset<T, PengetahuanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengetahuanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pengetahuan.
     * @param {PengetahuanDeleteArgs} args - Arguments to delete one Pengetahuan.
     * @example
     * // Delete one Pengetahuan
     * const Pengetahuan = await prisma.pengetahuan.delete({
     *   where: {
     *     // ... filter to delete one Pengetahuan
     *   }
     * })
     * 
     */
    delete<T extends PengetahuanDeleteArgs>(args: SelectSubset<T, PengetahuanDeleteArgs<ExtArgs>>): Prisma__PengetahuanClient<$Result.GetResult<Prisma.$PengetahuanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pengetahuan.
     * @param {PengetahuanUpdateArgs} args - Arguments to update one Pengetahuan.
     * @example
     * // Update one Pengetahuan
     * const pengetahuan = await prisma.pengetahuan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PengetahuanUpdateArgs>(args: SelectSubset<T, PengetahuanUpdateArgs<ExtArgs>>): Prisma__PengetahuanClient<$Result.GetResult<Prisma.$PengetahuanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pengetahuans.
     * @param {PengetahuanDeleteManyArgs} args - Arguments to filter Pengetahuans to delete.
     * @example
     * // Delete a few Pengetahuans
     * const { count } = await prisma.pengetahuan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PengetahuanDeleteManyArgs>(args?: SelectSubset<T, PengetahuanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pengetahuans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengetahuanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pengetahuans
     * const pengetahuan = await prisma.pengetahuan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PengetahuanUpdateManyArgs>(args: SelectSubset<T, PengetahuanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pengetahuans and returns the data updated in the database.
     * @param {PengetahuanUpdateManyAndReturnArgs} args - Arguments to update many Pengetahuans.
     * @example
     * // Update many Pengetahuans
     * const pengetahuan = await prisma.pengetahuan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pengetahuans and only return the `id`
     * const pengetahuanWithIdOnly = await prisma.pengetahuan.updateManyAndReturn({
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
    updateManyAndReturn<T extends PengetahuanUpdateManyAndReturnArgs>(args: SelectSubset<T, PengetahuanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengetahuanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pengetahuan.
     * @param {PengetahuanUpsertArgs} args - Arguments to update or create a Pengetahuan.
     * @example
     * // Update or create a Pengetahuan
     * const pengetahuan = await prisma.pengetahuan.upsert({
     *   create: {
     *     // ... data to create a Pengetahuan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pengetahuan we want to update
     *   }
     * })
     */
    upsert<T extends PengetahuanUpsertArgs>(args: SelectSubset<T, PengetahuanUpsertArgs<ExtArgs>>): Prisma__PengetahuanClient<$Result.GetResult<Prisma.$PengetahuanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pengetahuans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengetahuanCountArgs} args - Arguments to filter Pengetahuans to count.
     * @example
     * // Count the number of Pengetahuans
     * const count = await prisma.pengetahuan.count({
     *   where: {
     *     // ... the filter for the Pengetahuans we want to count
     *   }
     * })
    **/
    count<T extends PengetahuanCountArgs>(
      args?: Subset<T, PengetahuanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PengetahuanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pengetahuan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengetahuanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PengetahuanAggregateArgs>(args: Subset<T, PengetahuanAggregateArgs>): Prisma.PrismaPromise<GetPengetahuanAggregateType<T>>

    /**
     * Group by Pengetahuan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengetahuanGroupByArgs} args - Group by arguments.
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
      T extends PengetahuanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PengetahuanGroupByArgs['orderBy'] }
        : { orderBy?: PengetahuanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PengetahuanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPengetahuanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pengetahuan model
   */
  readonly fields: PengetahuanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pengetahuan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PengetahuanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gejala<T extends GejalaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GejalaDefaultArgs<ExtArgs>>): Prisma__GejalaClient<$Result.GetResult<Prisma.$GejalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    penyakit<T extends PenyakitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PenyakitDefaultArgs<ExtArgs>>): Prisma__PenyakitClient<$Result.GetResult<Prisma.$PenyakitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pengetahuan model
   */
  interface PengetahuanFieldRefs {
    readonly id: FieldRef<"Pengetahuan", 'Int'>
    readonly kd_pengetahuan: FieldRef<"Pengetahuan", 'String'>
    readonly kd_gejala: FieldRef<"Pengetahuan", 'String'>
    readonly kd_penyakit: FieldRef<"Pengetahuan", 'String'>
    readonly createdAt: FieldRef<"Pengetahuan", 'DateTime'>
    readonly updatedAt: FieldRef<"Pengetahuan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pengetahuan findUnique
   */
  export type PengetahuanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengetahuan
     */
    select?: PengetahuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengetahuan
     */
    omit?: PengetahuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengetahuanInclude<ExtArgs> | null
    /**
     * Filter, which Pengetahuan to fetch.
     */
    where: PengetahuanWhereUniqueInput
  }

  /**
   * Pengetahuan findUniqueOrThrow
   */
  export type PengetahuanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengetahuan
     */
    select?: PengetahuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengetahuan
     */
    omit?: PengetahuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengetahuanInclude<ExtArgs> | null
    /**
     * Filter, which Pengetahuan to fetch.
     */
    where: PengetahuanWhereUniqueInput
  }

  /**
   * Pengetahuan findFirst
   */
  export type PengetahuanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengetahuan
     */
    select?: PengetahuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengetahuan
     */
    omit?: PengetahuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengetahuanInclude<ExtArgs> | null
    /**
     * Filter, which Pengetahuan to fetch.
     */
    where?: PengetahuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengetahuans to fetch.
     */
    orderBy?: PengetahuanOrderByWithRelationInput | PengetahuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pengetahuans.
     */
    cursor?: PengetahuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengetahuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengetahuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pengetahuans.
     */
    distinct?: PengetahuanScalarFieldEnum | PengetahuanScalarFieldEnum[]
  }

  /**
   * Pengetahuan findFirstOrThrow
   */
  export type PengetahuanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengetahuan
     */
    select?: PengetahuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengetahuan
     */
    omit?: PengetahuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengetahuanInclude<ExtArgs> | null
    /**
     * Filter, which Pengetahuan to fetch.
     */
    where?: PengetahuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengetahuans to fetch.
     */
    orderBy?: PengetahuanOrderByWithRelationInput | PengetahuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pengetahuans.
     */
    cursor?: PengetahuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengetahuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengetahuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pengetahuans.
     */
    distinct?: PengetahuanScalarFieldEnum | PengetahuanScalarFieldEnum[]
  }

  /**
   * Pengetahuan findMany
   */
  export type PengetahuanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengetahuan
     */
    select?: PengetahuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengetahuan
     */
    omit?: PengetahuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengetahuanInclude<ExtArgs> | null
    /**
     * Filter, which Pengetahuans to fetch.
     */
    where?: PengetahuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengetahuans to fetch.
     */
    orderBy?: PengetahuanOrderByWithRelationInput | PengetahuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pengetahuans.
     */
    cursor?: PengetahuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengetahuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengetahuans.
     */
    skip?: number
    distinct?: PengetahuanScalarFieldEnum | PengetahuanScalarFieldEnum[]
  }

  /**
   * Pengetahuan create
   */
  export type PengetahuanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengetahuan
     */
    select?: PengetahuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengetahuan
     */
    omit?: PengetahuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengetahuanInclude<ExtArgs> | null
    /**
     * The data needed to create a Pengetahuan.
     */
    data: XOR<PengetahuanCreateInput, PengetahuanUncheckedCreateInput>
  }

  /**
   * Pengetahuan createMany
   */
  export type PengetahuanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pengetahuans.
     */
    data: PengetahuanCreateManyInput | PengetahuanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pengetahuan createManyAndReturn
   */
  export type PengetahuanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengetahuan
     */
    select?: PengetahuanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pengetahuan
     */
    omit?: PengetahuanOmit<ExtArgs> | null
    /**
     * The data used to create many Pengetahuans.
     */
    data: PengetahuanCreateManyInput | PengetahuanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengetahuanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pengetahuan update
   */
  export type PengetahuanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengetahuan
     */
    select?: PengetahuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengetahuan
     */
    omit?: PengetahuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengetahuanInclude<ExtArgs> | null
    /**
     * The data needed to update a Pengetahuan.
     */
    data: XOR<PengetahuanUpdateInput, PengetahuanUncheckedUpdateInput>
    /**
     * Choose, which Pengetahuan to update.
     */
    where: PengetahuanWhereUniqueInput
  }

  /**
   * Pengetahuan updateMany
   */
  export type PengetahuanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pengetahuans.
     */
    data: XOR<PengetahuanUpdateManyMutationInput, PengetahuanUncheckedUpdateManyInput>
    /**
     * Filter which Pengetahuans to update
     */
    where?: PengetahuanWhereInput
    /**
     * Limit how many Pengetahuans to update.
     */
    limit?: number
  }

  /**
   * Pengetahuan updateManyAndReturn
   */
  export type PengetahuanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengetahuan
     */
    select?: PengetahuanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pengetahuan
     */
    omit?: PengetahuanOmit<ExtArgs> | null
    /**
     * The data used to update Pengetahuans.
     */
    data: XOR<PengetahuanUpdateManyMutationInput, PengetahuanUncheckedUpdateManyInput>
    /**
     * Filter which Pengetahuans to update
     */
    where?: PengetahuanWhereInput
    /**
     * Limit how many Pengetahuans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengetahuanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pengetahuan upsert
   */
  export type PengetahuanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengetahuan
     */
    select?: PengetahuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengetahuan
     */
    omit?: PengetahuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengetahuanInclude<ExtArgs> | null
    /**
     * The filter to search for the Pengetahuan to update in case it exists.
     */
    where: PengetahuanWhereUniqueInput
    /**
     * In case the Pengetahuan found by the `where` argument doesn't exist, create a new Pengetahuan with this data.
     */
    create: XOR<PengetahuanCreateInput, PengetahuanUncheckedCreateInput>
    /**
     * In case the Pengetahuan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PengetahuanUpdateInput, PengetahuanUncheckedUpdateInput>
  }

  /**
   * Pengetahuan delete
   */
  export type PengetahuanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengetahuan
     */
    select?: PengetahuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengetahuan
     */
    omit?: PengetahuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengetahuanInclude<ExtArgs> | null
    /**
     * Filter which Pengetahuan to delete.
     */
    where: PengetahuanWhereUniqueInput
  }

  /**
   * Pengetahuan deleteMany
   */
  export type PengetahuanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pengetahuans to delete
     */
    where?: PengetahuanWhereInput
    /**
     * Limit how many Pengetahuans to delete.
     */
    limit?: number
  }

  /**
   * Pengetahuan without action
   */
  export type PengetahuanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengetahuan
     */
    select?: PengetahuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengetahuan
     */
    omit?: PengetahuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengetahuanInclude<ExtArgs> | null
  }


  /**
   * Model Hasil
   */

  export type AggregateHasil = {
    _count: HasilCountAggregateOutputType | null
    _avg: HasilAvgAggregateOutputType | null
    _sum: HasilSumAggregateOutputType | null
    _min: HasilMinAggregateOutputType | null
    _max: HasilMaxAggregateOutputType | null
  }

  export type HasilAvgAggregateOutputType = {
    id: number | null
    pasienId: number | null
  }

  export type HasilSumAggregateOutputType = {
    id: number | null
    pasienId: number | null
  }

  export type HasilMinAggregateOutputType = {
    id: number | null
    pasienId: number | null
    kd_penyakit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HasilMaxAggregateOutputType = {
    id: number | null
    pasienId: number | null
    kd_penyakit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HasilCountAggregateOutputType = {
    id: number
    pasienId: number
    kd_penyakit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HasilAvgAggregateInputType = {
    id?: true
    pasienId?: true
  }

  export type HasilSumAggregateInputType = {
    id?: true
    pasienId?: true
  }

  export type HasilMinAggregateInputType = {
    id?: true
    pasienId?: true
    kd_penyakit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HasilMaxAggregateInputType = {
    id?: true
    pasienId?: true
    kd_penyakit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HasilCountAggregateInputType = {
    id?: true
    pasienId?: true
    kd_penyakit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HasilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hasil to aggregate.
     */
    where?: HasilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hasils to fetch.
     */
    orderBy?: HasilOrderByWithRelationInput | HasilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HasilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hasils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hasils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hasils
    **/
    _count?: true | HasilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HasilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HasilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HasilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HasilMaxAggregateInputType
  }

  export type GetHasilAggregateType<T extends HasilAggregateArgs> = {
        [P in keyof T & keyof AggregateHasil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHasil[P]>
      : GetScalarType<T[P], AggregateHasil[P]>
  }




  export type HasilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HasilWhereInput
    orderBy?: HasilOrderByWithAggregationInput | HasilOrderByWithAggregationInput[]
    by: HasilScalarFieldEnum[] | HasilScalarFieldEnum
    having?: HasilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HasilCountAggregateInputType | true
    _avg?: HasilAvgAggregateInputType
    _sum?: HasilSumAggregateInputType
    _min?: HasilMinAggregateInputType
    _max?: HasilMaxAggregateInputType
  }

  export type HasilGroupByOutputType = {
    id: number
    pasienId: number
    kd_penyakit: string
    createdAt: Date
    updatedAt: Date
    _count: HasilCountAggregateOutputType | null
    _avg: HasilAvgAggregateOutputType | null
    _sum: HasilSumAggregateOutputType | null
    _min: HasilMinAggregateOutputType | null
    _max: HasilMaxAggregateOutputType | null
  }

  type GetHasilGroupByPayload<T extends HasilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HasilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HasilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HasilGroupByOutputType[P]>
            : GetScalarType<T[P], HasilGroupByOutputType[P]>
        }
      >
    >


  export type HasilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    kd_penyakit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
    details?: boolean | Hasil$detailsArgs<ExtArgs>
    _count?: boolean | HasilCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hasil"]>

  export type HasilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    kd_penyakit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hasil"]>

  export type HasilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    kd_penyakit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hasil"]>

  export type HasilSelectScalar = {
    id?: boolean
    pasienId?: boolean
    kd_penyakit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HasilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pasienId" | "kd_penyakit" | "createdAt" | "updatedAt", ExtArgs["result"]["hasil"]>
  export type HasilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
    details?: boolean | Hasil$detailsArgs<ExtArgs>
    _count?: boolean | HasilCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HasilIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }
  export type HasilIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }

  export type $HasilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hasil"
    objects: {
      pasien: Prisma.$PasienPayload<ExtArgs>
      details: Prisma.$DiagnosaDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pasienId: number
      kd_penyakit: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hasil"]>
    composites: {}
  }

  type HasilGetPayload<S extends boolean | null | undefined | HasilDefaultArgs> = $Result.GetResult<Prisma.$HasilPayload, S>

  type HasilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HasilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HasilCountAggregateInputType | true
    }

  export interface HasilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hasil'], meta: { name: 'Hasil' } }
    /**
     * Find zero or one Hasil that matches the filter.
     * @param {HasilFindUniqueArgs} args - Arguments to find a Hasil
     * @example
     * // Get one Hasil
     * const hasil = await prisma.hasil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HasilFindUniqueArgs>(args: SelectSubset<T, HasilFindUniqueArgs<ExtArgs>>): Prisma__HasilClient<$Result.GetResult<Prisma.$HasilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hasil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HasilFindUniqueOrThrowArgs} args - Arguments to find a Hasil
     * @example
     * // Get one Hasil
     * const hasil = await prisma.hasil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HasilFindUniqueOrThrowArgs>(args: SelectSubset<T, HasilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HasilClient<$Result.GetResult<Prisma.$HasilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hasil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilFindFirstArgs} args - Arguments to find a Hasil
     * @example
     * // Get one Hasil
     * const hasil = await prisma.hasil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HasilFindFirstArgs>(args?: SelectSubset<T, HasilFindFirstArgs<ExtArgs>>): Prisma__HasilClient<$Result.GetResult<Prisma.$HasilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hasil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilFindFirstOrThrowArgs} args - Arguments to find a Hasil
     * @example
     * // Get one Hasil
     * const hasil = await prisma.hasil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HasilFindFirstOrThrowArgs>(args?: SelectSubset<T, HasilFindFirstOrThrowArgs<ExtArgs>>): Prisma__HasilClient<$Result.GetResult<Prisma.$HasilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hasils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hasils
     * const hasils = await prisma.hasil.findMany()
     * 
     * // Get first 10 Hasils
     * const hasils = await prisma.hasil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hasilWithIdOnly = await prisma.hasil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HasilFindManyArgs>(args?: SelectSubset<T, HasilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HasilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hasil.
     * @param {HasilCreateArgs} args - Arguments to create a Hasil.
     * @example
     * // Create one Hasil
     * const Hasil = await prisma.hasil.create({
     *   data: {
     *     // ... data to create a Hasil
     *   }
     * })
     * 
     */
    create<T extends HasilCreateArgs>(args: SelectSubset<T, HasilCreateArgs<ExtArgs>>): Prisma__HasilClient<$Result.GetResult<Prisma.$HasilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hasils.
     * @param {HasilCreateManyArgs} args - Arguments to create many Hasils.
     * @example
     * // Create many Hasils
     * const hasil = await prisma.hasil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HasilCreateManyArgs>(args?: SelectSubset<T, HasilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hasils and returns the data saved in the database.
     * @param {HasilCreateManyAndReturnArgs} args - Arguments to create many Hasils.
     * @example
     * // Create many Hasils
     * const hasil = await prisma.hasil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hasils and only return the `id`
     * const hasilWithIdOnly = await prisma.hasil.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HasilCreateManyAndReturnArgs>(args?: SelectSubset<T, HasilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HasilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hasil.
     * @param {HasilDeleteArgs} args - Arguments to delete one Hasil.
     * @example
     * // Delete one Hasil
     * const Hasil = await prisma.hasil.delete({
     *   where: {
     *     // ... filter to delete one Hasil
     *   }
     * })
     * 
     */
    delete<T extends HasilDeleteArgs>(args: SelectSubset<T, HasilDeleteArgs<ExtArgs>>): Prisma__HasilClient<$Result.GetResult<Prisma.$HasilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hasil.
     * @param {HasilUpdateArgs} args - Arguments to update one Hasil.
     * @example
     * // Update one Hasil
     * const hasil = await prisma.hasil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HasilUpdateArgs>(args: SelectSubset<T, HasilUpdateArgs<ExtArgs>>): Prisma__HasilClient<$Result.GetResult<Prisma.$HasilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hasils.
     * @param {HasilDeleteManyArgs} args - Arguments to filter Hasils to delete.
     * @example
     * // Delete a few Hasils
     * const { count } = await prisma.hasil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HasilDeleteManyArgs>(args?: SelectSubset<T, HasilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hasils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hasils
     * const hasil = await prisma.hasil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HasilUpdateManyArgs>(args: SelectSubset<T, HasilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hasils and returns the data updated in the database.
     * @param {HasilUpdateManyAndReturnArgs} args - Arguments to update many Hasils.
     * @example
     * // Update many Hasils
     * const hasil = await prisma.hasil.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hasils and only return the `id`
     * const hasilWithIdOnly = await prisma.hasil.updateManyAndReturn({
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
    updateManyAndReturn<T extends HasilUpdateManyAndReturnArgs>(args: SelectSubset<T, HasilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HasilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hasil.
     * @param {HasilUpsertArgs} args - Arguments to update or create a Hasil.
     * @example
     * // Update or create a Hasil
     * const hasil = await prisma.hasil.upsert({
     *   create: {
     *     // ... data to create a Hasil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hasil we want to update
     *   }
     * })
     */
    upsert<T extends HasilUpsertArgs>(args: SelectSubset<T, HasilUpsertArgs<ExtArgs>>): Prisma__HasilClient<$Result.GetResult<Prisma.$HasilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hasils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilCountArgs} args - Arguments to filter Hasils to count.
     * @example
     * // Count the number of Hasils
     * const count = await prisma.hasil.count({
     *   where: {
     *     // ... the filter for the Hasils we want to count
     *   }
     * })
    **/
    count<T extends HasilCountArgs>(
      args?: Subset<T, HasilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HasilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hasil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HasilAggregateArgs>(args: Subset<T, HasilAggregateArgs>): Prisma.PrismaPromise<GetHasilAggregateType<T>>

    /**
     * Group by Hasil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilGroupByArgs} args - Group by arguments.
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
      T extends HasilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HasilGroupByArgs['orderBy'] }
        : { orderBy?: HasilGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HasilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHasilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hasil model
   */
  readonly fields: HasilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hasil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HasilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pasien<T extends PasienDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PasienDefaultArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    details<T extends Hasil$detailsArgs<ExtArgs> = {}>(args?: Subset<T, Hasil$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosaDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hasil model
   */
  interface HasilFieldRefs {
    readonly id: FieldRef<"Hasil", 'Int'>
    readonly pasienId: FieldRef<"Hasil", 'Int'>
    readonly kd_penyakit: FieldRef<"Hasil", 'String'>
    readonly createdAt: FieldRef<"Hasil", 'DateTime'>
    readonly updatedAt: FieldRef<"Hasil", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hasil findUnique
   */
  export type HasilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hasil
     */
    select?: HasilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hasil
     */
    omit?: HasilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilInclude<ExtArgs> | null
    /**
     * Filter, which Hasil to fetch.
     */
    where: HasilWhereUniqueInput
  }

  /**
   * Hasil findUniqueOrThrow
   */
  export type HasilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hasil
     */
    select?: HasilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hasil
     */
    omit?: HasilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilInclude<ExtArgs> | null
    /**
     * Filter, which Hasil to fetch.
     */
    where: HasilWhereUniqueInput
  }

  /**
   * Hasil findFirst
   */
  export type HasilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hasil
     */
    select?: HasilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hasil
     */
    omit?: HasilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilInclude<ExtArgs> | null
    /**
     * Filter, which Hasil to fetch.
     */
    where?: HasilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hasils to fetch.
     */
    orderBy?: HasilOrderByWithRelationInput | HasilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hasils.
     */
    cursor?: HasilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hasils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hasils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hasils.
     */
    distinct?: HasilScalarFieldEnum | HasilScalarFieldEnum[]
  }

  /**
   * Hasil findFirstOrThrow
   */
  export type HasilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hasil
     */
    select?: HasilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hasil
     */
    omit?: HasilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilInclude<ExtArgs> | null
    /**
     * Filter, which Hasil to fetch.
     */
    where?: HasilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hasils to fetch.
     */
    orderBy?: HasilOrderByWithRelationInput | HasilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hasils.
     */
    cursor?: HasilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hasils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hasils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hasils.
     */
    distinct?: HasilScalarFieldEnum | HasilScalarFieldEnum[]
  }

  /**
   * Hasil findMany
   */
  export type HasilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hasil
     */
    select?: HasilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hasil
     */
    omit?: HasilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilInclude<ExtArgs> | null
    /**
     * Filter, which Hasils to fetch.
     */
    where?: HasilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hasils to fetch.
     */
    orderBy?: HasilOrderByWithRelationInput | HasilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hasils.
     */
    cursor?: HasilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hasils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hasils.
     */
    skip?: number
    distinct?: HasilScalarFieldEnum | HasilScalarFieldEnum[]
  }

  /**
   * Hasil create
   */
  export type HasilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hasil
     */
    select?: HasilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hasil
     */
    omit?: HasilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilInclude<ExtArgs> | null
    /**
     * The data needed to create a Hasil.
     */
    data: XOR<HasilCreateInput, HasilUncheckedCreateInput>
  }

  /**
   * Hasil createMany
   */
  export type HasilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hasils.
     */
    data: HasilCreateManyInput | HasilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hasil createManyAndReturn
   */
  export type HasilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hasil
     */
    select?: HasilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hasil
     */
    omit?: HasilOmit<ExtArgs> | null
    /**
     * The data used to create many Hasils.
     */
    data: HasilCreateManyInput | HasilCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hasil update
   */
  export type HasilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hasil
     */
    select?: HasilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hasil
     */
    omit?: HasilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilInclude<ExtArgs> | null
    /**
     * The data needed to update a Hasil.
     */
    data: XOR<HasilUpdateInput, HasilUncheckedUpdateInput>
    /**
     * Choose, which Hasil to update.
     */
    where: HasilWhereUniqueInput
  }

  /**
   * Hasil updateMany
   */
  export type HasilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hasils.
     */
    data: XOR<HasilUpdateManyMutationInput, HasilUncheckedUpdateManyInput>
    /**
     * Filter which Hasils to update
     */
    where?: HasilWhereInput
    /**
     * Limit how many Hasils to update.
     */
    limit?: number
  }

  /**
   * Hasil updateManyAndReturn
   */
  export type HasilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hasil
     */
    select?: HasilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hasil
     */
    omit?: HasilOmit<ExtArgs> | null
    /**
     * The data used to update Hasils.
     */
    data: XOR<HasilUpdateManyMutationInput, HasilUncheckedUpdateManyInput>
    /**
     * Filter which Hasils to update
     */
    where?: HasilWhereInput
    /**
     * Limit how many Hasils to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hasil upsert
   */
  export type HasilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hasil
     */
    select?: HasilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hasil
     */
    omit?: HasilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilInclude<ExtArgs> | null
    /**
     * The filter to search for the Hasil to update in case it exists.
     */
    where: HasilWhereUniqueInput
    /**
     * In case the Hasil found by the `where` argument doesn't exist, create a new Hasil with this data.
     */
    create: XOR<HasilCreateInput, HasilUncheckedCreateInput>
    /**
     * In case the Hasil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HasilUpdateInput, HasilUncheckedUpdateInput>
  }

  /**
   * Hasil delete
   */
  export type HasilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hasil
     */
    select?: HasilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hasil
     */
    omit?: HasilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilInclude<ExtArgs> | null
    /**
     * Filter which Hasil to delete.
     */
    where: HasilWhereUniqueInput
  }

  /**
   * Hasil deleteMany
   */
  export type HasilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hasils to delete
     */
    where?: HasilWhereInput
    /**
     * Limit how many Hasils to delete.
     */
    limit?: number
  }

  /**
   * Hasil.details
   */
  export type Hasil$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosaDetail
     */
    select?: DiagnosaDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosaDetail
     */
    omit?: DiagnosaDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosaDetailInclude<ExtArgs> | null
    where?: DiagnosaDetailWhereInput
    orderBy?: DiagnosaDetailOrderByWithRelationInput | DiagnosaDetailOrderByWithRelationInput[]
    cursor?: DiagnosaDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosaDetailScalarFieldEnum | DiagnosaDetailScalarFieldEnum[]
  }

  /**
   * Hasil without action
   */
  export type HasilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hasil
     */
    select?: HasilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hasil
     */
    omit?: HasilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilInclude<ExtArgs> | null
  }


  /**
   * Model DiagnosaDetail
   */

  export type AggregateDiagnosaDetail = {
    _count: DiagnosaDetailCountAggregateOutputType | null
    _avg: DiagnosaDetailAvgAggregateOutputType | null
    _sum: DiagnosaDetailSumAggregateOutputType | null
    _min: DiagnosaDetailMinAggregateOutputType | null
    _max: DiagnosaDetailMaxAggregateOutputType | null
  }

  export type DiagnosaDetailAvgAggregateOutputType = {
    id: number | null
    hasilId: number | null
  }

  export type DiagnosaDetailSumAggregateOutputType = {
    id: number | null
    hasilId: number | null
  }

  export type DiagnosaDetailMinAggregateOutputType = {
    id: number | null
    hasilId: number | null
    kd_gejala: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiagnosaDetailMaxAggregateOutputType = {
    id: number | null
    hasilId: number | null
    kd_gejala: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiagnosaDetailCountAggregateOutputType = {
    id: number
    hasilId: number
    kd_gejala: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DiagnosaDetailAvgAggregateInputType = {
    id?: true
    hasilId?: true
  }

  export type DiagnosaDetailSumAggregateInputType = {
    id?: true
    hasilId?: true
  }

  export type DiagnosaDetailMinAggregateInputType = {
    id?: true
    hasilId?: true
    kd_gejala?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiagnosaDetailMaxAggregateInputType = {
    id?: true
    hasilId?: true
    kd_gejala?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiagnosaDetailCountAggregateInputType = {
    id?: true
    hasilId?: true
    kd_gejala?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DiagnosaDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosaDetail to aggregate.
     */
    where?: DiagnosaDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosaDetails to fetch.
     */
    orderBy?: DiagnosaDetailOrderByWithRelationInput | DiagnosaDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosaDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosaDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosaDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiagnosaDetails
    **/
    _count?: true | DiagnosaDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiagnosaDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiagnosaDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosaDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosaDetailMaxAggregateInputType
  }

  export type GetDiagnosaDetailAggregateType<T extends DiagnosaDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnosaDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnosaDetail[P]>
      : GetScalarType<T[P], AggregateDiagnosaDetail[P]>
  }




  export type DiagnosaDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosaDetailWhereInput
    orderBy?: DiagnosaDetailOrderByWithAggregationInput | DiagnosaDetailOrderByWithAggregationInput[]
    by: DiagnosaDetailScalarFieldEnum[] | DiagnosaDetailScalarFieldEnum
    having?: DiagnosaDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosaDetailCountAggregateInputType | true
    _avg?: DiagnosaDetailAvgAggregateInputType
    _sum?: DiagnosaDetailSumAggregateInputType
    _min?: DiagnosaDetailMinAggregateInputType
    _max?: DiagnosaDetailMaxAggregateInputType
  }

  export type DiagnosaDetailGroupByOutputType = {
    id: number
    hasilId: number
    kd_gejala: string
    createdAt: Date
    updatedAt: Date
    _count: DiagnosaDetailCountAggregateOutputType | null
    _avg: DiagnosaDetailAvgAggregateOutputType | null
    _sum: DiagnosaDetailSumAggregateOutputType | null
    _min: DiagnosaDetailMinAggregateOutputType | null
    _max: DiagnosaDetailMaxAggregateOutputType | null
  }

  type GetDiagnosaDetailGroupByPayload<T extends DiagnosaDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosaDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosaDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosaDetailGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosaDetailGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosaDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hasilId?: boolean
    kd_gejala?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diagnosa?: boolean | HasilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosaDetail"]>

  export type DiagnosaDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hasilId?: boolean
    kd_gejala?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diagnosa?: boolean | HasilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosaDetail"]>

  export type DiagnosaDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hasilId?: boolean
    kd_gejala?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diagnosa?: boolean | HasilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosaDetail"]>

  export type DiagnosaDetailSelectScalar = {
    id?: boolean
    hasilId?: boolean
    kd_gejala?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DiagnosaDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hasilId" | "kd_gejala" | "createdAt" | "updatedAt", ExtArgs["result"]["diagnosaDetail"]>
  export type DiagnosaDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosa?: boolean | HasilDefaultArgs<ExtArgs>
  }
  export type DiagnosaDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosa?: boolean | HasilDefaultArgs<ExtArgs>
  }
  export type DiagnosaDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosa?: boolean | HasilDefaultArgs<ExtArgs>
  }

  export type $DiagnosaDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiagnosaDetail"
    objects: {
      diagnosa: Prisma.$HasilPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hasilId: number
      kd_gejala: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["diagnosaDetail"]>
    composites: {}
  }

  type DiagnosaDetailGetPayload<S extends boolean | null | undefined | DiagnosaDetailDefaultArgs> = $Result.GetResult<Prisma.$DiagnosaDetailPayload, S>

  type DiagnosaDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosaDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosaDetailCountAggregateInputType | true
    }

  export interface DiagnosaDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiagnosaDetail'], meta: { name: 'DiagnosaDetail' } }
    /**
     * Find zero or one DiagnosaDetail that matches the filter.
     * @param {DiagnosaDetailFindUniqueArgs} args - Arguments to find a DiagnosaDetail
     * @example
     * // Get one DiagnosaDetail
     * const diagnosaDetail = await prisma.diagnosaDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosaDetailFindUniqueArgs>(args: SelectSubset<T, DiagnosaDetailFindUniqueArgs<ExtArgs>>): Prisma__DiagnosaDetailClient<$Result.GetResult<Prisma.$DiagnosaDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiagnosaDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosaDetailFindUniqueOrThrowArgs} args - Arguments to find a DiagnosaDetail
     * @example
     * // Get one DiagnosaDetail
     * const diagnosaDetail = await prisma.diagnosaDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosaDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosaDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosaDetailClient<$Result.GetResult<Prisma.$DiagnosaDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiagnosaDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosaDetailFindFirstArgs} args - Arguments to find a DiagnosaDetail
     * @example
     * // Get one DiagnosaDetail
     * const diagnosaDetail = await prisma.diagnosaDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosaDetailFindFirstArgs>(args?: SelectSubset<T, DiagnosaDetailFindFirstArgs<ExtArgs>>): Prisma__DiagnosaDetailClient<$Result.GetResult<Prisma.$DiagnosaDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiagnosaDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosaDetailFindFirstOrThrowArgs} args - Arguments to find a DiagnosaDetail
     * @example
     * // Get one DiagnosaDetail
     * const diagnosaDetail = await prisma.diagnosaDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosaDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosaDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosaDetailClient<$Result.GetResult<Prisma.$DiagnosaDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiagnosaDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosaDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiagnosaDetails
     * const diagnosaDetails = await prisma.diagnosaDetail.findMany()
     * 
     * // Get first 10 DiagnosaDetails
     * const diagnosaDetails = await prisma.diagnosaDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnosaDetailWithIdOnly = await prisma.diagnosaDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiagnosaDetailFindManyArgs>(args?: SelectSubset<T, DiagnosaDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosaDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiagnosaDetail.
     * @param {DiagnosaDetailCreateArgs} args - Arguments to create a DiagnosaDetail.
     * @example
     * // Create one DiagnosaDetail
     * const DiagnosaDetail = await prisma.diagnosaDetail.create({
     *   data: {
     *     // ... data to create a DiagnosaDetail
     *   }
     * })
     * 
     */
    create<T extends DiagnosaDetailCreateArgs>(args: SelectSubset<T, DiagnosaDetailCreateArgs<ExtArgs>>): Prisma__DiagnosaDetailClient<$Result.GetResult<Prisma.$DiagnosaDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiagnosaDetails.
     * @param {DiagnosaDetailCreateManyArgs} args - Arguments to create many DiagnosaDetails.
     * @example
     * // Create many DiagnosaDetails
     * const diagnosaDetail = await prisma.diagnosaDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosaDetailCreateManyArgs>(args?: SelectSubset<T, DiagnosaDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiagnosaDetails and returns the data saved in the database.
     * @param {DiagnosaDetailCreateManyAndReturnArgs} args - Arguments to create many DiagnosaDetails.
     * @example
     * // Create many DiagnosaDetails
     * const diagnosaDetail = await prisma.diagnosaDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiagnosaDetails and only return the `id`
     * const diagnosaDetailWithIdOnly = await prisma.diagnosaDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiagnosaDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, DiagnosaDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosaDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiagnosaDetail.
     * @param {DiagnosaDetailDeleteArgs} args - Arguments to delete one DiagnosaDetail.
     * @example
     * // Delete one DiagnosaDetail
     * const DiagnosaDetail = await prisma.diagnosaDetail.delete({
     *   where: {
     *     // ... filter to delete one DiagnosaDetail
     *   }
     * })
     * 
     */
    delete<T extends DiagnosaDetailDeleteArgs>(args: SelectSubset<T, DiagnosaDetailDeleteArgs<ExtArgs>>): Prisma__DiagnosaDetailClient<$Result.GetResult<Prisma.$DiagnosaDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiagnosaDetail.
     * @param {DiagnosaDetailUpdateArgs} args - Arguments to update one DiagnosaDetail.
     * @example
     * // Update one DiagnosaDetail
     * const diagnosaDetail = await prisma.diagnosaDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosaDetailUpdateArgs>(args: SelectSubset<T, DiagnosaDetailUpdateArgs<ExtArgs>>): Prisma__DiagnosaDetailClient<$Result.GetResult<Prisma.$DiagnosaDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiagnosaDetails.
     * @param {DiagnosaDetailDeleteManyArgs} args - Arguments to filter DiagnosaDetails to delete.
     * @example
     * // Delete a few DiagnosaDetails
     * const { count } = await prisma.diagnosaDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosaDetailDeleteManyArgs>(args?: SelectSubset<T, DiagnosaDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiagnosaDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosaDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiagnosaDetails
     * const diagnosaDetail = await prisma.diagnosaDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosaDetailUpdateManyArgs>(args: SelectSubset<T, DiagnosaDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiagnosaDetails and returns the data updated in the database.
     * @param {DiagnosaDetailUpdateManyAndReturnArgs} args - Arguments to update many DiagnosaDetails.
     * @example
     * // Update many DiagnosaDetails
     * const diagnosaDetail = await prisma.diagnosaDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiagnosaDetails and only return the `id`
     * const diagnosaDetailWithIdOnly = await prisma.diagnosaDetail.updateManyAndReturn({
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
    updateManyAndReturn<T extends DiagnosaDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, DiagnosaDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosaDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiagnosaDetail.
     * @param {DiagnosaDetailUpsertArgs} args - Arguments to update or create a DiagnosaDetail.
     * @example
     * // Update or create a DiagnosaDetail
     * const diagnosaDetail = await prisma.diagnosaDetail.upsert({
     *   create: {
     *     // ... data to create a DiagnosaDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiagnosaDetail we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosaDetailUpsertArgs>(args: SelectSubset<T, DiagnosaDetailUpsertArgs<ExtArgs>>): Prisma__DiagnosaDetailClient<$Result.GetResult<Prisma.$DiagnosaDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiagnosaDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosaDetailCountArgs} args - Arguments to filter DiagnosaDetails to count.
     * @example
     * // Count the number of DiagnosaDetails
     * const count = await prisma.diagnosaDetail.count({
     *   where: {
     *     // ... the filter for the DiagnosaDetails we want to count
     *   }
     * })
    **/
    count<T extends DiagnosaDetailCountArgs>(
      args?: Subset<T, DiagnosaDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosaDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiagnosaDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosaDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosaDetailAggregateArgs>(args: Subset<T, DiagnosaDetailAggregateArgs>): Prisma.PrismaPromise<GetDiagnosaDetailAggregateType<T>>

    /**
     * Group by DiagnosaDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosaDetailGroupByArgs} args - Group by arguments.
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
      T extends DiagnosaDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosaDetailGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosaDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnosaDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosaDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiagnosaDetail model
   */
  readonly fields: DiagnosaDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiagnosaDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosaDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnosa<T extends HasilDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HasilDefaultArgs<ExtArgs>>): Prisma__HasilClient<$Result.GetResult<Prisma.$HasilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DiagnosaDetail model
   */
  interface DiagnosaDetailFieldRefs {
    readonly id: FieldRef<"DiagnosaDetail", 'Int'>
    readonly hasilId: FieldRef<"DiagnosaDetail", 'Int'>
    readonly kd_gejala: FieldRef<"DiagnosaDetail", 'String'>
    readonly createdAt: FieldRef<"DiagnosaDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"DiagnosaDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DiagnosaDetail findUnique
   */
  export type DiagnosaDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosaDetail
     */
    select?: DiagnosaDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosaDetail
     */
    omit?: DiagnosaDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosaDetailInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosaDetail to fetch.
     */
    where: DiagnosaDetailWhereUniqueInput
  }

  /**
   * DiagnosaDetail findUniqueOrThrow
   */
  export type DiagnosaDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosaDetail
     */
    select?: DiagnosaDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosaDetail
     */
    omit?: DiagnosaDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosaDetailInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosaDetail to fetch.
     */
    where: DiagnosaDetailWhereUniqueInput
  }

  /**
   * DiagnosaDetail findFirst
   */
  export type DiagnosaDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosaDetail
     */
    select?: DiagnosaDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosaDetail
     */
    omit?: DiagnosaDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosaDetailInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosaDetail to fetch.
     */
    where?: DiagnosaDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosaDetails to fetch.
     */
    orderBy?: DiagnosaDetailOrderByWithRelationInput | DiagnosaDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosaDetails.
     */
    cursor?: DiagnosaDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosaDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosaDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosaDetails.
     */
    distinct?: DiagnosaDetailScalarFieldEnum | DiagnosaDetailScalarFieldEnum[]
  }

  /**
   * DiagnosaDetail findFirstOrThrow
   */
  export type DiagnosaDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosaDetail
     */
    select?: DiagnosaDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosaDetail
     */
    omit?: DiagnosaDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosaDetailInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosaDetail to fetch.
     */
    where?: DiagnosaDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosaDetails to fetch.
     */
    orderBy?: DiagnosaDetailOrderByWithRelationInput | DiagnosaDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosaDetails.
     */
    cursor?: DiagnosaDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosaDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosaDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosaDetails.
     */
    distinct?: DiagnosaDetailScalarFieldEnum | DiagnosaDetailScalarFieldEnum[]
  }

  /**
   * DiagnosaDetail findMany
   */
  export type DiagnosaDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosaDetail
     */
    select?: DiagnosaDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosaDetail
     */
    omit?: DiagnosaDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosaDetailInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosaDetails to fetch.
     */
    where?: DiagnosaDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosaDetails to fetch.
     */
    orderBy?: DiagnosaDetailOrderByWithRelationInput | DiagnosaDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiagnosaDetails.
     */
    cursor?: DiagnosaDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosaDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosaDetails.
     */
    skip?: number
    distinct?: DiagnosaDetailScalarFieldEnum | DiagnosaDetailScalarFieldEnum[]
  }

  /**
   * DiagnosaDetail create
   */
  export type DiagnosaDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosaDetail
     */
    select?: DiagnosaDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosaDetail
     */
    omit?: DiagnosaDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosaDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a DiagnosaDetail.
     */
    data: XOR<DiagnosaDetailCreateInput, DiagnosaDetailUncheckedCreateInput>
  }

  /**
   * DiagnosaDetail createMany
   */
  export type DiagnosaDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiagnosaDetails.
     */
    data: DiagnosaDetailCreateManyInput | DiagnosaDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiagnosaDetail createManyAndReturn
   */
  export type DiagnosaDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosaDetail
     */
    select?: DiagnosaDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosaDetail
     */
    omit?: DiagnosaDetailOmit<ExtArgs> | null
    /**
     * The data used to create many DiagnosaDetails.
     */
    data: DiagnosaDetailCreateManyInput | DiagnosaDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosaDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiagnosaDetail update
   */
  export type DiagnosaDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosaDetail
     */
    select?: DiagnosaDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosaDetail
     */
    omit?: DiagnosaDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosaDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a DiagnosaDetail.
     */
    data: XOR<DiagnosaDetailUpdateInput, DiagnosaDetailUncheckedUpdateInput>
    /**
     * Choose, which DiagnosaDetail to update.
     */
    where: DiagnosaDetailWhereUniqueInput
  }

  /**
   * DiagnosaDetail updateMany
   */
  export type DiagnosaDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiagnosaDetails.
     */
    data: XOR<DiagnosaDetailUpdateManyMutationInput, DiagnosaDetailUncheckedUpdateManyInput>
    /**
     * Filter which DiagnosaDetails to update
     */
    where?: DiagnosaDetailWhereInput
    /**
     * Limit how many DiagnosaDetails to update.
     */
    limit?: number
  }

  /**
   * DiagnosaDetail updateManyAndReturn
   */
  export type DiagnosaDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosaDetail
     */
    select?: DiagnosaDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosaDetail
     */
    omit?: DiagnosaDetailOmit<ExtArgs> | null
    /**
     * The data used to update DiagnosaDetails.
     */
    data: XOR<DiagnosaDetailUpdateManyMutationInput, DiagnosaDetailUncheckedUpdateManyInput>
    /**
     * Filter which DiagnosaDetails to update
     */
    where?: DiagnosaDetailWhereInput
    /**
     * Limit how many DiagnosaDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosaDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiagnosaDetail upsert
   */
  export type DiagnosaDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosaDetail
     */
    select?: DiagnosaDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosaDetail
     */
    omit?: DiagnosaDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosaDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the DiagnosaDetail to update in case it exists.
     */
    where: DiagnosaDetailWhereUniqueInput
    /**
     * In case the DiagnosaDetail found by the `where` argument doesn't exist, create a new DiagnosaDetail with this data.
     */
    create: XOR<DiagnosaDetailCreateInput, DiagnosaDetailUncheckedCreateInput>
    /**
     * In case the DiagnosaDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosaDetailUpdateInput, DiagnosaDetailUncheckedUpdateInput>
  }

  /**
   * DiagnosaDetail delete
   */
  export type DiagnosaDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosaDetail
     */
    select?: DiagnosaDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosaDetail
     */
    omit?: DiagnosaDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosaDetailInclude<ExtArgs> | null
    /**
     * Filter which DiagnosaDetail to delete.
     */
    where: DiagnosaDetailWhereUniqueInput
  }

  /**
   * DiagnosaDetail deleteMany
   */
  export type DiagnosaDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosaDetails to delete
     */
    where?: DiagnosaDetailWhereInput
    /**
     * Limit how many DiagnosaDetails to delete.
     */
    limit?: number
  }

  /**
   * DiagnosaDetail without action
   */
  export type DiagnosaDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosaDetail
     */
    select?: DiagnosaDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosaDetail
     */
    omit?: DiagnosaDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosaDetailInclude<ExtArgs> | null
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
    nama: 'nama',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PasienScalarFieldEnum: {
    id: 'id',
    nik: 'nik',
    nama_lengkap: 'nama_lengkap',
    tanggal_lahir: 'tanggal_lahir',
    umur: 'umur',
    jenis_kelamin: 'jenis_kelamin',
    phone: 'phone',
    alamat: 'alamat',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PasienScalarFieldEnum = (typeof PasienScalarFieldEnum)[keyof typeof PasienScalarFieldEnum]


  export const GejalaScalarFieldEnum: {
    kd_gejala: 'kd_gejala',
    nama_gejala: 'nama_gejala',
    poin_gejala: 'poin_gejala',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GejalaScalarFieldEnum = (typeof GejalaScalarFieldEnum)[keyof typeof GejalaScalarFieldEnum]


  export const PenyakitScalarFieldEnum: {
    kd_penyakit: 'kd_penyakit',
    nama_penyakit: 'nama_penyakit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PenyakitScalarFieldEnum = (typeof PenyakitScalarFieldEnum)[keyof typeof PenyakitScalarFieldEnum]


  export const SolusiScalarFieldEnum: {
    id: 'id',
    solusi: 'solusi',
    kd_penyakit: 'kd_penyakit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SolusiScalarFieldEnum = (typeof SolusiScalarFieldEnum)[keyof typeof SolusiScalarFieldEnum]


  export const PengetahuanScalarFieldEnum: {
    id: 'id',
    kd_pengetahuan: 'kd_pengetahuan',
    kd_gejala: 'kd_gejala',
    kd_penyakit: 'kd_penyakit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PengetahuanScalarFieldEnum = (typeof PengetahuanScalarFieldEnum)[keyof typeof PengetahuanScalarFieldEnum]


  export const HasilScalarFieldEnum: {
    id: 'id',
    pasienId: 'pasienId',
    kd_penyakit: 'kd_penyakit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HasilScalarFieldEnum = (typeof HasilScalarFieldEnum)[keyof typeof HasilScalarFieldEnum]


  export const DiagnosaDetailScalarFieldEnum: {
    id: 'id',
    hasilId: 'hasilId',
    kd_gejala: 'kd_gejala',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DiagnosaDetailScalarFieldEnum = (typeof DiagnosaDetailScalarFieldEnum)[keyof typeof DiagnosaDetailScalarFieldEnum]


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
    nama?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
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
    nama?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PasienWhereInput = {
    AND?: PasienWhereInput | PasienWhereInput[]
    OR?: PasienWhereInput[]
    NOT?: PasienWhereInput | PasienWhereInput[]
    id?: IntFilter<"Pasien"> | number
    nik?: StringFilter<"Pasien"> | string
    nama_lengkap?: StringFilter<"Pasien"> | string
    tanggal_lahir?: DateTimeFilter<"Pasien"> | Date | string
    umur?: IntFilter<"Pasien"> | number
    jenis_kelamin?: StringFilter<"Pasien"> | string
    phone?: StringFilter<"Pasien"> | string
    alamat?: StringFilter<"Pasien"> | string
    createdAt?: DateTimeFilter<"Pasien"> | Date | string
    updatedAt?: DateTimeFilter<"Pasien"> | Date | string
    diagnosa?: HasilListRelationFilter
  }

  export type PasienOrderByWithRelationInput = {
    id?: SortOrder
    nik?: SortOrder
    nama_lengkap?: SortOrder
    tanggal_lahir?: SortOrder
    umur?: SortOrder
    jenis_kelamin?: SortOrder
    phone?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diagnosa?: HasilOrderByRelationAggregateInput
  }

  export type PasienWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nik?: string
    AND?: PasienWhereInput | PasienWhereInput[]
    OR?: PasienWhereInput[]
    NOT?: PasienWhereInput | PasienWhereInput[]
    nama_lengkap?: StringFilter<"Pasien"> | string
    tanggal_lahir?: DateTimeFilter<"Pasien"> | Date | string
    umur?: IntFilter<"Pasien"> | number
    jenis_kelamin?: StringFilter<"Pasien"> | string
    phone?: StringFilter<"Pasien"> | string
    alamat?: StringFilter<"Pasien"> | string
    createdAt?: DateTimeFilter<"Pasien"> | Date | string
    updatedAt?: DateTimeFilter<"Pasien"> | Date | string
    diagnosa?: HasilListRelationFilter
  }, "id" | "nik">

  export type PasienOrderByWithAggregationInput = {
    id?: SortOrder
    nik?: SortOrder
    nama_lengkap?: SortOrder
    tanggal_lahir?: SortOrder
    umur?: SortOrder
    jenis_kelamin?: SortOrder
    phone?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PasienCountOrderByAggregateInput
    _avg?: PasienAvgOrderByAggregateInput
    _max?: PasienMaxOrderByAggregateInput
    _min?: PasienMinOrderByAggregateInput
    _sum?: PasienSumOrderByAggregateInput
  }

  export type PasienScalarWhereWithAggregatesInput = {
    AND?: PasienScalarWhereWithAggregatesInput | PasienScalarWhereWithAggregatesInput[]
    OR?: PasienScalarWhereWithAggregatesInput[]
    NOT?: PasienScalarWhereWithAggregatesInput | PasienScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pasien"> | number
    nik?: StringWithAggregatesFilter<"Pasien"> | string
    nama_lengkap?: StringWithAggregatesFilter<"Pasien"> | string
    tanggal_lahir?: DateTimeWithAggregatesFilter<"Pasien"> | Date | string
    umur?: IntWithAggregatesFilter<"Pasien"> | number
    jenis_kelamin?: StringWithAggregatesFilter<"Pasien"> | string
    phone?: StringWithAggregatesFilter<"Pasien"> | string
    alamat?: StringWithAggregatesFilter<"Pasien"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pasien"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pasien"> | Date | string
  }

  export type GejalaWhereInput = {
    AND?: GejalaWhereInput | GejalaWhereInput[]
    OR?: GejalaWhereInput[]
    NOT?: GejalaWhereInput | GejalaWhereInput[]
    kd_gejala?: StringFilter<"Gejala"> | string
    nama_gejala?: StringFilter<"Gejala"> | string
    poin_gejala?: StringNullableFilter<"Gejala"> | string | null
    createdAt?: DateTimeFilter<"Gejala"> | Date | string
    updatedAt?: DateTimeFilter<"Gejala"> | Date | string
    pengetahuan?: PengetahuanListRelationFilter
  }

  export type GejalaOrderByWithRelationInput = {
    kd_gejala?: SortOrder
    nama_gejala?: SortOrder
    poin_gejala?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pengetahuan?: PengetahuanOrderByRelationAggregateInput
  }

  export type GejalaWhereUniqueInput = Prisma.AtLeast<{
    kd_gejala?: string
    AND?: GejalaWhereInput | GejalaWhereInput[]
    OR?: GejalaWhereInput[]
    NOT?: GejalaWhereInput | GejalaWhereInput[]
    nama_gejala?: StringFilter<"Gejala"> | string
    poin_gejala?: StringNullableFilter<"Gejala"> | string | null
    createdAt?: DateTimeFilter<"Gejala"> | Date | string
    updatedAt?: DateTimeFilter<"Gejala"> | Date | string
    pengetahuan?: PengetahuanListRelationFilter
  }, "kd_gejala">

  export type GejalaOrderByWithAggregationInput = {
    kd_gejala?: SortOrder
    nama_gejala?: SortOrder
    poin_gejala?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GejalaCountOrderByAggregateInput
    _max?: GejalaMaxOrderByAggregateInput
    _min?: GejalaMinOrderByAggregateInput
  }

  export type GejalaScalarWhereWithAggregatesInput = {
    AND?: GejalaScalarWhereWithAggregatesInput | GejalaScalarWhereWithAggregatesInput[]
    OR?: GejalaScalarWhereWithAggregatesInput[]
    NOT?: GejalaScalarWhereWithAggregatesInput | GejalaScalarWhereWithAggregatesInput[]
    kd_gejala?: StringWithAggregatesFilter<"Gejala"> | string
    nama_gejala?: StringWithAggregatesFilter<"Gejala"> | string
    poin_gejala?: StringNullableWithAggregatesFilter<"Gejala"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Gejala"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Gejala"> | Date | string
  }

  export type PenyakitWhereInput = {
    AND?: PenyakitWhereInput | PenyakitWhereInput[]
    OR?: PenyakitWhereInput[]
    NOT?: PenyakitWhereInput | PenyakitWhereInput[]
    kd_penyakit?: StringFilter<"Penyakit"> | string
    nama_penyakit?: StringFilter<"Penyakit"> | string
    createdAt?: DateTimeFilter<"Penyakit"> | Date | string
    updatedAt?: DateTimeFilter<"Penyakit"> | Date | string
    pengetahuan?: PengetahuanListRelationFilter
    solusi?: SolusiListRelationFilter
  }

  export type PenyakitOrderByWithRelationInput = {
    kd_penyakit?: SortOrder
    nama_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pengetahuan?: PengetahuanOrderByRelationAggregateInput
    solusi?: SolusiOrderByRelationAggregateInput
  }

  export type PenyakitWhereUniqueInput = Prisma.AtLeast<{
    kd_penyakit?: string
    AND?: PenyakitWhereInput | PenyakitWhereInput[]
    OR?: PenyakitWhereInput[]
    NOT?: PenyakitWhereInput | PenyakitWhereInput[]
    nama_penyakit?: StringFilter<"Penyakit"> | string
    createdAt?: DateTimeFilter<"Penyakit"> | Date | string
    updatedAt?: DateTimeFilter<"Penyakit"> | Date | string
    pengetahuan?: PengetahuanListRelationFilter
    solusi?: SolusiListRelationFilter
  }, "kd_penyakit">

  export type PenyakitOrderByWithAggregationInput = {
    kd_penyakit?: SortOrder
    nama_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PenyakitCountOrderByAggregateInput
    _max?: PenyakitMaxOrderByAggregateInput
    _min?: PenyakitMinOrderByAggregateInput
  }

  export type PenyakitScalarWhereWithAggregatesInput = {
    AND?: PenyakitScalarWhereWithAggregatesInput | PenyakitScalarWhereWithAggregatesInput[]
    OR?: PenyakitScalarWhereWithAggregatesInput[]
    NOT?: PenyakitScalarWhereWithAggregatesInput | PenyakitScalarWhereWithAggregatesInput[]
    kd_penyakit?: StringWithAggregatesFilter<"Penyakit"> | string
    nama_penyakit?: StringWithAggregatesFilter<"Penyakit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Penyakit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Penyakit"> | Date | string
  }

  export type SolusiWhereInput = {
    AND?: SolusiWhereInput | SolusiWhereInput[]
    OR?: SolusiWhereInput[]
    NOT?: SolusiWhereInput | SolusiWhereInput[]
    id?: IntFilter<"Solusi"> | number
    solusi?: StringFilter<"Solusi"> | string
    kd_penyakit?: StringFilter<"Solusi"> | string
    createdAt?: DateTimeFilter<"Solusi"> | Date | string
    updatedAt?: DateTimeFilter<"Solusi"> | Date | string
    penyakit?: XOR<PenyakitScalarRelationFilter, PenyakitWhereInput>
  }

  export type SolusiOrderByWithRelationInput = {
    id?: SortOrder
    solusi?: SortOrder
    kd_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    penyakit?: PenyakitOrderByWithRelationInput
  }

  export type SolusiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SolusiWhereInput | SolusiWhereInput[]
    OR?: SolusiWhereInput[]
    NOT?: SolusiWhereInput | SolusiWhereInput[]
    solusi?: StringFilter<"Solusi"> | string
    kd_penyakit?: StringFilter<"Solusi"> | string
    createdAt?: DateTimeFilter<"Solusi"> | Date | string
    updatedAt?: DateTimeFilter<"Solusi"> | Date | string
    penyakit?: XOR<PenyakitScalarRelationFilter, PenyakitWhereInput>
  }, "id" | "id">

  export type SolusiOrderByWithAggregationInput = {
    id?: SortOrder
    solusi?: SortOrder
    kd_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SolusiCountOrderByAggregateInput
    _avg?: SolusiAvgOrderByAggregateInput
    _max?: SolusiMaxOrderByAggregateInput
    _min?: SolusiMinOrderByAggregateInput
    _sum?: SolusiSumOrderByAggregateInput
  }

  export type SolusiScalarWhereWithAggregatesInput = {
    AND?: SolusiScalarWhereWithAggregatesInput | SolusiScalarWhereWithAggregatesInput[]
    OR?: SolusiScalarWhereWithAggregatesInput[]
    NOT?: SolusiScalarWhereWithAggregatesInput | SolusiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Solusi"> | number
    solusi?: StringWithAggregatesFilter<"Solusi"> | string
    kd_penyakit?: StringWithAggregatesFilter<"Solusi"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Solusi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Solusi"> | Date | string
  }

  export type PengetahuanWhereInput = {
    AND?: PengetahuanWhereInput | PengetahuanWhereInput[]
    OR?: PengetahuanWhereInput[]
    NOT?: PengetahuanWhereInput | PengetahuanWhereInput[]
    id?: IntFilter<"Pengetahuan"> | number
    kd_pengetahuan?: StringFilter<"Pengetahuan"> | string
    kd_gejala?: StringFilter<"Pengetahuan"> | string
    kd_penyakit?: StringFilter<"Pengetahuan"> | string
    createdAt?: DateTimeFilter<"Pengetahuan"> | Date | string
    updatedAt?: DateTimeFilter<"Pengetahuan"> | Date | string
    gejala?: XOR<GejalaScalarRelationFilter, GejalaWhereInput>
    penyakit?: XOR<PenyakitScalarRelationFilter, PenyakitWhereInput>
  }

  export type PengetahuanOrderByWithRelationInput = {
    id?: SortOrder
    kd_pengetahuan?: SortOrder
    kd_gejala?: SortOrder
    kd_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gejala?: GejalaOrderByWithRelationInput
    penyakit?: PenyakitOrderByWithRelationInput
  }

  export type PengetahuanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PengetahuanWhereInput | PengetahuanWhereInput[]
    OR?: PengetahuanWhereInput[]
    NOT?: PengetahuanWhereInput | PengetahuanWhereInput[]
    kd_pengetahuan?: StringFilter<"Pengetahuan"> | string
    kd_gejala?: StringFilter<"Pengetahuan"> | string
    kd_penyakit?: StringFilter<"Pengetahuan"> | string
    createdAt?: DateTimeFilter<"Pengetahuan"> | Date | string
    updatedAt?: DateTimeFilter<"Pengetahuan"> | Date | string
    gejala?: XOR<GejalaScalarRelationFilter, GejalaWhereInput>
    penyakit?: XOR<PenyakitScalarRelationFilter, PenyakitWhereInput>
  }, "id" | "id">

  export type PengetahuanOrderByWithAggregationInput = {
    id?: SortOrder
    kd_pengetahuan?: SortOrder
    kd_gejala?: SortOrder
    kd_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PengetahuanCountOrderByAggregateInput
    _avg?: PengetahuanAvgOrderByAggregateInput
    _max?: PengetahuanMaxOrderByAggregateInput
    _min?: PengetahuanMinOrderByAggregateInput
    _sum?: PengetahuanSumOrderByAggregateInput
  }

  export type PengetahuanScalarWhereWithAggregatesInput = {
    AND?: PengetahuanScalarWhereWithAggregatesInput | PengetahuanScalarWhereWithAggregatesInput[]
    OR?: PengetahuanScalarWhereWithAggregatesInput[]
    NOT?: PengetahuanScalarWhereWithAggregatesInput | PengetahuanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pengetahuan"> | number
    kd_pengetahuan?: StringWithAggregatesFilter<"Pengetahuan"> | string
    kd_gejala?: StringWithAggregatesFilter<"Pengetahuan"> | string
    kd_penyakit?: StringWithAggregatesFilter<"Pengetahuan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pengetahuan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pengetahuan"> | Date | string
  }

  export type HasilWhereInput = {
    AND?: HasilWhereInput | HasilWhereInput[]
    OR?: HasilWhereInput[]
    NOT?: HasilWhereInput | HasilWhereInput[]
    id?: IntFilter<"Hasil"> | number
    pasienId?: IntFilter<"Hasil"> | number
    kd_penyakit?: StringFilter<"Hasil"> | string
    createdAt?: DateTimeFilter<"Hasil"> | Date | string
    updatedAt?: DateTimeFilter<"Hasil"> | Date | string
    pasien?: XOR<PasienScalarRelationFilter, PasienWhereInput>
    details?: DiagnosaDetailListRelationFilter
  }

  export type HasilOrderByWithRelationInput = {
    id?: SortOrder
    pasienId?: SortOrder
    kd_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pasien?: PasienOrderByWithRelationInput
    details?: DiagnosaDetailOrderByRelationAggregateInput
  }

  export type HasilWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HasilWhereInput | HasilWhereInput[]
    OR?: HasilWhereInput[]
    NOT?: HasilWhereInput | HasilWhereInput[]
    pasienId?: IntFilter<"Hasil"> | number
    kd_penyakit?: StringFilter<"Hasil"> | string
    createdAt?: DateTimeFilter<"Hasil"> | Date | string
    updatedAt?: DateTimeFilter<"Hasil"> | Date | string
    pasien?: XOR<PasienScalarRelationFilter, PasienWhereInput>
    details?: DiagnosaDetailListRelationFilter
  }, "id">

  export type HasilOrderByWithAggregationInput = {
    id?: SortOrder
    pasienId?: SortOrder
    kd_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HasilCountOrderByAggregateInput
    _avg?: HasilAvgOrderByAggregateInput
    _max?: HasilMaxOrderByAggregateInput
    _min?: HasilMinOrderByAggregateInput
    _sum?: HasilSumOrderByAggregateInput
  }

  export type HasilScalarWhereWithAggregatesInput = {
    AND?: HasilScalarWhereWithAggregatesInput | HasilScalarWhereWithAggregatesInput[]
    OR?: HasilScalarWhereWithAggregatesInput[]
    NOT?: HasilScalarWhereWithAggregatesInput | HasilScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hasil"> | number
    pasienId?: IntWithAggregatesFilter<"Hasil"> | number
    kd_penyakit?: StringWithAggregatesFilter<"Hasil"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Hasil"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hasil"> | Date | string
  }

  export type DiagnosaDetailWhereInput = {
    AND?: DiagnosaDetailWhereInput | DiagnosaDetailWhereInput[]
    OR?: DiagnosaDetailWhereInput[]
    NOT?: DiagnosaDetailWhereInput | DiagnosaDetailWhereInput[]
    id?: IntFilter<"DiagnosaDetail"> | number
    hasilId?: IntFilter<"DiagnosaDetail"> | number
    kd_gejala?: StringFilter<"DiagnosaDetail"> | string
    createdAt?: DateTimeFilter<"DiagnosaDetail"> | Date | string
    updatedAt?: DateTimeFilter<"DiagnosaDetail"> | Date | string
    diagnosa?: XOR<HasilScalarRelationFilter, HasilWhereInput>
  }

  export type DiagnosaDetailOrderByWithRelationInput = {
    id?: SortOrder
    hasilId?: SortOrder
    kd_gejala?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diagnosa?: HasilOrderByWithRelationInput
  }

  export type DiagnosaDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiagnosaDetailWhereInput | DiagnosaDetailWhereInput[]
    OR?: DiagnosaDetailWhereInput[]
    NOT?: DiagnosaDetailWhereInput | DiagnosaDetailWhereInput[]
    hasilId?: IntFilter<"DiagnosaDetail"> | number
    kd_gejala?: StringFilter<"DiagnosaDetail"> | string
    createdAt?: DateTimeFilter<"DiagnosaDetail"> | Date | string
    updatedAt?: DateTimeFilter<"DiagnosaDetail"> | Date | string
    diagnosa?: XOR<HasilScalarRelationFilter, HasilWhereInput>
  }, "id">

  export type DiagnosaDetailOrderByWithAggregationInput = {
    id?: SortOrder
    hasilId?: SortOrder
    kd_gejala?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DiagnosaDetailCountOrderByAggregateInput
    _avg?: DiagnosaDetailAvgOrderByAggregateInput
    _max?: DiagnosaDetailMaxOrderByAggregateInput
    _min?: DiagnosaDetailMinOrderByAggregateInput
    _sum?: DiagnosaDetailSumOrderByAggregateInput
  }

  export type DiagnosaDetailScalarWhereWithAggregatesInput = {
    AND?: DiagnosaDetailScalarWhereWithAggregatesInput | DiagnosaDetailScalarWhereWithAggregatesInput[]
    OR?: DiagnosaDetailScalarWhereWithAggregatesInput[]
    NOT?: DiagnosaDetailScalarWhereWithAggregatesInput | DiagnosaDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DiagnosaDetail"> | number
    hasilId?: IntWithAggregatesFilter<"DiagnosaDetail"> | number
    kd_gejala?: StringWithAggregatesFilter<"DiagnosaDetail"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DiagnosaDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DiagnosaDetail"> | Date | string
  }

  export type UserCreateInput = {
    nama?: string | null
    username: string
    password?: string | null
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nama?: string | null
    username: string
    password?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    nama?: string | null
    username: string
    password?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasienCreateInput = {
    nik: string
    nama_lengkap: string
    tanggal_lahir: Date | string
    umur: number
    jenis_kelamin: string
    phone: string
    alamat: string
    createdAt?: Date | string
    updatedAt?: Date | string
    diagnosa?: HasilCreateNestedManyWithoutPasienInput
  }

  export type PasienUncheckedCreateInput = {
    id?: number
    nik: string
    nama_lengkap: string
    tanggal_lahir: Date | string
    umur: number
    jenis_kelamin: string
    phone: string
    alamat: string
    createdAt?: Date | string
    updatedAt?: Date | string
    diagnosa?: HasilUncheckedCreateNestedManyWithoutPasienInput
  }

  export type PasienUpdateInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    umur?: IntFieldUpdateOperationsInput | number
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosa?: HasilUpdateManyWithoutPasienNestedInput
  }

  export type PasienUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    umur?: IntFieldUpdateOperationsInput | number
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosa?: HasilUncheckedUpdateManyWithoutPasienNestedInput
  }

  export type PasienCreateManyInput = {
    id?: number
    nik: string
    nama_lengkap: string
    tanggal_lahir: Date | string
    umur: number
    jenis_kelamin: string
    phone: string
    alamat: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PasienUpdateManyMutationInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    umur?: IntFieldUpdateOperationsInput | number
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasienUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    umur?: IntFieldUpdateOperationsInput | number
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GejalaCreateInput = {
    kd_gejala: string
    nama_gejala: string
    poin_gejala?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pengetahuan?: PengetahuanCreateNestedManyWithoutGejalaInput
  }

  export type GejalaUncheckedCreateInput = {
    kd_gejala: string
    nama_gejala: string
    poin_gejala?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pengetahuan?: PengetahuanUncheckedCreateNestedManyWithoutGejalaInput
  }

  export type GejalaUpdateInput = {
    kd_gejala?: StringFieldUpdateOperationsInput | string
    nama_gejala?: StringFieldUpdateOperationsInput | string
    poin_gejala?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengetahuan?: PengetahuanUpdateManyWithoutGejalaNestedInput
  }

  export type GejalaUncheckedUpdateInput = {
    kd_gejala?: StringFieldUpdateOperationsInput | string
    nama_gejala?: StringFieldUpdateOperationsInput | string
    poin_gejala?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengetahuan?: PengetahuanUncheckedUpdateManyWithoutGejalaNestedInput
  }

  export type GejalaCreateManyInput = {
    kd_gejala: string
    nama_gejala: string
    poin_gejala?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GejalaUpdateManyMutationInput = {
    kd_gejala?: StringFieldUpdateOperationsInput | string
    nama_gejala?: StringFieldUpdateOperationsInput | string
    poin_gejala?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GejalaUncheckedUpdateManyInput = {
    kd_gejala?: StringFieldUpdateOperationsInput | string
    nama_gejala?: StringFieldUpdateOperationsInput | string
    poin_gejala?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenyakitCreateInput = {
    kd_penyakit: string
    nama_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pengetahuan?: PengetahuanCreateNestedManyWithoutPenyakitInput
    solusi?: SolusiCreateNestedManyWithoutPenyakitInput
  }

  export type PenyakitUncheckedCreateInput = {
    kd_penyakit: string
    nama_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pengetahuan?: PengetahuanUncheckedCreateNestedManyWithoutPenyakitInput
    solusi?: SolusiUncheckedCreateNestedManyWithoutPenyakitInput
  }

  export type PenyakitUpdateInput = {
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    nama_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengetahuan?: PengetahuanUpdateManyWithoutPenyakitNestedInput
    solusi?: SolusiUpdateManyWithoutPenyakitNestedInput
  }

  export type PenyakitUncheckedUpdateInput = {
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    nama_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengetahuan?: PengetahuanUncheckedUpdateManyWithoutPenyakitNestedInput
    solusi?: SolusiUncheckedUpdateManyWithoutPenyakitNestedInput
  }

  export type PenyakitCreateManyInput = {
    kd_penyakit: string
    nama_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PenyakitUpdateManyMutationInput = {
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    nama_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenyakitUncheckedUpdateManyInput = {
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    nama_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolusiCreateInput = {
    solusi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    penyakit: PenyakitCreateNestedOneWithoutSolusiInput
  }

  export type SolusiUncheckedCreateInput = {
    id?: number
    solusi: string
    kd_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolusiUpdateInput = {
    solusi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penyakit?: PenyakitUpdateOneRequiredWithoutSolusiNestedInput
  }

  export type SolusiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    solusi?: StringFieldUpdateOperationsInput | string
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolusiCreateManyInput = {
    id?: number
    solusi: string
    kd_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolusiUpdateManyMutationInput = {
    solusi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolusiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    solusi?: StringFieldUpdateOperationsInput | string
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengetahuanCreateInput = {
    kd_pengetahuan: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gejala: GejalaCreateNestedOneWithoutPengetahuanInput
    penyakit: PenyakitCreateNestedOneWithoutPengetahuanInput
  }

  export type PengetahuanUncheckedCreateInput = {
    id?: number
    kd_pengetahuan: string
    kd_gejala: string
    kd_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PengetahuanUpdateInput = {
    kd_pengetahuan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gejala?: GejalaUpdateOneRequiredWithoutPengetahuanNestedInput
    penyakit?: PenyakitUpdateOneRequiredWithoutPengetahuanNestedInput
  }

  export type PengetahuanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kd_pengetahuan?: StringFieldUpdateOperationsInput | string
    kd_gejala?: StringFieldUpdateOperationsInput | string
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengetahuanCreateManyInput = {
    id?: number
    kd_pengetahuan: string
    kd_gejala: string
    kd_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PengetahuanUpdateManyMutationInput = {
    kd_pengetahuan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengetahuanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kd_pengetahuan?: StringFieldUpdateOperationsInput | string
    kd_gejala?: StringFieldUpdateOperationsInput | string
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HasilCreateInput = {
    kd_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasien: PasienCreateNestedOneWithoutDiagnosaInput
    details?: DiagnosaDetailCreateNestedManyWithoutDiagnosaInput
  }

  export type HasilUncheckedCreateInput = {
    id?: number
    pasienId: number
    kd_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: DiagnosaDetailUncheckedCreateNestedManyWithoutDiagnosaInput
  }

  export type HasilUpdateInput = {
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasien?: PasienUpdateOneRequiredWithoutDiagnosaNestedInput
    details?: DiagnosaDetailUpdateManyWithoutDiagnosaNestedInput
  }

  export type HasilUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pasienId?: IntFieldUpdateOperationsInput | number
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DiagnosaDetailUncheckedUpdateManyWithoutDiagnosaNestedInput
  }

  export type HasilCreateManyInput = {
    id?: number
    pasienId: number
    kd_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HasilUpdateManyMutationInput = {
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HasilUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pasienId?: IntFieldUpdateOperationsInput | number
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosaDetailCreateInput = {
    kd_gejala: string
    createdAt?: Date | string
    updatedAt?: Date | string
    diagnosa: HasilCreateNestedOneWithoutDetailsInput
  }

  export type DiagnosaDetailUncheckedCreateInput = {
    id?: number
    hasilId: number
    kd_gejala: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnosaDetailUpdateInput = {
    kd_gejala?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosa?: HasilUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type DiagnosaDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hasilId?: IntFieldUpdateOperationsInput | number
    kd_gejala?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosaDetailCreateManyInput = {
    id?: number
    hasilId: number
    kd_gejala: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnosaDetailUpdateManyMutationInput = {
    kd_gejala?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosaDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hasilId?: IntFieldUpdateOperationsInput | number
    kd_gejala?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
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

  export type HasilListRelationFilter = {
    every?: HasilWhereInput
    some?: HasilWhereInput
    none?: HasilWhereInput
  }

  export type HasilOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasienCountOrderByAggregateInput = {
    id?: SortOrder
    nik?: SortOrder
    nama_lengkap?: SortOrder
    tanggal_lahir?: SortOrder
    umur?: SortOrder
    jenis_kelamin?: SortOrder
    phone?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PasienAvgOrderByAggregateInput = {
    id?: SortOrder
    umur?: SortOrder
  }

  export type PasienMaxOrderByAggregateInput = {
    id?: SortOrder
    nik?: SortOrder
    nama_lengkap?: SortOrder
    tanggal_lahir?: SortOrder
    umur?: SortOrder
    jenis_kelamin?: SortOrder
    phone?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PasienMinOrderByAggregateInput = {
    id?: SortOrder
    nik?: SortOrder
    nama_lengkap?: SortOrder
    tanggal_lahir?: SortOrder
    umur?: SortOrder
    jenis_kelamin?: SortOrder
    phone?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PasienSumOrderByAggregateInput = {
    id?: SortOrder
    umur?: SortOrder
  }

  export type PengetahuanListRelationFilter = {
    every?: PengetahuanWhereInput
    some?: PengetahuanWhereInput
    none?: PengetahuanWhereInput
  }

  export type PengetahuanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GejalaCountOrderByAggregateInput = {
    kd_gejala?: SortOrder
    nama_gejala?: SortOrder
    poin_gejala?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GejalaMaxOrderByAggregateInput = {
    kd_gejala?: SortOrder
    nama_gejala?: SortOrder
    poin_gejala?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GejalaMinOrderByAggregateInput = {
    kd_gejala?: SortOrder
    nama_gejala?: SortOrder
    poin_gejala?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolusiListRelationFilter = {
    every?: SolusiWhereInput
    some?: SolusiWhereInput
    none?: SolusiWhereInput
  }

  export type SolusiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PenyakitCountOrderByAggregateInput = {
    kd_penyakit?: SortOrder
    nama_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PenyakitMaxOrderByAggregateInput = {
    kd_penyakit?: SortOrder
    nama_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PenyakitMinOrderByAggregateInput = {
    kd_penyakit?: SortOrder
    nama_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PenyakitScalarRelationFilter = {
    is?: PenyakitWhereInput
    isNot?: PenyakitWhereInput
  }

  export type SolusiCountOrderByAggregateInput = {
    id?: SortOrder
    solusi?: SortOrder
    kd_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolusiAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SolusiMaxOrderByAggregateInput = {
    id?: SortOrder
    solusi?: SortOrder
    kd_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolusiMinOrderByAggregateInput = {
    id?: SortOrder
    solusi?: SortOrder
    kd_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolusiSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GejalaScalarRelationFilter = {
    is?: GejalaWhereInput
    isNot?: GejalaWhereInput
  }

  export type PengetahuanCountOrderByAggregateInput = {
    id?: SortOrder
    kd_pengetahuan?: SortOrder
    kd_gejala?: SortOrder
    kd_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PengetahuanAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PengetahuanMaxOrderByAggregateInput = {
    id?: SortOrder
    kd_pengetahuan?: SortOrder
    kd_gejala?: SortOrder
    kd_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PengetahuanMinOrderByAggregateInput = {
    id?: SortOrder
    kd_pengetahuan?: SortOrder
    kd_gejala?: SortOrder
    kd_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PengetahuanSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PasienScalarRelationFilter = {
    is?: PasienWhereInput
    isNot?: PasienWhereInput
  }

  export type DiagnosaDetailListRelationFilter = {
    every?: DiagnosaDetailWhereInput
    some?: DiagnosaDetailWhereInput
    none?: DiagnosaDetailWhereInput
  }

  export type DiagnosaDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HasilCountOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    kd_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HasilAvgOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
  }

  export type HasilMaxOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    kd_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HasilMinOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    kd_penyakit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HasilSumOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
  }

  export type HasilScalarRelationFilter = {
    is?: HasilWhereInput
    isNot?: HasilWhereInput
  }

  export type DiagnosaDetailCountOrderByAggregateInput = {
    id?: SortOrder
    hasilId?: SortOrder
    kd_gejala?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiagnosaDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    hasilId?: SortOrder
  }

  export type DiagnosaDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    hasilId?: SortOrder
    kd_gejala?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiagnosaDetailMinOrderByAggregateInput = {
    id?: SortOrder
    hasilId?: SortOrder
    kd_gejala?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiagnosaDetailSumOrderByAggregateInput = {
    id?: SortOrder
    hasilId?: SortOrder
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HasilCreateNestedManyWithoutPasienInput = {
    create?: XOR<HasilCreateWithoutPasienInput, HasilUncheckedCreateWithoutPasienInput> | HasilCreateWithoutPasienInput[] | HasilUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: HasilCreateOrConnectWithoutPasienInput | HasilCreateOrConnectWithoutPasienInput[]
    createMany?: HasilCreateManyPasienInputEnvelope
    connect?: HasilWhereUniqueInput | HasilWhereUniqueInput[]
  }

  export type HasilUncheckedCreateNestedManyWithoutPasienInput = {
    create?: XOR<HasilCreateWithoutPasienInput, HasilUncheckedCreateWithoutPasienInput> | HasilCreateWithoutPasienInput[] | HasilUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: HasilCreateOrConnectWithoutPasienInput | HasilCreateOrConnectWithoutPasienInput[]
    createMany?: HasilCreateManyPasienInputEnvelope
    connect?: HasilWhereUniqueInput | HasilWhereUniqueInput[]
  }

  export type HasilUpdateManyWithoutPasienNestedInput = {
    create?: XOR<HasilCreateWithoutPasienInput, HasilUncheckedCreateWithoutPasienInput> | HasilCreateWithoutPasienInput[] | HasilUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: HasilCreateOrConnectWithoutPasienInput | HasilCreateOrConnectWithoutPasienInput[]
    upsert?: HasilUpsertWithWhereUniqueWithoutPasienInput | HasilUpsertWithWhereUniqueWithoutPasienInput[]
    createMany?: HasilCreateManyPasienInputEnvelope
    set?: HasilWhereUniqueInput | HasilWhereUniqueInput[]
    disconnect?: HasilWhereUniqueInput | HasilWhereUniqueInput[]
    delete?: HasilWhereUniqueInput | HasilWhereUniqueInput[]
    connect?: HasilWhereUniqueInput | HasilWhereUniqueInput[]
    update?: HasilUpdateWithWhereUniqueWithoutPasienInput | HasilUpdateWithWhereUniqueWithoutPasienInput[]
    updateMany?: HasilUpdateManyWithWhereWithoutPasienInput | HasilUpdateManyWithWhereWithoutPasienInput[]
    deleteMany?: HasilScalarWhereInput | HasilScalarWhereInput[]
  }

  export type HasilUncheckedUpdateManyWithoutPasienNestedInput = {
    create?: XOR<HasilCreateWithoutPasienInput, HasilUncheckedCreateWithoutPasienInput> | HasilCreateWithoutPasienInput[] | HasilUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: HasilCreateOrConnectWithoutPasienInput | HasilCreateOrConnectWithoutPasienInput[]
    upsert?: HasilUpsertWithWhereUniqueWithoutPasienInput | HasilUpsertWithWhereUniqueWithoutPasienInput[]
    createMany?: HasilCreateManyPasienInputEnvelope
    set?: HasilWhereUniqueInput | HasilWhereUniqueInput[]
    disconnect?: HasilWhereUniqueInput | HasilWhereUniqueInput[]
    delete?: HasilWhereUniqueInput | HasilWhereUniqueInput[]
    connect?: HasilWhereUniqueInput | HasilWhereUniqueInput[]
    update?: HasilUpdateWithWhereUniqueWithoutPasienInput | HasilUpdateWithWhereUniqueWithoutPasienInput[]
    updateMany?: HasilUpdateManyWithWhereWithoutPasienInput | HasilUpdateManyWithWhereWithoutPasienInput[]
    deleteMany?: HasilScalarWhereInput | HasilScalarWhereInput[]
  }

  export type PengetahuanCreateNestedManyWithoutGejalaInput = {
    create?: XOR<PengetahuanCreateWithoutGejalaInput, PengetahuanUncheckedCreateWithoutGejalaInput> | PengetahuanCreateWithoutGejalaInput[] | PengetahuanUncheckedCreateWithoutGejalaInput[]
    connectOrCreate?: PengetahuanCreateOrConnectWithoutGejalaInput | PengetahuanCreateOrConnectWithoutGejalaInput[]
    createMany?: PengetahuanCreateManyGejalaInputEnvelope
    connect?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
  }

  export type PengetahuanUncheckedCreateNestedManyWithoutGejalaInput = {
    create?: XOR<PengetahuanCreateWithoutGejalaInput, PengetahuanUncheckedCreateWithoutGejalaInput> | PengetahuanCreateWithoutGejalaInput[] | PengetahuanUncheckedCreateWithoutGejalaInput[]
    connectOrCreate?: PengetahuanCreateOrConnectWithoutGejalaInput | PengetahuanCreateOrConnectWithoutGejalaInput[]
    createMany?: PengetahuanCreateManyGejalaInputEnvelope
    connect?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
  }

  export type PengetahuanUpdateManyWithoutGejalaNestedInput = {
    create?: XOR<PengetahuanCreateWithoutGejalaInput, PengetahuanUncheckedCreateWithoutGejalaInput> | PengetahuanCreateWithoutGejalaInput[] | PengetahuanUncheckedCreateWithoutGejalaInput[]
    connectOrCreate?: PengetahuanCreateOrConnectWithoutGejalaInput | PengetahuanCreateOrConnectWithoutGejalaInput[]
    upsert?: PengetahuanUpsertWithWhereUniqueWithoutGejalaInput | PengetahuanUpsertWithWhereUniqueWithoutGejalaInput[]
    createMany?: PengetahuanCreateManyGejalaInputEnvelope
    set?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
    disconnect?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
    delete?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
    connect?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
    update?: PengetahuanUpdateWithWhereUniqueWithoutGejalaInput | PengetahuanUpdateWithWhereUniqueWithoutGejalaInput[]
    updateMany?: PengetahuanUpdateManyWithWhereWithoutGejalaInput | PengetahuanUpdateManyWithWhereWithoutGejalaInput[]
    deleteMany?: PengetahuanScalarWhereInput | PengetahuanScalarWhereInput[]
  }

  export type PengetahuanUncheckedUpdateManyWithoutGejalaNestedInput = {
    create?: XOR<PengetahuanCreateWithoutGejalaInput, PengetahuanUncheckedCreateWithoutGejalaInput> | PengetahuanCreateWithoutGejalaInput[] | PengetahuanUncheckedCreateWithoutGejalaInput[]
    connectOrCreate?: PengetahuanCreateOrConnectWithoutGejalaInput | PengetahuanCreateOrConnectWithoutGejalaInput[]
    upsert?: PengetahuanUpsertWithWhereUniqueWithoutGejalaInput | PengetahuanUpsertWithWhereUniqueWithoutGejalaInput[]
    createMany?: PengetahuanCreateManyGejalaInputEnvelope
    set?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
    disconnect?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
    delete?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
    connect?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
    update?: PengetahuanUpdateWithWhereUniqueWithoutGejalaInput | PengetahuanUpdateWithWhereUniqueWithoutGejalaInput[]
    updateMany?: PengetahuanUpdateManyWithWhereWithoutGejalaInput | PengetahuanUpdateManyWithWhereWithoutGejalaInput[]
    deleteMany?: PengetahuanScalarWhereInput | PengetahuanScalarWhereInput[]
  }

  export type PengetahuanCreateNestedManyWithoutPenyakitInput = {
    create?: XOR<PengetahuanCreateWithoutPenyakitInput, PengetahuanUncheckedCreateWithoutPenyakitInput> | PengetahuanCreateWithoutPenyakitInput[] | PengetahuanUncheckedCreateWithoutPenyakitInput[]
    connectOrCreate?: PengetahuanCreateOrConnectWithoutPenyakitInput | PengetahuanCreateOrConnectWithoutPenyakitInput[]
    createMany?: PengetahuanCreateManyPenyakitInputEnvelope
    connect?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
  }

  export type SolusiCreateNestedManyWithoutPenyakitInput = {
    create?: XOR<SolusiCreateWithoutPenyakitInput, SolusiUncheckedCreateWithoutPenyakitInput> | SolusiCreateWithoutPenyakitInput[] | SolusiUncheckedCreateWithoutPenyakitInput[]
    connectOrCreate?: SolusiCreateOrConnectWithoutPenyakitInput | SolusiCreateOrConnectWithoutPenyakitInput[]
    createMany?: SolusiCreateManyPenyakitInputEnvelope
    connect?: SolusiWhereUniqueInput | SolusiWhereUniqueInput[]
  }

  export type PengetahuanUncheckedCreateNestedManyWithoutPenyakitInput = {
    create?: XOR<PengetahuanCreateWithoutPenyakitInput, PengetahuanUncheckedCreateWithoutPenyakitInput> | PengetahuanCreateWithoutPenyakitInput[] | PengetahuanUncheckedCreateWithoutPenyakitInput[]
    connectOrCreate?: PengetahuanCreateOrConnectWithoutPenyakitInput | PengetahuanCreateOrConnectWithoutPenyakitInput[]
    createMany?: PengetahuanCreateManyPenyakitInputEnvelope
    connect?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
  }

  export type SolusiUncheckedCreateNestedManyWithoutPenyakitInput = {
    create?: XOR<SolusiCreateWithoutPenyakitInput, SolusiUncheckedCreateWithoutPenyakitInput> | SolusiCreateWithoutPenyakitInput[] | SolusiUncheckedCreateWithoutPenyakitInput[]
    connectOrCreate?: SolusiCreateOrConnectWithoutPenyakitInput | SolusiCreateOrConnectWithoutPenyakitInput[]
    createMany?: SolusiCreateManyPenyakitInputEnvelope
    connect?: SolusiWhereUniqueInput | SolusiWhereUniqueInput[]
  }

  export type PengetahuanUpdateManyWithoutPenyakitNestedInput = {
    create?: XOR<PengetahuanCreateWithoutPenyakitInput, PengetahuanUncheckedCreateWithoutPenyakitInput> | PengetahuanCreateWithoutPenyakitInput[] | PengetahuanUncheckedCreateWithoutPenyakitInput[]
    connectOrCreate?: PengetahuanCreateOrConnectWithoutPenyakitInput | PengetahuanCreateOrConnectWithoutPenyakitInput[]
    upsert?: PengetahuanUpsertWithWhereUniqueWithoutPenyakitInput | PengetahuanUpsertWithWhereUniqueWithoutPenyakitInput[]
    createMany?: PengetahuanCreateManyPenyakitInputEnvelope
    set?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
    disconnect?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
    delete?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
    connect?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
    update?: PengetahuanUpdateWithWhereUniqueWithoutPenyakitInput | PengetahuanUpdateWithWhereUniqueWithoutPenyakitInput[]
    updateMany?: PengetahuanUpdateManyWithWhereWithoutPenyakitInput | PengetahuanUpdateManyWithWhereWithoutPenyakitInput[]
    deleteMany?: PengetahuanScalarWhereInput | PengetahuanScalarWhereInput[]
  }

  export type SolusiUpdateManyWithoutPenyakitNestedInput = {
    create?: XOR<SolusiCreateWithoutPenyakitInput, SolusiUncheckedCreateWithoutPenyakitInput> | SolusiCreateWithoutPenyakitInput[] | SolusiUncheckedCreateWithoutPenyakitInput[]
    connectOrCreate?: SolusiCreateOrConnectWithoutPenyakitInput | SolusiCreateOrConnectWithoutPenyakitInput[]
    upsert?: SolusiUpsertWithWhereUniqueWithoutPenyakitInput | SolusiUpsertWithWhereUniqueWithoutPenyakitInput[]
    createMany?: SolusiCreateManyPenyakitInputEnvelope
    set?: SolusiWhereUniqueInput | SolusiWhereUniqueInput[]
    disconnect?: SolusiWhereUniqueInput | SolusiWhereUniqueInput[]
    delete?: SolusiWhereUniqueInput | SolusiWhereUniqueInput[]
    connect?: SolusiWhereUniqueInput | SolusiWhereUniqueInput[]
    update?: SolusiUpdateWithWhereUniqueWithoutPenyakitInput | SolusiUpdateWithWhereUniqueWithoutPenyakitInput[]
    updateMany?: SolusiUpdateManyWithWhereWithoutPenyakitInput | SolusiUpdateManyWithWhereWithoutPenyakitInput[]
    deleteMany?: SolusiScalarWhereInput | SolusiScalarWhereInput[]
  }

  export type PengetahuanUncheckedUpdateManyWithoutPenyakitNestedInput = {
    create?: XOR<PengetahuanCreateWithoutPenyakitInput, PengetahuanUncheckedCreateWithoutPenyakitInput> | PengetahuanCreateWithoutPenyakitInput[] | PengetahuanUncheckedCreateWithoutPenyakitInput[]
    connectOrCreate?: PengetahuanCreateOrConnectWithoutPenyakitInput | PengetahuanCreateOrConnectWithoutPenyakitInput[]
    upsert?: PengetahuanUpsertWithWhereUniqueWithoutPenyakitInput | PengetahuanUpsertWithWhereUniqueWithoutPenyakitInput[]
    createMany?: PengetahuanCreateManyPenyakitInputEnvelope
    set?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
    disconnect?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
    delete?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
    connect?: PengetahuanWhereUniqueInput | PengetahuanWhereUniqueInput[]
    update?: PengetahuanUpdateWithWhereUniqueWithoutPenyakitInput | PengetahuanUpdateWithWhereUniqueWithoutPenyakitInput[]
    updateMany?: PengetahuanUpdateManyWithWhereWithoutPenyakitInput | PengetahuanUpdateManyWithWhereWithoutPenyakitInput[]
    deleteMany?: PengetahuanScalarWhereInput | PengetahuanScalarWhereInput[]
  }

  export type SolusiUncheckedUpdateManyWithoutPenyakitNestedInput = {
    create?: XOR<SolusiCreateWithoutPenyakitInput, SolusiUncheckedCreateWithoutPenyakitInput> | SolusiCreateWithoutPenyakitInput[] | SolusiUncheckedCreateWithoutPenyakitInput[]
    connectOrCreate?: SolusiCreateOrConnectWithoutPenyakitInput | SolusiCreateOrConnectWithoutPenyakitInput[]
    upsert?: SolusiUpsertWithWhereUniqueWithoutPenyakitInput | SolusiUpsertWithWhereUniqueWithoutPenyakitInput[]
    createMany?: SolusiCreateManyPenyakitInputEnvelope
    set?: SolusiWhereUniqueInput | SolusiWhereUniqueInput[]
    disconnect?: SolusiWhereUniqueInput | SolusiWhereUniqueInput[]
    delete?: SolusiWhereUniqueInput | SolusiWhereUniqueInput[]
    connect?: SolusiWhereUniqueInput | SolusiWhereUniqueInput[]
    update?: SolusiUpdateWithWhereUniqueWithoutPenyakitInput | SolusiUpdateWithWhereUniqueWithoutPenyakitInput[]
    updateMany?: SolusiUpdateManyWithWhereWithoutPenyakitInput | SolusiUpdateManyWithWhereWithoutPenyakitInput[]
    deleteMany?: SolusiScalarWhereInput | SolusiScalarWhereInput[]
  }

  export type PenyakitCreateNestedOneWithoutSolusiInput = {
    create?: XOR<PenyakitCreateWithoutSolusiInput, PenyakitUncheckedCreateWithoutSolusiInput>
    connectOrCreate?: PenyakitCreateOrConnectWithoutSolusiInput
    connect?: PenyakitWhereUniqueInput
  }

  export type PenyakitUpdateOneRequiredWithoutSolusiNestedInput = {
    create?: XOR<PenyakitCreateWithoutSolusiInput, PenyakitUncheckedCreateWithoutSolusiInput>
    connectOrCreate?: PenyakitCreateOrConnectWithoutSolusiInput
    upsert?: PenyakitUpsertWithoutSolusiInput
    connect?: PenyakitWhereUniqueInput
    update?: XOR<XOR<PenyakitUpdateToOneWithWhereWithoutSolusiInput, PenyakitUpdateWithoutSolusiInput>, PenyakitUncheckedUpdateWithoutSolusiInput>
  }

  export type GejalaCreateNestedOneWithoutPengetahuanInput = {
    create?: XOR<GejalaCreateWithoutPengetahuanInput, GejalaUncheckedCreateWithoutPengetahuanInput>
    connectOrCreate?: GejalaCreateOrConnectWithoutPengetahuanInput
    connect?: GejalaWhereUniqueInput
  }

  export type PenyakitCreateNestedOneWithoutPengetahuanInput = {
    create?: XOR<PenyakitCreateWithoutPengetahuanInput, PenyakitUncheckedCreateWithoutPengetahuanInput>
    connectOrCreate?: PenyakitCreateOrConnectWithoutPengetahuanInput
    connect?: PenyakitWhereUniqueInput
  }

  export type GejalaUpdateOneRequiredWithoutPengetahuanNestedInput = {
    create?: XOR<GejalaCreateWithoutPengetahuanInput, GejalaUncheckedCreateWithoutPengetahuanInput>
    connectOrCreate?: GejalaCreateOrConnectWithoutPengetahuanInput
    upsert?: GejalaUpsertWithoutPengetahuanInput
    connect?: GejalaWhereUniqueInput
    update?: XOR<XOR<GejalaUpdateToOneWithWhereWithoutPengetahuanInput, GejalaUpdateWithoutPengetahuanInput>, GejalaUncheckedUpdateWithoutPengetahuanInput>
  }

  export type PenyakitUpdateOneRequiredWithoutPengetahuanNestedInput = {
    create?: XOR<PenyakitCreateWithoutPengetahuanInput, PenyakitUncheckedCreateWithoutPengetahuanInput>
    connectOrCreate?: PenyakitCreateOrConnectWithoutPengetahuanInput
    upsert?: PenyakitUpsertWithoutPengetahuanInput
    connect?: PenyakitWhereUniqueInput
    update?: XOR<XOR<PenyakitUpdateToOneWithWhereWithoutPengetahuanInput, PenyakitUpdateWithoutPengetahuanInput>, PenyakitUncheckedUpdateWithoutPengetahuanInput>
  }

  export type PasienCreateNestedOneWithoutDiagnosaInput = {
    create?: XOR<PasienCreateWithoutDiagnosaInput, PasienUncheckedCreateWithoutDiagnosaInput>
    connectOrCreate?: PasienCreateOrConnectWithoutDiagnosaInput
    connect?: PasienWhereUniqueInput
  }

  export type DiagnosaDetailCreateNestedManyWithoutDiagnosaInput = {
    create?: XOR<DiagnosaDetailCreateWithoutDiagnosaInput, DiagnosaDetailUncheckedCreateWithoutDiagnosaInput> | DiagnosaDetailCreateWithoutDiagnosaInput[] | DiagnosaDetailUncheckedCreateWithoutDiagnosaInput[]
    connectOrCreate?: DiagnosaDetailCreateOrConnectWithoutDiagnosaInput | DiagnosaDetailCreateOrConnectWithoutDiagnosaInput[]
    createMany?: DiagnosaDetailCreateManyDiagnosaInputEnvelope
    connect?: DiagnosaDetailWhereUniqueInput | DiagnosaDetailWhereUniqueInput[]
  }

  export type DiagnosaDetailUncheckedCreateNestedManyWithoutDiagnosaInput = {
    create?: XOR<DiagnosaDetailCreateWithoutDiagnosaInput, DiagnosaDetailUncheckedCreateWithoutDiagnosaInput> | DiagnosaDetailCreateWithoutDiagnosaInput[] | DiagnosaDetailUncheckedCreateWithoutDiagnosaInput[]
    connectOrCreate?: DiagnosaDetailCreateOrConnectWithoutDiagnosaInput | DiagnosaDetailCreateOrConnectWithoutDiagnosaInput[]
    createMany?: DiagnosaDetailCreateManyDiagnosaInputEnvelope
    connect?: DiagnosaDetailWhereUniqueInput | DiagnosaDetailWhereUniqueInput[]
  }

  export type PasienUpdateOneRequiredWithoutDiagnosaNestedInput = {
    create?: XOR<PasienCreateWithoutDiagnosaInput, PasienUncheckedCreateWithoutDiagnosaInput>
    connectOrCreate?: PasienCreateOrConnectWithoutDiagnosaInput
    upsert?: PasienUpsertWithoutDiagnosaInput
    connect?: PasienWhereUniqueInput
    update?: XOR<XOR<PasienUpdateToOneWithWhereWithoutDiagnosaInput, PasienUpdateWithoutDiagnosaInput>, PasienUncheckedUpdateWithoutDiagnosaInput>
  }

  export type DiagnosaDetailUpdateManyWithoutDiagnosaNestedInput = {
    create?: XOR<DiagnosaDetailCreateWithoutDiagnosaInput, DiagnosaDetailUncheckedCreateWithoutDiagnosaInput> | DiagnosaDetailCreateWithoutDiagnosaInput[] | DiagnosaDetailUncheckedCreateWithoutDiagnosaInput[]
    connectOrCreate?: DiagnosaDetailCreateOrConnectWithoutDiagnosaInput | DiagnosaDetailCreateOrConnectWithoutDiagnosaInput[]
    upsert?: DiagnosaDetailUpsertWithWhereUniqueWithoutDiagnosaInput | DiagnosaDetailUpsertWithWhereUniqueWithoutDiagnosaInput[]
    createMany?: DiagnosaDetailCreateManyDiagnosaInputEnvelope
    set?: DiagnosaDetailWhereUniqueInput | DiagnosaDetailWhereUniqueInput[]
    disconnect?: DiagnosaDetailWhereUniqueInput | DiagnosaDetailWhereUniqueInput[]
    delete?: DiagnosaDetailWhereUniqueInput | DiagnosaDetailWhereUniqueInput[]
    connect?: DiagnosaDetailWhereUniqueInput | DiagnosaDetailWhereUniqueInput[]
    update?: DiagnosaDetailUpdateWithWhereUniqueWithoutDiagnosaInput | DiagnosaDetailUpdateWithWhereUniqueWithoutDiagnosaInput[]
    updateMany?: DiagnosaDetailUpdateManyWithWhereWithoutDiagnosaInput | DiagnosaDetailUpdateManyWithWhereWithoutDiagnosaInput[]
    deleteMany?: DiagnosaDetailScalarWhereInput | DiagnosaDetailScalarWhereInput[]
  }

  export type DiagnosaDetailUncheckedUpdateManyWithoutDiagnosaNestedInput = {
    create?: XOR<DiagnosaDetailCreateWithoutDiagnosaInput, DiagnosaDetailUncheckedCreateWithoutDiagnosaInput> | DiagnosaDetailCreateWithoutDiagnosaInput[] | DiagnosaDetailUncheckedCreateWithoutDiagnosaInput[]
    connectOrCreate?: DiagnosaDetailCreateOrConnectWithoutDiagnosaInput | DiagnosaDetailCreateOrConnectWithoutDiagnosaInput[]
    upsert?: DiagnosaDetailUpsertWithWhereUniqueWithoutDiagnosaInput | DiagnosaDetailUpsertWithWhereUniqueWithoutDiagnosaInput[]
    createMany?: DiagnosaDetailCreateManyDiagnosaInputEnvelope
    set?: DiagnosaDetailWhereUniqueInput | DiagnosaDetailWhereUniqueInput[]
    disconnect?: DiagnosaDetailWhereUniqueInput | DiagnosaDetailWhereUniqueInput[]
    delete?: DiagnosaDetailWhereUniqueInput | DiagnosaDetailWhereUniqueInput[]
    connect?: DiagnosaDetailWhereUniqueInput | DiagnosaDetailWhereUniqueInput[]
    update?: DiagnosaDetailUpdateWithWhereUniqueWithoutDiagnosaInput | DiagnosaDetailUpdateWithWhereUniqueWithoutDiagnosaInput[]
    updateMany?: DiagnosaDetailUpdateManyWithWhereWithoutDiagnosaInput | DiagnosaDetailUpdateManyWithWhereWithoutDiagnosaInput[]
    deleteMany?: DiagnosaDetailScalarWhereInput | DiagnosaDetailScalarWhereInput[]
  }

  export type HasilCreateNestedOneWithoutDetailsInput = {
    create?: XOR<HasilCreateWithoutDetailsInput, HasilUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: HasilCreateOrConnectWithoutDetailsInput
    connect?: HasilWhereUniqueInput
  }

  export type HasilUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<HasilCreateWithoutDetailsInput, HasilUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: HasilCreateOrConnectWithoutDetailsInput
    upsert?: HasilUpsertWithoutDetailsInput
    connect?: HasilWhereUniqueInput
    update?: XOR<XOR<HasilUpdateToOneWithWhereWithoutDetailsInput, HasilUpdateWithoutDetailsInput>, HasilUncheckedUpdateWithoutDetailsInput>
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

  export type HasilCreateWithoutPasienInput = {
    kd_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: DiagnosaDetailCreateNestedManyWithoutDiagnosaInput
  }

  export type HasilUncheckedCreateWithoutPasienInput = {
    id?: number
    kd_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: DiagnosaDetailUncheckedCreateNestedManyWithoutDiagnosaInput
  }

  export type HasilCreateOrConnectWithoutPasienInput = {
    where: HasilWhereUniqueInput
    create: XOR<HasilCreateWithoutPasienInput, HasilUncheckedCreateWithoutPasienInput>
  }

  export type HasilCreateManyPasienInputEnvelope = {
    data: HasilCreateManyPasienInput | HasilCreateManyPasienInput[]
    skipDuplicates?: boolean
  }

  export type HasilUpsertWithWhereUniqueWithoutPasienInput = {
    where: HasilWhereUniqueInput
    update: XOR<HasilUpdateWithoutPasienInput, HasilUncheckedUpdateWithoutPasienInput>
    create: XOR<HasilCreateWithoutPasienInput, HasilUncheckedCreateWithoutPasienInput>
  }

  export type HasilUpdateWithWhereUniqueWithoutPasienInput = {
    where: HasilWhereUniqueInput
    data: XOR<HasilUpdateWithoutPasienInput, HasilUncheckedUpdateWithoutPasienInput>
  }

  export type HasilUpdateManyWithWhereWithoutPasienInput = {
    where: HasilScalarWhereInput
    data: XOR<HasilUpdateManyMutationInput, HasilUncheckedUpdateManyWithoutPasienInput>
  }

  export type HasilScalarWhereInput = {
    AND?: HasilScalarWhereInput | HasilScalarWhereInput[]
    OR?: HasilScalarWhereInput[]
    NOT?: HasilScalarWhereInput | HasilScalarWhereInput[]
    id?: IntFilter<"Hasil"> | number
    pasienId?: IntFilter<"Hasil"> | number
    kd_penyakit?: StringFilter<"Hasil"> | string
    createdAt?: DateTimeFilter<"Hasil"> | Date | string
    updatedAt?: DateTimeFilter<"Hasil"> | Date | string
  }

  export type PengetahuanCreateWithoutGejalaInput = {
    kd_pengetahuan: string
    createdAt?: Date | string
    updatedAt?: Date | string
    penyakit: PenyakitCreateNestedOneWithoutPengetahuanInput
  }

  export type PengetahuanUncheckedCreateWithoutGejalaInput = {
    id?: number
    kd_pengetahuan: string
    kd_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PengetahuanCreateOrConnectWithoutGejalaInput = {
    where: PengetahuanWhereUniqueInput
    create: XOR<PengetahuanCreateWithoutGejalaInput, PengetahuanUncheckedCreateWithoutGejalaInput>
  }

  export type PengetahuanCreateManyGejalaInputEnvelope = {
    data: PengetahuanCreateManyGejalaInput | PengetahuanCreateManyGejalaInput[]
    skipDuplicates?: boolean
  }

  export type PengetahuanUpsertWithWhereUniqueWithoutGejalaInput = {
    where: PengetahuanWhereUniqueInput
    update: XOR<PengetahuanUpdateWithoutGejalaInput, PengetahuanUncheckedUpdateWithoutGejalaInput>
    create: XOR<PengetahuanCreateWithoutGejalaInput, PengetahuanUncheckedCreateWithoutGejalaInput>
  }

  export type PengetahuanUpdateWithWhereUniqueWithoutGejalaInput = {
    where: PengetahuanWhereUniqueInput
    data: XOR<PengetahuanUpdateWithoutGejalaInput, PengetahuanUncheckedUpdateWithoutGejalaInput>
  }

  export type PengetahuanUpdateManyWithWhereWithoutGejalaInput = {
    where: PengetahuanScalarWhereInput
    data: XOR<PengetahuanUpdateManyMutationInput, PengetahuanUncheckedUpdateManyWithoutGejalaInput>
  }

  export type PengetahuanScalarWhereInput = {
    AND?: PengetahuanScalarWhereInput | PengetahuanScalarWhereInput[]
    OR?: PengetahuanScalarWhereInput[]
    NOT?: PengetahuanScalarWhereInput | PengetahuanScalarWhereInput[]
    id?: IntFilter<"Pengetahuan"> | number
    kd_pengetahuan?: StringFilter<"Pengetahuan"> | string
    kd_gejala?: StringFilter<"Pengetahuan"> | string
    kd_penyakit?: StringFilter<"Pengetahuan"> | string
    createdAt?: DateTimeFilter<"Pengetahuan"> | Date | string
    updatedAt?: DateTimeFilter<"Pengetahuan"> | Date | string
  }

  export type PengetahuanCreateWithoutPenyakitInput = {
    kd_pengetahuan: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gejala: GejalaCreateNestedOneWithoutPengetahuanInput
  }

  export type PengetahuanUncheckedCreateWithoutPenyakitInput = {
    id?: number
    kd_pengetahuan: string
    kd_gejala: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PengetahuanCreateOrConnectWithoutPenyakitInput = {
    where: PengetahuanWhereUniqueInput
    create: XOR<PengetahuanCreateWithoutPenyakitInput, PengetahuanUncheckedCreateWithoutPenyakitInput>
  }

  export type PengetahuanCreateManyPenyakitInputEnvelope = {
    data: PengetahuanCreateManyPenyakitInput | PengetahuanCreateManyPenyakitInput[]
    skipDuplicates?: boolean
  }

  export type SolusiCreateWithoutPenyakitInput = {
    solusi: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolusiUncheckedCreateWithoutPenyakitInput = {
    id?: number
    solusi: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolusiCreateOrConnectWithoutPenyakitInput = {
    where: SolusiWhereUniqueInput
    create: XOR<SolusiCreateWithoutPenyakitInput, SolusiUncheckedCreateWithoutPenyakitInput>
  }

  export type SolusiCreateManyPenyakitInputEnvelope = {
    data: SolusiCreateManyPenyakitInput | SolusiCreateManyPenyakitInput[]
    skipDuplicates?: boolean
  }

  export type PengetahuanUpsertWithWhereUniqueWithoutPenyakitInput = {
    where: PengetahuanWhereUniqueInput
    update: XOR<PengetahuanUpdateWithoutPenyakitInput, PengetahuanUncheckedUpdateWithoutPenyakitInput>
    create: XOR<PengetahuanCreateWithoutPenyakitInput, PengetahuanUncheckedCreateWithoutPenyakitInput>
  }

  export type PengetahuanUpdateWithWhereUniqueWithoutPenyakitInput = {
    where: PengetahuanWhereUniqueInput
    data: XOR<PengetahuanUpdateWithoutPenyakitInput, PengetahuanUncheckedUpdateWithoutPenyakitInput>
  }

  export type PengetahuanUpdateManyWithWhereWithoutPenyakitInput = {
    where: PengetahuanScalarWhereInput
    data: XOR<PengetahuanUpdateManyMutationInput, PengetahuanUncheckedUpdateManyWithoutPenyakitInput>
  }

  export type SolusiUpsertWithWhereUniqueWithoutPenyakitInput = {
    where: SolusiWhereUniqueInput
    update: XOR<SolusiUpdateWithoutPenyakitInput, SolusiUncheckedUpdateWithoutPenyakitInput>
    create: XOR<SolusiCreateWithoutPenyakitInput, SolusiUncheckedCreateWithoutPenyakitInput>
  }

  export type SolusiUpdateWithWhereUniqueWithoutPenyakitInput = {
    where: SolusiWhereUniqueInput
    data: XOR<SolusiUpdateWithoutPenyakitInput, SolusiUncheckedUpdateWithoutPenyakitInput>
  }

  export type SolusiUpdateManyWithWhereWithoutPenyakitInput = {
    where: SolusiScalarWhereInput
    data: XOR<SolusiUpdateManyMutationInput, SolusiUncheckedUpdateManyWithoutPenyakitInput>
  }

  export type SolusiScalarWhereInput = {
    AND?: SolusiScalarWhereInput | SolusiScalarWhereInput[]
    OR?: SolusiScalarWhereInput[]
    NOT?: SolusiScalarWhereInput | SolusiScalarWhereInput[]
    id?: IntFilter<"Solusi"> | number
    solusi?: StringFilter<"Solusi"> | string
    kd_penyakit?: StringFilter<"Solusi"> | string
    createdAt?: DateTimeFilter<"Solusi"> | Date | string
    updatedAt?: DateTimeFilter<"Solusi"> | Date | string
  }

  export type PenyakitCreateWithoutSolusiInput = {
    kd_penyakit: string
    nama_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pengetahuan?: PengetahuanCreateNestedManyWithoutPenyakitInput
  }

  export type PenyakitUncheckedCreateWithoutSolusiInput = {
    kd_penyakit: string
    nama_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pengetahuan?: PengetahuanUncheckedCreateNestedManyWithoutPenyakitInput
  }

  export type PenyakitCreateOrConnectWithoutSolusiInput = {
    where: PenyakitWhereUniqueInput
    create: XOR<PenyakitCreateWithoutSolusiInput, PenyakitUncheckedCreateWithoutSolusiInput>
  }

  export type PenyakitUpsertWithoutSolusiInput = {
    update: XOR<PenyakitUpdateWithoutSolusiInput, PenyakitUncheckedUpdateWithoutSolusiInput>
    create: XOR<PenyakitCreateWithoutSolusiInput, PenyakitUncheckedCreateWithoutSolusiInput>
    where?: PenyakitWhereInput
  }

  export type PenyakitUpdateToOneWithWhereWithoutSolusiInput = {
    where?: PenyakitWhereInput
    data: XOR<PenyakitUpdateWithoutSolusiInput, PenyakitUncheckedUpdateWithoutSolusiInput>
  }

  export type PenyakitUpdateWithoutSolusiInput = {
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    nama_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengetahuan?: PengetahuanUpdateManyWithoutPenyakitNestedInput
  }

  export type PenyakitUncheckedUpdateWithoutSolusiInput = {
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    nama_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengetahuan?: PengetahuanUncheckedUpdateManyWithoutPenyakitNestedInput
  }

  export type GejalaCreateWithoutPengetahuanInput = {
    kd_gejala: string
    nama_gejala: string
    poin_gejala?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GejalaUncheckedCreateWithoutPengetahuanInput = {
    kd_gejala: string
    nama_gejala: string
    poin_gejala?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GejalaCreateOrConnectWithoutPengetahuanInput = {
    where: GejalaWhereUniqueInput
    create: XOR<GejalaCreateWithoutPengetahuanInput, GejalaUncheckedCreateWithoutPengetahuanInput>
  }

  export type PenyakitCreateWithoutPengetahuanInput = {
    kd_penyakit: string
    nama_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    solusi?: SolusiCreateNestedManyWithoutPenyakitInput
  }

  export type PenyakitUncheckedCreateWithoutPengetahuanInput = {
    kd_penyakit: string
    nama_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    solusi?: SolusiUncheckedCreateNestedManyWithoutPenyakitInput
  }

  export type PenyakitCreateOrConnectWithoutPengetahuanInput = {
    where: PenyakitWhereUniqueInput
    create: XOR<PenyakitCreateWithoutPengetahuanInput, PenyakitUncheckedCreateWithoutPengetahuanInput>
  }

  export type GejalaUpsertWithoutPengetahuanInput = {
    update: XOR<GejalaUpdateWithoutPengetahuanInput, GejalaUncheckedUpdateWithoutPengetahuanInput>
    create: XOR<GejalaCreateWithoutPengetahuanInput, GejalaUncheckedCreateWithoutPengetahuanInput>
    where?: GejalaWhereInput
  }

  export type GejalaUpdateToOneWithWhereWithoutPengetahuanInput = {
    where?: GejalaWhereInput
    data: XOR<GejalaUpdateWithoutPengetahuanInput, GejalaUncheckedUpdateWithoutPengetahuanInput>
  }

  export type GejalaUpdateWithoutPengetahuanInput = {
    kd_gejala?: StringFieldUpdateOperationsInput | string
    nama_gejala?: StringFieldUpdateOperationsInput | string
    poin_gejala?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GejalaUncheckedUpdateWithoutPengetahuanInput = {
    kd_gejala?: StringFieldUpdateOperationsInput | string
    nama_gejala?: StringFieldUpdateOperationsInput | string
    poin_gejala?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenyakitUpsertWithoutPengetahuanInput = {
    update: XOR<PenyakitUpdateWithoutPengetahuanInput, PenyakitUncheckedUpdateWithoutPengetahuanInput>
    create: XOR<PenyakitCreateWithoutPengetahuanInput, PenyakitUncheckedCreateWithoutPengetahuanInput>
    where?: PenyakitWhereInput
  }

  export type PenyakitUpdateToOneWithWhereWithoutPengetahuanInput = {
    where?: PenyakitWhereInput
    data: XOR<PenyakitUpdateWithoutPengetahuanInput, PenyakitUncheckedUpdateWithoutPengetahuanInput>
  }

  export type PenyakitUpdateWithoutPengetahuanInput = {
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    nama_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solusi?: SolusiUpdateManyWithoutPenyakitNestedInput
  }

  export type PenyakitUncheckedUpdateWithoutPengetahuanInput = {
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    nama_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solusi?: SolusiUncheckedUpdateManyWithoutPenyakitNestedInput
  }

  export type PasienCreateWithoutDiagnosaInput = {
    nik: string
    nama_lengkap: string
    tanggal_lahir: Date | string
    umur: number
    jenis_kelamin: string
    phone: string
    alamat: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PasienUncheckedCreateWithoutDiagnosaInput = {
    id?: number
    nik: string
    nama_lengkap: string
    tanggal_lahir: Date | string
    umur: number
    jenis_kelamin: string
    phone: string
    alamat: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PasienCreateOrConnectWithoutDiagnosaInput = {
    where: PasienWhereUniqueInput
    create: XOR<PasienCreateWithoutDiagnosaInput, PasienUncheckedCreateWithoutDiagnosaInput>
  }

  export type DiagnosaDetailCreateWithoutDiagnosaInput = {
    kd_gejala: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnosaDetailUncheckedCreateWithoutDiagnosaInput = {
    id?: number
    kd_gejala: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnosaDetailCreateOrConnectWithoutDiagnosaInput = {
    where: DiagnosaDetailWhereUniqueInput
    create: XOR<DiagnosaDetailCreateWithoutDiagnosaInput, DiagnosaDetailUncheckedCreateWithoutDiagnosaInput>
  }

  export type DiagnosaDetailCreateManyDiagnosaInputEnvelope = {
    data: DiagnosaDetailCreateManyDiagnosaInput | DiagnosaDetailCreateManyDiagnosaInput[]
    skipDuplicates?: boolean
  }

  export type PasienUpsertWithoutDiagnosaInput = {
    update: XOR<PasienUpdateWithoutDiagnosaInput, PasienUncheckedUpdateWithoutDiagnosaInput>
    create: XOR<PasienCreateWithoutDiagnosaInput, PasienUncheckedCreateWithoutDiagnosaInput>
    where?: PasienWhereInput
  }

  export type PasienUpdateToOneWithWhereWithoutDiagnosaInput = {
    where?: PasienWhereInput
    data: XOR<PasienUpdateWithoutDiagnosaInput, PasienUncheckedUpdateWithoutDiagnosaInput>
  }

  export type PasienUpdateWithoutDiagnosaInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    umur?: IntFieldUpdateOperationsInput | number
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasienUncheckedUpdateWithoutDiagnosaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    umur?: IntFieldUpdateOperationsInput | number
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosaDetailUpsertWithWhereUniqueWithoutDiagnosaInput = {
    where: DiagnosaDetailWhereUniqueInput
    update: XOR<DiagnosaDetailUpdateWithoutDiagnosaInput, DiagnosaDetailUncheckedUpdateWithoutDiagnosaInput>
    create: XOR<DiagnosaDetailCreateWithoutDiagnosaInput, DiagnosaDetailUncheckedCreateWithoutDiagnosaInput>
  }

  export type DiagnosaDetailUpdateWithWhereUniqueWithoutDiagnosaInput = {
    where: DiagnosaDetailWhereUniqueInput
    data: XOR<DiagnosaDetailUpdateWithoutDiagnosaInput, DiagnosaDetailUncheckedUpdateWithoutDiagnosaInput>
  }

  export type DiagnosaDetailUpdateManyWithWhereWithoutDiagnosaInput = {
    where: DiagnosaDetailScalarWhereInput
    data: XOR<DiagnosaDetailUpdateManyMutationInput, DiagnosaDetailUncheckedUpdateManyWithoutDiagnosaInput>
  }

  export type DiagnosaDetailScalarWhereInput = {
    AND?: DiagnosaDetailScalarWhereInput | DiagnosaDetailScalarWhereInput[]
    OR?: DiagnosaDetailScalarWhereInput[]
    NOT?: DiagnosaDetailScalarWhereInput | DiagnosaDetailScalarWhereInput[]
    id?: IntFilter<"DiagnosaDetail"> | number
    hasilId?: IntFilter<"DiagnosaDetail"> | number
    kd_gejala?: StringFilter<"DiagnosaDetail"> | string
    createdAt?: DateTimeFilter<"DiagnosaDetail"> | Date | string
    updatedAt?: DateTimeFilter<"DiagnosaDetail"> | Date | string
  }

  export type HasilCreateWithoutDetailsInput = {
    kd_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasien: PasienCreateNestedOneWithoutDiagnosaInput
  }

  export type HasilUncheckedCreateWithoutDetailsInput = {
    id?: number
    pasienId: number
    kd_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HasilCreateOrConnectWithoutDetailsInput = {
    where: HasilWhereUniqueInput
    create: XOR<HasilCreateWithoutDetailsInput, HasilUncheckedCreateWithoutDetailsInput>
  }

  export type HasilUpsertWithoutDetailsInput = {
    update: XOR<HasilUpdateWithoutDetailsInput, HasilUncheckedUpdateWithoutDetailsInput>
    create: XOR<HasilCreateWithoutDetailsInput, HasilUncheckedCreateWithoutDetailsInput>
    where?: HasilWhereInput
  }

  export type HasilUpdateToOneWithWhereWithoutDetailsInput = {
    where?: HasilWhereInput
    data: XOR<HasilUpdateWithoutDetailsInput, HasilUncheckedUpdateWithoutDetailsInput>
  }

  export type HasilUpdateWithoutDetailsInput = {
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasien?: PasienUpdateOneRequiredWithoutDiagnosaNestedInput
  }

  export type HasilUncheckedUpdateWithoutDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    pasienId?: IntFieldUpdateOperationsInput | number
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HasilCreateManyPasienInput = {
    id?: number
    kd_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HasilUpdateWithoutPasienInput = {
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DiagnosaDetailUpdateManyWithoutDiagnosaNestedInput
  }

  export type HasilUncheckedUpdateWithoutPasienInput = {
    id?: IntFieldUpdateOperationsInput | number
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DiagnosaDetailUncheckedUpdateManyWithoutDiagnosaNestedInput
  }

  export type HasilUncheckedUpdateManyWithoutPasienInput = {
    id?: IntFieldUpdateOperationsInput | number
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengetahuanCreateManyGejalaInput = {
    id?: number
    kd_pengetahuan: string
    kd_penyakit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PengetahuanUpdateWithoutGejalaInput = {
    kd_pengetahuan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penyakit?: PenyakitUpdateOneRequiredWithoutPengetahuanNestedInput
  }

  export type PengetahuanUncheckedUpdateWithoutGejalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    kd_pengetahuan?: StringFieldUpdateOperationsInput | string
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengetahuanUncheckedUpdateManyWithoutGejalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    kd_pengetahuan?: StringFieldUpdateOperationsInput | string
    kd_penyakit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengetahuanCreateManyPenyakitInput = {
    id?: number
    kd_pengetahuan: string
    kd_gejala: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolusiCreateManyPenyakitInput = {
    id?: number
    solusi: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PengetahuanUpdateWithoutPenyakitInput = {
    kd_pengetahuan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gejala?: GejalaUpdateOneRequiredWithoutPengetahuanNestedInput
  }

  export type PengetahuanUncheckedUpdateWithoutPenyakitInput = {
    id?: IntFieldUpdateOperationsInput | number
    kd_pengetahuan?: StringFieldUpdateOperationsInput | string
    kd_gejala?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengetahuanUncheckedUpdateManyWithoutPenyakitInput = {
    id?: IntFieldUpdateOperationsInput | number
    kd_pengetahuan?: StringFieldUpdateOperationsInput | string
    kd_gejala?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolusiUpdateWithoutPenyakitInput = {
    solusi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolusiUncheckedUpdateWithoutPenyakitInput = {
    id?: IntFieldUpdateOperationsInput | number
    solusi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolusiUncheckedUpdateManyWithoutPenyakitInput = {
    id?: IntFieldUpdateOperationsInput | number
    solusi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosaDetailCreateManyDiagnosaInput = {
    id?: number
    kd_gejala: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnosaDetailUpdateWithoutDiagnosaInput = {
    kd_gejala?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosaDetailUncheckedUpdateWithoutDiagnosaInput = {
    id?: IntFieldUpdateOperationsInput | number
    kd_gejala?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosaDetailUncheckedUpdateManyWithoutDiagnosaInput = {
    id?: IntFieldUpdateOperationsInput | number
    kd_gejala?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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