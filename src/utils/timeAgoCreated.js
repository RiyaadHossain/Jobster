export function timeAgoCreated(createdDate) {
  const now = new Date();
  const delta = now - new Date(createdDate);
  const minute = 60 * 1000;

  if (delta <= minute) {
    return "Just Now";
  } else if (delta < 60 * minute) {
    // Less than 60 minutes ago
    const minutesAgo = Math.floor(delta / minute);
    return `${minutesAgo}m`;
  } else if (delta < 24 * 60 * minute) {
    // Less than 24 hours ago
    const hoursAgo = Math.floor(delta / (60 * minute));
    return `${hoursAgo}h`;
  } else if (delta < 365 * 24 * 60 * minute) {
    // More than 24 hours ago && Less than 365 days
    const daysAgo = Math.floor(delta / (24 * 60 * minute));
    return `${daysAgo}d`;
  } else {
    // More than 365 days
    const daysAgo = Math.floor(delta / (365 * 24 * 60 * minute));
    return `${daysAgo}y`;
  }
}
