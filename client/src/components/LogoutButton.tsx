import { authService } from "@/services/auth.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "antd";
import React from "react";

const LogoutButton = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authService.logout(),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["auth/login/access-token"],
      });
      window.location.reload();
    },
  });

  return (
    <Button type="primary" onClick={() => mutate()} danger>
      Go out
    </Button>
  );
};

export default LogoutButton;
