import { articleService } from "@/services/article.service";
import { IArticleResponse } from "@/types/article.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateArticle(key?: string) {
  const queryClient = useQueryClient();

  const { mutate: updateArticle } = useMutation({
    mutationKey: ["update article", key],
    mutationFn: ({ id, data }: { id: string; data: IArticleResponse }) =>
      articleService.updateArticle(id, data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });

  return { updateArticle };
}
