import moment from 'moment'

export const pathToDate = (path) => {
  const dateParts = path.replace(/^\//, '').slice(0, 10)
  return moment(dateParts).format('MMMM D, YYYY')
}
