import {
  ChatMessageData,
  CheerPacket,
  AnnounceGiveawayPacket,
  DrawGiveawayPacket,
  EndGiveawayPacket,
  EnterGiveawayPacket,
  FollowPacket,
  RaidPacket,
  StartGiveawayPacket,
  SubPacket,
  WebSocketPacket,
} from "p4nth3rb0t-types";
import { createContext, Dispatch } from "react";

export type AlertQueueEvent =
  | CheerPacket
  | SubPacket
  | FollowPacket
  | RaidPacket
  | AnnounceGiveawayPacket
  | DrawGiveawayPacket;

export type GiveawayEntryEvent = EnterGiveawayPacket | StartGiveawayPacket | EndGiveawayPacket;

export interface AlertCompleteAction {
  event: "alert_complete";
  id: "alert_complete";
}

export type AllActions = WebSocketPacket | AlertCompleteAction;

export interface AppState {
  chatMessages: ChatMessageData[];
  alerts: AlertQueueEvent[];
  giveawayEntries: EnterGiveawayPacket[];
  giveawayInProgress: boolean;
  currentMood: string;
}

interface AppContextProps {
  state: AppState;
  dispatch: Dispatch<any>;
}

const AppContext = createContext({} as AppContextProps);

export default AppContext;
