import Image from "next/image";

const Path = () => {
    return (
        <div className="my-5 flex flex-row justify-between">
            <ol className="flex flex-row flex-wrap gap-2 list-none">
                <span className="text-sm font-normal text-dark-gray hover:text-blue opacity-70">
                    Home
                </span>
                <Image
                    className="mt-0.5 fill-light-gray"
                    src="/icons/gt.svg"
                    alt="arrow"
                    width={5}
                    height={6}
                />
                <span className="text-sm font-normal text-dark-gray hover:text-blue opacity-70">
                    Product
                </span>
                <Image
                    className="mt-0.5 fill-light-gray"
                    src="/icons/gt.svg"
                    alt="arrow"
                    width={5}
                    height={6}
                />
                <span className="text-sm font-normal text-dark-gray hover:text-blue">
                    VideoDubber - Fast Video Translator
                </span>
            </ol>
        </div>
    );
};

export default Path;
