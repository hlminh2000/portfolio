'use client'
import { emailSchema } from "@/lib/utils";
import dayjs from "dayjs"
import React, { DOMAttributes } from "react"
import { ToastContainer, toast } from 'react-toastify';


export const ContactSection = () => {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const onSubmit: DOMAttributes<HTMLFormElement>["onSubmit"] = async (e) => {
    e.preventDefault()
    const {data, error} = emailSchema.safeParse({ name, email, message })
    if (error) {
      error.issues.forEach(issue => toast.error(issue.message))
      return 
    }
    await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return toast.success("Your message has been sent! I will get back to you soon.")
  }

  return (
    <div className="mb-12 relative pl-8 border-l border-gray-800" id="contact">
      <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-blue-400" />
      {/* <div className="mb-1 text-sm text-blue-400">{dayjs().year()}</div> */}
      <div className="mb-1 text-sm text-blue-400">Future</div>
      <h4 className="text-xl font-semibold mb-2">[Your logo here]</h4>
      {/* <div className="text-gray-400 mb-2">Your Company Logo</div> */}
      <div className='text-gray-400 mb-4 whitespace-pre text-wrap'>See yourself on this timeline? Tell me about you.</div>
      <form className="space-y-4 mt-4" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
          <input
            type="text"
            required
            id="name"
            name="name"
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="companyLogo" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
          <input
            type="text"
            required
            id="companyLogo"
            name="companyLogo"
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
          <textarea
            id="message"
            required
            name="message"
            rows={4}
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}