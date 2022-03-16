import "./Section2.css";

import { LittleCard } from "../../../Components/LittleCard/LittleCard";

import imgNirvana from "../../../images/nirvanatestando-removebg-preview.png";
import imgBaeatles from "../../../images/beatles.png";
import imgBlink from "../../../images/blink182.png";
import imgGuns from "../../../images/Guns-N-Roses-Greatest-Hits-2LP-Vinyl.png";
import imgPearl from "../../../images/pearljam.png";
import imgU2 from "../../../images/u2.png";
import imgThe20one from "../../../images/twentyonepil.png";
import imgTheWho from "../../../images/thewho.webp";

export function Section2() {
  return (
    <section className="section2 container mx-auto mt-5 mb-10">
      <div className="title2 mt-3 mb-5">
        <p>NEW RELEASES</p>
      </div>

      <div className="divGrid grid gap-x-1 gap-y-2 grid-cols-4">
        <LittleCard
          img={imgNirvana}
          artist="Nirvana"
          albumName="Nevermind"
          price="$24.98"
          description="The vinyl edition of Nirvanas hit album, NEVERMIND, helped usher in the Grunge era of the 1990s."
          linkDisc="62253d748333f159d3f25539"
        />

        <LittleCard
          img={imgGuns}
          artist="Guns N Roses"
          albumName="Greatest Hits"
          price="$49.96"
          description='Guns N Roses Greatest Hits on Vinyl!2-LP Picture DiscIncludes the bonus track "Shadow of Your Love"'
          linkDisc="62253d758333f159d3f25bad"
        />

        <LittleCard
          img={imgThe20one}
          artist="Twenty One Pilots"
          albumName="Blurryface"
          price="$31.98"
          description="Blurryface is the much anticipated second studio album from Twenty One Pilots."
          linkDisc="62253d748333f159d3f255ad"
        />

        <LittleCard
          img={imgTheWho}
          artist="The Who"
          albumName="Who (Limited Edition)"
          price="$25.98"
          description="Limited 180 Gram Red White and Blue Marbled Vinyl, Numbered 1/3000 - 3000/3000."
          linkDisc="62253d748333f159d3f254e4"
        />

        <LittleCard
          img={imgBaeatles}
          artist="The Beatles"
          albumName="Abbey Road Anniversary"
          price="$22.98"
          description="This Abbey Road release features the new stereo album mix..."
          linkDisc="62253d748333f159d3f255c9"
        />
        <LittleCard
          img={imgU2}
          artist="U2"
          albumName="Zooropa (Blue Edition)"
          price="$38.98"
          description="Zooropa is the eighth studio album by U2.It was released on 5 July 1993 on Island Records."
          linkDisc="62253d758333f159d3f2613a"
        />
        <LittleCard
          img={imgBlink}
          artist="Blink-182"
          albumName="Dude Ranch"
          price="$49.98"
          description="Blink-182s 1997 pop-punk hit is filled with hooky guitar licks, speedy songs, potty humor, nostalgia..."
          linkDisc="62253d758333f159d3f26140"
        />
        <LittleCard
          img={imgPearl}
          artist="Pearl Jam"
          albumName="Gigaton"
          price="$38.98"
          description="Double vinyl LP pressing. 2020 release, the 11th studio album from the acclaimed rockers. Gigaton marks the bands first studio album since 2013"
          linkDisc="62253d748333f159d3f254cd"
        />
      </div>
    </section>
  );
}
