import {useSearchUsersQuery} from "../store/github/github.api.ts";

function HomePage() {
    const {data, isError, isLoading} = useSearchUsersQuery('Alexey')
    console.log(data)
    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            {isError && <p className="text-center text-red-600">Something went wrong...</p>}
            <div className="relative w-[560px]">
                <input
                type="search"
                placeholder="Search for GitHub username..."
                className="border py-2 px-4 w-full h-[42px] mb-2"
                />
                <div className="absolute top-[42px] left-0 right-0 max-h=[200px] shadow-md bg-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, vel.
                </div>
                {isLoading && <p className="text-center mt-6">Loading...</p>}
            </div>
        </div>
    );
}

export default HomePage;