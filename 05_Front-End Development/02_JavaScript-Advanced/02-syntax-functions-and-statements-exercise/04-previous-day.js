function prevDay(year, month, day) {
    dateInput = `${year}-${month}-${day}`
    let today = new Date(dateInput);
    yesterday = new Date(today.setDate(today.getDate() - 1))
    yesterdayYYMMDD = [yesterday.getFullYear(), yesterday.getMonth() + 1, yesterday.getDate()].join('-')
    console.log(yesterdayYYMMDD);

}