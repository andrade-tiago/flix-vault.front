export default class PaginatedList<T> {
  constructor(
    readonly data: T[],
    readonly pageIndex: number,
    readonly totalPages: number,
    readonly totalResults: number,
  ) {}
}
