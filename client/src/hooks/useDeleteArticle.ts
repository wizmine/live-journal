import { articleService } from "@/services/article.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteArticle(key?: string) {
  const queryClient = useQueryClient();

  const { mutate: deleteArticle } = useMutation({
    mutationKey: ["delete article", key],
    mutationFn: ({ id }: { id: string }) =>
      articleService.deleteArticle(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });

  return { deleteArticle };
}
