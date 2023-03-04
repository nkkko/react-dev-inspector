/**
 * https://nextjs.org/docs/advanced-features/custom-server
 */
const { createServer } = require('node:http')
const next = require('next')
const {
  queryParserMiddleware,
  launchEditorMiddleware,
} = require('@react-dev-inspector/middleware')

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
       * react-dev-inspector server config for nextjs (two middlewares)
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

    middlewarePipeline()
  }).listen(port, (err) => {
    if (err) throw err
    console.debug(`> Ready on http://${hostname}:${port}`)
  })
})
