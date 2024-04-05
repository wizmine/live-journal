import { axiosWithAuth, axiosClassic } from "@/api/interceptors";
import { IAuthor, TypeAuthorForm } from "@/types/auth.types";

export interface IAuthorProfile {
  email?: string;
  name?: string;
  password?: string;
}

export const userService = {
  async getAllUsers() {
    const response = await axiosClassic.get<IAuthor[]>("/users");

    return response.data;
  },

  async update(data: TypeAuthorForm) {
    const response = await axiosWithAuth.put("/users/update", data);
    return response.data;
  },
};
