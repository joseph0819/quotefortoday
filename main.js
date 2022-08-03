const btn = document.querySelector('.btn');
const output = document.querySelector('.output');

let randomQuote = [`Today is a new day. - "umunna joseph"`,
    'welcome to your best year yet. \n- "Ephraim Peters"',
    'Even if you are not ready for the day, it cannot always be night. \n- "Kanye West"',
    'Ask and it shall be given unto you.\n -"The bible"',
    'Create your own luck. \n -"Ben 10"',
    'As the sun rises from the east and sets in the west.\n -"Lil durk"',
    'Meet success as a gentleman and disaster like a man. \n -"David Umunna"',
    'I prophesy. \n -"Papa"',
    'Make hay while the sun shines \n -"Daniel achalugo"',
    'Rise and shine.\n -"Peters"',
    'Keep pushing. -"Kung-fu Panda"',
    'Its your season. -"Me"',
    'Follow who know road."Obi Cubanna"',
    'Dont pet sweaty things. Dont sweat petty things. -"Internet"',
    'Keep it simple stupid. -"Wise one" ',
    'Swim with the sharks. -"Sharktales"',
    'Before doing anything ask yourself, "Would an idiot do that". -"Silver"',
    'This too shall pass."Bible" ',
    'Fail often. Fail better. -"Me"',
    'Just do it. -"Nike"',
    'Only boring people say they’re bored. -"Around the river bend"',
    'Only chickens accomplish something by sitting on their asses. -"Internet"',
    'If you can’t blind them with brilliance, baffle them with bullshit. -"Benjamin"',
    'Silence is golden. Unless you have kids. Then silence is suspicious. "Vast Internet Space"',
    'If you can’t afford virtual reality headsets, you can close your eyes and imagine everything you want. "Joseph"'

]

   


    function random(){
        rq = randomQuote[Math.floor(Math.random() * randomQuote.length)]

        output.innerHTML = rq;
    }
    btn.addEventListener('click', random);