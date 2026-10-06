"use client"
import Link from "next/link";
import { ArrowLeft, Home, Search, Newspaper } from "lucide-react";

const NotFound = () => {
    return (
        <main className="min-h-[80vh] bg-white flex items-center justify-center px-4 py-16">

            <div className="w-full max-w-5xl">

                {/* Main Card */}
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-red-50/40 px-6 py-14 sm:px-10 md:px-16 md:py-20 shadow-sm">

                    {/* Decorative circles */}
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />

                    <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-red-500/5 blur-3xl" />

                    <div className="relative z-10 text-center">

                        {/* Icon */}
                        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/20">
                            <Newspaper size={30} strokeWidth={1.8} />
                        </div>

                        {/* 404 */}
                        <div className="relative inline-block">
                            <h1 className="text-[90px] font-black leading-none tracking-tighter text-red-600 sm:text-[120px] md:text-[160px]">
                                404
                            </h1>

                            <span className="absolute -right-2 top-2 h-3 w-3 rounded-full bg-red-400 animate-pulse" />
                        </div>

                        {/* Divider */}
                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-red-600" />

                        {/* Heading */}
                        <h2 className="mt-7 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                            পেজটি খুঁজে পাওয়া যায়নি
                        </h2>

                        {/* Description */}
                        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base md:text-lg">
                            দুঃখিত! আপনি যে সংবাদ বা পেজটি খুঁজছেন,
                            সেটি হয়তো সরিয়ে ফেলা হয়েছে অথবা ঠিকানাটি পরিবর্তন করা হয়েছে।
                        </p>

                        {/* Buttons */}
                        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

                            {/* Home */}
                            <Link
                                href="/"
                                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl sm:w-auto"
                            >
                                <Home size={18} />

                                হোম পেজে যান

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>

                            {/* Back */}
                            <button
                                onClick={() => window.history.back()}
                                className="group flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:bg-red-50 hover:text-red-600 sm:w-auto"
                            >
                                <ArrowLeft
                                    size={18}
                                    className="transition-transform duration-300 group-hover:-translate-x-1"
                                />

                                আগের পেজে ফিরে যান
                            </button>

                        </div>

                        {/* Search suggestion */}
                        <div className="mx-auto mt-10 flex max-w-md items-center gap-3 rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-left shadow-sm backdrop-blur-sm">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                                <Search size={18} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-gray-800">
                                    কিছু খুঁজছেন?
                                </p>

                                <p className="text-xs text-gray-500">
                                    হোম পেজ থেকে সর্বশেষ সংবাদ দেখুন
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom branding */}
                <div className="mt-6 text-center">
                    <p className="text-xs font-medium tracking-wide text-gray-400">
                        BANGLA NEWS 24
                    </p>

                    <div className="mx-auto mt-2 h-px w-12 bg-red-500/40" />
                </div>

            </div>

        </main>
    );
};

export default NotFound;