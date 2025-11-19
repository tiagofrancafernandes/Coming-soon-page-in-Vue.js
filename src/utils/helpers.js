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
