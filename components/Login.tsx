"use client";

import { logIn } from "@/Redux/Slices/loginSlice";
import { RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const isLogin = useSelector((state: RootState) => state.login.isLogIn);
    const dispatch = useDispatch();

    return (
        <button style={{width: "fit-content"}} onClick={() => dispatch(logIn())} className="update-button">
            {isLogin?"signOut": "signIn"}
        </button>
    );
};

export default Login;
