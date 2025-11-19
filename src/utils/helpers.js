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
