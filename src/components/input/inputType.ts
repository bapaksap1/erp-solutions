export interface InputType {
  placeholder?: string;
  buttonLabel: string;
  onSend: (message: string) => void;
}
