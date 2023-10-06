export default function AboutUs() {
  return (
    <section className="py-20 md:py-[120px]">
      <div className="container grid grid-cols-2 gap-10 capitalize md:grid-cols-2 lg:grid-cols-4 justify-items-center ">
        {/* about */}
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <a href="/">features</a>
          <a href="/">out story</a>
          <a href="/">pricing</a>
          <a href="/">review</a>
        </div>

        {/* discover */}
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-semibold">discover</h2>
          <a href="">selling's blog</a>
          <a href="">knowledge bloge</a>
          <a href="">customer stories</a>
          <a href="">help center</a>
        </div>

        {/* company */}
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-semibold">company</h2>
          <a href="/">refers</a>
          <a href="/">our investors</a>
          <a href="/">affiliate program</a>
          <a href="/">press kit</a>
        </div>

        {/* follow us */}
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-semibold">follow us</h2>
          <a href="/">facebook</a>
          <a href="/">twitter</a>
          <a href="/">instagram</a>
          <a href="/">linkedin</a>
        </div>
      </div>
    </section>
  );
}
