import Image from "next/image";
import { FaArrowUpRightFromSquare, FaDownload } from 'react-icons/fa6';

const Profile = () => {
    return (
        <div className="mt-8 pt-4">
            <Image
                src="/profile pic.jpg"
                alt="Sumits profile picture"
                width={300}
                height={300}
                className="rounded-md grayscale hover:grayscale-0 w-full transition-all max-w-sm mx-auto"
            />
            <div className="w-full max-w-sm mt-4 mx-auto flex gap-2">
                <a href="/Sumit - Resume.pdf" target="_blank" className="py-2 px-4 rounded-md primary-background opacity-80 hover:opacity-100 background-color inline-block w-full text-center content-center">
                    Resume <FaArrowUpRightFromSquare className="inline-block" />
                </a>
                <a href="/Sumit - Resume.pdf" download={true} className="py-2 px-4 rounded-md primary-background opacity-80 hover:opacity-100 background-color inline-block content-center">
                    <FaDownload className="inline-block" />
                </a>
            </div>
        </div>
    );
};

export default Profile;