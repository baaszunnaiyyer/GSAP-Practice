import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/all";
import gsap from "gsap";

const GsapText = () => {
  // TODO: Implement gsap text animation
  gsap.registerPlugin(TextPlugin);
  useGSAP(()=>{
    gsap.to("#text",{
      opacity:1,
      text: {
        value: "Zunnaiyyer",
        padSpace:true,
        preserveSpaces: true,
        rtl:true,
        speed:0.5,
        type: "diff"
      },
      yoyo:true,
      ease: "expo",
      repeat:-1,
      repeatDelay:2
    })    

    gsap.fromTo(".para",{
      opacity:0,
      y:10
    },{
      opacity:1,
      y:0,
      stagger:0.1
    })
  })
  

  return (
    <main>
      <h1 id="text" className="">
        Kasra
      </h1>

      <p className="mt-5 text-gray-500 para">
        We can use same method like <code>gsap.to()</code>,{" "}
        <code>gsap.from()</code>, <code>gsap.fromTo()</code> and{" "}
        <code>gsap.timeline()</code> to animate text.
      </p>

      <p className="mt-5 text-gray-500 para">
        Using these methods we can achieve various text animations and effects
        like fade in, fade out, slide in, slide out, and many more.
      </p>

      <p className="mt-5 text-gray-500 para">
        For more advanced text animations and effects, you can explore the GSAP
        TextPlugin or other third-party libraries that specialize in text
        animations.
      </p>

      <p className="mt-5 text-gray-500 para">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/Plugins/TextPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          TextPlugin
        </a>{" "}
        plugin.
      </p>
    </main>
  );
};

export default GsapText;
