import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				unog: {
					green: '#7ac943',
					blue: '#2193c7',
					purple: '#563795'
				}
			},
			backgroundImage: {
				'unog-gradient': 'linear-gradient(135deg, #7ac943 0%, #2193c7 50%, #563795 100%)',
				'unog-gradient-reverse': 'linear-gradient(135deg, #563795 0%, #2193c7 50%, #7ac943 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-8px) rotate(90deg)' },
					'50%': { transform: 'translateY(-15px) rotate(180deg)' },
					'75%': { transform: 'translateY(-8px) rotate(270deg)' }
				},
				'shine': {
					'0%, 9%': { transform: 'translateX(-100%)' },
					'10%': { transform: 'translateX(-100%)' },
					'12%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'spark': {
					'0%, 97%': { 
						opacity: '0',
						transform: 'scale(0) rotate(0deg)'
					},
					'98%': { 
						opacity: '1',
						transform: 'scale(1) rotate(180deg)'
					},
					'100%': { 
						opacity: '0',
						transform: 'scale(0) rotate(360deg)'
					}
				},
				'orbit': {
					'0%': { 
						transform: 'translate(-50%, -50%) rotate(0deg) translateX(20px) rotate(0deg)',
						opacity: '0'
					},
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { 
						transform: 'translate(-50%, -50%) rotate(360deg) translateX(20px) rotate(-360deg)',
						opacity: '0'
					}
				},
				'orbit-reverse': {
					'0%': { 
						transform: 'translate(-50%, -50%) rotate(0deg) translateX(15px) rotate(0deg)',
						opacity: '0'
					},
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { 
						transform: 'translate(-50%, -50%) rotate(-360deg) translateX(15px) rotate(360deg)',
						opacity: '0'
					}
				},
				'magnetic-pull': {
					'0%, 100%': { transform: 'translateX(0) scale(1)' },
					'50%': { transform: 'translateX(2px) scale(1.05)' }
				},
				'button-bounce': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.02)' }
				},
				'gradient-x': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(86, 55, 149, 0.3)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(86, 55, 149, 0.6)',
						transform: 'scale(1.02)'
					}
				},
				'hover-lift': {
					'0%': { transform: 'translateY(0) scale(1)' },
					'100%': { transform: 'translateY(-2px) scale(1.05)' }
				},
				'button-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						boxShadow: '0 0 0 0 rgba(86, 55, 149, 0.7)'
					},
					'50%': { 
						transform: 'scale(1.05)',
						boxShadow: '0 0 0 10px rgba(86, 55, 149, 0)'
					}
				},
				'button-shimmer': {
					'0%, 87.5%': { transform: 'translateX(-100%)' },
					'88%': { transform: 'translateX(-100%)' },
					'97.5%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'button-ripple': {
					'0%': { 
						transform: 'scale(0)',
						opacity: '1'
					},
					'100%': { 
						transform: 'scale(4)',
						opacity: '0'
					}
				},
				'button-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(86, 55, 149, 0.3), 0 0 40px rgba(86, 55, 149, 0.1)'
					},
					'50%': { 
						boxShadow: '0 0 30px rgba(86, 55, 149, 0.6), 0 0 60px rgba(86, 55, 149, 0.3)'
					}
				},
				'button-bounce-smooth': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-3px)' }
				},
				'button-rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'button-scale': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' }
				},
				'button-magnetic': {
					'0%, 100%': { transform: 'translateX(0) scale(1)' },
					'50%': { transform: 'translateX(3px) scale(1.02)' }
				},
				'button-float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-2px)' }
				},
				'button-sparkle': {
					'0%': { 
						opacity: '0',
						transform: 'scale(0) rotate(0deg)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1) rotate(180deg)'
					},
					'100%': { 
						opacity: '0',
						transform: 'scale(0) rotate(360deg)'
					}
				},
				'button-wave': {
					'0%': { transform: 'scale(1) rotate(0deg)' },
					'25%': { transform: 'scale(1.1) rotate(90deg)' },
					'50%': { transform: 'scale(1.05) rotate(180deg)' },
					'75%': { transform: 'scale(1.1) rotate(270deg)' },
					'100%': { transform: 'scale(1) rotate(360deg)' }
				},
				'button-glow-enhanced': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(86, 55, 149, 0.4), 0 0 40px rgba(86, 55, 149, 0.2), 0 0 60px rgba(86, 55, 149, 0.1)'
					},
					'50%': { 
						boxShadow: '0 0 30px rgba(86, 55, 149, 0.8), 0 0 60px rgba(86, 55, 149, 0.4), 0 0 90px rgba(86, 55, 149, 0.2)'
					}
				},
				'liquid-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)',
						filter: 'blur(0px)'
					},
					'50%': { 
						transform: 'translateY(-1px) rotate(0.2deg)',
						filter: 'blur(0.1px)'
					}
				},
				'liquid-wave': {
					'0%, 100%': { 
						transform: 'translateY(0px) scale(1)',
						opacity: '1'
					},
					'50%': { 
						transform: 'translateY(-1px) scale(1.01)',
						opacity: '0.95'
					}
				},
				'liquid-bubble': {
					'0%': { 
						transform: 'translateY(0px) scale(1)',
						opacity: '1'
					},
					'50%': { 
						transform: 'translateY(-2px) scale(1.05)',
						opacity: '0.9'
					},
					'100%': { 
						transform: 'translateY(0px) scale(1)',
						opacity: '1'
					}
				},
				'liquid-ripple': {
					'0%': { 
						transform: 'scale(1) translateY(0px)',
						opacity: '1'
					},
					'50%': { 
						transform: 'scale(1.02) translateY(-0.5px)',
						opacity: '0.95'
					},
					'100%': { 
						transform: 'scale(1) translateY(0px)',
						opacity: '1'
					}
				},
				'liquid-flow': {
					'0%': { 
						transform: 'translateX(-100%) rotate(0deg)',
						opacity: '0'
					},
					'50%': { 
						transform: 'translateX(0%) rotate(180deg)',
						opacity: '0.5'
					},
					'100%': { 
						transform: 'translateX(100%) rotate(360deg)',
						opacity: '0'
					}
				},
				'liquid-flow-reverse': {
					'0%': { 
						transform: 'translateX(100%) rotate(0deg)',
						opacity: '0'
					},
					'50%': { 
						transform: 'translateX(0%) rotate(-180deg)',
						opacity: '0.3'
					},
					'100%': { 
						transform: 'translateX(-100%) rotate(-360deg)',
						opacity: '0'
					}
				},
				'liquid-glow': {
					'0%, 100%': { 
						opacity: '0.2',
						transform: 'scale(1) rotate(0deg)'
					},
					'50%': { 
						opacity: '0.4',
						transform: 'scale(1.05) rotate(90deg)'
					}
				},
				'liquid-border': {
					'0%, 100%': { 
						transform: 'scale(1) rotate(0deg)',
						borderRadius: '50%'
					},
					'50%': { 
						transform: 'scale(1.01) rotate(90deg)',
						borderRadius: '48% 52% 52% 48%'
					}
				},
				'liquid-inner-glow': {
					'0%, 100%': { 
						opacity: '0.1',
						transform: 'scale(1) rotate(0deg)'
					},
					'50%': { 
						opacity: '0.3',
						transform: 'scale(1.02) rotate(180deg)'
					}
				},
				'liquid-flow-line': {
					'0%': { 
						transform: 'translateX(-100%) scaleX(0)',
						opacity: '0'
					},
					'50%': { 
						transform: 'translateX(0%) scaleX(1)',
						opacity: '0.5'
					},
					'100%': { 
						transform: 'translateX(100%) scaleX(0)',
						opacity: '0'
					}
				},
				'liquid-flow-line-reverse': {
					'0%': { 
						transform: 'translateX(100%) scaleX(0)',
						opacity: '0'
					},
					'50%': { 
						transform: 'translateX(0%) scaleX(1)',
						opacity: '0.5'
					},
					'100%': { 
						transform: 'translateX(-100%) scaleX(0)',
						opacity: '0'
					}
				},
				'liquid-surface': {
					'0%, 100%': { 
						opacity: '0.05',
						transform: 'rotate(0deg) scale(1)'
					},
					'50%': { 
						opacity: '0.15',
						transform: 'rotate(90deg) scale(1.01)'
					}
				},
				'shimmer': {
					'0%': { 
						transform: 'translateX(-100%) skewX(-15deg)',
						opacity: '0'
					},
					'50%': { 
						transform: 'translateX(0%) skewX(-15deg)',
						opacity: '1'
					},
					'100%': { 
						transform: 'translateX(100%) skewX(-15deg)',
						opacity: '0'
					}
				},
				'liquid-shimmer': {
					'0%': { 
						transform: 'translateX(-100%) skewX(-15deg)',
						opacity: '0'
					},
					'50%': { 
						transform: 'translateX(0%) skewX(-15deg)',
						opacity: '0.8'
					},
					'100%': { 
						transform: 'translateX(100%) skewX(-15deg)',
						opacity: '0'
					}
				},
				'holographic': {
					'0%, 100%': { 
						opacity: '0',
						transform: 'translateX(-10px) rotate(0deg)'
					},
					'25%': { 
						opacity: '0.3',
						transform: 'translateX(0px) rotate(90deg)'
					},
					'50%': { 
						opacity: '0.5',
						transform: 'translateX(10px) rotate(180deg)'
					},
					'75%': { 
						opacity: '0.3',
						transform: 'translateX(0px) rotate(270deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'float-slow': 'float-slow 4s ease-in-out infinite',
				'shine': 'shine 10s ease-in-out infinite',
				'spark': 'spark 40s ease-in-out infinite',
				'orbit': 'orbit 3s linear infinite',
				'orbit-reverse': 'orbit-reverse 4s linear infinite',
				'magnetic-pull': 'magnetic-pull 2s ease-in-out infinite',
				'button-bounce': 'button-bounce 2s ease-in-out infinite',
				'gradient-x': 'gradient-x 3s ease infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'hover-lift': 'hover-lift 0.3s ease-out forwards',
				'button-pulse': 'button-pulse 10s ease-in-out infinite',
				'button-shimmer': 'button-shimmer 10s ease-in-out infinite',
				'button-ripple': 'button-ripple 0.6s ease-out',
				'button-glow': 'button-glow 2s ease-in-out infinite',
				'button-bounce-smooth': 'button-bounce-smooth 1s ease-in-out infinite',
				'button-rotate': 'button-rotate 2s linear infinite',
				'button-scale': 'button-scale 1.5s ease-in-out infinite',
				'button-magnetic': 'button-magnetic 2s ease-in-out infinite',
				'button-float': 'button-float 2s ease-in-out infinite',
				'button-sparkle': 'button-sparkle 1s ease-in-out infinite',
				'button-wave': 'button-wave 1s ease-in-out infinite',
				'button-glow-enhanced': 'button-glow-enhanced 2s ease-in-out infinite',
				'liquid-float': 'liquid-float 8s ease-in-out infinite',
				'liquid-wave': 'liquid-wave 2.5s ease-in-out infinite',
				'liquid-bubble': 'liquid-bubble 2s ease-in-out infinite',
				'liquid-ripple': 'liquid-ripple 1.5s ease-in-out infinite',
				'liquid-flow': 'liquid-flow 4s ease-in-out infinite',
				'liquid-flow-reverse': 'liquid-flow-reverse 3s ease-in-out infinite',
				'liquid-shimmer': 'liquid-shimmer 2s ease-in-out infinite',
				'liquid-glow': 'liquid-glow 2s ease-in-out infinite',
				'liquid-border': 'liquid-border 2s ease-in-out infinite',
				'liquid-inner-glow': 'liquid-inner-glow 2s ease-in-out infinite',
				'liquid-flow-line': 'liquid-flow-line 2s ease-in-out infinite',
				'liquid-flow-line-reverse': 'liquid-flow-line-reverse 2s ease-in-out infinite',
				'liquid-surface': 'liquid-surface 2s ease-in-out infinite',
				'shimmer': 'shimmer 3s ease-in-out infinite',
				'holographic': 'holographic 4s ease-in-out infinite'
			},
			textShadow: {
				'glow': '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)'
			},
			transformStyle: {
				'preserve-3d': 'preserve-3d'
			},
			perspective: {
				'1000': '1000px'
			},
			rotate: {
				'y-12': 'rotateY(12deg)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
