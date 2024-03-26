import axios from "axios";
import type { AxiosResponse } from "axios";
import type { iGenerateMessage, iGeneratedResult, iGeneratedResultSimple } from "~/types/chat.types";
import { API_URL } from "../constants";
import type { ChatOption } from "~/types/chat.types";

// takes in [{role: string, content: string}] (array)
export const generateContent = async (mode: ChatOption, data: iGenerateMessage[]): Promise<iGeneratedResult | iGeneratedResultSimple> => {
  let endpoint = "";
  switch (mode) {
    case "Monster":
      endpoint = "/monster/generate_content";
      break;
    case "Spell":
      endpoint = "/spell/generate_content";
      break;
    case "Background":
      endpoint = "/background/generate_content";
      break;
    case "Magic Item":
      endpoint = "/magic_item/generate_content";
      break;
    case "NPC":
      endpoint = "/npc/generate_content";
      break;
    default:
      break;
  }
  const res: AxiosResponse<iGeneratedResult> = await axios.post(`${API_URL}${endpoint}`, {message_list: data, last_content: ""}, {});
  return res.data;
}
