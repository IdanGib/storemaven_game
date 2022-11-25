import { useToast } from "@chakra-ui/react";
import { useRef } from "react";

export function useToastMessage() {
  const ref = useRef<any>();
  const toast = useToast();
  return (data: { success: boolean, message?: string }) => {
    const { success, message } = data;
    toast.close(ref.current);
    if (!message) {
      return;
    }
    ref.current = toast(
      {
        title: message,
        duration: 2000,
        status: success ? 'success' : 'error'
      }
    );
  };
}