import React from 'react'
import { ArrowRight, Github } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: 'Community Accessibility Map',
        description: 'A full-stack interactive map with user authentication.',
        technologies: ['React', 'JavaScript', 'Django', 'Python', 'Tailwindcss'],
        image: 'https://i.postimg.cc/FsVNKCmD/Screenshot-2025-11-11-at-10-17-31-PM.png',
        github: 'https://github.com/shaikah572/community-accessibility-map-frontend',
    },
    {
        id: 2,
        title: 'IdealCar',
        description: 'Mobile application designed to help users estimate the fair price of used cars.',
        technologies: ['Flutter', 'Dart', 'Python', 'Firebase'],
        image: 'https://i.postimg.cc/Sx6sMYtJ/0-splash-page-edit.png',
        github: 'https://github.com/shaikah572/IdealCar',
    },

]

const Projects = () => {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    {" "}
                    Projects I Have <span className='text-primary'>Done</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of my recent projects that showcase my skills and experience
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project) => (
                        <div className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'> 
                        <div className='h-48 overflow-hidden'>
                            <img 
                            src={project.image}
                            alt={project.title}
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                            />
                            </div>
                            <div className='p-6'>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.technologies.map((tech) => (
                                        <span className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <h3 className='text-xl font-semibold mb-1'>
                                    {project.title}
                                </h3>
                                <p className='text-muted-foreground text-sm mb-4'>
                                    {project.description}
                                </p>
                                <div className='flex justify-between items-center'>
                                    <div className='flex space-x-3'>
                                        {/* <a
                                        href={project.demo}
                                        target='_blank'
                                        className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                        ><ExternalLink size={20} /></a> */}
                                        <a
                                        href={project.github}
                                        target='_blank'
                                        className='text-foreground/80 hover:text-primary transition-colors duration-300' 
                                        >
                                            <Github size={20} />
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center mt-12'>
                    <a
                    href='https://github.com/shaikah572'
                    target='_blank'
                    className='cosmic-button w-fit flex items-center mx-auto gap-2'
                    >
                        My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects