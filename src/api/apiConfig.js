const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '77d5c4886a70bf090740ec7463ec500c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;