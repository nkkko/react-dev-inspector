import type { NextHandleFunction, IncomingMessage } from 'connect'

/** due to express not export `core.Query` type */
export interface QueryParams { [key: string]: undefined | string | string[] }

export type IncomingRequest = IncomingMessage & { query?: QueryParams }


export const queryParserMiddleware: NextHandleFunction = (req: IncomingRequest, res, next) => {
  if (!req.query && req.url) {
    const url = new URL(req.url, 'https://placeholder.domain')
    req.query = Object.fromEntries(url.searchParams.entries())
  }
  next()
}
