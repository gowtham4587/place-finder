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

const loadCountryList = (countryList) => {
    return {
        type: "LOAD_COUNTRY_LIST",
        countryList: countryList
    }
};

export default {
    updateInfo,
    updateHistory,
    loadCountryList
}