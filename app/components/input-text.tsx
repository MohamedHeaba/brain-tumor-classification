import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useId, useState, type Dispatch, type SetStateAction } from "react";
import { cn } from "~/lib/utils";
import { Eye, EyeOff } from "lucide-react";

type InputText = {
  lable: string;
  placeholder?: string;
  className?: string;
  type?: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  classNames?: {
    input?: string;
    label?: string;
  };
};

export default function InputText({
  lable,
  placeholder,
  className,
  type = "text",
  value,
  onChange,
  classNames,
}: InputText) {
  const id = useId();
  const [isVisible, setIsVisible] = useState<boolean>(type !== "text");

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);
  return (
    <div
      className={cn("space-y-4", className)}
      style={{ "--ring": "234 89% 74%" } as React.CSSProperties}
    >
      <Label htmlFor={id}>{lable}</Label>
      <div className="relative">
        <Input
          id={id}
          placeholder={placeholder}
          type={type !== "password" ? type : isVisible ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-black outline-offset-2 transition-colors hover:text-muted-foreground/80 cursor-pointer focus:z-10 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          aria-controls="password"
        >
          {type === "password" &&
            (isVisible ? (
              <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Eye size={16} strokeWidth={2} aria-hidden="true" />
            ))}
        </button>
      </div>
    </div>
  );
}
