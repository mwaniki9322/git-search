export class User {
    constructor(public login: string, public id: number, public avatar_url: string, 
        public created_at: string,public followers:number,public following:number,public public_repos:number){
    }
}
