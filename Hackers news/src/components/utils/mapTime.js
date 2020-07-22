export const mapTime = (timestamp) => {
  const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} лет`;
  }
  interval = Math.floor(seconds / 2592000);

  if (interval > 1) {
    return `${interval} месяца`;
  }
  interval = Math.floor(seconds / 86400);

  if (interval > 1) {
    return `${interval} дней`;
  }
  interval = Math.floor(seconds / 3600);

  if (interval > 1) {
    return `${interval} часа`;
  }
  interval = Math.floor(seconds / 60);

  if (interval > 1) {
    return `${interval} минут`;
  }

  return `${Math.floor(seconds)} seconds`;
};
