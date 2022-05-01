import helloRoute from "../routes/hello.route.js"

/**
 *
 * @param {import('express').Application} app
 */

export default function (app) {
  helloRoute(app)
}
