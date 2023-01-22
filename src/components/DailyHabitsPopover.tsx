import { useEffect, useState } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import dayjs from 'dayjs'
import { api } from '../lib/axios'
import { DailyHabitsAPI } from '../@types/model'

interface Props {
  date: Date
}

export function DailyHabitsPopover({ date }: Props) {
  const [dailyHabits, setDailyHabits] = useState<DailyHabitsAPI>()

  useEffect(() => {
    async function getHabitsData() {
      try {
        await api
          .get('/day', {
            params: {
              date,
            },
          })
          .then((response) => setDailyHabits(response.data))
      } catch (error) {}
    }
    getHabitsData()
  }, [])

  const isDateBefore = dayjs(date).endOf('day').isBefore(new Date())

  return (
    <div className="mt-6 flex flex-col gap-3">
      {dailyHabits?.possibleHabits.map((habits) => (
        <Checkbox.Root
          key={habits.id}
          checked={dailyHabits.completedHabits.includes(habits.id)}
          disabled={isDateBefore}
          className="flex items-center gap-3 group"
        >
          <div className="flex justify-center items-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 w-8 h-8 rounded-lg">
            <Checkbox.Indicator>
              <Check size={20} className="text-white" />
            </Checkbox.Indicator>
          </div>
          <span className="text-white capitalize font-semibold text-xl group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
            {habits.title}
          </span>
        </Checkbox.Root>
      ))}
    </div>
  )
}
