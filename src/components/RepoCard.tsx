import {IRepo} from "../models/models.ts";
import React, {useState} from "react";
import {useActions} from "../hooks/actions.ts";
import {useAppSelector} from "../hooks/redux.ts";

function RepoCard({repo}: {repo: IRepo}) {
    const {addFavourite, removeFavourite} = useActions()
    const {favourites} = useAppSelector(state => state.github)
    const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))

    const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addFavourite(repo.html_url)
        setIsFav(true)
    }

    const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        removeFavourite(repo.html_url)
        setIsFav(false)
    }

    return (
        <div className="border p-5 text-center rounded mb-2 hover:shadow-md hover:bg-gray-500 hover:text-white transition-all">
            <a href={repo.html_url} target="_blank">
            <h2 className="text-lg font-bold">{repo.full_name}</h2>
            <p className="text-sm">
                Forks: <span className="font-bold mr-2">{repo.forks}</span>
                Watchers: <span className="font-bold">{repo.watchers}</span>
            </p>
            <p className="text-sm font-thin">{repo?.description}</p>
                {!isFav && <button
                    className="text-white border font-bold py-2 px-4 mt-4 mx-4 cursor-pointer bg-yellow-600 rounded-2xl hover:bg-yellow-800 hover:shadow-md transition-all"
                    onClick={addToFavourite}
                >Add</button>}
                {isFav && <button
                    className="text-white border font-bold py-2 px-4 mt-4 cursor-pointer bg-red-400 rounded-2xl hover:bg-red-600 hover:shadow-md transition-all"
                    onClick={removeFromFavourite}
                >Remove</button>}
            </a>
        </div>
    );
}

export default RepoCard;