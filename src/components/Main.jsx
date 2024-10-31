import Button from "@/components/Button";
import WatchImages from "@/components/WatchImages";

const Main = () => {
  return (
    <div className="grid grid-cols-[1fr,auto] text-white">
      <div className="grid grid-rows-[4fr, 1fr, 2fr]">
        <div className="self-center">
          <h1 className="text-6xl font-bold leading-normal">
            The Perfect Moment
          </h1>
          <div className="text-6xl leading-normal">
            Between Past And Future.
          </div>
        </div>
        <Button />
        <div className="self-end">arrows 1 arrows</div>
      </div>
      <WatchImages />
    </div>
  );
};

export default Main;
