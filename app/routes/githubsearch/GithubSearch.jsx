import { Divide } from "lucide-react";
import { useState, useEffect } from "react";

const GithubSearch = () => {
    const [data, setData] = useState(null);
    const [username, setUsername] = useState("");
    const [value, setValue] = useState("");

    useEffect(() => {
        if (!username) return;
        async function gitfetch() {
            let response = await fetch(`https://api.github.com/users/${username}`);
            response = await response.json();
            setData(response);
        }
        gitfetch();
    }, [username])


    // data.created_at = "2024-05-21T08:49:12Z"
    function calculateDate() {
        return new Date(data.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    
    function handle(){
        if ( username ) setValue("");
    }

    return (
        <div className="flex flex-col items-center mt-4">
            <div className="h-10 w-1/2 flex flex-row justify-center mb-10">
                <input type="text" placeholder="Search Github Username..." className="border w-1/2 pl-2" value={value} onChange={(e) => setValue(e.target.value)} onClick={()=>handle()} ></input>
                <button onClick={() => setUsername(value)} className="border p-1 cursor-pointer">Search</button>
            </div>
            <div className="border w-2/3 flex flex-col items-center pb-4">
                <div
                    className="w-40 h-40 rounded-full bg-center bg-cover border mt-3"
                    style={ data && { backgroundImage: `url(${data.avatar_url})` }}
                ></div>
                <h1 className="text-2xl mb-4">{ data && data.login}</h1>
                <p> Followers : {data && data.followers} </p>
                <p> Following : {data && data.following} </p>
                <p> Repositories : {data && data.public_repos}</p>
                <p> Account created on : {data?.created_at ? calculateDate() : ""} </p>
            </div>

        </div>
    )
}

export default GithubSearch