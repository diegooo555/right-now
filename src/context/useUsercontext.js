import { useContext } from "react";
import UserContext from "./user";

export const useUserContext = () => useContext(UserContext);