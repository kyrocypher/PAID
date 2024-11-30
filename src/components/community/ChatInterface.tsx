import { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'

interface Message {
  id: string
  sender: string
  content: string
  timestamp: number
}

export default function ChatInterface() {
  const { address } = useAccount()
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const message: Message = {
      id: Date.now().toString(),
      sender: address || '',
      content: newMessage,
      timestamp: Date.now(),
    }

    setMessages(prev => [...prev, message])
    setNewMessage('')
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="h-[600px] flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.sender === address ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block rounded-lg px-4 py-2 max-w-[70%] ${
                  message.sender === address
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100'
                }`}
              >
                <p>{message.content}</p>
                <p className="text-xs mt-1 opacity-70">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={sendMessage} className="p-4 border-t">
          <div className="flex space-x-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
