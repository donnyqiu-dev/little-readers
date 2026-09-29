/* Content: letters (phonics order like Letters and Sounds / Alphablocks), word builder words, books.
   All stories are original. Characters: Pip (a big friendly pup), Nat (a girl), Kit (a cat). */
window.LR = window.LR || {};

/* group = which set of letters it belongs to. Books unlock when all letters of their group are done. */
LR.LETTERS = [
  // Group 1
  { l: 's', group: 1, key: 'sun', emoji: '☀️', action: 'Gerakkan tangan seperti ular: sssss 🐍', video: 'IaNo0YV4MTU',
    find: [['sun', '☀️'], ['snake', '🐍'], ['sock', '🧦'], ['seal', '🦭']] },
  { l: 'a', group: 1, key: 'ant', emoji: '🐜', action: 'Jari berjalan seperti semut: a, a, a 🐜', video: 'qMegstUNaj4',
    find: [['ant', '🐜'], ['apple', '🍎'], ['alligator', '🐊'], ['axe', '🪓']] },
  { l: 't', group: 1, key: 'tap', emoji: '🚰', action: 'Ketuk meja pelan: t, t, t', video: '0H2H2eikB1o',
    find: [['tiger', '🐯'], ['tent', '⛺'], ['turtle', '🐢'], ['tomato', '🍅']] },
  { l: 'p', group: 1, key: 'pig', emoji: '🐷', action: 'Tiup lilin di depan mulut: p, p, p 🕯️', video: 'OMPWMQoVlGE',
    find: [['pig', '🐷'], ['pizza', '🍕'], ['penguin', '🐧'], ['pan', '🍳']] },
  { l: 'i', group: 1, key: 'insect', emoji: '🐛', action: 'Pura-pura geli: i, i, i 🐛', video: '4IUDMNK7cug',
    find: [['insect', '🐛'], ['igloo', '🛖'], ['iguana', '🦎'], ['ink', '🖋️']] },
  { l: 'n', group: 1, key: 'nose', emoji: '👃', action: 'Suara pesawat: nnnnn ✈️', video: '49_WU7OInpM',
    find: [['nose', '👃'], ['nest', '🪺'], ['nut', '🥜'], ['net', '🥅']] },
  // Group 2
  { l: 'm', group: 2, key: 'moon', emoji: '🌙', action: 'Usap perut, enak: mmmmm 😋', video: 'oK2_CvC3eyw',
    find: [['moon', '🌙'], ['mouse', '🐭'], ['monkey', '🐒'], ['milk', '🥛']] },
  { l: 'd', group: 2, key: 'dog', emoji: '🐶', action: 'Pukul drum: d, d, d 🥁', video: '6yrSGth4Qd0',
    find: [['dog', '🐶'], ['duck', '🦆'], ['drum', '🥁'], ['dinosaur', '🦕']] },
  { l: 'g', group: 2, key: 'goat', emoji: '🐐', action: 'Suara air di tenggorokan: g, g, g', video: 'npIPwuodnMQ',
    find: [['goat', '🐐'], ['gift', '🎁'], ['guitar', '🎸'], ['gorilla', '🦍']] },
  { l: 'o', group: 2, key: 'octopus', emoji: '🐙', action: 'Kaget, mulut bulat: o! o! 😮', video: '355Y8ubSFxo',
    find: [['octopus', '🐙'], ['otter', '🦦'], ['ox', '🐂'], ['olive', '🫒']] },
  // Group 3
  { l: 'c', group: 3, key: 'cat', emoji: '🐱', action: 'Klik jari seperti kastanyet: c, c, c', video: 'kBf2O_DV6hY',
    find: [['cat', '🐱'], ['cake', '🎂'], ['car', '🚗'], ['cow', '🐄']] },
  { l: 'k', group: 3, key: 'kite', emoji: '🪁', action: 'Terbangkan layang-layang: k, k, k 🪁', video: 'TfGrfsagtaU',
    find: [['kite', '🪁'], ['key', '🔑'], ['kangaroo', '🦘'], ['koala', '🐨']] },
  { l: 'e', group: 3, key: 'egg', emoji: '🥚', action: 'Pecahkan telur: e, e, e 🥚', video: 'dU4diXfwvIs',
    find: [['egg', '🥚'], ['elephant', '🐘'], ['elf', '🧝'], ['envelope', '✉️']] },
  { l: 'u', group: 3, key: 'umbrella', emoji: '☂️', action: 'Buka payung ke atas: u, u, u ☂️', video: 'RPq9XqTVxI8',
    find: [['umbrella', '☂️'], ['up', '⬆️'], ['under', '⬇️'], ['upset', '😣']] },
  { l: 'r', group: 3, key: 'rabbit', emoji: '🐰', action: 'Anjing menggeram: rrrrr 🐕', video: 'ny5L_T-MNq4',
    find: [['rabbit', '🐰'], ['rocket', '🚀'], ['rain', '🌧️'], ['ring', '💍']] },
  // Group 4
  { l: 'h', group: 4, key: 'hat', emoji: '👒', action: 'Napas habis lari: h, h, h 🏃', video: 'SNN1MNKmz7Y',
    find: [['hat', '👒'], ['horse', '🐴'], ['house', '🏠'], ['hen', '🐔']] },
  { l: 'b', group: 4, key: 'ball', emoji: '⚽', action: 'Pantulkan bola: b, b, b ⚽', video: 'QW9m5qgV2bo',
    find: [['ball', '⚽'], ['bus', '🚌'], ['bee', '🐝'], ['banana', '🍌']] },
  { l: 'f', group: 4, key: 'fish', emoji: '🐟', action: 'Ban kempes: fffff 🛞', video: 'UJ7AiZ9gYes',
    find: [['fish', '🐟'], ['frog', '🐸'], ['feather', '🪶']] },
  { l: 'l', group: 4, key: 'lion', emoji: '🦁', action: 'Jilat es krim: lllll 🍦', video: '6rGbQkKTb7A',
    find: [['lion', '🦁'], ['leaf', '🍃'], ['lemon', '🍋'], ['lamp', '💡']] }
];

