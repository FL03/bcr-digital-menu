/*
    Appellation: model.d <module>
    Contrib: FL03 <jo3mccain@icloud.com>
*/

export default class Profile {
    uid: string;

    avatar?: string;
    email?: string;
    name?: string;
    phone?: string;
    username?: string;

    constructor({uid, avatar, email, name, phone, username,}: {uid: string, avatar?: string, email?: string, name?: string, phone?: string, username?: string}) {
        this.uid = uid;
        this.avatar = avatar;
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.username = username;
    }

}