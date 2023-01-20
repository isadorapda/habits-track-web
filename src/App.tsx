import { Header } from './components/Header'
import { TableHabits } from './components/TableHabits'

export function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-20">
        <Header />
        <TableHabits />
      </div>
    </div>
  )
}
