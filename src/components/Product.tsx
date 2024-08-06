import Image from "next/image";

const Product = () => {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row">
                <Image
                    src="/images/logo.avif"
                    alt="VideoDubber - Fast Video Translator"
                    width={72}
                    height={72}
                    priority
                />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-6 sm:flex-row">
                <div className="flex flex-col gap-2">
                    <h1 className="text-[24px] font-bold text-dark-gray">
                        VideoDubber - Fast Video Translator
                    </h1>
                    <h2 className="text-[24px] font-light text-light-gray">
                        Translate videos in your own voice, globalize in a
                        click!
                    </h2>
                </div>
                <div className="flex flex-row items-end gap-3">
                    <button className="border border-[#d9e1ec] h-16 font-semibold text-sm px-6 py-4 rounded-md">
                        <div className="flex gap-2 flex-row items-center justify-center">
                            <div className="text-sm font-semibold text-dark-gray">
                                Visit
                            </div>
                            <div className="w-4 h-4 flex items-center justify-center">
                                <Image
                                    className="mt-0.5 fill-light-gray"
                                    src="/icons/down.svg"
                                    alt="arrow"
                                    width={12}
                                    height={13}
                                    priority
                                />
                            </div>
                        </div>
                    </button>
                    <button className="border-2 border-[#feb6b0] h-16 w-full sm:w-[222px] font-semibold text-sm px-6 py-4 rounded-md">
                        <div className="flex gap-2 flex-row items-center justify-center">
                            <div className="w-4 h-4 flex items-center justify-center">
                                <Image
                                    className="mt-0.5 fill-light-gray"
                                    src="/images/arrow.png"
                                    alt="arrow"
                                    width={15}
                                    height={16}
                                    priority
                                />
                            </div>
                            <div className="text-sm font-semibold text-dark-gray uppercase">
                                upvoted 99
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
