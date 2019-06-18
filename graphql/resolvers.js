import people from './db';
const resolvers = {
    Query : {
        people : ()=> people,
        name : ()=>"mansub",
        person : (_,args) => {
            console.log(args);
        }
    }
};
export default resolvers;   