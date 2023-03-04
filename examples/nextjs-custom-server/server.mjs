/**
 * https://nextjs.org/docs/advanced-features/custom-server
 */
import { createServer } from 'node:http'
import next from 'next'
import {
  queryParserMiddleware,
  launchEditorMiddleware,
} from '@react-dev-inspector/middleware'


const dev = process.env.NODE_ENV !== 'production'

const hostname = process.env.HOST || '0.0.0.0'
const port = process.env.PORT ? Number(process.env.PORT) : 3000
const app = next({
  dev,
  hostname,
  port,
})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    /**
     * middlewares, from top to bottom
     */
    const middlewares = [
      /**
       * `react-dev-inspector` server config for nextjs (two middlewares)
       *
       * That's CANNOT be Next.js middleware due to [middleware is in Edge Runtime](https://github.com/vercel/next.js/discussions/34179)
       */
      queryParserMiddleware,
      launchEditorMiddleware,

      /** Next.js default app handle */
      (req, res) => handle(req, res),
    ]

    const middlewarePipeline = middlewares.reduceRight(
      (next, middleware) => (
        () => { middleware(req, res, next) }
      ),
      () => {},
    )

    try {
      middlewarePipeline()
    }
    catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.debug(`> Ready on http://${hostname}:${port}`)
  })
})
