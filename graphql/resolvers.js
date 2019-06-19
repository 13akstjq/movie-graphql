// resolver에서는 query에 대한 선언을 하는 느낌

import movies ,{getById}from './db';
const resolvers = {
    Query : {
        movies : ()=> movies,
        movie : (_,{id}) => getById(id)
        }
};
export default resolvers;  