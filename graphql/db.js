
const movies = [{
    id : 0,
    name : "롱 리브 더 킹: 목포 영웅",
    score: 1 ,
},{
    id : 1,
    name : "토이 스토리 4",
    score : 2,
},{
    id : 2,
    name : "맨 인 블랙 인터내셔널",
    score : 3,
},{
    id : 3,
    name : "알라딘",
    score : 4,
}]
export const getById = (id) => {
    const filteredmovies = movies.filter(movie => movie.id === id);
    // console.log(filteredpeople );
    return filteredmovies[0]; 
}
export default movies;