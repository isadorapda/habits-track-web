interface ProgressBarProps {
  progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="h-3 bg-zinc-700 rounded-xl w-full mt-4 mb-6">
      <div
        className="h-3 bg-violet-600 rounded-xl absolute"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-label="Progress of habits completed in the selected date"
        aria-valuenow={progress}
      />
    </div>
  )
}
