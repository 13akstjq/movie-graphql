// resolver에서는 query에 대한 선언을 하는 느낌

import  {getMovies}from './db';
const resolvers = {
    Query : {
        movies : (_,{limit,rating})=> getMovies(limit,rating),
    }
   

};
export default resolvers;  