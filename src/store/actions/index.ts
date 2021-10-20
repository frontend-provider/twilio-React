import { Conversation } from "@twilio/conversations/lib/conversation";
import { Message } from "@twilio/conversations/lib/message";
import { Participant } from "@twilio/conversations/lib/participant";

import { ActionType } from "../action-types";

interface LoginAction {
  type: ActionType.LOGIN;
  payload: string;
}

interface LogOutAction {
  type: ActionType.LOGOUT;
}

interface ListConverationAction {
  type: ActionType.LIST_CONVERSATIONS;
  payload: Conversation[];
}

interface UpdateCurrentConversation {
  type: ActionType.UPDATE_CURRENT_CONVERSATION;
  payload: string;
}

interface SetLastReadIndex {
  type: ActionType.CONVERSATION_LAST_READ_INDEX;
  payload: number;
}

interface AddMessages {
  type: ActionType.ADD_MESSAGES;
  payload: { channelSid: string; messages: Message[] };
}

interface RemoveMessages {
  type: ActionType.REMOVE_MESSAGES;
  payload: { channelSid: string; messages: Message[] };
}

interface UpdateLoadingState {
  type: ActionType.UPDATE_LOADING_STATE;
  payload: boolean;
}

interface UpdateParticipants {
  type: ActionType.UPDATE_PARTICIPANTS;
  payload: { participants: Participant[]; sid: string };
}

interface UpdateUnreadMessages {
  type: ActionType.UPDATE_UNREAD_MESSAGES;
  payload: { channelSid: string; unreadCount: number };
}

interface UpdateConversation {
  type: ActionType.UPDATE_CONVERSATION;
  payload: { channelSid: string; parameters: Partial<Conversation> };
}

interface RemoveConversation {
  type: ActionType.REMOVE_CONVERSATION;
  payload: string;
}

interface AddAttachment {
  type: ActionType.ADD_ATTACHMENT;
  payload: { channelSid: string; messageIndex: string; attachment: Blob };
}

interface TypingStarted {
  type: ActionType.TYPING_STARTED;
  payload: { channelSid: string; participant: string };
}

interface TypingEnded {
  type: ActionType.TYPING_ENDED;
  payload: { channelSid: string; participant: string };
}

export type Action =
  | LoginAction
  | LogOutAction
  | ListConverationAction
  | UpdateCurrentConversation
  | SetLastReadIndex
  | AddMessages
  | RemoveMessages
  | UpdateLoadingState
  | UpdateParticipants
  | UpdateUnreadMessages
  | UpdateConversation
  | RemoveConversation
  | AddAttachment
  | TypingStarted
  | TypingEnded;
