import data from "../units/studentsData.js";
import { stats } from "../index.js";

const statistic = (resource) => (req, res, next) => {
  const api_key = req.query.api_key;
  const currentUser = data.find((u) => u.apiKey === api_key);

  const currentRequestStatisticIndex = stats.findIndex(
    (stat) => stat.user === currentUser.username
  );

  const currentRequestStatistic =
    currentRequestStatisticIndex === -1
      ? null
      : stats[currentRequestStatisticIndex];

  if (currentRequestStatistic) {
    stats[currentRequestStatisticIndex] = {
      ...currentRequestStatistic,
      [resource]: currentRequestStatistic[resource] + 1,
    };
  } else {
    stats.push({
      user: currentUser.username,
      student: 0,
      teacher: 0,
      subject: 0,
      [resource]: 1,
    });
  }
  next();
};

export default statistic;
