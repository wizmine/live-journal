import { axiosClassic, axiosWithAuth } from "@/api/interceptors";
import { IArticle, IArticleResponse } from "@/types/article.types";

export const articleService = {
  async getFeed() {
    const response = await axiosClassic.get<IArticle[]>("/article/feed");
    return response;
  },

  async createArticle(data: IArticleResponse) {
    const response = await axiosWithAuth.post("/article", data);
    return response;
  },

  async updateArticle(id: string, data: IArticleResponse) {
    const response = await axiosWithAuth.put(`/article/${id}`, data);
    return response;
  },

  async deleteArticle(id: string) {
    const response = await axiosWithAuth.delete(`/article/${id}`);
    return response;
  },
};
