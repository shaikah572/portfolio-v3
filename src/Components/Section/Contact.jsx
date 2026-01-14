import React, { useState } from 'react'
import { Linkedin, Github, Mail } from 'lucide-react'
import axios from 'axios'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('https://getform.io/f/aejevpkb', formData)
            alert('Thank you for your message! I\'ll get back to you soon.')
        } catch (error) {
            alert('error!')
        }
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get In <span className='text-primary'>Touch</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>
                            {'  '}
                            Contact Information
                        </h3>

                        <div className='space-y-6 justify-center'>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Mail className='h-6 w-6 text-primary' />
                                    {'  '}
                                </div>
                                <a
                                    href='alrubayanshaikah@gmail.com'
                                    className='text-muted-foreground hover:text-primary transition-colors pt-3'
                                >
                                    <h4 className='font-medium'>Email</h4>
                                </a>
                            </div>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Linkedin className='h-6 w-6 text-primary' />
                                    {'  '}
                                </div>
                                <a
                                    href='https://www.linkedin.com/in/shaikah-alrubayan/'
                                    className='text-muted-foreground hover:text-primary transition-colors pt-3'
                                >
                                    <h4 className='font-medium'>Linkedin</h4>
                                </a>
                            </div>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Github className='h-6 w-6 text-primary' />
                                    {'  '}
                                </div>
                                <a
                                    href='https://github.com/shaikah572'
                                    className='text-muted-foreground hover:text-primary transition-colors pt-3'
                                >
                                    <h4 className='font-medium'>GitHub</h4>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className='bg-card p-8 rounded-lg shadow-xs' >
                        <h3 className='text-2xl font-semibold mb-6'> Send a Message </h3>
                        <form className='space-y-6' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor='name' className='block text-sm font-medium mb-2'>
                                    {' '}
                                    Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary'
                                    placeholder='Your Name'
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block text-sm font-medium mb-2'>
                                    {' '}
                                    Email
                                </label>
                                <input
                                    type='text'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary'
                                    placeholder='your.email@example.com'
                                />
                            </div>
                            <div>
                                <label htmlFor='message' className='block text-sm font-medium mb-2'>
                                    {' '}
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    rows='5'
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary'
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>
                            <button
                                type='submit'
                                className='custom-button w-full flex items-center justify-center gap-2'>
                                Send
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact