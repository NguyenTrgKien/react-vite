function FormLogin() {
    return (  
        <div className="w-full h-[100vh] flex items-center justify-center bg-image">
            <div className="min-w-[400px] min-h-[400px] backdrop-blur-[15px] p-5 shadow-lg shadow-[#343434] rounded-[5px]">
                <h2 className="text-[30px] font-bold text-[blue] text-center mb-5">
                    LOGIN
                </h2>
                <div className="relative w-full h-[40px] mb-[15px]">
                    <input
                        type="text"
                        id="input"
                        className="w-full h-full absolute rounded-[3px] outline-none border-[1px] border-[transparent] pl-4"
                        placeholder="Username"
                    />
                </div>
                <div className="relative w-full h-[40px]">
                    <input
                        type="password"
                        id="input"
                        className="w-full h-full absolute rounded-[3px] outline-none border-[1px] border-[transparent] pl-4"
                        placeholder="Password"
                    />
                </div>
                <div className="flex justify-between mt-2">
                    <div className="text-[blue]">
                        Forget password!
                    </div>
                    <div className="text-[blue]">
                        <input
                            type="checkbox"
                        />
                        Save me!
                    </div>
                </div>
                <button className="w-full h-[40px] bg-[red] rounded-[5px] mt-10 hover:bg-[#ff5757] text-[#fff] transition-all duration-[.25s]">
                    Login
                </button>
            </div>
        </div>
    );
}

export default FormLogin;