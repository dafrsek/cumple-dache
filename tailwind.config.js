/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'monoton': ['Monoton', 'cursive'],
        'orbitron': ['Orbitron', 'monospace'],
      },
      colors: {
        'neon-pink': '#FF5CFF',
        'neon-green': '#39FF14',
        'neon-cyan': '#00FFFF',
        'neon-purple': '#8A2BE2',
        'neon-orange': '#FF6B35',
        'neon-yellow': '#FFFF00',
      },
      animation: {
        'neon-flicker': 'neon-flicker 2s infinite alternate',
        'disco-spin': 'disco-spin 4s linear infinite',
        'neon-pulse': 'neon-pulse 3s ease-in-out infinite',
        'cassette-bounce': 'cassette-bounce 2s ease-in-out infinite',
        'skate-roll': 'skate-roll 3s linear infinite',
        'scroll-bounce': 'scroll-bounce 2s ease-in-out infinite',
        'arrow-pulse': 'arrow-pulse 1.5s ease-in-out infinite',
        'gift-bounce': 'gift-bounce 2s ease-in-out infinite',
        'button-glow': 'button-glow 2s infinite alternate',
        'success-fade-in': 'success-fade-in 0.5s ease-in-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'particle-float': 'particle-float 8s linear forwards',
        'confetti-fall': 'confetti-fall 3s linear forwards',
      },
      keyframes: {
        'neon-flicker': {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor'
          },
          '20%, 24%, 55%': {
            textShadow: 'none'
          }
        },
        'disco-spin': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' }
        },
        'neon-pulse': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' }
        },
        'cassette-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'skate-roll': {
          '0%': { transform: 'translateX(-100px) rotate(0deg)' },
          '100%': { transform: 'translateX(100px) rotate(360deg)' }
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' }
        },
        'arrow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' }
        },
        'gift-bounce': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(5deg)' },
          '75%': { transform: 'translateY(-5px) rotate(-5deg)' }
        },
        'button-glow': {
          '0%': {
            boxShadow: '0 0 5px #FF5CFF, 0 0 10px #FF5CFF, 0 0 15px #FF5CFF, inset 0 0 5px rgba(255, 92, 255, 0.3)'
          },
          '100%': {
            boxShadow: '0 0 10px #FF5CFF, 0 0 20px #FF5CFF, 0 0 30px #FF5CFF, inset 0 0 10px rgba(255, 92, 255, 0.5)'
          }
        },
        'success-fade-in': {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'particle-float': {
          '0%': {
            transform: 'translateY(100vh) rotate(0deg)',
            opacity: '0'
          },
          '10%': {
            opacity: '1'
          },
          '90%': {
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(-100px) rotate(360deg)',
            opacity: '0'
          }
        },
        'confetti-fall': {
          '0%': {
            transform: 'translateY(-10px) rotate(0deg)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(100vh) rotate(720deg)',
            opacity: '0'
          }
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'neon-pink': '0 0 5px #FF5CFF, 0 0 10px #FF5CFF, 0 0 15px #FF5CFF, 0 0 20px #FF5CFF',
        'neon-green': '0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14, 0 0 20px #39FF14',
        'neon-cyan': '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF, 0 0 20px #00FFFF',
      }
    },
  },
  plugins: [],
} 