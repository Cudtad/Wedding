/* eslint-disable @next/next/no-img-element */
type Props = {
  name: string;
  description: string;
  src: string;
};

export default function Couple({ name, description, src }: Props) {
  return (
    <div className="flex">
      <div>
        <div className="font-allura text-3xl font-semibold text-end">{name}</div>
        <div className=" bg-[#e4e4e4] p-2 shadow-sm">
          <p className="text-sm font-poppins max-w-96 bg-[#fbfbfb] p-5">{description}</p>
        </div>
      </div>
      <div className="w-36 h-36 rounded-full bg-slate-300 flex justify-center items-center">
        <img className="w-32 h-32 rounded-full" src={src} alt="Couple Image" />
      </div>
    </div>
  );
}
