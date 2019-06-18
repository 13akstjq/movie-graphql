const mansub = {
    name : "mansub",
    age: 26 ,
    gender : "male"
};

const resolvers = {
    Query : {
        person :  () => mansub
    }
};
export default resolvers;