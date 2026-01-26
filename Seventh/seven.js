  const zodiacSigns = [
    "Capricorn",
    "Leo",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Virgo",
    "Scorpio",
    "Libra",
    "Sagittarius",
  ];

  const compliments = [
    "You have a magnetic personality.",
    "People feel comfortable around you.",
    "You are more capable than you realize.",
    "Your intuition is surprisingly strong.",
    "You bring calm into chaotic situations.",
    "You have a natural leadership aura.",
    "Your creativity stands out.",
    "You are emotionally intelligent.",
    "Your honesty is refreshing.",
    "You adapt well to change.",
    "You inspire people without trying.",
    "Your energy is contagious.",
    "You have a sharp mind.",
    "You see beauty where others don’t.",
    "Your patience is admirable.",
    "You have a strong sense of purpose.",
    "People trust your judgment.",
    "You are quietly confident.",
    "Your resilience is impressive.",
    "You handle pressure well.",
    "You are a good listener.",
    "Your perspective is unique.",
    "You learn from your mistakes.",
    "You balance logic and emotion well.",
    "You have a warm presence.",
    "You uplift others naturally.",
    "Your focus is powerful.",
    "You think deeply about life.",
    "You are dependable.",
    "Your growth mindset sets you apart.",
    "You are wiser than your age suggests.",
  ];

  const victimCardComplaints = [
    "You feel misunderstood more often than you admit.",
    "You give more than you receive.",
    "You notice that things rarely go according to plan.",
    "You often feel others have it easier than you.",
    "You try your best, but luck doesn’t always support you.",
    "You feel taken for granted at times.",
    "You believe your efforts go unnoticed.",
    "You are usually the one adjusting for others.",
    "You feel things go wrong at the worst possible time.",
    "You get blamed even when it’s not your fault.",
    "You don’t always feel appreciated.",
    "You end up doing extra work more often than expected.",
    "You wonder why the same problems repeat for you.",
    "You care more deeply than most people.",
    "You feel unheard in important moments.",
    "You often feel less lucky than others.",
    "You sense your intentions are misunderstood.",
    "You sacrifice a lot without recognition.",
    "You frequently find yourself fixing others’ problems.",
    "You see others take credit for your"
  ]

  const recommendations = [
    "Trust your instincts today.",
    "Take a break and recharge.",
    "Focus on one thing at a time.",
    "Avoid overthinking small issues.",
    "Speak your truth calmly.",
    "Drink more water today.",
    "Let go of what you can’t control.",
    "Spend time with someone positive.",
    "Organize your thoughts before acting.",
    "Be patient — results are coming.",
    "Don’t rush important decisions.",
    "Listen more than you speak today.",
    "Do something creative.",
    "Rest is as important as effort.",
    "Avoid unnecessary arguments.",
    "Reflect before reacting.",
    "Small progress is still progress.",
    "Trust the process.",
    "Be kind to yourself.",
    "Avoid comparing your journey.",
    "A short walk will clear your mind.",
    "Finish pending tasks first.",
    "Express gratitude today.",
    "Stay grounded in reality.",
    "Take responsibility, not pressure.",
    "Set healthy boundaries.",
    "Say no when needed.",
    "Focus on growth, not perfection.",
    "Keep emotions balanced.",
    "Believe in slow success.",
    "End the day with reflection.",
  ];
  const form = document.getElementById('astroForm');

  form.addEventListener('submit',(e)=>{
      e.preventDefault();
      const name = document.getElementById('name').value;
      const date = parseInt((document.getElementById("date")).value); 
      const month = parseInt(document.getElementById("month").value);
      const year = parseInt(document.getElementById('year').value);
      
      const zodiacSign = zodiacSigns[month-1];
      const compliment = compliments[Math.floor(Math.random()*compliments.length)];
      const recommendation = recommendations[Math.floor(Math.random() * recommendations.length)];
      const complaints = victimCardComplaints[Math.floor(Math.random() * victimCardComplaints.length)];

      const result = document.querySelector('p');
      result.textContent = `${name} your zodiac sign is ${zodiacSign} ${compliment} ${complaints} ${recommendation}.`
  })
