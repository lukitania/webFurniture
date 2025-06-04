import React,{useState} from "react";


function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Password:', password);
        setError('');
    };
    return (
        <div className="flex min-h-screen bg-[#E9E6DF]">
            <div className="flex-1 flex items-center justify-center p-4">
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <div>
                        <img
                            src="public/image/Logo.png"
                            alt="Logo"
                            className="h-full max-h-screen w-auto object-contain mb-2"
                        />
                    </div>
                    
                    <div className="mb-4">
                        <input
                            placeholder="Username"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="placeholder-[#7b5e46] w-full pl-5 border border-[#7b5e46] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b5e46]"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            placeholder="Email"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="placeholder-[#7b5e46] w-full pl-5 border border-[#7b5e46] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b5e46]"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            placeholder="Phone Number"
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="placeholder-[#7b5e46] w-full pl-5 border border-[#7b5e46] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b5e46]"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            placeholder="Password" 
                            type="password"
                            id="password"
                            value={password}   
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="placeholder-[#7b5e46] w-full pl-5 border border-[#7b5e46] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b5e46]"
                        />
                    </div>
                    {error && <p className="text-red-500 mb-1">{error}</p>}
                    <div className="mb-4">
                        <input
                            placeholder="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="placeholder-[#7b5e46] w-full pl-5 border border-[#7b5e46] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b5e46]"
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full bg-[#7b5e46] text-white py-2 rounded-md hover:bg-[#654735] focus:outline-none focus:ring-2 focus:ring-[#7b5e46]"
                    >
                        Signup
                    </button>
                </form>
            </div>
            <div className="flex-1 hidden md:flex items-center justify-end">
                <img
                    src="public/image/loginbg.png"
                    alt="Signup Illustration"
                    className="h-full max-h-screen w-auto object-contain"
                />
            </div>
        </div>
    );


}
export default Signup;