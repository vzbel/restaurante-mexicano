import Location from './Location'
import MailingList from './MailingList'

function Footer(){
    return (
        <footer className="bg-lime-950 p-10">
            <div className="p-2 flex flex-col md:flex-row gap-10 flex-wrap justify-center" id="locations">
                <MailingList />
                <Location 
                name="CENTRAL AREA"
                address="123 Mesa Boulevard Phoenix, AZ 85016"
                phone="(602) 555-1234"
                hours="Mon-Sun, 11AM - 9PM"
                />
                <Location 
                name="WEST AREA"
                address="456 Sonoran Street Tucson, AZ 85705"
                phone="(520) 555-4567"
                hours="Mon-Sat, 10 AM - 10 PM"
                />
                <Location 
                name="EAST AREA"
                address="789 Desert Cactus Way Scottsdale, AZ 85251"
                phone="(480) 555-7890"
                hours="Mon-Sun, 12 PM - 10 PM"
                />
            </div>
        </footer>
    );
}

export default Footer