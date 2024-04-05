import { articleService } from "@/services/article.service";
import { IArticleResponse } from "@/types/article.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateArticle() {
  const queryClient = useQueryClient();

  const { mutate: createArticle } = useMutation({
    mutationKey: ["create article"],
    mutationFn: ({ data }: { data: IArticleResponse }) => articleService.createArticle(data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });

  return { createArticle };
}
