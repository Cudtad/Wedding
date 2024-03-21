import { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

const CountdownTimer = ({ targetDate }: { targetDate: dayjs.Dayjs }) => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      const duration = dayjs.duration(targetDate.diff(now));

      setRemainingTime({
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex item-center gap-x-8 font-poppins">
      <div className="flex flex-col text-sm md:text-xl">
        <span className="text-center text-orange-100 font-allura text-base md:text-xl">
          {remainingTime.days}
        </span>
        <span>Days</span>
      </div>
      <div className="flex flex-col text-sm md:text-xl">
        <span className="text-center text-orange-100 font-allura text-base md:text-xl">
          {remainingTime.hours}
        </span>
        <span>Hours</span>
      </div>
      <div className="flex flex-col text-sm md:text-xl">
        <span className="text-center text-orange-100 font-allura text-base md:text-xl">
          {remainingTime.minutes}
        </span>
        <span>Minutes</span>
      </div>
      <div className="flex flex-col text-sm md:text-xl">
        <span className="text-center text-orange-100 font-allura text-base md:text-xl">
          {remainingTime.seconds < 10
            ? `0${remainingTime.seconds}`
            : remainingTime.seconds}
        </span>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
