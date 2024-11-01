export default function Banner() {
  return (
    <div className="w-full h-[38rem] pt-[10vh] bg-[url('https://i.ibb.co.com/3CYj0pq/banner-1.png')] bg-cover bg-no-repeat bg-center">
      <div className=" w-11/12 lg:w-9/12  mx-auto text-center space-y-12 ">
        <h1 className=" text-3xl md:text-5xl lg:text-7xl text-white font-bold">
          Taste Our Delicious <br />
          Best Foods
        </h1>
        <p className="text-gray-200 mx-auto max-w-[40rem] text-xl">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humou.
        </p>

        <div className="bg-white w-[20rem] md:w-[40rem] mx-auto h-12  max-w-11/12 flex items-center rounded-lg">
          <input
            type="text"
            placeholder="Search Best Food"
            className="input h-full w-full rounded-lg pl-4 border-none input-bordered"
          />
          <button className="bg-[#FFC107] font-bold text-2xl text-[#403F3F] py-2 px-4 rounded-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
