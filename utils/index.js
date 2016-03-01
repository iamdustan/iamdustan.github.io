
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const toMonth = (index) => MONTHS[index]
const toDate = (date) => `${Number(date)}`

export const pathToDate = (path) => {
  const dateParts = path.slice(0, 10).split('-')
  return `${toMonth(Number(dateParts[1]))} ${toDate(dateParts[2])}, ${dateParts[0]}`
}
