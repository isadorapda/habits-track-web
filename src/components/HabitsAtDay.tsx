import * as Popover from '@radix-ui/react-popover'
import { clsx } from 'clsx'
import { ProgressBar } from './ProgressBar'

interface AmountCompletedProps {
  completed: number
  amount: number
}

export function HabitsAtDay({ completed, amount }: AmountCompletedProps) {
  const completedPercentage = Math.round((completed / amount) * 100)
  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('w-10 h-10 border-2 rounded-lg', {
          'bg-zinc-900 border-zinc-800': completedPercentage === 0,
          'bg-violet-900 border-violet-700':
            completedPercentage > 0 && completedPercentage < 20,
          'bg-violet-800 border-violet-600':
            completedPercentage >= 20 && completedPercentage < 40,
          'bg-violet-700 border-violet-500':
            completedPercentage >= 40 && completedPercentage < 60,
          'bg-violet-600 border-violet-500':
            completedPercentage >= 60 && completedPercentage < 80,
          'bg-violet-500 border-violet-400': completedPercentage >= 80,
        })}
      />
      <Popover.Portal>
        <Popover.Content className="min-w-[320px] bg-zinc-900 p-6 flex flex-col rounded-2xl">
          <Popover.Arrow className="w-7 h-4 fill-zinc-900" />
          <span className="text-zinc-400 font-semibold">monday</span>
          <span className="text-3xl text-white font-extrabold mt-2">23/01</span>
          <ProgressBar progress={completedPercentage} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