LR.GROUPS = {
  1: { name: 'Set 1', color: '#f97316' },
  2: { name: 'Set 2', color: '#22c55e' },
  3: { name: 'Set 3', color: '#3b82f6' },
  4: { name: 'Set 4', color: '#a855f7' }
};

/* Word builder: picture + decodable word. Shown once all its letters are learned. */
LR.WORDS = [
  ['ant', '🐜'], ['pin', '📌'], ['tin', '🥫'], ['pan', '🍳'], ['nap', '😴'], ['sit', '🪑'], ['tap', '🚰'],
  ['map', '🗺️'], ['man', '👨'], ['dog', '🐶'], ['pot', '🍲'], ['mop', '🧹'], ['dot', '⚫'], ['pig', '🐷'],
  ['cat', '🐱'], ['cup', '☕'], ['sun', '☀️'], ['net', '🥅'], ['ten', '🔟'], ['red', '🔴'], ['nut', '🥜'], ['rat', '🐀'], ['kid', '🧒'], ['pen', '🖊️'],
  ['hat', '👒'], ['bus', '🚌'], ['bed', '🛏️'], ['bug', '🐛'], ['hen', '🐔'], ['log', '🪵'], ['leg', '🦵'], ['fan', '🪭'], ['bat', '🦇']
];

/* Tricky words cannot be sounded out yet; they are shown with a star and read as a whole. */
LR.TRICKY = ['the', 'to', 'i', 'no', 'go'];

/* Names are introduced like tricky words until their letters are known. */
LR.NAMES = ['pip', 'nat', 'kit'];

/* Books. Each page: t = text, fb = emoji fallback shown until the illustration file exists,
   p = scene description (used in PROMPTS.md for ChatGPT/Gemini). */
