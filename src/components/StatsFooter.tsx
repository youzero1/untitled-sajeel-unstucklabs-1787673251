interface StatsFooterProps {
  total: number;
  completed: number;
}

export default function StatsFooter({ total, completed }: StatsFooterProps) {
  return (
    <div className="mt-6 text-center text-sm text-slate-500">
      {total === 0 ? 'No tasks yet' : `${completed} of ${total} tasks complete`}
    </div>
  );
}
