import { articleService } from "@/services/article.service";
import { useQuery } from "@tanstack/react-query";

export function useArticles() {
  const { data } = useQuery({
    queryKey: ["articles"],
    queryFn: () => articleService.getFeed(),
  });

  const articles = data?.data;

  return { articles };
}
