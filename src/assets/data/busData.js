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
      "셔틀(아산)": {
        type: "셔틀버스",
        times: [
          "08:40",
          "08:55",
          "09:10",
          "09:25",
          "09:40",
          "09:55",
          "10:10",
          "10:25",
          "10:55",
          "11:30",
          "11:55",
          "12:30",
          "12:55",
          "13:30",
          "13:55",
          "14:10",
          "14:25",
          "14:40",
          "14:55",
          "15:10",
          "15:25",
          "15:40",
          "15:50",
          "16:10",
          "16:25",
          "16:40",
          "16:55",
          "17:10",
          "17:25",
          "17:45",
          "19:25",
          "20:55",
        ],
      },
      "셔틀(온양)": {
        type: "셔틀버스",
        times: ["08:00", "09:10", "13:30", "16:30", "17:40"],
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
    saturday: {
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
      "셔틀(온양)": {
        type: "셔틀버스",
        times: ["11:00", "14:30", "16:30"],
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
    sunday: {
      셔틀버스: {
        type: "셔틀버스",
        times: [
          "10:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "17:30",
          "18:00",
          "18:30",
          "19:00",
          "19:30",
          "20:00",
          "20:30",
          "21:00",
        ],
      },
      "셔틀(온양)": {
        type: "셔틀버스",
        times: ["11:00", "14:30", "16:30"],
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
      groupedData[key].push({
        bus_name: busName,
        minute: parseInt(minute),
        type: busInfo.type,
      });
    });
  }

  return groupedData;
}

// 그룹화된 데이터 저장
export const weekdaysGrouped = groupByHour(busSchedule.schedule.weekdays);
export const saturdayGrouped = groupByHour(busSchedule.schedule.saturday);
export const sundayGrouped = groupByHour(busSchedule.schedule.sunday);

export function comingBuses(currentDay, currentTime) {
  // currentDay에 따라 적절한 데이터 그룹 선택
  const groupedData =
    currentDay === "saturday"
      ? saturdayGrouped
      : currentDay === "sunday"
      ? sundayGrouped
      : weekdaysGrouped;

  const result = [];
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  // 현재 시간 및 다음 시간을 확인
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

      // 30분 이내로 도착하는 버스만 포함
      if (timeDifference >= 0 && timeDifference <= 30) {
        result.push({
          bus_name: bus.bus_name,
          timeLeft: timeDifference,
          type: bus.type,
        });
      }
    });
  });

  return result;
}
