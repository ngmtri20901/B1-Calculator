export const lengthUnits = {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    mile: 0.000621371,
    // -- Đơn vị hệ Anh --
    inch: 39.3701, 
    foot: 3.28084,
    yard: 1.09361,
    // -- Các đơn vị khác --
    micrometer: 1000000,
    nanometer: 1000000000,
    lightYear: 1.057e-16, // xấp xỉ 1.057 x 10^-16
};

export const timeUnits = {
    second: 1,
    minute: 1 / 60,
    hour: 1 / 3600,
    day: 1 / 86400,
    week: 1 / (86400 * 7),
    month: 1 / (86400 * 30), // Giá trị trung bình, một tháng có thể có 28, 29, 30 hoặc 31 ngày
    year: 1 / (86400 * 365), // Giá trị trung bình, không tính năm nhuận
    millisecond: 1000,
    microsecond: 1000000,
    nanosecond: 1000000000, 
    // ... (Thêm các đơn vị khác nếu cần)
};

export const weightUnits = {
    gram: 1,
    kilogram: 0.001,
    pound: 0.00220462,
    ounce: 0.035274,
    // -- Hệ mét --
    milligram: 1000,
    // -- Hệ Anh --
    stone: 0.000157473,
    // -- Đơn vị khác --
    carat: 5,
    // ... (Thêm các đơn vị khác nếu cần)
};

export const dataUnits = {
    bit: 1, // (b)
    byte: 1 / 8, // (B)
    kilobit: 1 / 1024, // (kb)
    kibibit: 1 / 1024, // (Kib)
    kilobyte: 1 / (8 * 1024), // (kB)
    kibibyte: 1 / (8 * 1024), // (KiB)
    megabit: 1 / (1024 * 1024), // (Mb)
    mebibit: 1 / (1024 * 1024), // (Mib)
    megabyte: 1 / (8 * 1024 * 1024), // (MB)
    mebibyte: 1 / (8 * 1024 * 1024), // (MiB)
    gigabit: 1 / (1024 * 1024 * 1024), // (Gb)
    gibibit: 1 / (1024 * 1024 * 1024), // (Gib)
    gigabyte: 1 / (8 * 1024 * 1024 * 1024), // (GB)
    gibibyte: 1 / (8 * 1024 * 1024 * 1024), // (GiB)
    terabit: 1 / (1024 * 1024 * 1024 * 1024), // (Tb)
    tebibit: 1 / (1024 * 1024 * 1024 * 1024), // (Tib)
    terabyte: 1 / (8 * 1024 * 1024 * 1024 * 1024), // (TB)
    tebibyte: 1 / (8 * 1024 * 1024 * 1024 * 1024), // (TiB)
    // ... (Thêm các đơn vị khác nếu cần)
  };

export const convertUnits = (value, fromUnit, toUnit, unitList) => {
    const input = parseFloat(value);
    if (isNaN(input)) return '';
    return Math.round((input * (unitList[toUnit] / unitList[fromUnit])) * 1e9) / 1e9;
};
