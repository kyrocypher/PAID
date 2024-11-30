import { useState } from 'react'
import { useAccount } from 'wagmi'

interface Poll {
  id: string
  question: string
  options: string[]
  votes: Record<string, number>
}

export default function CommunityFeatures() {
  const { address } = useAccount()
  const [activeTab, setActiveTab] = useState('polls')
  const [polls, setPolls] = useState<Poll[]>([
    {
      id: '1',
      question: 'What feature should we build next?',
      options: ['More analytics', 'Mobile app', 'NFT integration'],
      votes: { '0': 10, '1': 15, '2': 8 }
    }
  ])

  const vote = (pollId: string, optionIndex: number) => {
    setPolls(prev => prev.map(poll => {
      if (poll.id === pollId) {
        const votes = { ...poll.votes }
        votes[optionIndex] = (votes[optionIndex] || 0) + 1
        return { ...poll, votes }
      }
      return poll
    }))
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('polls')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'polls'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Polls
        </button>
        <button
          onClick={() => setActiveTab('achievements')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'achievements'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Achievements
        </button>
      </div>

      {activeTab === 'polls' ? (
        <div className="space-y-6">
          {polls.map(poll => (
            <div key={poll.id} className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">{poll.question}</h3>
              <div className="space-y-2">
                {poll.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => vote(poll.id, index)}
                    className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex justify-between">
                      <span>{option}</span>
                      <span>{poll.votes[index] || 0} votes</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Early Adopter', 'Active Voter', 'Trend Spotter', 'Premium Member'].map((achievement) => (
            <div
              key={achievement}
              className="p-4 border rounded-lg text-center hover:border-blue-500 transition-colors"
            >
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-sm font-medium">{achievement}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
