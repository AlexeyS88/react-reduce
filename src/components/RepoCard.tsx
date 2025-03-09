import {IRepo} from "../models/models.ts";

function RepoCard({repo}: {repo: IRepo}) {
    return (
        <div className="border p-5 text-center rounded mb-2 hover:shadow-md hover:bg-gray-500 hover:text-white transition-all">
            <a href={repo.html_url} target="_blank">
            <h2 className="text-lg font-bold">{repo.full_name}</h2>
            <p className="text-sm">
                Forks: <span className="font-bold mr-2">{repo.forks}</span>
                Watchers: <span className="font-bold">{repo.watchers}</span>
            </p>
            <p className="text-sm font-thin">{repo?.description}</p>
            </a>
        </div>
    );
}

export default RepoCard;