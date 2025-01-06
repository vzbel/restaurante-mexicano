function Location({name, address, phone, hours}){
    return (
        <div className="text-amber-50 font-mono">
            <h3 className="text-xl mb-2">{name}</h3>
            <pre className="text-wrap">
                {address}
                <br />
                Phone: {phone}
                <br />
                Hours: {hours}
            </pre>
        </div>
    );
}

export default Location