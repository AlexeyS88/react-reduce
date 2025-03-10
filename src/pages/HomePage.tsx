import {useLazyGetUserReposQuery, useSearchUsersQuery} from "../store/github/github.api.ts";
import {useEffect, useState} from "react";
import {useDebounce} from "../hooks/debounce.ts";
import RepoCard from "../components/RepoCard.tsx";

function HomePage() {
    const [search, setSearch] = useState('AlexeyS88')
    const [dropdown, setDropdown] = useState(false)
    const debounced = useDebounce(search)
    const {data: users, isError, isLoading} = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3,
        refetchOnFocus: true
    })
    const [fetchRepos, {isLoading: areReposLoading, data: repos}] = useLazyGetUserReposQuery()

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setDropdown((debounced.length > 3 && users?.length > 0))
    }, [debounced, users])

    const clickHandler = (username: string) => {
        fetchRepos(username)
        setDropdown(false)
    }

    return (
        <div className="flex justify-center pt-10 mx-auto">
            {isError && <p className="text-center text-red-600">Something went wrong...</p>}
            <div className="relative w-[560px]">
                <input
                type="search"
                placeholder="Search for GitHub username..."
                className="border py-2 px-4 w-full h-[42px] mb-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                {dropdown && <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll">
                    {isLoading && <p className="text-center mt-6">Loading...</p>}
                    {users?.map((user) => (
                        <li
                            key={user.id}
                            onClick={() => clickHandler(user.login)}
                            className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer text-center"
                        >{user.login}
                        </li>
                    ))}
                </ul>}
                <div className="container">
                    {areReposLoading && <p className="text-center">Repos are loading</p>}
                    { repos?.map(repo => <RepoCard repo={repo} key={repo.id} />) }
                </div>
            </div>
        </div>
    );
}

export default HomePage;