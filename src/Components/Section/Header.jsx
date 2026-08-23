import React, { useState } from 'react'
import Typewriter from 'typewriter-effect'
import { Heart } from 'lucide-react'

const INITIAL_TERMINAL = [
    {
        text: 'Interactive terminal',
        color: 'var(--foreground)',
    },
    {
        text: "Type 'help' to see available commands.",
        color: 'var(--foreground)',
    },
]

const executeCommand = (input, updateTerminal) => {
    const command = input.trim().toLowerCase()

    const output = [
        {
            text: `➜ ~ ${input}`,
            color: '#39ff88',
        },
    ]

    const print = (text, color = 'var(--foreground)') => {
        output.push({ text, color })
    }

    switch (command) {
        case 'clear':
            updateTerminal([])
            return

        case 'help':
            print('  about · skills · projects ')
            print('  socials · contact · clear')
            break

        case 'about':
            print('Shaikah Alrubayan', 'var(--foreground)')
            print('Full Stack developer, Software Engineer.')
            break

        case 'skills':
            print('JavaScript · React · Python · Django · Postgres · Docker  …')
            break

        case 'projects':
            print('IDEAL CAR — used car price prediction')
            print('CAM - A full-stack interactive map with user authentication.')
            print('Portfolio — you are currently looking at it.')
            break

        case 'socials':
            print('github  -  github.com/shaikah572')
            print('linkedin - linkedin.com/in/shaikah-alrubayan')
            print('email  -   alrubayanshaikah@gmail.com')
            break

        case 'contact':
            print('alrubayanshaikah@gmail.com')
            print('→ You can reach me through the contact section.')
            break

        case '':
            break

        default:
            print(
                `command not found: ${command}`,
                '#ff6b6b'
            )
            print("Type 'help' to see what you can do.")
    }


    updateTerminal(previous => [...previous, ...output])
}

const Header = () => {
    const [terminalLines, setTerminalLines] = useState(INITIAL_TERMINAL)
    const [commandInput, setCommandInput] = useState('')

    const handleCommand = (event) => {
        event.preventDefault()

        executeCommand(commandInput, setTerminalLines)
        setCommandInput('')
    }

    return (
        <section
            id="header"
            className="relative min-h-screen flex items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-20"
        >
            <div className="w-full z-10">

                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

                    {/* LEFT — Hero */}
                    <div className="text-left">
                        <div className="space-y-6">

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">

                                <span className="opacity-0 animate-fade-in">
                                    Hi, I'm
                                </span>

                                <span className="text-primary opacity-0 animate-fade-in-delay-1">
                                    {' '}
                                    Shaikah
                                </span>

                                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                                    {' '}
                                    Alrubayan
                                </span>

                            </h1>

                            <div className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
                                <Typewriter
                                    options={{
                                        strings: [
                                            'Software Engineer',
                                            'Full-Stack Developer',
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        cursor: ' ✦',
                                    }}
                                />
                            </div>

                            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                                <a
                                    href="#projects"
                                    className="custom-button"
                                >
                                    My Projects
                                </a>
                            </div>

                        </div>
                    </div>


                    {/* RIGHT — Terminal */}
                    <div className="w-full lg:max-w-2xl lg:ml-auto">

                        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-2xl overflow-hidden">

                            {/* Terminal top bar */}
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
                                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                                <span className="w-3 h-3 rounded-full bg-green-400/70" />

                                <span className="ml-2 text-xs text-gray-500">
                                    shaikah@portfolio:~
                                </span>

                            </div>


                            {/* Terminal content */}
                            <div className="p-5 font-mono text-sm text-left h-[310px] overflow-y-auto">

                                {terminalLines.map((line, index) => (
                                    <div
                                        key={index}
                                        style={{ color: line.color }}
                                        className="leading-6"
                                    >
                                        {line.text}
                                    </div>
                                ))}

                                <form
                                    onSubmit={handleCommand}
                                    className="flex items-center"
                                >

                                    <span
                                        className="mr-2"
                                        style={{ color: '#39ff88' }}
                                    >
                                        ➜ ~
                                    </span>

                                    <input
                                        value={commandInput}
                                        onChange={(event) =>
                                            setCommandInput(event.target.value)
                                        }
                                        className="flex-1 bg-transparent outline-none border-none text-[#39ff88] font-mono"
                                        autoFocus
                                        spellCheck="false"
                                    />

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* Bottom heart */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <Heart className="h-5 w-5 text-primary" />
            </div>

        </section>
    )
}

export default Header