LR.BOOKS = [
  { id: 'b01', group: 1, title: 'Pip', emoji: '🐶',
    cover: 'Pip the big friendly pup sitting and smiling at the reader, cover of a picture book',
    pages: [
      { t: 'Pip.', fb: '🐶', p: 'Pip the big pup standing in a sunny garden, wagging his tail, looking at the reader.' },
      { t: 'Pip sits.', fb: '🐶🪑', p: 'Pip sitting down neatly on the grass like a good dog.' },
      { t: 'Nat sits.', fb: '👧', p: 'Nat the little girl sitting on the grass next to Pip, smiling.' },
      { t: 'Pip naps.', fb: '🐶💤', p: 'Pip lying down asleep on the grass, eyes closed, peaceful smile.' },
      { t: 'Nat naps.', fb: '👧💤', p: 'Nat asleep, leaning against sleeping Pip like a big pillow.' },
      { t: 'Tap, tap, tap!', fb: '👆🐶', p: 'Nat awake, gently tapping Pip\'s big nose with one finger; Pip opens one eye.' }
    ] },
  { id: 'b02', group: 1, title: 'Tap, Tap', emoji: '🥫',
    cover: 'Nat holding a shiny tin can and a wooden spoon, Pip watching curiously',
    pages: [
      { t: 'Nat taps a tin.', fb: '👧🥫', p: 'Nat tapping an empty shiny tin can with a wooden spoon like a drum.' },
      { t: 'Tap, tap!', fb: '🥫🎵', p: 'Close-up of the wooden spoon tapping the tin, small motion lines showing the sound.' },
      { t: 'Pip sits.', fb: '🐶', p: 'Pip sitting and tilting his head, listening to the tapping.' },
      { t: 'Pip pants.', fb: '🐶👅', p: 'Pip panting happily with his tongue out, very excited.' },
      { t: 'Pip tips the tin.', fb: '🐶🥫', p: 'Pip nudging the tin with his nose so it tips over and rolls.' },
      { t: 'Pip, sit!', fb: '👧☝️🐶', p: 'Nat laughing and holding up one finger, asking Pip to sit; Pip sitting proudly.' }
    ] },
  { id: 'b03', group: 1, title: 'Pip Spins', emoji: '🌀',
    cover: 'Pip spinning in a circle chasing his own tail, motion lines around him',
    pages: [
      { t: 'Pip spins.', fb: '🐶🌀', p: 'Pip spinning in a circle chasing his tail, swirly motion lines.' },
      { t: 'Spin, Pip, spin!', fb: '🐶🌀🌀', p: 'Nat clapping and cheering while Pip spins faster.' },
      { t: 'Pip tips!', fb: '🐶😵', p: 'Pip dizzy and tipping over onto his side, funny dizzy eyes.' },
      { t: 'Nat pats Pip.', fb: '👧🤚🐶', p: 'Nat kneeling and gently patting dizzy Pip on the head.' },
      { t: 'Pip naps.', fb: '🐶💤', p: 'Pip napping peacefully with his head on Nat\'s lap.' }
    ] },
  { id: 'b04', group: 2, title: 'Dig, Pip, Dig!', emoji: '🕳️',
    cover: 'Pip digging in a sandbox, sand flying behind him',
    pages: [
      { t: 'Pip digs.', fb: '🐶🕳️', p: 'Pip digging in a sandbox with his front paws.' },
      { t: 'Dig, Pip, dig!', fb: '🐶⛱️', p: 'Sand flying everywhere as Pip digs fast; Nat watching and laughing.' },
      { t: 'Pip digs in the sand.', fb: '🐶🏖️', p: 'Pip with his head deep in a hole in the sand, tail up.' },
      { t: 'Pip got a pot!', fb: '🐶🍲', p: 'Pip proudly holding a small old clay pot in his mouth.' },
      { t: 'Nat pats Pip.', fb: '👧🐶', p: 'Nat hugging and patting Pip, holding the little pot.' },
      { t: 'Top dog, Pip!', fb: '🐶🏆', p: 'Pip sitting proudly with the pot on his head like a crown.' }
    ] },
  { id: 'b05', group: 2, title: 'Stop, Pip!', emoji: '✋',
    cover: 'Pip running toward a small brown puppy, Nat holding up her hand',
    pages: [
      { t: 'Pip is on a mat.', fb: '🐶🟫', p: 'Pip lying on a doormat in front of a house.' },
      { t: 'Pip spots a dog.', fb: '🐶👀🐕', p: 'Pip lifting his head and seeing a small brown puppy across the grass.' },
      { t: 'Stop, Pip, stop!', fb: '✋🐶💨', p: 'Pip running toward the puppy; Nat running after him, hand raised.' },
      { t: 'Pip and the dog sit.', fb: '🐶🐕', p: 'Pip and the small puppy sitting side by side, sniffing noses kindly.' },
      { t: 'Pip and the dog nap on the mat.', fb: '🐶🐕💤', p: 'Big Pip and the tiny puppy asleep together on the doormat.' },
      { t: 'Nat pats Pip and the dog.', fb: '👧🐶🐕', p: 'Nat gently patting both sleeping dogs.' }
    ] },
  { id: 'b06', group: 3, title: 'The Red Cup', emoji: '🥤',
    cover: 'Nat holding a bright red cup, Pip looking up at it',
    pages: [
      { t: 'Nat got a red cup.', fb: '👧🔴', p: 'Nat holding up a bright red plastic cup, happy.' },
      { t: 'Pip runs to the cup.', fb: '🐶💨🔴', p: 'Pip running toward the red cup, ears flapping.' },
      { t: 'Pip tips the red cup.', fb: '🐶🔴', p: 'Pip bumping the cup so it tips over, water splashing out.' },
      { t: 'Mud!', fb: '🟤', p: 'A big puddle of mud where the water spilled on the dirt.' },
      { t: 'Pip is in the mud.', fb: '🐶🟤', p: 'Pip rolling happily in the mud, covered in brown spots.' },
      { t: 'Nat and Pip run in the sun.', fb: '👧🐶☀️', p: 'Nat and muddy Pip running together on the grass under a big sun.' }
    ] },
  { id: 'b07', group: 3, title: 'Pip and Kit', emoji: '🐱',
    cover: 'Pip and Kit the grey cat looking at each other curiously',
    pages: [
      { t: 'Kit is a cat.', fb: '🐱', p: 'Kit, a small grey striped cat, sitting and looking at the reader.' },
      { t: 'Kit sits on a rug.', fb: '🐱🟥', p: 'Kit curled up on a round red rug inside the house.' },
      { t: 'Pip runs up to Kit.', fb: '🐶💨🐱', p: 'Big Pip bounding happily toward Kit on the rug.' },
      { t: 'Kit runs!', fb: '🐱💨', p: 'Kit running away quickly with a surprised face, tail up.' },
      { t: 'Kit sits on top.', fb: '🐱⬆️', p: 'Kit sitting on top of a tall bookshelf, looking down at Pip.' },
      { t: 'Pip and Kit nap in the sun.', fb: '🐶🐱☀️', p: 'Pip and Kit napping together in a sunny spot by the window, friends now.' }
    ] },
  { id: 'b08', group: 4, title: 'The Big Hat', emoji: '👒',
    cover: 'Nat wearing a huge red sun hat that covers her eyes, Pip laughing',
    pages: [
      { t: 'Nat has a big hat.', fb: '👧👒', p: 'Nat wearing a very big red sun hat that almost covers her eyes.' },
      { t: 'The hat is red.', fb: '👒🔴', p: 'Close-up of the big red hat with a yellow ribbon.' },
      { t: 'Pip gets the hat.', fb: '🐶👒', p: 'The wind blows the hat off; Pip catches it in his mouth.' },
      { t: 'Pip hops in the hat!', fb: '🐶👒', p: 'Pip sitting inside the upside-down big hat like a boat, very silly.' },
      { t: 'Nat can not get the hat.', fb: '👧🤷', p: 'Nat reaching for the hat but Pip is sitting in it; Nat laughing.' },
      { t: 'Nat and Pip hug.', fb: '👧🤗🐶', p: 'Nat hugging Pip, the red hat on Pip\'s head now.' }
    ] },
  { id: 'b09', group: 4, title: 'Fun in the Sun', emoji: '☀️',
    cover: 'Nat and Pip at a small pond with a frog on a log',
    pages: [
      { t: 'It is hot.', fb: '☀️🥵', p: 'A very sunny day; Nat fanning herself, Pip panting in the shade.' },
      { t: 'Nat and Pip run to the pond.', fb: '👧🐶💦', p: 'Nat and Pip running toward a small pond with reeds.' },
      { t: 'A frog hops on a log.', fb: '🐸🪵', p: 'A little green frog hopping onto a log in the pond.' },
      { t: 'Pip hops on the log.', fb: '🐶🪵', p: 'Big Pip trying to hop onto the same small log, wobbling.' },
      { t: 'Plop! Pip is in the pond.', fb: '💦🐶', p: 'Pip falling into the pond with a big splash, frog watching.' },
      { t: 'It is fun in the sun!', fb: '👧🐶🐸☀️', p: 'Nat, wet Pip and the frog all smiling together by the pond.' }
    ] },
  { id: 'b10', group: 4, title: 'Bed, Pip!', emoji: '🛏️',
    cover: 'Pip trying to squeeze onto a small bed with Nat and Kit',
    pages: [
      { t: 'It is dusk.', fb: '🌆', p: 'Evening sky with a pink and orange sunset over Nat\'s house.' },
      { t: 'Nat gets in bed.', fb: '👧🛏️', p: 'Nat in pajamas climbing into her small bed with a teddy bear.' },
      { t: 'Kit gets on the bed.', fb: '🐱🛏️', p: 'Kit the cat jumping onto the end of the bed.' },
      { t: 'Pip hops on the bed!', fb: '🐶🛏️', p: 'Huge Pip jumping onto the tiny bed, the bed bending.' },
      { t: 'The bed is a mess!', fb: '🛏️🌪️', p: 'Blankets and pillows everywhere, Nat and Kit squished and laughing.' },
      { t: 'Pip naps on the rug.', fb: '🐶💤', p: 'Pip asleep on a rug next to the bed; Nat and Kit asleep in bed; moon in the window.' }
    ] }
];
