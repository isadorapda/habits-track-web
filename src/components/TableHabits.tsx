import { useEffect, useState } from 'react'
import { SummaryHabits } from '../@types/model'
import dayjs from 'dayjs'
import { api } from '../lib/axios'
import { generateDates } from '../utils/generateDates'
import { WEEK_DAYS_CHAR } from '../constants/weekDays'
import { HabitsAtDay } from './HabitsAtDay'

const summaryDates = generateDates()
const minimumDatesToShow = 18 * 7
const totalEmptyDates = minimumDatesToShow - summaryDates.length

export function TableHabits() {
  const [summaryData, setSummaryData] = useState<SummaryHabits[]>([])

  useEffect(() => {
    api.get('/summary').then((response) => setSummaryData(response.data))
  }, [])

  return (
    <div className="w-full flex">
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
        {summaryData.length &&
          summaryDates.map((date) => {
            const findDay = summaryData.find((day) =>
              dayjs(date).isSame(day.date, 'day')
            )
            return (
              <HabitsAtDay
                key={date.toString()}
                date={date}
                defaultCompleted={findDay?.completed}
                amount={findDay?.amount}
              />
            )
          })}
        {totalEmptyDates > 0 &&
          Array.from({ length: totalEmptyDates }).map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 border-2 rounded-lg bg-zinc-900 border-zinc-800 opacity-40 cursor-not-allowed"
            />
          ))}
      </div>
    </div>
  )
}
