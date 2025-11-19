export const formatMinSlot = function (value, minSlot = 2) {
    return String(value).padStart(minSlot, '0');
};

export const formatSlot = function (value, min = 2, max = null) {
    const text = String(value);
    max = max || min || min + 1;

    // trim if too long
    const trimmed = text.length > max ? text.slice(0, max) : text;

    // pad if too short
    return trimmed.padStart(min, '0');
};

/**
 * Verifica se o parâmetro passado é uma data válida
 * @param {Date|string|number} date - Data em formato Date, string ISO ou unix timestamp
 * @returns {boolean} - True se for uma data válida
 */
export const isValidDate = function (date) {
    if (!date) {
        return false;
    }

    let dateObj;

    // Se já é uma instância de Date
    if (date instanceof Date) {
        dateObj = date;
    }
    // Se é número (unix timestamp)
    else if (typeof date === 'number') {
        dateObj = new Date(date);
    }
    // Se é string
    else if (typeof date === 'string') {
        dateObj = new Date(date);
    }
    // Outros tipos não são suportados
    else {
        return false;
    }

    // Verifica se é uma data válida
    return dateObj instanceof Date && !isNaN(dateObj.getTime());
};

/**
 * Retorna uma instância de Date se for uma data válida, caso contrário retorna null
 * @param {Date|string|number} date - Data em formato Date, string ISO ou unix timestamp
 * @returns {Date|null} - Instância de Date ou null
 */
export const ifValidDate = function (date) {
    if (!isValidDate(date)) {
        return null;
    }

    let dateObj;

    if (date instanceof Date) {
        dateObj = date;
    } else if (typeof date === 'number') {
        dateObj = new Date(date);
    } else if (typeof date === 'string') {
        dateObj = new Date(date);
    }

    return dateObj;
};

/**
 * Verifica se a data é válida e está no futuro
 * @param {Date|string|number} date - Data em formato Date, string ISO ou unix timestamp
 * @returns {boolean} - True se for uma data válida e futura
 */
export const isFutureDate = function (date) {
    const dateObj = ifValidDate(date);
    if (!dateObj) {
        return false;
    }

    return dateObj.getTime() > new Date().getTime();
};

export const old_diffFromNow = function (target) {
    const future = target instanceof Date ? target : new Date(target);
    const now = new Date();

    // base diff em ms
    let diffMs = future.getTime() - now.getTime();

    // se já passou, zera tudo
    if (diffMs <= 0) {
        return {
            years: 0,
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
            diff: 0,
        };
    }

    // helpers de duração
    const msSecond = 1000;
    const msMinute = msSecond * 60;
    const msHour = msMinute * 60;
    const msDay = msHour * 24;

    // quebrando de cima para baixo
    const years = future.getFullYear() - now.getFullYear();
    const months = years * 12 + (future.getMonth() - now.getMonth());

    // dias/horas/minutos/segundos resolvidos direto no timestamp
    const days = Math.floor(diffMs / msDay);
    diffMs -= days * msDay;

    const hours = Math.floor(diffMs / msHour);
    diffMs -= hours * msHour;

    const minutes = Math.floor(diffMs / msMinute);
    diffMs -= minutes * msMinute;

    const seconds = Math.floor(diffMs / msSecond);
    diffMs -= seconds * msSecond;

    const milliseconds = diffMs;

    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
        diff: future.getTime() - now.getTime(),
    };
};

export const old_diffCalendar = function (target) {
    const future = target instanceof Date ? target : new Date(target);
    const now = new Date();

    if (future <= now) {
        return {
            years: 0,
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        };
    }

    const cursor = new Date(now);

    // years
    let years = 0;
    while (true) {
        const next = new Date(cursor);
        next.setFullYear(next.getFullYear() + 1);
        if (next > future) break;
        cursor.setFullYear(cursor.getFullYear() + 1);
        years++;
    }

    // months
    let months = 0;
    while (true) {
        const next = new Date(cursor);
        next.setMonth(next.getMonth() + 1);
        if (next > future) break;
        cursor.setMonth(cursor.getMonth() + 1);
        months++;
    }

    // agora diferença direta
    let diff = future.getTime() - cursor.getTime();

    const msSecond = 1000;
    const msMinute = msSecond * 60;
    const msHour = msMinute * 60;
    const msDay = msHour * 24;

    const days = Math.floor(diff / msDay);
    diff -= days * msDay;

    const hours = Math.floor(diff / msHour);
    diff -= hours * msHour;

    const minutes = Math.floor(diff / msMinute);
    diff -= minutes * msMinute;

    const seconds = Math.floor(diff / msSecond);
    diff -= seconds * msSecond;

    const milliseconds = diff;

    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
    };
};

export const diffFromNow = function (target) {
    const future = target instanceof Date ? target : new Date(target);
    const now = new Date();

    let diffMs = future.getTime() - now.getTime();
    if (diffMs <= 0) {
        return {
            years: 0,
            months: 0,
            weeks: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
            diff: 0,
        };
    }

    // fixed durations
    const msSecond = 1000;
    const msMinute = msSecond * 60;
    const msHour = msMinute * 60;
    const msDay = msHour * 24;
    const msWeek = msDay * 7;

    // years / months aproximados (mesmo modelo anterior)
    const years = future.getFullYear() - now.getFullYear();
    const months = years * 12 + (future.getMonth() - now.getMonth());

    // decompõe timestamp
    const weeks = Math.floor(diffMs / msWeek);
    diffMs -= weeks * msWeek;

    const days = Math.floor(diffMs / msDay);
    diffMs -= days * msDay;

    const hours = Math.floor(diffMs / msHour);
    diffMs -= hours * msHour;

    const minutes = Math.floor(diffMs / msMinute);
    diffMs -= minutes * msMinute;

    const seconds = Math.floor(diffMs / msSecond);
    diffMs -= seconds * msSecond;

    const milliseconds = diffMs;

    return {
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
        diff: future.getTime() - now.getTime(),
    };
};

export const diffCalendar = function (target) {
    const future = target instanceof Date ? target : new Date(target);
    const now = new Date();

    if (future <= now) {
        return {
            years: 0,
            months: 0,
            weeks: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        };
    }

    const cursor = new Date(now);

    // years
    let years = 0;
    while (true) {
        const next = new Date(cursor);
        next.setFullYear(next.getFullYear() + 1);
        if (next > future) break;
        cursor.setFullYear(cursor.getFullYear() + 1);
        years++;
    }

    // months
    let months = 0;
    while (true) {
        const next = new Date(cursor);
        next.setMonth(next.getMonth() + 1);
        if (next > future) break;
        cursor.setMonth(cursor.getMonth() + 1);
        months++;
    }

    // direct timestamp diff
    let diff = future.getTime() - cursor.getTime();

    const msSecond = 1000;
    const msMinute = msSecond * 60;
    const msHour = msMinute * 60;
    const msDay = msHour * 24;
    const msWeek = msDay * 7;

    const weeks = Math.floor(diff / msWeek);
    diff -= weeks * msWeek;

    const days = Math.floor(diff / msDay);
    diff -= days * msDay;

    const hours = Math.floor(diff / msHour);
    diff -= hours * msHour;

    const minutes = Math.floor(diff / msMinute);
    diff -= minutes * msMinute;

    const seconds = Math.floor(diff / msSecond);
    diff -= seconds * msSecond;

    const milliseconds = diff;

    return {
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
    };
};

export const normalizeLocale = function (locale) {
    try {
        new Intl.DateTimeFormat(locale);
        return locale;
    } catch (_) {
        return 'en-US';
    }
};
