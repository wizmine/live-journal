import { chatService } from "@/services/chat.service";
import { IChatResponse } from "@/types/chat.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateChat() {
  const queryClient = useQueryClient();

  const { mutate: createChat } = useMutation({
    mutationKey: ["create chat"],
    mutationFn: (data: IChatResponse) => chatService.createChat(data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["auth/login/access-token"],
      });
    },
  });

  return { createChat };
}
