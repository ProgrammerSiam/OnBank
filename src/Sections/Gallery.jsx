export default function Gallery() {
  return (
    <section className="py-5">
      <div className="container">
        {/* features images */}
        <div className="grid items-center grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-5 justify-items-center ">
          <img
            className="object-cover w-36"
            src="https://i.ibb.co/9GM5CJz/img-1.png"
            alt="gallery-images-1"
          />
          <img
            className="object-cover w-36"
            src="
https://i.ibb.co/Vqq79kN/img-2.png"
            alt="gallery-images-2"
          />
          <img
            className="object-cover w-36"
            src="

https://i.ibb.co/bvYrxKK/img-3.png"
            alt="gallery-images-3"
          />
          <img
            className="object-cover w-36"
            src="
https://i.ibb.co/SBvLbTP/img-4.png"
            alt="gallery-images-4"
          />
          <img
            className="object-cover w-36"
            src="
https://i.ibb.co/23BzfSS/img-5.png"
            alt="gallery-images-5"
          />
        </div>
      </div>
    </section>
  );
}
