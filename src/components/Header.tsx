import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import Logo from '../assets/logo.svg'
import { AddNewHabitForm } from './AddNewHabitForm'

export function Header() {
  return (
    <div className="flex justify-between items-center px-10">
      <img src={Logo} alt="Logo habit tracker" />
      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="px-6 py-6 bg-transparent border border-violet-500 hover:border-violet-300 rounded-lg text-white text-center"
        >
          <span className="text-violet-500 pr-3">+</span> New Habit
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen inset-0 fixed bg-black/80" />
          <Dialog.Content className="absolute rounded-2xl bg-zinc-900 p-10 w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            <Dialog.Close className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-200">
              <X size={24} aria-label="Close" />
            </Dialog.Close>
            <Dialog.Title className="text-white text-3xl font-extrabold leading-tight">
              Add a new habit
            </Dialog.Title>
            <AddNewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
