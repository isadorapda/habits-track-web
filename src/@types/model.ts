export interface SummaryHabits {
  id: string
  amount: number
  completed: number
  date: string
}

export interface SummaryDataAPI {
  data: SummaryHabits[]
}

export interface PossibleHabits {
  id: string
  created_at: string
  title: string
}
export interface DailyHabitsAPI {
  possibleHabits: PossibleHabits[]
  completedHabits: string[]
}
