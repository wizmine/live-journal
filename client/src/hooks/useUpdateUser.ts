import { authService } from "@/services/auth.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser } = useMutation({
    mutationKey: ["update user"],
    mutationFn: () => authService.getNewTokens(),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["auth/login/access-token"],
      });
    },
  });

  return { updateUser };
}
