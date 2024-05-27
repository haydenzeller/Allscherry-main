import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
    return (
        <main className="h-20 w-full bg-base-200">
            <div className="flex flex-row-reverse">
                <FontAwesomeIcon icon={faSearch}  className='w-5 m-1.5 text-black absolute'/>
                <input className=" text-black pl-9 input input-sm bg-white rounded-3xl w-0 focus:w-full" placeholder="Search something... anything!" />
            </div>
        </main>
    )
}