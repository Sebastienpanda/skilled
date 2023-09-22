import { Card } from "./Card.jsx";

export function PopularCourses() {
  return (
    <>
      <section className="backgroundSection mt-[66px] md:mt-[123px] lg:mt-[320px] pb-20 md:pb-[86px] lg:pb-[140px]">
        <div className="grid-container px-4 md:px-10 lg:px-[165px]">
          <div className="header-block px-7 pt-6 pb-8 md:pl-8 md:pr-[21px] md:pt-[54px] lg:pt-16 lg:pb-[138px] lg:px-8">
            <h2 className="text-[1.5rem] lg:text-[2rem]">
              Check out our most popular courses!
            </h2>
          </div>
          <Card
            icon="../assets/images/icon/icon-animation.svg"
            title="Animation"
            description="Learn the latest animation techniques to create stunning motion design and captivate your audience."
            button="Get Started"
          />
          <Card
            icon="../assets/images/icon/icon-design.svg"
            title="Design"
            description="Create beautiful, usable interfaces to help shape the future of how the web looks."
            button="Get Started"
          />
          <Card
            icon="../assets/images/icon/icon-photography.svg"
            title="Photography"
            description="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
            button="Get Started"
          />
          <Card
            icon="../assets/images/icon/icon-crypto.svg"
            title="Crypto"
            description="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
            button="Get Started"
          />
          <Card
            icon="../assets/images/icon/icon-business.svg"
            title="Business"
            description="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
            button="Get Started"
          />
        </div>
      </section>
    </>
  );
}
