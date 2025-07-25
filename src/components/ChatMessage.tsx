import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  if (message.isTyping) {
    return (
      <div className="flex items-start gap-3 mb-4 animate-fade-in">
        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border border-gray-100 max-w-xs">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-3 mb-4 animate-fade-in ${message.isBot ? '' : 'flex-row-reverse'}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        message.isBot 
          ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
          : 'bg-gradient-to-r from-green-500 to-teal-600'
      }`}>
        {message.isBot ? (
          <Bot className="w-4 h-4 text-white" />
        ) : (
          <User className="w-4 h-4 text-white" />
        )}
      </div>
      <div className={`max-w-xs lg:max-w-md ${message.isBot ? '' : 'text-right'}`}>
        <div className={`rounded-2xl px-4 py-3 shadow-sm ${
          message.isBot 
            ? 'bg-white border border-gray-100 rounded-tl-md' 
            : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-tr-md'
        }`}>
          <p className="text-sm leading-relaxed">{message.text}</p>
        </div>
        <p className={`text-xs text-gray-500 mt-1 ${message.isBot ? 'text-left' : 'text-right'}`}>
          {formatTime(message.timestamp)}
        </p>
      </div>
    </div>
  );
};