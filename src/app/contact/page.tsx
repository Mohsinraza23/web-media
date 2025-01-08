'use client'

import { useState, FormEvent } from 'react'
import { submitContactForm } from '../actions'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const result = await submitContactForm(formData)

      setIsSubmitting(false)
      setSubmitMessage(result.message)

      if (result.success) {
        (e.target as HTMLFormElement).reset()
        setTimeout(() => setSubmitMessage(''), 3000)
      }
    } catch (error) {
      setIsSubmitting(false)
      setSubmitMessage('Something went wrong. Please try again.')
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen bg-[#1a1f2b] py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-300 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Whether you have a question about our services, pricing, or just want to say hello, we&apos;re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="bg-[#242937] rounded-xl p-8">
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-300">Phone</h3>
                  <p className="text-gray-400">+92 345 2615590</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-300">Email</h3>
                  <p className="text-gray-400 break-all">webandmediaagency007@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-300">Location</h3>
                  <p className="text-gray-400">B/52 Gulshan-e-Iqbal, Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#242937] rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-purple-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-[#1a1f2b] border border-gray-600 rounded-lg text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-[#1a1f2b] border border-gray-600 rounded-lg text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-[#1a1f2b] border border-gray-600 rounded-lg text-white placeholder-gray-400"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 text-white py-2 rounded-full font-semibold hover:bg-purple-700"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitMessage && (
                <p className={`mt-2 text-sm ${submitMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
