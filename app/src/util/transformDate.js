function transformDate(originalDateString) {
    const originalDate = new Date(originalDateString);
    const currentDate = new Date();
  
    const timeDifferenceInSeconds = Math.floor((currentDate - originalDate) / 1000);
  
    const minute = 60;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 365 * day;
  
    if (timeDifferenceInSeconds < minute) {
      return `${timeDifferenceInSeconds} seconds ago`;
    } else if (timeDifferenceInSeconds < hour) {
      const minutesAgo = Math.floor(timeDifferenceInSeconds / minute);
      return `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < day) {
      const hoursAgo = Math.floor(timeDifferenceInSeconds / hour);
      return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < month) {
      const daysAgo = Math.floor(timeDifferenceInSeconds / day);
      return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < year) {
      const monthsAgo = Math.floor(timeDifferenceInSeconds / month);
      return `${monthsAgo} month${monthsAgo > 1 ? 's' : ''} ago`;
    } else {
      const yearsAgo = Math.floor(timeDifferenceInSeconds / year);
      return `${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`;
    }
  }
export default transformDate