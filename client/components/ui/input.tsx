import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
};

export function Input({ label, hint, className, ...props }: InputProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-white/88">{label}</span>
      <input
        className={cn(
          "h-13 rounded-2xl border border-white/10 bg-white/6 px-4 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-sky-300/60 focus:bg-white/8",
          className,
        )}
        {...props}
      />
      {hint ? <span className="text-xs text-slate-400">{hint}</span> : null}
    </label>
  );
}
