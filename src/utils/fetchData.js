export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_EXERCISE_DB_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
    params: { id: 'UCE_M8A5yxnLfW0KghEeajjw' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_YOUTUBE_SEARCH_KEY,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        return data;
    } catch (err) {
        console.error(err);
    }
};