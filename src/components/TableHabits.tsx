import { WEEK_DAYS_CHAR } from '../constants/weekDays'
import { generateDates } from '../utils/generateDates'
import { HabitsAtDay } from './HabitsAtDay'

const summaryDates = generateDates()

const minimumDatesToShow = 18 * 7
const totalEmptyDates = minimumDatesToShow - summaryDates.length

export function TableHabits() {
  return (
    <div className="w-full flex ">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {WEEK_DAYS_CHAR.map((day, i) => (
          <div
            key={`${day}-${i}`}
            className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date, i) => (
          <HabitsAtDay completed={4} amount={5} key={date.toString()} />
        ))}
        {totalEmptyDates > 0 &&
          Array.from({ length: totalEmptyDates }).map((_, i) => (
            <div className="w-10 h-10 border-2 rounded-lg bg-zinc-900 border-zinc-800 opacity-40 cursor-not-allowed" />
          ))}
      </div>
    </div>
  )
}
