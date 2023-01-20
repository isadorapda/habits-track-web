import Logo from '../assets/logo.svg'
export function Header() {
  return (
    <div className="flex justify-between items-center px-10">
      <img src={Logo} alt="Logo habit tracker" />
      <button
        type="button"
        className="px-6 py-6 bg-transparent border border-violet-500 hover:border-violet-300 rounded-lg text-white text-center"
      >
        <span className="text-violet-500 pr-3">+</span> New Habit
      </button>
    </div>
  )
}
