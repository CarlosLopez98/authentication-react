export enum ToastTypes {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error"
}

export interface ToastProps {
  message: string;
  type?: ToastTypes;
  onClose: () => void;
}

interface ToastContextProvider {
  addToast: (message: string, type: ToastTypes) => void
}