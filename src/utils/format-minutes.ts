import { isNumeric } from "./is-numeric"

const formatMinutes = (minutes: number | null): string => {
  if (!isNumeric(minutes)) {
    return 'N/A'
  }

  return minutes >= 60 ? (
    Math.floor(minutes / 60).toString()
      + 'h'
      + (minutes % 60).toString().padStart(2, '0')
  ) : (
    `${minutes} min`
  )
}

export default formatMinutes
