import { axiosWithAuth } from "@/api/interceptors";
import { IChatResponse } from "@/types/chat.types";

export const chatService = {
  async createChat(data: IChatResponse) {
    const response = await axiosWithAuth.post("/chat", data);
    return response;
  },
};
