import React from 'react';
import { QuickReply } from '../types/chat';

interface QuickRepliesProps {
  replies: QuickReply[];
  onReplyClick: (reply: string) => void;
  disabled?: boolean;
}

export const QuickReplies: React.FC<QuickRepliesProps> = ({ replies, onReplyClick, disabled = false }) => {
  if (replies.length === 0) return null;

  return (
    <div className="px-4 pb-4">
      <div className="flex flex-wrap gap-2">
        {replies.map((reply) => (
          <button
            key={reply.id}
            onClick={() => onReplyClick(reply.text)}
            disabled={disabled}
            className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-all hover:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {reply.text}
          </button>
        ))}
      </div>
    </div>
  );
};