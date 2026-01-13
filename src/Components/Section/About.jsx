import React from 'react'
import { Pen, Code, User } from 'lucide-react'

const About = () => {
    return (
        <section id='about' className='py-24 px-4 relative'>
            {' '}
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    About <span className='text-primary'> Me</span>
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-6'>
                        <p className='text-muted-foreground'>
                            I'm a passionate Software Engineer and Full-Stack Developer with a love for creating 
                            modern, user-friendly applications and websites. I enjoy turning complex problems 
                            into simple, beautiful, and intuitive solutions.
                        </p>

                        <p className='text-muted-foreground'>
                            When I'm not coding, you can find me exploring new technologies, contributing to 
                            open-source projects, or continuously learning to stay at the forefront of web 
                            development trends.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 gap-6'>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Code className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'> Problem Solver</h4>
                                    <p className='text-muted-foreground'>
                                        I love tackling challenging problems and finding elegant solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <User className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>User-Focused</h4>
                                    <p className='text-muted-foreground'>
                                        I prioritize creating experiences that users will love and enjoy.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Pen className='h-6 w-6 text-primary' />
                                </div>

                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Continuous Learner</h4>
                                    <p className='text-muted-foreground'>
                                        Always eager to learn new technologies and improve my skills.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About