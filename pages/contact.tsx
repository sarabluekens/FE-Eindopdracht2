import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState } from 'react'

const Contact = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({} as any)

  const [buttonText, setButtonText] = useState('Send')

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleValidation = () => {
    let tempErrors = {} as any
    let isValid = true

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true
      isValid = false
    }
    if (email.length <= 0) {
      tempErrors['email'] = true
      isValid = false
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true
      isValid = false
    }
    if (message.length <= 0) {
      tempErrors['message'] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    console.log('errors', errors)
    return isValid
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    let isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText('Sending...')

      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          fullname: fullname,
          email: email,
          subject: subject,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const { error } = await res.json()
      if (error) {
        console.log(error)
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText('Send')
        console.log('something went wrong')
        // Reset form fields
        setFullname('')
        setEmail('')
        setMessage('')
        setSubject('')
        return
      }
      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText('Send')

      // Reset form fields
      setFullname('')
      setEmail('')
      setMessage('')
      setSubject('')
      console.log('success')
      console.log(fullname, email, subject, message)
    }
  }
  return (
    <div className="min-h-screen">
      <Navbar />
      <form onSubmit={handleSubmit} className="flex flex-col items-center ">
        <h1 className="my-1 text-center font-londrinaSolid text-thirdtitle font-thin tracking-londrina md:my-5 md:text-title">
          Interested?
        </h1>
        <p className="my-5 text-center font-londrinaSolid text-footer font-thin tracking-londrina md:-mt-5 md:text-thirdtitle">
          Send me an email
        </p>
        <div className="text-left">
          {showSuccessMessage && (
            <p className="font-semibold my-2 text-sm text-green">
              Thank you! <br /> Your Message has been delivered.
            </p>
          )}
          {showFailureMessage && (
            <p className="text-red">
              Oops! Something went wrong, please try again.
            </p>
          )}
        </div>
        <div className="flex w-10/12 flex-col items-start gap-5 border-2 p-5 md:w-6/12 xl:w-[600px] ">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            name="fullname"
            value={fullname}
            onChange={e => setFullname(e.target.value)}
            className="w-full border-b bg-blue py-2 pl-4 ring-white focus:rounded-md focus:text-white focus:outline-none focus:ring-1"
          />
          {errors?.fullname && (
            <p className="text-red">Fullname cannot be empty.</p>
          )}

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email "
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border-b bg-blue py-2 pl-4 ring-white focus:rounded-md focus:text-white focus:outline-none focus:ring-1"
          />
          {errors?.email && <p className="text-red">email cannot be empty.</p>}

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            className="w-full border-b bg-blue py-2 pl-4  ring-white focus:rounded-md focus:text-white focus:outline-none focus:ring-1"
          />

          {errors?.subject && (
            <p className="text-red">Subject cannot be empty.</p>
          )}

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="focus:rounded-m w-full border-b bg-blue py-2 pl-4 ring-white focus:text-white focus:outline-none focus:ring-1"
          />
          {errors?.message && (
            <p className="text-red">Message cannot be empty.</p>
          )}
        </div>

        <button
          type="submit"
          className="mt-5 rounded-lg border-2 border-solid border-white px-4 py-2"
        >
          Send
        </button>
      </form>
      <Footer />
    </div>
  )
}

export default Contact
