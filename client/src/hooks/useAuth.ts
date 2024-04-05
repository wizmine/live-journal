import { authService } from "@/services/auth.service";
import { useQuery } from "@tanstack/react-query";

export function useAuth() {
  const { data } = useQuery({
    queryKey: ["auth/login/access-token"],
    queryFn: () => authService.getNewTokens(),
  });

  const user = data?.data.user;

  return { user };
}
