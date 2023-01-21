import { Check } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { WEEK_DAYS } from '../constants/weekDays'

export function AddNewHabitForm() {
  return (
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="new-habit-input" className="font-semibold leading-tight">
        What is your commitment?
      </label>
      <input
        autoFocus
        type="text"
        id="new-habit-input"
        className="bg-zinc-800 rounded-lg w-full p-4 mt-3 text-white placeholder:text-zinc-400"
        placeholder="e.g. exercise, eat 3 fruits a day, meditate... "
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Schedule
      </label>
      <div className="flex flex-col w-full gap-2 mt-3">
        {WEEK_DAYS.map((weekDay) => (
          <Checkbox.Root
            key={weekDay}
            className="flex items-center gap-3 group focus:outline-none group"
          >
            <div className="w-8 h-8 bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 rounded-lg flex items-center justify-center">
              <Checkbox.Indicator>
                <Check size={20} className="text-white" />
              </Checkbox.Indicator>
            </div>
            <label className="capitalize">{weekDay}</label>
          </Checkbox.Root>
        ))}
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center mt-4 p-4 gap-3 rounded-lg bg-green-600 hover:bg-green-500 text-white font-semibold"
      >
        {' '}
        <Check size={20} /> Add
      </button>
    </form>
  )
}
