import { v4 as uuidv4 } from "uuid";

class UUIDUtil {
    generateRandomUUID(): String {
        const uuid = uuidv4();
        return uuid.toLowerCase();
    }
}

export default new UUIDUtil();
