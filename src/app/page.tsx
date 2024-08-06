import Path from "@/components/Path";
import Product from "@/components/Product";

export default function Home() {
    return (
        <>
            <header className="w-full h-16 border-b"></header>
            <div className="flex min-h-screen flex-col items-center justify-between">
                <div className="w-full px-6 lg:p-0 md:w-[70%] lg:w-[60%] xl:w-[42%]">
                    <Path />
                    <Product />
                </div>
            </div>
        </>
    );
}
