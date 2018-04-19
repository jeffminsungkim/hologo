const epochs: any = [
  ["year", 31536000],
  ["month", 2592000],
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1]
];

function getDuration(timeAgoInSeconds: number) {
  for (let [unit, seconds] of epochs) {
    let interval = Math.floor(timeAgoInSeconds / seconds);
    let remains = timeAgoInSeconds - seconds;
    let remainMonth = Math.round(remains / 2592000);

    if (interval >= 1) {
      if (unit === "year" && remainMonth < 12) {
        return {
          interval: interval,
          epoch: unit,
          extraMonth: remainMonth === 0 ? "" : remainMonth,
          extraEpoch: "month"
        };
      } else if (unit === "year" && remainMonth > 12) {
        let months = remainMonth - (interval - 1) * 12;

        if (months === 12) {
          interval += 1;
          months = 0;
        }

        return {
          interval: interval,
          epoch: unit,
          extraMonth: months === 0 ? "" : months,
          extraEpoch: "month"
        };
      } else {
        if (interval === 12) {
          interval = 1;
          unit = "year";
        }
        return {
          interval: interval,
          epoch: unit,
          extraMonth: "",
          extraEpoch: ""
        };
      }
    }
  }

  return {
    interval: 0,
    epoch: "seconds",
    extraMonth: "",
    extraEpoch: ""
  };
}

export function hologo(dateStamp: string, startDate?: any): string {
  const currentDate = Date.now();
  const startDateStamp = new Date(startDate).getTime() || currentDate;

  const timeAgoInSeconds = Math.floor((startDateStamp - new Date(dateStamp).getTime()) / 1000);
  const { interval, epoch, extraMonth, extraEpoch } = getDuration(timeAgoInSeconds);
  const suffixYear = interval === 1 ? "" : "s";
  const suffixMonth = interval < 2 ? "" : "s";
  const suffixExtraMonth = extraMonth < 2 ? "" : "s";

  if (extraMonth === "") return `${interval} ${epoch}${suffixMonth}`;
  else return `${interval} ${epoch}${suffixYear}, ${extraMonth} ${extraEpoch}${suffixExtraMonth}`;
}
