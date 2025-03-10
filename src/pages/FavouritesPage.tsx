import {useAppSelector} from "../hooks/redux.ts";

function FavouritesPage() {
    const {favourites} = useAppSelector(state => state.github)

    if (favourites.length === 0) return <p className="text-center">No items</p>

    return (
        <>
            <h2 className="text-center mt-6 text-3xl">Link on repositories:</h2>
            <ol className="flex flex-col items-center justify-center gap-4 list-decimal list-inside font-medium my-8">
                {favourites.map(f => (
                    <li key={f} className="w-[380px] text-center border p-2 hover:bg-gray-500 hover:text-white cursor-pointer">
                        <a href={f} target="_blank">{f}</a>
                    </li>
                ))}
            </ol>
        </>
    );
}

export default FavouritesPage;