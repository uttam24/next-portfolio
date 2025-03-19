const {username, password}=process.env


export const connectionStr = `mongodb+srv://${username}:${password}@cluster0.pr5br.mongodb.net/uttamcontact?retryWrites=true&w=majority&appName=Cluster0`;
