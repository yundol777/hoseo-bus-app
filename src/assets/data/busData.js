import { type } from "@testing-library/user-event/dist/type";

// 예비 데이터 셋
const busSchedule = {
  schedule: {
    weekdays: {
      셔틀버스: {
        type: "셔틀버스",
        times: [
          "07:45",
          "08:00",
          "08:15",
          "08:30",
          "08:45",
          "09:00",
          "09:15",
          "09:30",
          "09:45",
          "10:00",
          "10:15",
          "10:30",
          "10:45",
          "11:00",
          "11:20",
          "11:40",
          "12:00",
          "12:20",
          "12:40",
          "13:00",
          "13:20",
          "13:40",
          "14:00",
          "14:15",
          "14:30",
          "14:45",
          "15:00",
          "15:15",
          "15:30",
          "15:40",
          "15:50",
          "16:00",
          "16:15",
          "16:30",
          "16:45",
          "17:00",
          "17:15",
          "17:30",
          "17:45",
          "18:00",
          "18:15",
          "18:30",
          "18:45",
          "19:00",
          "19:30",
          "20:00",
          "20:30",
          "21:00",
        ],
      },
      "1000번": {
        type: "시내버스",
        times: [
          "07:20",
          "08:45",
          "09:35",
          "11:05",
          "11:55",
          "13:20",
          "14:05",
          "15:35",
          "16:20",
          "17:45",
          "18:35",
          "20:05",
          "20:50",
        ],
      },
      순환5번: {
        type: "시내버스",
        times: [
          "07:00",
          "07:30",
          "08:25",
          "09:15",
          "10:00",
          "10:45",
          "11:30",
          "12:15",
          "13:00",
          "13:45",
          "14:30",
          "15:15",
          "16:00",
          "16:45",
          "17:30",
          "18:15",
          "19:00",
          "19:45",
          "20:30",
        ],
      },
      "810번": {
        type: "시내버스",
        times: ["07:00", "09:40", "11:00", "16:30", "18:10"],
      },
      "820번": {
        type: "시내버스",
        times: ["07:00", "14:00", "16:00", "19:10"],
      },
      "821번": {
        type: "시내버스",
        times: ["08:50"],
      },
      "822번": {
        type: "시내버스",
        times: ["12:10"],
      },
    },
    weekends: {
      셔틀버스: {
        type: "셔틀버스",
        times: [
          "08:20",
          "10:00",
          "12:30",
          "13:30",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
        ],
      },
      "1000번": {
        type: "시내버스",
        times: [
          "07:20",
          "08:45",
          "09:35",
          "11:05",
          "11:55",
          "13:20",
          "14:05",
          "15:35",
          "16:20",
          "17:45",
          "18:35",
          "20:05",
          "20:50",
        ],
      },
      순환5번: {
        type: "시내버스",
        times: [
          "07:00",
          "07:30",
          "08:25",
          "09:15",
          "10:00",
          "10:45",
          "11:30",
          "12:15",
          "13:00",
          "13:45",
          "14:30",
          "15:15",
          "16:00",
          "16:45",
          "17:30",
          "18:15",
          "19:00",
          "19:45",
          "20:30",
        ],
      },
      "810번": {
        type: "시내버스",
        times: ["07:00", "09:40", "11:00", "16:30", "18:10"],
      },
      "820번": {
        type: "시내버스",
        times: ["07:00", "14:00", "16:00", "19:10"],
      },
      "821번": {
        type: "시내버스",
        times: ["08:50"],
      },
      "822번": {
        type: "시내버스",
        times: ["12:10"],
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
export const weekdaysGrouped = groupByHour(busSchedule.schedule.weekdays);
export const weekendsGrouped = groupByHour(busSchedule.schedule.weekends);

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
