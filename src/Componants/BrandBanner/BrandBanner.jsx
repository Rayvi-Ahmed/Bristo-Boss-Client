import brandImage from "../../../src/assets/home/chef-service.jpg"

const BrandBanner = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <div style={{backgroundImage:`url(${brandImage})`}} className="bg-cover bg-no-repeat h-[300px]">
                <div className="relative max-w-xl mx-auto bg-white text-slate-700 p-8 top-10 bottom-10 opacity-70">
                    <h1 className="text-center text-3xl mb-2">Bistro Boss</h1>
                    <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default BrandBanner;