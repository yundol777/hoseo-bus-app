import { asanSchedule, cheonanSchedule } from "./busSchedule"; // ✅ 아산/천안 데이터 가져오기

// 🔹 시간별로 데이터를 그룹화하는 함수
function groupByHour(scheduleData) {
  const groupedData = {};

  for (const [busName, busInfo] of Object.entries(scheduleData)) {
    busInfo.times.forEach((time) => {
      const [hour, minute] = time.split(":");
      const key = `${hour}:00`; // 시간대별로 그룹화 (예: 10:00, 11:00)

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

// 🔹 아산 데이터 그룹화
export const asanGrouped = {
  weekdays: groupByHour(asanSchedule.schedule.weekdays),
  saturday: groupByHour(asanSchedule.schedule.saturday),
  sunday: groupByHour(asanSchedule.schedule.sunday),
};

export const cheonanGrouped = {
  weekdays: groupByHour(cheonanSchedule.schedule.weekdays),
  saturday: groupByHour(cheonanSchedule.schedule.saturday),
  sunday: groupByHour(cheonanSchedule.schedule.sunday),
};

export function getBusSchedule(campus) {
  return campus === "asan" ? asanGrouped : cheonanGrouped;
}

// 🔹 테마에 맞는 버스 데이터 반환
export function comingBuses(campus, currentDay, currentTime) {
  const { weekdays, saturday, sunday } = getBusSchedule(campus);

  const groupedData =
    currentDay === "saturday"
      ? saturday
      : currentDay === "sunday"
      ? sunday
      : weekdays;

  const result = [];
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  // 현재 시간 및 다음 시간 확인
  const hoursToCheck = [
    `${currentHour.toString().padStart(2, "0")}:00`,
    `${(currentHour + 1).toString().padStart(2, "0")}:00`,
  ];

  hoursToCheck.forEach((hourKey) => {
    const buses = groupedData[hourKey] || [];
    buses.forEach((bus) => {
      const timeDifference =
        parseInt(hourKey.split(":")[0]) === currentHour
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
