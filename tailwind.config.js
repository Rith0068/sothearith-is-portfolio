export default {
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.3" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-up-delay-1": "fadeUp 0.8s ease-out 0.15s forwards",
        "fade-up-delay-2": "fadeUp 0.8s ease-out 0.3s forwards",
        "fade-up-delay-3": "fadeUp 0.8s ease-out 0.45s forwards",
        "fade-in-delay": "fadeIn 1s ease-out 0.6s forwards",
        float: "float 4s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        glow: "glow 6s ease-in-out infinite",
      },
    },
  },
};