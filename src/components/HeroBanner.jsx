export function HeroBanner() {
  return (
    <>
      <div className="hidden md:block md:absolute md:top-0 md:right-0">
        <picture>
          <source
            srcSet="../assets/images/image-hero-tablet.webp"
            type="image/webp"
            media="(min-width: 768px) and (max-width: 1024px)"
          />
          <source
            srcSet="../assets/images/image-hero-desktop.webp"
            type="image/webp"
            media="(min-width: 1024px)"
          />
          <source
            srcSet="../assets/images/image-hero-desktop.png"
            type="image/png"
            media="(min-width: 1024px)"
          />
          <img
            src="../assets/images/image-hero-tablet.png"
            alt="Hero Banner image"
            loading="lazy"
            className="md:max-w-none mx-auto md:mx-0"
          />
        </picture>
      </div>
      <section className="mt-[38px] mx-4 md:mx-10 lg:mx-[165px]">
        <div className="md:flex">
          <div className="flex flex-col gap-[1.5rem] pb-[2.875rem] md:w-1/2 md:pt-20 md:pb-0">
            <h1 className="text-[2.375rem] lg:text-[3.5rem]">
              Maximize skill, minimize budget
            </h1>
            <p className="lg:text-[1.125rem] lg:mr-[114px]">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
            <button className="btn btn-secondary">Get Started</button>
          </div>

          <div className="md:hidden">
            <picture>
              <source
                srcSet="../assets/images/image-hero-mobile.webp"
                type="image/webp"
                media="(max-width: 767px)"
              />
              <img
                src="../assets/images/image-hero-mobile.png"
                alt="Hero Banner image"
                loading="lazy"
                className="md:max-w-none mx-auto md:mx-0"
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
}
