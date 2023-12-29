import HomeAboutMe from "./home-sections/HomeAboutMe";
import HomeActivities from "./home-sections/HomeActivities";
import HomeContact from "./home-sections/HomeContact";
import HomePortfolios from "./home-sections/HomePortfolios";
import HomeSkills from "./home-sections/HomeSkills";

export default function Home() {
  return (
    <>
      <section
        className="slide-show"
        style={{
          width: "100%",
          height: "300px",
          backgroundColor: "#c8dbcd",
        }}
      >
        <h1>スライドの画像がきます。</h1>
      </section>
      <section className="activities">
        <HomeActivities />
      </section>
      <section className="portfolios">
        <HomePortfolios />
      </section>
      <section className="skills">
        <HomeSkills />
      </section>
      <section className="about-me">
        <HomeAboutMe />
      </section>
      <section className="contact">
        <HomeContact />
      </section>
    </>
  );
}
