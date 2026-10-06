const Loading = () => {
    return (
        <main className="min-h-[70vh] bg-white flex items-center justify-center px-4">

            <div className="flex flex-col items-center justify-center">

                {/* Logo / Loader */}
                <div className="relative flex h-20 w-20 items-center justify-center">

                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-gray-200" />

                    {/* Spinning ring */}
                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-red-600" />

                    {/* Center */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
                        <span className="text-xl font-bold text-white">
                            B
                        </span>
                    </div>

                </div>

                {/* Text */}
                <div className="mt-6 text-center">

                    <h2 className="text-lg font-bold text-gray-900">
                        Bangla News 24
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        সংবাদ লোড হচ্ছে
                        <span className="inline-flex ml-1">
                            <span className="animate-bounce">.</span>
                            <span className="animate-bounce [animation-delay:150ms]">.</span>
                            <span className="animate-bounce [animation-delay:300ms]">.</span>
                        </span>
                    </p>

                </div>

            </div>

        </main>
    );
};

export default Loading;