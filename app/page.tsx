import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <div className="relative h-full w-full bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
      </div> */}
      <div className="grid grid-cols-2 justify-center items-center absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-size-[20px_20px]">
        <div className="h-screen flex items-center justify-center">
          <p className="w-80 text-gray-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            eligendi minima voluptas, perferendis facere voluptatum, ipsa quod
            veniam quas itaque corporis quos aperiam deleniti optio ad. Iste quo
            porro possimus.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="rounded-full"
            src="/profile.jpg"
            width={200}
            height={200}
            alt="profile"
          />
        </div>
      </div>
    </>
  );
}
