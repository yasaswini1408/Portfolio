function Leadership() {
  return (
    <section className="px-10 py-16 border-t border-gray-800">
      <div className="bg-[#11111f] border border-gray-800 rounded-xl p-8">
        
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">
            Leadership & Community
          </h2>
          <span className="text-sm text-purple-400 border border-purple-500/30 px-3 py-1 rounded-full">
            Beyond Coding
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1a1a2e] border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div>
                <h3 className="font-semibold text-xl text-white">
                  Programming Mentor
                </h3>
                <p className="text-purple-400 text-sm">
                  Peer Learning Initiative
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Conducted introductory C programming sessions for junior
              students over a 10-day period, helping them understand
              programming fundamentals, problem-solving approaches,
              and coding best practices.
            </p>

            <div className="flex gap-2 mt-5 flex-wrap">
              <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300">
                Mentorship
              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300">
                C Programming
              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300">
                Teaching
              </span>
            </div>
          </div>

          <div className="bg-[#1a1a2e] border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div>
                <h3 className="font-semibold text-xl text-white">
                  Event Coordinator
                </h3>
                <p className="text-pink-400 text-sm">
                  College Activities
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Coordinated fresher cultural events and actively
              participated in technical competitions, coding contests,
              and student engagement activities, contributing to
              teamwork and event organization.
            </p>

            <div className="flex gap-2 mt-5 flex-wrap">
              <span className="px-3 py-1 text-xs rounded-full bg-pink-500/10 text-pink-300">
                Leadership
              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-pink-500/10 text-pink-300">
                Event Management
              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-pink-500/10 text-pink-300">
                Teamwork
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Leadership;