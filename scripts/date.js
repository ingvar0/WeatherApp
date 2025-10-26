function newDate() {
    const date = new Date();

    // День недели (полное название)
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' }); // e.g., "Sunday"

    // День месяца (число)
    const dayOfMonth = date.getDate(); // e.g., 26

    // Короткое название месяца (3 буквы)
    const shortMonth = date.toLocaleString('en-US', { month: 'short' }); // e.g., "Oct"

    // Номер месяца (1–12)
    const monthNumber = date.getMonth() + 1; // getMonth() возвращает 0–11

    const currentDate = {
        dayOfWeek: dayOfWeek,
        dayOfMonth: dayOfMonth,
        shortMonth: shortMonth,
        monthNumber: monthNumber
    }

    return currentDate;
}