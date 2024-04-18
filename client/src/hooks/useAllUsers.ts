import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export function useAllUsers() {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () => userService.getAllUsers(),
  });

  const users = data;

  return { users };
}
