import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Role, iGenerateMessage, iGeneratedResult, iGeneratedResultSimple } from "~/types/chat.types";
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

  // uncomment when context is ready
  const lastAssistantMessage = findLast(data, "assistant");
  let lastContent = "";
  if ( lastAssistantMessage != -1 ) {
    const obj = lastAssistantMessage as iGenerateMessage;

    switch (mode) {
      case "Monster":
        lastContent = "<monster>" + obj.content; + "</monster> \n <dalle></dalle>";
        break;
      default:
        break;
    }
  }
  // console.log(">>>lastAssistantMessage", lastAssistantMessage.content)
  
  const res: AxiosResponse<iGeneratedResult> = await axios.post(
    `${API_URL}${endpoint}`, 
    {
      message_list: data, 
      last_content: lastContent 
    }, {});
  return res.data;
}

const findLast = (arr: iGenerateMessage[], key: Role): iGenerateMessage | number => {
  if (arr.length < 1) return -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === undefined) return -1;
    else if (arr[i]?.role === key) {
      return arr[i]!;
    }
  }
  return -1;
}
