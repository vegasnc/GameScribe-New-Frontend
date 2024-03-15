import axios from "axios";
import type { AxiosResponse } from "axios";
import type { iGenerateMessage, iGeneratedResult } from "~/types/chat.types";
import { API_URL } from "../constants";

// takes in [{role: string, content: string}] (array)
export const generateMonster = async (data: iGenerateMessage[]): Promise<iGeneratedResult> => {
  const res: AxiosResponse<iGeneratedResult> = await axios.post(`${API_URL}/monster/generate_content`, {message_list: data, last_content: ""}, {});
  return res.data;
}
