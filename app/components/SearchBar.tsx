export default function SearchBar() {
    return (
        <main className="flex flex-row-reverse items-center h-24 w-full bg-base-200">
            <div className="flex w-60 mr-9">
                <input className="text-right input input-sm bg-white rounded-3xl w-full" placeholder="Search something... anything!" />
            </div>
        </main>
    )
}