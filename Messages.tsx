import { useState } from 'react';
import { Button } from '../components/Button';
import { Send, User } from 'lucide-react';

interface Message {
  id: number;
  senderId: number;
  text: string;
  timestamp: string;
}

interface Contact {
  id: number;
  name: string;
  lastMessage: string;
  unread: number;
}

const mockContacts: Contact[] = [
  {
    id: 1,
    name: 'John Smith',
    lastMessage: 'I'll be there in 5 minutes',
    unread: 2,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    lastMessage: 'Thank you for the ride!',
    unread: 0,
  },
  {
    id: 3,
    name: 'Michael Brown',
    lastMessage: 'See you tomorrow at 9 AM',
    unread: 1,
  },
];

const mockMessages: Message[] = [
  {
    id: 1,
    senderId: 1,
    text: 'Hi, I need a ride to the airport tomorrow morning.',
    timestamp: '10:30 AM',
  },
  {
    id: 2,
    senderId: 2,
    text: 'Sure, I can help you with that. What time do you need to be picked up?',
    timestamp: '10:32 AM',
  },
  {
    id: 3,
    senderId: 1,
    text: 'Around 8 AM would be perfect.',
    timestamp: '10:33 AM',
  },
];

export function Messages() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [messages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement send message logic
    setNewMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="h-[calc(100vh-8rem)] bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex h-full">
          {/* Contacts Sidebar */}
          <div className="w-96 border-r border-gray-200">
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Messages</h2>
              </div>
              <div className="flex-1 overflow-y-auto">
                {mockContacts.map((contact) => (
                  <button
                    key={contact.id}
                    className={`w-full p-4 flex items-center space-x-4 hover:bg-gray-50 focus:outline-none ${
                      selectedContact?.id === contact.id ? 'bg-gray-50' : ''
                    }`}
                    onClick={() => setSelectedContact(contact)}
                  >
                    <div className="flex-shrink-0">
                      <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                        <User className="h-full w-full text-gray-300" />
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900 truncate">{contact.name}</p>
                        {contact.unread > 0 && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {contact.unread}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedContact ? (
              <>
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                      <User className="h-full w-full text-gray-300" />
                    </span>
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">{selectedContact.name}</h2>
                      <p className="text-sm text-gray-500">Online</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.senderId === 1 ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs px-4 py-2 rounded-lg ${
                            message.senderId === 1
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.senderId === 1 ? 'text-blue-200' : 'text-gray-500'
                            }`}
                          >
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200">
                  <form onSubmit={handleSendMessage} className="flex space-x-4">
                    <input
                      type="text"
                      className="flex-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <Button type="submit">
                      <Send className="h-5 w-5" />
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-500">Select a conversation to start messaging</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}