/**
 *
 * @param {import('express').Application} app
 */
export default function (app) {
  app.get("/api/hello", (req, res) => {
    res.json({
      msg: "hello",
    })
  })
}
