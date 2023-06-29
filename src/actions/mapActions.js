const updateInfo = (selectedCountry) => {
    return {
        type: "UPDATE_INFO",
        selectedCountry: selectedCountry
    }
};

const updateHistory = (selectedCountry) => {
    return {
        type: "UPDATE_HISTORY",
        selectedCountry: selectedCountry
    }
};

export default {
    updateInfo,
    updateHistory
}