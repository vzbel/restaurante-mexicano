function MailingList(){
    return (
        <div>
            <h3 className="text-amber-50 font-mono text-xl mb-2">GET UPDATES</h3>
            <input type="text" placeholder="Enter e-mail..." className="text-amber-50 placeholder:text-amber-50 font-mono placeholder:text-sm block outline outline-lime-800 py-1 px-3 rounded-md bg-transparent mb-4 min-w-64"/>
            <button className="text-amber-50 font-mono py-2 px-7 rounded-md bg-lime-700">SUBSCRIBE</button>
        </div>
    );
}

export default MailingList