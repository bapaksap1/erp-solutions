export interface ButtonType {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}
