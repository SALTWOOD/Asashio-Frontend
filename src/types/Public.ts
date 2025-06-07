import axios from "axios";
import { UserInfo } from "./UserInfo";

export class Public {
    public static user: UserInfo = new UserInfo();
}

async function fetchUser() {
}