// const info=document.querySelector(".info")
// Select all <p> elements inside the .info div
const h1 = document.querySelector('.info h1');
const paragraphs = document.querySelectorAll('.info p span');
const selection = document.querySelector('#zodiac');
const btn = document.querySelector('.submit');
var info = document.querySelector('.info');

// Access the second <p> (index 1, since indices are zero-based)
const description = paragraphs[0];
const luckyNumber = paragraphs[1];
const compatibility = paragraphs[2];
const mood = paragraphs[3];
const color = paragraphs[4];
const suggestion = paragraphs[5];

// const spnone = document.querySelector('.spnone');

btn.addEventListener('click',()=>{
    info.style.display = 'block';
    const selectedZodiac = selection.value;
    if(selectedZodiac=="Aries Horoscope"){

        h1.innerHTML=selectedZodiac
        description.innerHTML=" Emotional connections are emphasized today. You may feel nostalgic or want to reconnect with family and friends. Home improvements might also capture your interest. Trust your heart in making decisions."
        luckyNumber.innerHTML="2"
        compatibility.innerHTML="Taurus"
        mood.innerHTML="Nostalgic"
        color.innerHTML="White"
        suggestion.innerHTML=" Spend quality time with loved ones or engage in a creative activity."


    }
   
    if(selectedZodiac=="Taurus Horoscope"){

        h1.innerHTML=selectedZodiac
        description.innerHTML="A calm and steady day awaits you. Focus on completing tasks that require patience and persistence. Financial stability may be highlighted, and you could receive unexpected good news related to work."
        luckyNumber.innerHTML="5"
        compatibility.innerHTML="Cancer"
        mood.innerHTML="Calm"
        color.innerHTML="Green"
        suggestion.innerHTML=" Indulge in something you love, like a delicious meal or gardening."


    }
    if(selectedZodiac=="Gemini Horoscope"){

        h1.innerHTML=selectedZodiac
        description.innerHTML=" Your communication skills are at their peak today. It’s a perfect time to network, share ideas, or write down thoughts that can later turn into great projects. Be mindful of spreading yourself too thin."
        luckyNumber.innerHTML="3"
        compatibility.innerHTML="Aquarius"
        mood.innerHTML="Happy"
        color.innerHTML="Yellow"
        suggestion.innerHTML="Focus on one important task rather than multitasking excessively"


    }
    if(selectedZodiac=="Cancer Horoscope"){

        h1.innerHTML=selectedZodiac
        description.innerHTML="Emotional connections are emphasized today. You may feel nostalgic or want to reconnect with family and friends. Home improvements might also capture your interest. Trust your heart in making decisions."
        luckyNumber.innerHTML="2"
        compatibility.innerHTML="Taurus"
        mood.innerHTML="Nostalgic"
        color.innerHTML="White"
        suggestion.innerHTML="Spend quality time with loved ones or engage in a creative activity."


    }
    if(selectedZodiac=="Leo Horoscope"){

        h1.innerHTML=selectedZodiac
        description.innerHTML="Confidence is your superpower today. You will attract attention effortlessly, making this an excellent day for public speaking, leadership, or creative projects. Use your charisma wisely and inspire others."
        luckyNumber.innerHTML="9"
        compatibility.innerHTML="Aries"
        mood.innerHTML="Confident"
        color.innerHTML="Gold"
        suggestion.innerHTML="Avoid letting your pride get in the way of meaningful connections."


    }
    if(selectedZodiac=="Virgo Horoscope"){

        h1.innerHTML=selectedZodiac
        description.innerHTML="Organization and detail-oriented tasks will come naturally to you today. This is a great day to plan long-term projects or declutter your space. Take care not to be overly critical of yourself or others."

      
        luckyNumber.innerHTML="1"
        compatibility.innerHTML="Capricorn"
        mood.innerHTML="Focused"
        color.innerHTML="Brown"
        suggestion.innerHTML="Take breaks to avoid overworking yourself; a short walk can refresh your mind."


    }
    if(selectedZodiac=="Libra Horoscope"){

        h1.innerHTML=selectedZodiac
        description.innerHTML=" Seek balance in all aspects of your life today. Harmony in relationships will be important, and your natural charm will help smooth over any conflicts. Consider engaging in artistic activities."

      
        luckyNumber.innerHTML="8"
        compatibility.innerHTML="Gemini"
        mood.innerHTML="Peaceful"
        color.innerHTML="Pink"
        suggestion.innerHTML="Spend time outdoors or meditate to regain inner balance."


    }
    if(selectedZodiac=="Scorpio Horoscope"){

        h1.innerHTML=selectedZodiac
        description.innerHTML=" Intense emotions and strong passions guide your day. You may uncover hidden truths or feel a desire to dive deep into complex topics. Trust your intuition, but avoid becoming too secretive."

      
        luckyNumber.innerHTML="4"
        compatibility.innerHTML="Pisces"
        mood.innerHTML=" Mysterious"
        color.innerHTML="Black"
        suggestion.innerHTML=" Engage in deep conversations but remain open to differing opinions"


    }
    if(selectedZodiac=="Sagittarius Horoscope"){

        h1.innerHTML=selectedZodiac
        description.innerHTML="A day filled with adventure and new possibilities awaits. Your optimistic outlook will inspire those around you. Travel or learning opportunities may present themselves, so keep an open mind."

      
        luckyNumber.innerHTML="6"
        compatibility.innerHTML="Leo"
        mood.innerHTML="Optimistic"
        color.innerHTML="Purple"
        suggestion.innerHTML="Take a bold step toward a goal you've been hesitating to pursue."


    }
    if(selectedZodiac=="Capricorn Horoscope"){

        h1.innerHTML=selectedZodiac
        description.innerHTML=" Hard work and responsibility are highlighted today. Your disciplined approach will help you achieve long-term goals. Financial decisions made now will likely yield positive results in the future."

      
        luckyNumber.innerHTML="10"
        compatibility.innerHTML=" Virgo"
        mood.innerHTML="Ambitious"
        color.innerHTML="Gray"
        suggestion.innerHTML="Don't forget to celebrate small victories along the way."


    }
    if(selectedZodiac=="Aquarius Horoscope"){

        h1.innerHTML=selectedZodiac
        description.innerHTML="Innovation and creativity are your strengths today. You may come up with unique ideas that challenge conventional thinking. Social connections will play an important role in your success."

      
        luckyNumber.innerHTML="11"
        compatibility.innerHTML="Libra"
        mood.innerHTML="Inventive"
        color.innerHTML="Blue"
        suggestion.innerHTML="Share your ideas with like-minded individuals for valuable feedback."


    }
    if(selectedZodiac=="Pisces Horoscope"){

        h1.innerHTML=selectedZodiac
        description.innerHTML=" Your imagination and intuition are heightened today. It's a perfect time for creative pursuits or deep introspection. Listen to your dreams—they might hold important messages."

      
        luckyNumber.innerHTML="12"
        compatibility.innerHTML=" Scorpio"
        mood.innerHTML="Dreamy"
        color.innerHTML="Sea Green"
        suggestion.innerHTML="Keep a journal to capture creative ideas as they come to you."


    }
    
   
  
   
    info.style.display = 'block';
})



