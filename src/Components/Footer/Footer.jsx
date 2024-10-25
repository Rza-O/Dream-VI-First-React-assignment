const Footer = () => {
    return (
        <div className="bg-black text-white pt-48">
            <div className="flex justify-center mb-16"><img className="" src="/logo-footer.png" alt="" /></div>
            <div className="flex justify-between w-4/5 mx-auto">
                <div className="w-72 h-28 space-y-4">
                    <h4>About Us</h4>
                    <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold">Quick Links</h4>
                    <ol className="list-disc space-y-2">
                        <li className="text-gray-400">Home</li>
                        <li className="text-gray-400">Services</li>
                        <li className="text-gray-400">About</li>
                        <li className="text-gray-400">Contact</li>
                    </ol>
                </div>
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold">Subscribe</h4>
                    <p className="text-gray-400">Subscribe to our newsletter for the latest updates.</p>
                    <div className='space-x-4 flex'>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-info border-2 border-blue-300  w-full max-w-xs" />
                        <button className='btn bg-gradient-to-r from-purple-300 to-yellow-300'>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className="h-px my-8 w-10/12 mx-auto bg-gray-200 border-0 dark:bg-gray-700" />
            <div><p className=" text-gray-400 text-center">@2024 Your Company All Rights Reserved.</p></div>
        </div>
    );
};

export default Footer;