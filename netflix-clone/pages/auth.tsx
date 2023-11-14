import Input from "@/components/input";
import { useState } from "react";


const Auth = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav>
                    <img src="/images/logo.png" className="h-12" alt="Logo" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign in
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Input
                                label="Username"
                                onChange={(ev) => setName(ev.target.value)}
                                id="name"
                                type="name"
                                value={name}
                            />
                            <Input
                                label="Email"
                                onChange={(ev) => setEmail(ev.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input
                                label="Password"
                                onChange={(ev) => setPassword(ev.target.value)}
                                id="password"
                                type="password"
                                value={password}
                            />
                            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition ">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Auth;
