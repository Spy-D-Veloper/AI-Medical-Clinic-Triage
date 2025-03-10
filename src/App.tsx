import React, { useState } from 'react';
import { Video, Phone, Stethoscope, MessageSquare, ClipboardList, ArrowRight } from 'lucide-react';

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Header */}
      <header className="bg-teal-700 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Stethoscope size={24} />
            <span className="text-xl font-semibold">MediAI Clinic</span>
          </div>
          <button className="bg-teal-600 hover:bg-teal-500 px-4 py-2 rounded-lg transition">
            Emergency Contact
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">
            AI-Powered Healthcare at Your Fingertips
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Experience the future of healthcare with our intelligent mobile clinic system
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* AI Triage */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-teal-900 mb-3">
              AI-Powered Triage
            </h3>
            <p className="text-gray-600 mb-4">
              Advanced LLM-based symptom analysis for quick and accurate initial assessments
            </p>
            <button 
              onClick={() => setShowChat(true)}
              className="flex items-center text-teal-600 hover:text-teal-500"
            >
              Start Assessment <ArrowRight className="ml-2" size={16} />
            </button>
          </div>

          {/* Telehealth */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
              <Video className="text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold text-teal-900 mb-3">
              Instant Telehealth
            </h3>
            <p className="text-gray-600 mb-4">
              Connect with healthcare providers through secure video consultations
            </p>
            <button className="flex items-center text-cyan-600 hover:text-cyan-500">
              Schedule Call <Phone className="ml-2" size={16} />
            </button>
          </div>

          {/* Prescriptions */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <ClipboardList className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-teal-900 mb-3">
              Smart Prescriptions
            </h3>
            <p className="text-gray-600 mb-4">
              AI-assisted prescription drafting and treatment recommendations
            </p>
            <button className="flex items-center text-blue-600 hover:text-blue-500">
              View History <ArrowRight className="ml-2" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* AI Chat Interface */}
      {showChat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-teal-900">AI Health Assistant</h3>
              <button 
                onClick={() => setShowChat(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
            <div className="h-96 bg-gray-50 rounded-lg p-4 mb-4">
              {/* Chat messages would go here */}
              <p className="text-gray-600">Hello! I'm your AI health assistant. Please describe your symptoms.</p>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your symptoms..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-500">
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Trust Indicators */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-teal-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-teal-900 mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered system is developed in collaboration with leading medical experts
            and follows strict healthcare guidelines and privacy regulations.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>© 2025 MediAI Clinic. All rights reserved.</p>
            <p className="text-teal-300 text-sm mt-2">
              Emergency? Please call your local emergency services immediately.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;