export default function getDate() {
  // Create new date
  const NEW_DATE = new Date()
  NEW_DATE.setHours(10, 30, 53, 400)
  const LOG_DATE = NEW_DATE.getFullYear() + '-' + (NEW_DATE.getMonth() + 1) + '-' + NEW_DATE.getDate()
}
