import { useEffect, useState } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import dayjs from 'dayjs'
import { api } from '../lib/axios'
import { DailyHabitsAPI } from '../@types/model'

interface Props {
  date: Date
  onCompletedCount: (completed: number) => void
}

export function DailyHabitsList({ date, onCompletedCount }: Props) {
  const [dailyHabits, setDailyHabits] = useState<DailyHabitsAPI>()

  useEffect(() => {
    api
      .get('/day', {
        params: {
          date: date.toISOString(),
        },
      })
      .then((response) => setDailyHabits(response.data))
  }, [])

  const isDateBefore = dayjs(date).endOf('day').isBefore(new Date())

  async function handleToggleComplete(habitId: string) {
    await api.patch(`habits/${habitId}/toggle`)
    const isHabitCompleted = dailyHabits?.completedHabits.includes(habitId)

    let completedHabits: string[] = []
    if (isHabitCompleted) {
      completedHabits = dailyHabits!.completedHabits.filter(
        (habit) => habit !== habitId
      )
    } else {
      completedHabits = [...dailyHabits!.completedHabits, habitId]
    }
    setDailyHabits({
      possibleHabits: dailyHabits!.possibleHabits,
      completedHabits,
    })
    onCompletedCount(completedHabits.length)
  }
  return (
    <div className="mt-6 flex flex-col gap-3">
      {dailyHabits?.possibleHabits.map((habit) => (
        <Checkbox.Root
          key={habit.id}
          onCheckedChange={() => handleToggleComplete(habit.id)}
          checked={dailyHabits.completedHabits.includes(habit.id)}
          disabled={isDateBefore}
          className="flex items-center gap-3 group focus:outline-none disabled:cursor-not-allowed"
        >
          <div className="flex justify-center items-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors group-focus:ring-2 group-focus:ring-violet-600 group-focus:ring-offset-2 group-focus:ring-offset-background w-8 h-8 rounded-lg">
            <Checkbox.Indicator>
              <Check size={20} className="text-white" />
            </Checkbox.Indicator>
          </div>
          <span className="text-white first-letter:capitalize font-semibold text-xl group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
            {habit.title}
          </span>
        </Checkbox.Root>
      ))}
    </div>
  )
}
