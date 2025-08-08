export interface RomanticConfig {
  title: string
  phases: {
    title: string
    message: string
    duration: number
    showKiss?: boolean
  }[]
  gifs: string[]
  settings: {
    backgroundColor: string
    textColor: string
    enableMusic: boolean
    particleCount: number
    enableFloatingEmojis: boolean
    floatingEmoji: string
  }
  customization: {
    petName1: string
    petName2: string
    loverName: string
    personalMessage: string
  }
}

export const defaultConfig: RomanticConfig = {
  title: "sun na meri laado, meri babudi, mere maal. ye le 😘",
  phases: [
    {
      title: "sun na meri laado, meri babudi, mere maal. ye le 😘",
      message: "",
      duration: 8000
    },
    {
      title: "",
      message: "😘😘😘😘😘😘😘😘😘😘 Puchka....... 😘😘😘😘😘😘😘😘😘😘😘",
      duration: 1000
    },
    {
      title: "",
      message: "💕💕💕 I love You so much......... 💕💕💕",
      duration: 2000
    },
    {
      title: "",
      message: "💖💖💖💖💖💖💖💖💖💖 forever!! puchka TuKi loves you so much and tuki miss you a lot please come quickly and kiss tuki. Tuki ko tere physical touch ki bhut jrurt h. he want you to love you back. He Wants to Kiss you, Hug you, bite you, sb kuch krna h so just stay with tuki always or tuki ki bhut sari expectations h jo ki wo cah kr bhi neglact nhi kr skta so please tuki ko tere saath jo krna h wo krne ke liye free kr de ye dhamki h wrna tuki teko utha kr le jayega. 💖💖💖💖💖💖💖💖💖💖",
      duration: 32000
    },
    {
      title: "",
      message: "😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘",
      duration: 5500
    },
    {
      title: "",
      message: "😘😘😘😘😘😘😘😘😘😘 Puchka is tuki's own property. He won't share her even with her own mother and father. 😘😘😘😘😘😘😘😘😘😘😘",
      showKiss: true,
      duration: Infinity
    }
  ],
  gifs: [
    'https://media1.tenor.com/m/QOGxSusnvsUAAAAC/huij.gif',
    'https://media.tenor.com/qeJtDi4BOkwAAAAi/tkthao219-bubududu.gif',
    'https://media.tenor.com/3Yml0nL4aBwAAAAi/cosytales-love.gif',
    'https://media.tenor.com/wLsFdiTAtMoAAAAi/cutie-awe-shucks.gif',
    'https://media1.tenor.com/m/1vP51Z9l2hkAAAAC/cute-pinch.gif',
    'https://media.tenor.com/hw67rqHr4eEAAAAi/kiss-hug.gif',
    'https://media1.tenor.com/m/gRnRdgBucm8AAAAC/puuung-kiss-puuung.gif',
    'https://media.tenor.com/Xkyq8rprL_EAAAAi/good-morning-kisses.gif',
    'https://media.tenor.com/xO_mQzKkNFwAAAAi/hug-love-couple.gif',
    'https://media1.tenor.com/m/Iv2IhJtpFRYAAAAC/hugs.gif'
  ],
  settings: {
    backgroundColor: "from-pink-200 via-pink-300 to-rose-300",
    textColor: "text-purple-800",
    enableMusic: true,
    particleCount: 50,
    enableFloatingEmojis: true,
    floatingEmoji: "😍"
  },
  customization: {
    petName1: "Puchka",
    petName2: "Tuki",
    loverName: "meri laado",
    personalMessage: "You are my everything! 💖"
  }
}
