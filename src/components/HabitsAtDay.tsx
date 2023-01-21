import * as Popover from '@radix-ui/react-popover'
import { ProgressBar } from './ProgressBar'

export function HabitsAtDay() {
  return (
    <Popover.Root>
      <Popover.Trigger className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg" />
      <Popover.Portal>
        <Popover.Content className="min-w-[320px] bg-zinc-900 p-6 flex flex-col rounded-2xl">
          <Popover.Arrow className="w-7 h-4 fill-zinc-900" />
          <span className="text-zinc-400 font-semibold">monday</span>
          <span className="text-3xl text-white font-extrabold mt-2">23/01</span>
          <ProgressBar progress={66} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
