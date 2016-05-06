exports.loadContext = function(callback) {
  let context = require.context('./pages', true)
  if (module.hot) {
    module.hot.accept(context.id, () => {
      context = require.context('./pages', true)
      return callback(context)
    })
  }
  return callback(context)
}

const parseDateParts = (pathname) => /(\d{4})-(\d{2})-(\d{2})-([^\/]*)/.exec(pathname)
exports.rewritePath = (parsedFilePath, metadata) => {
  const dateParts = parseDateParts(parsedFilePath.path)
  if (dateParts) {
    return `/${dateParts[1]}/${dateParts[2]}/${dateParts[3]}/${dateParts[4]}/`
  }
  return ''
}
