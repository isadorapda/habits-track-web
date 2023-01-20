import { WEEK_DAYS } from '../constants/weekDays'
import { HabitsAtDay } from './HabitsAtDay'

export function TableHabits() {
  return (
    <div className="w-full flex ">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {WEEK_DAYS.map((day, i) => (
          <div
            key={`${day}-${i}`}
            className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        <HabitsAtDay />
        <HabitsAtDay />
        <HabitsAtDay />
        <HabitsAtDay />
        <HabitsAtDay />
        <HabitsAtDay />
        <HabitsAtDay />
        <HabitsAtDay />
        <HabitsAtDay />
        <HabitsAtDay />
      </div>
    </div>
  )
}
