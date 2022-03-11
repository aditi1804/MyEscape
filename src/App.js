import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import api from "./api";
import schatzi from './images/schatzi.png';
import dms from './images/dms.jpg';
import over from './images/over.jpg';
import TS from './images/ts.jpg';
import me from './images/mee.jpg';
import channel from './images/Channel.jpg';
import "./App.css"
import "./style.css"
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
      <p> Hey! I am Aditi</p>
        <h1>Welcome to my Musical fantasy</h1>
        <a href="https://www.youtube.com/channel/UCU7kEB3UoMKgOz93uZR1MSA">
         <img alt="Schatzi" src={channel}
         width="1000" height="300"/>
      </a>
       
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Know me! </p>
        <h2 className="aboutme">Aditi Morya is a Singer-Songwriter who started her journey of music in 2020. She hails from Prayagraj, India and is currently pursuing engineering. While she has been writing songs since she was 15, the only outburst of courage occured during the pandemic outbreak which isolation was undoubtedly the most frustating thing. She began her journey on Soundcloud uploading songs under the name ASM which she used as an acronym for her full name Aditi Singh Morya, her friends called her ASM and she found it a really cool name to start with. Her first song on Soundcloud is 'Why do we go?' recorded barely on earphones and she produced the music on bandlab. After uploading a couple of songs, she started her journey on Youtube, uploading original songs and cover songs. Her biggest inspiration is Taylor Swift. She finds her to be the most influential and one the greatest songwriters to exist.</h2>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
<section>



       <div className="card-container">
         <div className="card">
           <div className="card-body">
             <span className="card-number card-circle subtle"> 1</span>
             <h3 className="card-title"> SCHATZI</h3>
             <span className="card-description subtle">
               Schatzi is a song written sung and composed by Aditi Morya.  Hey, I wrote Schatzi yesterday and I am so excited to share the song, I was wondering about the drift in our feelings, thought process as time passes and we grow older, the kind of positivity we have in our life when we are young - full of hopes and dreams thinking that we won't leave even a single stone unturned and then the gradual change which made me imagine how would life be in 40s and 60s, so I penned down this song.
Give it a listen and comment below what you feel about this song.
Earphones recommended :)

Lyrics -
Schatzi - Aditi Morya

Dreaming dreams was my happy thing
Till you arrived and changed every bit
Healing cracks, time is mystical
Could look at you, 24*7

And we are crazy, lazy and having fun
Ceasing moments, no worries, we're twenty one
Dream of landing big, making every move
Not running out of time, every failure's our muse

Stay for the better
Say you'd be here forever
Would you stay here forever, Schatzi
Stay for the better
Say you'd be here forever
Would you stay here forever, Schatzi

Time's hard or it's so relative
The shit we hated, now we are living it
Head loaded with responsibilities
(Set me free)
Monthly bills and sleeping pills

Will we be crazy, lazy, having fun?
Will be 60s, bothering everyone
With stick and spects, wrinkling our lives
On the couch,  album 
Throwback to the past times

Stay for the better
Say you'd be here forever
Would you stay here forever, Schatzi
Stay for the better
Say you'd be here forever
Would you stay here forever, Schatzi

Baarishon mein jhoomte,
Phirakte kadam yaad hain?
Yaadon mein jab bhi dhoondoon main
Tu hi bs tu hi paas hai

Stay for the better
Say you'd be here forever
Would you stay here forever, Schatzi

               
             </span>
             <a href="https://www.youtube.com/watch?v=_tv6lMapHXc">
         <img alt="Schatzi" src={schatzi}
         width="500" height="500"/>
      </a>
   
    
           </div>
         </div>
       </div>
      </section>

      <section>

       <div className="card-container">
         <div className="card">
           <div className="card-body">
             <span className="card-number card-circle subtle"> 2</span>
             <h3 className="card-title"> TO SHINE</h3>
             <span className="card-description subtle">
               To Shine is a song written sung and composed by Aditi Morya about being vulerable in love. I wrote this song yesterday and I am so in love with this vibe 🎶 Playing it on repeat for the vibe itself, do give this a listen :-)
               <a href="https://www.youtube.com/watch?v=vS14y2KmHuQ">
         <img alt="Schatzi" src={TS}
         width="500" height="500"/>
      </a>
             </span>
             
           </div>
         </div>
       </div>
      </section>


      <section>



       <div className="card-container">
         <div className="card">
           <div className="card-body">
             <span className="card-number card-circle subtle"> 3</span>
             <h3 className="card-title"> OVER AGAIN</h3>
             <span className="card-description subtle">
               Over Again is a song written sung and composed by Aditi Morya. Been a day since I wrote this song and this feeling is so awesome ❤️

