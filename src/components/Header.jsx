export function Header() {
  return (
    <>
      <header className="w-full z-[1] relative">
        <div className="mx-4 flex justify-between items-center md:mx-10 pt-4 md:pt-6 lg:mx-[165px] ">
          <img
            className="w-[89px] h-[35px]"
            src="../../assets/images/logo/logo-dark.svg"
            alt=""
          />
          <button className="btn btn-primary bg-primary">Get started</button>
        </div>
      </header>
    </>
  );
}
