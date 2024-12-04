export const generateDatesArray = (startDate, numDays) => {
    const dates = [];
    for (let i = 0; i < numDays; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i); // Increment day by i
      const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      dates.push({ id: `${startDate.getTime() + i}`, date: formattedDate });
    }
    return dates;
  };



//   const loadMoreDates = () => {
//     const lastDate = new Date(dates[dates.length - 1].date.split('/').reverse().join('/'));
//     const newDates = generateDatesArray(lastDate, 30); // Load next 30 days
//     setDates((prevDates) => [...prevDates, ...newDates]);
//     setStartIndex(startIndex + 30);
//   };