Vocals/Lyrics/Composition - Aditi Morya
Mixing/Mastering - Aadil
Music production - Acey

               <a href="https://www.youtube.com/watch?v=fs8PziBGR1k">
         <img alt="over again" src={over}
         width="500" height="500"/>
      </a>
             </span>
             
           </div>
         </div>
       </div>
      </section>



      <section>



       <div className="card-container">
         <div className="card">
           <div className="card-body">
             <span className="card-number card-circle subtle"> 4</span>
             <h3 className="card-title"> Dear Mr. Secret</h3>
             <span className="card-description subtle">
               Dear Mr. Secret is a song written sung and composed by Aditi Morya. 
Please listen to it and if you like the song, please support me by subscribing to my channel ✨

Lyrics -

Verse 

Dear Mr Secret
How well your eyes danced.
With every single move,
Took my breath away.
With grace
Dancing to your heartbeat,
The shyest version of me.


I know it is said,
Love's a ruthless game
But when I look at you
It all fades away,
I have no other option
This love is a distortion.

Chorus

Ooooo
In a small rented house,
Water dropping out from the ceiling.
We are still dancing around,
Tapping our feet like it's raining
You have got a hundred ways to calm me down.
I have got a thousand reasons to stay with you 
For the rest of my life

Verse

Dear Mr. Secret
You said you are not afraid
When I told 
"I am too good at ruining the game"
You packed up all my fears,
Said I will never let them creep in.


So many girls out there,
That you could go for.
When I think of it,
I fear of losing you
You said, "Hey, I have no other option
My heart ain't at the auction".

Chorus 

Oooooo
In a small rented house,
Water dropping out from the ceiling.
We are still dancing around,
Tapping our feet like it's raining.
You have got a hundred ways to calm me down,
I have got a thousand reasons to stay with you
For the rest of my life.

Outro

So the morning light woke me up again,
Laying by my side was my guitar and a pen.

I was writing a song for you
Then I slept and dreamt
That's what I always do
               
             </span>
             <a href="https://www.youtube.com/watch?v=pJLUkcfdeI4">
         <img alt="Dear Mr Secret" src={dms}
         width="500" height="500"/>
      </a>
           </div>
         </div>
       </div>
      </section>




      <section>



       <div className="card-container">
         <div className="card">
           <div className="card-body">
             <span className="card-number card-circle subtle"> 5</span>
             <h3 className="card-title"> Holy Love</h3>
             <span className="card-description subtle">
               Schatzi is a song written sung and composed by Aditi Morya
               
             </span>
             <a href="https://www.youtube.com/watch?v=_tv6lMapHXc">
         <img alt="Schatzi" src={schatzi}
         width="500" height="500"/>
      </a>   
           </div>
         </div>
       </div>
      </section>
      <section>



<div className="card-container">
  <div className="card">
    <div className="card-body">
      <span className="card-number card-circle subtle"> 6</span>
      <h3 className="card-title"> Staircase</h3>
      <span className="card-description subtle">
        Schatzi is a song written sung and composed by Aditi Morya
        
      </span>
      <a href="https://www.youtube.com/watch?v=_tv6lMapHXc">
         <img alt="Schatzi" src={schatzi}
         width="500" height="500"/>
      </a>
    </div>
  </div>
</div>
</section>

<section>



       <div className="card-container">
         <div className="card">
           <div className="card-body">
             <span className="card-number card-circle subtle"> </span>
             <h3 className="card-title"> DO YOU KNOW ME?</h3>
             <span className="card-description subtle">
               DO YOU KNOW ME? is a song written sung and composed by Aditi Morya
               
             </span>
             <a href="https://www.youtube.com/watch?v=bM76HyjGq_k">
         <img alt="do you" src={me}
         width="500" height="500"/>
      </a>   
           </div>
         </div>
       </div>
      </section>

    </>
  );
};



const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>
</Switch>
  );
};

export default App;
