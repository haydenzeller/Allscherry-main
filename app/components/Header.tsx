import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function Header() {

    return (
        <main className="h-32 w-screen bg-base-200 flex flex-row-reverse">
            <div className="flex flex-row-reverse w-full pt-9">
                <div className="z-30 flex flex-row justify-center pr-4 pt-2">
                    <FontAwesomeIcon icon={faSearch}  className='text-black absolute mr-8 pointer-events-none'/>
                </div>
                <input className="input text-black input-sm bg-white rounded-3xl focus:w-full focus:ml-4 z-20 w-8 pl-5" placeholder="Search something... anything!"/>
            </div>
        </main>
    )
}