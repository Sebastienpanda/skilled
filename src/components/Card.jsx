export function Card({ icon, title, description, button }) {
  return (
    <>
      <div className="relative card pb-8 pt-[56px]">
        <div className="absolute top-[-10%] left-[28px]">
          <img src={icon} alt={title} loading="lazy" />
        </div>
        <div className="flex flex-col gap-0 px-7">
          <h3 className="text-[1.25rem]">{title}</h3>
          <p className="mt-4">{description}</p>
          <button className="mt-6 text-left text-tertiary btn-tertiary">
            {button}
          </button>
        </div>
      </div>
    </>
  );
}
