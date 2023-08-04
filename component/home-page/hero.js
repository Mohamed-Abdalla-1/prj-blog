import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/CYF Images bank_gallery (1).jpg"
          alt=""
          width={300}
          height={300}
        />
      </div>
      <h1>Hiiiii</h1>
      <p>This is to introduce my self</p>
    </section>
  );
}
export default Hero;
