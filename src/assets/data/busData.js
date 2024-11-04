// 예비 데이터 셋
const busSchedule = {
  schedule: {
    weekdays: {
      셔틀버스: {
        destination: ["천안역", "천안아산역"],
        times: [
          "03:10",
          "03:30",
          "03:50",
          "10:00",
          "10:15",
          "10:30",
          "10:45",
          "11:20",
          "11:40",
          "12:00",
          "12:30",
        ],
      },
      "1000번": {
        destination: ["천안역"],
        times: ["03:28", "10:20", "11:40", "12:50"],
      },
      순환5번: {
        destination: ["천안아산역"],
        times: ["10:10", "11:25", "12:45"],
      },
      "810번": {
        destination: [],
        times: ["11:50", "12:05"],
      },
    },
    weekends: {
      셔틀버스: {
        destination: ["천안역", "천안아산역"],
        times: ["10:10", "11:20", "12:40"],
      },
      "1000번": {
        destination: ["천안역"],
        times: ["10:30", "11:55", "12:25"],
      },
      순환5번: {
        destination: ["천안아산역"],
        times: ["10:15", "11:35", "12:55"],
      },
      "810번": {
        destination: [],
        times: ["10:45", "11:05", "12:15"],
      },
    },
  },
};

// 시간별로 데이터를 그룹화하는 함수
function groupByHour(scheduleData) {
  const groupedData = {};

  for (const [busName, busInfo] of Object.entries(scheduleData)) {
    busInfo.times.forEach((time) => {
      const [hour, minute] = time.split(":");
      const key = `${hour}:00`; // 시간대별로 그룹화 (10:00, 11:00 등)

      if (!groupedData[key]) {
        groupedData[key] = [];
      }
      groupedData[key].push({ bus_name: busName, minute: parseInt(minute) });
    });
  }

  return groupedData;
}

// 그룹화된 데이터 저장
const weekdaysGrouped = groupByHour(busSchedule.schedule.weekdays);
const weekendsGrouped = groupByHour(busSchedule.schedule.weekends);

export function comingBuses(isWeekend, currentTime) {
  const groupedData = isWeekend ? weekendsGrouped : weekdaysGrouped;
  const result = [];
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  // 30분 이내를 확인할 다음 시간대도 포함
  const hoursToCheck = [
    `${currentHour.toString().padStart(2, "0")}:00`,
    `${(currentHour + 1).toString().padStart(2, "0")}:00`,
  ];

  hoursToCheck.forEach((hourKey) => {
    const buses = groupedData[hourKey] || [];
    buses.forEach((bus) => {
      const timeDifference =
        parseInt(hourKey) === currentHour
          ? bus.minute - currentMinute
          : bus.minute + (60 - currentMinute);

      if (timeDifference >= 0 && timeDifference <= 30) {
        result.push({
          bus_name: bus.bus_name,
          timeLeft: timeDifference,
        });
      }
    });
  });

  return result;
}
