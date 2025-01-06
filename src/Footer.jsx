import Location from './Location'
import MailingList from './MailingList'

function Footer(){
    return (
        <footer className="bg-lime-950 p-10">
            <div className="p-2">
                <MailingList />
            </div>
        </footer>
    );
}

export default Footer