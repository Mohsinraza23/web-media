'use server'

export async function submitContactForm(formData: FormData) {
  try {
    const response = await fetch('https://formsubmit.co/webandmediaagency007@gmail.com', {
      method: 'POST',
      body: formData,
    })

    if (response.ok) {
      return { success: true, message: 'Message sent successfully!' }
    } else {
      return { success: false, message: 'Failed to send message. Please try again.' }
    }
  } catch (error) {
    console.error('Form submission error:', error)
    return { success: false, message: 'Failed to send message. Please try again.' }
  }
}

