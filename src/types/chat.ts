export interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  isTyping?: boolean;
}

export interface QuickReply {
  id: string;
  text: string;
}