const emojipedia = [
  {
    id: 1,
    emoji: "😀",
    name: "Grinning Face",
    meaning: "A typical smiley face emoji. Shows joy and happiness",
  },
  {
    id: 2,
    emoji: "😂",
    name: "Face with Tears of Joy",
    meaning: "A face laughing so hard that it's crying",
  },
  {
    id: 3,
    emoji: "😊",
    name: "Smiling Face with Smiling Eyes",
    meaning: "A smiling face with smiling eyes",
  },
  {
    id: 4,
    emoji: "😍",
    name: "Smiling Face with Heart-Eyes",
    meaning: "A face with hearts instead of eyes, expressing love",
  },
  {
    id: 5,
    emoji: "🥰",
    name: "Smiling Face with Hearts",
    meaning:
      "A face with smiling eyes and three hearts floating above its head",
  },
  {
    id: 6,
    emoji: "🤣",
    name: "Rolling on the Floor Laughing",
    meaning: "A face rolling on the floor laughing",
  },
  {
    id: 7,
    emoji: "😎",
    name: "Smiling Face with Sunglasses",
    meaning:
      "A face wearing sunglasses, indicating a cool, confident, or carefree attitude",
  },
  {
    id: 8,
    emoji: "😇",
    name: "Smiling Face with Halo",
    meaning:
      "A face with an angelic halo above its head, representing innocence or goodness",
  },
  {
    id: 9,
    emoji: "🥳",
    name: "Partying Face",
    meaning: "A face with a party hat, celebrating a special occasion or event",
  },
  {
    id: 10,
    emoji: "😘",
    name: "Face Blowing a Kiss",
    meaning:
      "A face with puckered lips and a heart floating in the air, symbolizing a kiss being sent",
  },
  {
    id: 11,
    emoji: "🤗",
    name: "Hugging Face",
    meaning:
      "A face smiling with open hands above its mouth, representing a hug",
  },
  {
    id: 12,
    emoji: "😋",
    name: "Face Savoring Food",
    meaning:
      "A face with a tongue sticking out and one eye closed, enjoying food",
  },
  {
    id: 13,
    emoji: "😜",
    name: "Winking Face with Tongue",
    meaning:
      "A winking face with its tongue sticking out, implying a joke or playful manner",
  },
  {
    id: 14,
    emoji: "🤪",
    name: "Zany Face",
    meaning:
      "A face with a zany expression, indicating a sense of craziness or silliness",
  },
  {
    id: 15,
    emoji: "😛",
    name: "Face with Tongue",
    meaning:
      "A face with its tongue sticking out, often used to convey a playful or teasing tone",
  },
  {
    id: 16,
    emoji: "😝",
    name: "Squinting Face with Tongue",
    meaning:
      "A face with squinting eyes and its tongue sticking out, indicating a sense of mischief or silliness",
  },
  {
    id: 17,
    emoji: "🤑",
    name: "Money-Mouth Face",
    meaning:
      "A face with dollar signs for eyes and a green banknote stuck in its tongue, indicating wealth or greed",
  },
  {
    id: 18,
    emoji: "🤓",
    name: "Nerd Face",
    meaning:
      "A face with glasses and a nerdy expression, often used to denote intelligence or studiousness",
  },
  {
    id: 19,
    emoji: "😎",
    name: "Smiling Face with Sunglasses",
    meaning:
      "A face wearing sunglasses, indicating a cool, confident, or carefree attitude",
  },
  {
    id: 20,
    emoji: "🧐",
    name: "Face with Monocle",
    meaning:
      "A face with one raised eyebrow and a monocle, often used to convey a sense of curiosity or sophistication",
  },
  {
    id: 21,
    emoji: "😔",
    name: "Pensive Face",
    meaning:
      "A face with a slightly sad or thoughtful expression, often indicating regret or disappointment",
  },
  {
    id: 22,
    emoji: "😒",
    name: "Unamused Face",
    meaning: "A face with a straight mouth and a bored or skeptical expression",
  },
  {
    id: 23,
    emoji: "😞",
    name: "Disappointed Face",
    meaning:
      "A face with a downward gaze and a frown, indicating sadness or disappointment",
  },
  {
    id: 24,
    emoji: "😖",
    name: "Confounded Face",
    meaning:
      "A face with an x-shaped mouth and scrunched eyes, indicating frustration or distress",
  },
  {
    id: 25,
    emoji: "😠",
    name: "Angry Face",
    meaning:
      "A face with a frowning mouth and angry eyes, indicating strong negative emotions like anger or rage",
  },
  {
    id: 26,
    emoji: "🤬",
    name: "Face with Symbols on Mouth",
    meaning:
      "A face with symbols covering its mouth, indicating strong negative emotions like anger or cursing",
  },
  {
    id: 27,
    emoji: "😡",
    name: "Pouting Face",
    meaning:
      "A face with a frowning mouth and scowling eyes, indicating frustration or annoyance",
  },
  {
    id: 28,
    emoji: "😣",
    name: "Persevering Face",
    meaning:
      "A face with a determined expression and tightly closed eyes, indicating struggle or perseverance",
  },
  {
    id: 29,
    emoji: "😤",
    name: "Face with Steam From Nose",
    meaning:
      "A face with a frowning mouth and steam coming out of its nose, indicating frustration or anger",
  },
  {
    id: 30,
    emoji: "😥",
    name: "Sad but Relieved Face",
    meaning:
      "A face with a sad expression and a bead of sweat, indicating relief mixed with sadness",
  },
  {
    id: 31,
    emoji: "😨",
    name: "Fearful Face",
    meaning:
      "A face with wide, white eyes and a blue forehead, indicating fear or shock",
  },
  {
    id: 32,
    emoji: "😰",
    name: "Anxious Face with Sweat",
    meaning:
      "A face with wide, white eyes and a blue forehead, indicating fear or shock with sweat dripping down its face",
  },
  {
    id: 33,
    emoji: "😱",
    name: "Face Screaming in Fear",
    meaning:
      "A face with a wide, open mouth and a blue forehead, indicating extreme fear or horror",
  },
  {
    id: 34,
    emoji: "😭",
    name: "Loudly Crying Face",
    meaning:
      "A face with closed eyes and a stream of tears, indicating sadness or intense emotion",
  },
  {
    id: 35,
    emoji: "😪",
    name: "Sleepy Face",
    meaning:
      "A face with closed eyes and a blue forehead, indicating sleepiness or tiredness",
  },
  {
    id: 36,
    emoji: "😴",
    name: "Sleeping Face",
    meaning:
      "A face with closed eyes and a blue forehead, indicating sleep or rest",
  },
  {
    id: 37,
    emoji: "🥺",
    name: "Pleading Face",
    meaning:
      "A face with large, puppy-dog eyes and a frowning mouth, indicating a pleading or begging expression",
  },
  {
    id: 38,
    emoji: "😷",
    name: "Face with Medical Mask",
    meaning:
      "A face with closed eyes and a blue forehead, wearing a surgical mask, indicating illness or concern for health",
  },
  {
    id: 39,
    emoji: "🤒",
    name: "Face with Thermometer",
    meaning:
      "A face with closed eyes and a blue forehead, holding a thermometer in its mouth, indicating sickness or fever",
  },
  {
    id: 40,
    emoji: "🤕",
    name: "Face with Head-Bandage",
    meaning:
      "A face with closed eyes and a blue forehead, with a white bandage wrapped around its head, indicating injury or pain",
  },
  {
    id: 41,
    emoji: "🤢",
    name: "Nauseated Face",
    meaning:
      "A face with green eyes and a blue forehead, indicating nausea or disgust",
  },
  {
    id: 42,
    emoji: "🤮",
    name: "Face Vomiting",
    meaning:
      "A face with closed eyes and a stream of vomit coming from its mouth, indicating sickness or disgust",
  },
  {
    id: 43,
    emoji: "🤧",
    name: "Sneezing Face",
    meaning:
      "A face with closed eyes and a blue forehead, sneezing into a white handkerchief, indicating illness or allergies",
  },
  {
    id: 44,
    emoji: "🥵",
    name: "Hot Face",
    meaning:
      "A face with closed eyes and a blue forehead, sweating profusely, indicating heat or exertion",
  },
  {
    id: 45,
    emoji: "🥶",
    name: "Cold Face",
    meaning:
      "A face with closed eyes and a blue forehead, shivering, indicating cold or freezing temperatures",
  },
  {
    id: 46,
    emoji: "🥴",
    name: "Woozy Face",
    meaning:
      "A face with crossed eyes and a blue forehead, indicating dizziness or disorientation",
  },
  {
    id: 47,
    emoji: "😵",
    name: "Dizzy Face",
    meaning:
      "A face with crossed eyes and a blue forehead, indicating extreme dizziness or unconsciousness",
  },
  {
    id: 48,
    emoji: "🤯",
    name: "Exploding Head",
    meaning:
      "A face with its head exploding, indicating shock, amazement, or being overwhelmed",
  },
  {
    id: 49,
    emoji: "🤠",
    name: "Cowboy Hat Face",
    meaning:
      "A face with a cowboy hat and a big grin, indicating a cowboy or Western theme",
  },
  {
    id: 50,
    emoji: "🥳",
    name: "Partying Face",
    meaning:
      "A face with a party hat and a big grin, indicating celebration or joy",
  },
  {
    id: 51,
    emoji: "🥸",
    name: "Disguised Face",
    meaning:
      "A face with a glasses and fake nose, indicating disguise or playfulness",
  },
  {
    id: 52,
    emoji: "😎",
    name: "Smiling Face with Sunglasses",
    meaning:
      "A face with sunglasses and a big grin, indicating coolness or confidence",
  },
  {
    id: 53,
    emoji: "🤓",
    name: "Nerd Face",
    meaning:
      "A face with glasses and a big grin, indicating intelligence or studiousness",
  },
  {
    id: 54,
    emoji: "🧐",
    name: "Face with Monocle",
    meaning:
      "A face with a monocle and a big grin, indicating sophistication or curiosity",
  },
  {
    id: 55,
    emoji: "😕",
    name: "Confused Face",
    meaning:
      "A face with a perplexed expression, indicating confusion or uncertainty",
  },
  {
    id: 56,
    emoji: "😟",
    name: "Worried Face",
    meaning:
      "A face with a frowning mouth and a blue forehead, indicating worry or concern",
  },
  {
    id: 57,
    emoji: "🙁",
    name: "Slightly Frowning Face",
    meaning:
      "A face with a slightly frowning mouth, indicating mild sadness or disappointment",
  },
  {
    id: 58,
    emoji: "☹️",
    name: "Frowning Face",
    meaning:
      "A face with a frowning mouth, indicating sadness or disappointment",
  },
  {
    id: 59,
    emoji: "😮",
    name: "Face with Open Mouth",
    meaning:
      "A face with wide, open eyes and a blue forehead, indicating surprise or shock",
  },
  {
    id: 60,
    emoji: "😯",
    name: "Hushed Face",
    meaning:
      "A face with wide, open eyes and a blue forehead, indicating surprise, shock, or disbelief",
  },
  {
    id: 61,
    emoji: "😲",
    name: "Astonished Face",
    meaning:
      "A face with wide, open eyes and a blue forehead, indicating extreme surprise or shock",
  },
  {
    id: 62,
    emoji: "😳",
    name: "Flushed Face",
    meaning:
      "A face with wide, open eyes and a red forehead, indicating embarrassment or shyness",
  },
  {
    id: 63,
    emoji: "🥺",
    name: "Pleading Face",
    meaning:
      "A face with large, puppy-dog eyes and a frowning mouth, indicating a pleading or begging expression",
  },
  {
    id: 64,
    emoji: "😦",
    name: "Frowning Face with Open Mouth",
    meaning:
      "A face with wide, open eyes and a frowning mouth, indicating shock or disbelief",
  },
  {
    id: 65,
    emoji: "😧",
    name: "Anguished Face",
    meaning:
      "A face with wide, open eyes and a blue forehead, indicating extreme distress or sorrow",
  },
  {
    id: 66,
    emoji: "😨",
    name: "Fearful Face",
    meaning:
      "A face with wide, white eyes and a blue forehead, indicating fear or shock",
  },
  {
    id: 67,
    emoji: "😰",
    name: "Anxious Face with Sweat",
    meaning:
      "A face with wide, white eyes and a blue forehead, indicating fear or shock with sweat dripping down its face",
  },
  {
    id: 68,
    emoji: "😥",
    name: "Sad but Relieved Face",
    meaning:
      "A face with a sad expression and a bead of sweat, indicating relief mixed with sadness",
  },
  {
    id: 69,
    emoji: "😢",
    name: "Crying Face",
    meaning:
      "A face with a frowning mouth and teardrops, indicating sadness or intense emotion",
  },
  {
    id: 70,
    emoji: "😭",
    name: "Loudly Crying Face",
    meaning:
      "A face with closed eyes and a stream of tears, indicating sadness or intense emotion",
  },
];

export default emojipedia;
