export const dateToDayName = (dateStr) => {
    const date = new Date(dateStr);
    const days = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
    ];
    return days[date.getDay()];
};

export const filterForecastData = (data) => {
    const result = [];
    const currentDateTime = new Date();
    const year = currentDateTime.getFullYear();
    const month = String(currentDateTime.getMonth() + 1).padStart(2, "0");
    const day = String(currentDateTime.getDate()).padStart(2, "0");

    const today = `${year}-${month}-${day}`;

    // Şimdiden sonraki forecastleri bul
    const futureForecasts = data.list.filter(
        (item) => new Date(item.dt_txt) > currentDateTime
    );

    // İlk 2 forecast (bugün için 3h ve 6h sonrası)
    if (futureForecasts.length > 0) {
        result.push(...futureForecasts.slice(0, 2));
    }

    // Sonraki günler için sadece 12:00:00 olanlar
    const dailyForecasts = data.list.filter((item) => {
        const [date, time] = item.dt_txt.split(" ");
        return date !== today && time === "12:00:00";
    });

    result.push(...dailyForecasts);

    // 👉 Bugün + 4 gün = toplam 5 eleman döndür
    return result.slice(0, 5);
};

