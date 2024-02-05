import HomeAboutMe from "@/features/homeSections/HomeAboutMe";
import HomeActivities from "@/features/homeSections/HomeActivities";
import HomeContact from "@/features/homeSections/HomeContact";
import HomePortfolios from "@/features/homeSections/HomePortfolios";
import HomeSkills from "@/features/homeSections/HomeSkills";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
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
      <footer style={{ backgroundColor: "#ffffff" }}>
        BBの部屋 © 2024 by BB All rights reserved.
      </footer>
    </div>
  );
}
