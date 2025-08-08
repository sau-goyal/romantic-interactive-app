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
      title: "Love",
      message: "😘😘😘😘😘😘😘😘😘😘 Puchka....... 😘😘😘😘😘😘😘😘😘😘😘",
      duration: 1000
    },
    {
      title: "Love",
      message: "💕💕💕 I love You so much......... 💕💕💕",
      duration: 2000
    },
    {
      title: "Love",
      message: "💖💖💖💖💖💖💖💖💖💖 forever!! puchka TuKi loves you so much and tuki miss you a lot please come quickly and kiss tuki. Tuki ko tere physical touch ki bhut jrurt h. he want you to love you back. He Wants to Kiss you, Hug you, bite you, sb kuch krna h so just stay with tuki always or tuki ki bhut sari expectations h jo ki wo cah kr bhi neglact nhi kr skta so please tuki ko tere saath jo krna h wo krne ke liye free kr de ye dhamki h wrna tuki teko utha kr le jayega. 💖💖💖💖💖💖💖💖💖💖",
      duration: 32000
    },
    {
      title: "Love",
      message: "😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘",
      duration: 5500
    },
    {
      title: "Love",
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
        'https://media1.tenor.com/m/Iv2IhJtpFRYAAAAC/hugs.gif',
        'https://media.tenor.com/KtQDZsfPMnQAAAAi/couple-couple-hug.gif',
        'https://media1.tenor.com/m/Ce_NDr824NAAAAAC/carolynnyoe-emdj.gif',
        'https://media1.tenor.com/m/Fc8bhbG_1UUAAAAC/carolynnyoe-emdj.gif',
        'https://media1.tenor.com/m/9cdWQWRBRvEAAAAC/carolynnyoe-emdj.gif',
        'https://media.tenor.com/RPBQjUKaeFsAAAAi/love-hug.gif',
        'https://media1.tenor.com/m/bcI9bSThZu8AAAAC/love-cute.gif',
        'https://media.tenor.com/hqvisWep1eUAAAAi/ash-dawn-hug-anime-hug.gif',
        'https://media.tenor.com/746C61KojiAAAAAi/love-cute.gif',
        'https://media.tenor.com/JIuLsRWAvVkAAAAi/hug.gif',
        'https://media.tenor.com/4RUGk3JSmVwAAAAi/quby-quby-sticker.gif',
        'https://media.tenor.com/9V_G8kiWtToAAAAi/lily-and-marigold.gif',
        'https://media1.tenor.com/m/ycYo28P9N_gAAAAC/lily-marigold-jun-lemon.gif',
        'https://media.tenor.com/rfyqAwzUDXMAAAAi/clingy-cute.gif',
        'https://media1.tenor.com/m/7xnJ_7SxVSoAAAAC/hold-me-anime.gif',
        'https://media.tenor.com/zKhbCRTnmvYAAAAi/cosytales-couple.gif',
        'https://media.tenor.com/3_cAcWkff5YAAAAi/titanic-hug.gif',
        'https://media.tenor.com/B71rLB9wR4cAAAAi/kiss-me.gif',
        'https://media1.tenor.com/m/O9lUu5pA6tQAAAAC/good-night-my-love.gif',
        'https://media.tenor.com/q33Nb2p64FIAAAAi/love.gif',
        'https://media.tenor.com/wGwDLuVsAhgAAAAi/i-love-you.gif',
        'https://media.tenor.com/B2f-qLbfRqsAAAAi/cute.gif',
        'https://media.tenor.com/-afkQkE-G9UAAAAi/good-night.gif',
        'https://media.tenor.com/vkEfVmyjF7sAAAAi/i-love-you-gif.gif',
        'https://media.tenor.com/Ae7XjSKB95YAAAAi/cuteie.gif',
        'https://media.tenor.com/bxb9AqeouEcAAAAi/good-morning.gif',
        'https://media.tenor.com/i8I2e4Ps6icAAAAi/hasher-sticker.gif',
        'https://media1.tenor.com/m/Dgg8iEumAsQAAAAC/gojill-the-meow-dance.gif',
        'https://media.tenor.com/AP-cZxHQElEAAAAi/cute-love.gif',
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
// export const defaultConfig: RomanticConfig = {
//   title: "",
//   phases: [],
//   gifs: [
//         'https://media1.tenor.com/m/QOGxSusnvsUAAAAC/huij.gif',
//         'https://media.tenor.com/qeJtDi4BOkwAAAAi/tkthao219-bubududu.gif',
//         'https://media.tenor.com/3Yml0nL4aBwAAAAi/cosytales-love.gif',
//         'https://media.tenor.com/wLsFdiTAtMoAAAAi/cutie-awe-shucks.gif',
//         'https://media1.tenor.com/m/1vP51Z9l2hkAAAAC/cute-pinch.gif',
//         'https://media.tenor.com/hw67rqHr4eEAAAAi/kiss-hug.gif',
//         'https://media1.tenor.com/m/gRnRdgBucm8AAAAC/puuung-kiss-puuung.gif',
//         'https://media.tenor.com/Xkyq8rprL_EAAAAi/good-morning-kisses.gif',
//         'https://media.tenor.com/xO_mQzKkNFwAAAAi/hug-love-couple.gif',
//         'https://media1.tenor.com/m/Iv2IhJtpFRYAAAAC/hugs.gif',
//         'https://media.tenor.com/KtQDZsfPMnQAAAAi/couple-couple-hug.gif',
//         'https://media1.tenor.com/m/Ce_NDr824NAAAAAC/carolynnyoe-emdj.gif',
//         'https://media1.tenor.com/m/Fc8bhbG_1UUAAAAC/carolynnyoe-emdj.gif',
//         'https://media1.tenor.com/m/9cdWQWRBRvEAAAAC/carolynnyoe-emdj.gif',
//         'https://media.tenor.com/RPBQjUKaeFsAAAAi/love-hug.gif',
//         'https://media1.tenor.com/m/bcI9bSThZu8AAAAC/love-cute.gif',
//         'https://media.tenor.com/hqvisWep1eUAAAAi/ash-dawn-hug-anime-hug.gif',
//         'https://media.tenor.com/746C61KojiAAAAAi/love-cute.gif',
//         'https://media.tenor.com/JIuLsRWAvVkAAAAi/hug.gif',
//         'https://media.tenor.com/4RUGk3JSmVwAAAAi/quby-quby-sticker.gif',
//         'https://media.tenor.com/9V_G8kiWtToAAAAi/lily-and-marigold.gif',
//         'https://media1.tenor.com/m/ycYo28P9N_gAAAAC/lily-marigold-jun-lemon.gif',
//         'https://media.tenor.com/rfyqAwzUDXMAAAAi/clingy-cute.gif',
//         'https://media1.tenor.com/m/7xnJ_7SxVSoAAAAC/hold-me-anime.gif',
//         'https://media.tenor.com/zKhbCRTnmvYAAAAi/cosytales-couple.gif',
//         'https://media.tenor.com/3_cAcWkff5YAAAAi/titanic-hug.gif',
//         'https://media.tenor.com/B71rLB9wR4cAAAAi/kiss-me.gif',
//         'https://media1.tenor.com/m/O9lUu5pA6tQAAAAC/good-night-my-love.gif',
//         'https://media.tenor.com/q33Nb2p64FIAAAAi/love.gif',
//         'https://media.tenor.com/wGwDLuVsAhgAAAAi/i-love-you.gif',
//         'https://media.tenor.com/B2f-qLbfRqsAAAAi/cute.gif',
//         'https://media.tenor.com/-afkQkE-G9UAAAAi/good-night.gif',
//         'https://media.tenor.com/vkEfVmyjF7sAAAAi/i-love-you-gif.gif',
//         'https://media.tenor.com/Ae7XjSKB95YAAAAi/cuteie.gif',
//         'https://media.tenor.com/bxb9AqeouEcAAAAi/good-morning.gif',
//         'https://media.tenor.com/i8I2e4Ps6icAAAAi/hasher-sticker.gif',
//         'https://media1.tenor.com/m/Dgg8iEumAsQAAAAC/gojill-the-meow-dance.gif',
//         'https://media.tenor.com/AP-cZxHQElEAAAAi/cute-love.gif',

//   ],
//   settings: {
//     backgroundColor: "",
//     textColor: "",
//     enableMusic: true,
//     particleCount: 0,
//     enableFloatingEmojis: true,
//     floatingEmoji: ""
//   },
//   customization: {
//     petName1: "",
//     petName2: "",
//     loverName: "",
//     personalMessage: ""
//   }
// }