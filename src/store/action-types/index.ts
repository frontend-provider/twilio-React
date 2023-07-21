export enum ActionType {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  UPSERT_CONVERSATION = "UPSERT_CONVERSATION",
  REMOVE_CONVERSATION = "REMOVE_CONVERSATION",
  UPDATE_CURRENT_CONVERSATION = "UPDATE_CURRENT_CONVERSATION",
  CONVERSATION_LAST_READ_INDEX = "CONVERSATION_LAST_READ_INDEX",
  ADD_MESSAGES = "ADD_MESSAGES",
  PUSH_MESSAGES = "PUSH_MESSAGES",
  REMOVE_MESSAGES = "REMOVE_MESSAGES",
  UPDATE_LOADING_STATE = "update loading state",
  UPDATE_PARTICIPANTS = "UPDATE_PARTICIPANTS",
  UPDATE_USER = "UPDATE_USER",
  UPDATE_UNREAD_MESSAGES = "UPDATE_UNREAD_MESSAGES",
  UPDATE_CONVERSATION = "UPDATE_CONVERSATION",
  ADD_ATTACHMENT = "ADD_ATTACHMENT",
  CLEAR_ATTACHMENTS = "CLEAR_ATTACHMENTS",
  TYPING_STARTED = "TYPING_STARTED",
  TYPING_ENDED = "TYPING_ENDED",
  ADD_NOTIFICATIONS = "ADD_NOTIFICATIONS",
  REMOVE_NOTIFICATIONS = "REMOVE_NOTIFICATIONS",
}
