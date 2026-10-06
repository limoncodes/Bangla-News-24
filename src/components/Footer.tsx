import Link from "next/link";
import {
    FiFacebook,
    FiGithub,
    FiInstagram,
    FiMail,
    FiArrowUpRight,
} from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="mt-16 border-t border-gray-200 bg-[#111] text-white">

            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="lg:col-span-2">

                        <Link
                            href="/"
                            className="inline-flex items-center gap-3"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-xl font-bold">
                                B
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">
                                    Bangla News 24
                                </h2>

                                <p className="text-xs text-gray-400">
                                    সর্বশেষ খবর, সবার আগে
                                </p>
                            </div>
                        </Link>

                        <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
                            দেশ ও বিশ্বের সর্বশেষ সংবাদ, রাজনীতি, খেলাধুলা,
                            বিনোদন, প্রযুক্তি এবং আরও অনেক খবর একসাথে।
                        </p>

                        {/* Social */}
                        <div className="mt-6 flex items-center gap-3">

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                <FiFacebook size={17} />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                <FiInstagram size={17} />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                <FiGithub size={17} />
                            </a>

                            <a
                                href="mailto:limoncodes@gmail.com"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                <FiMail size={17} />
                            </a>

                        </div>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider">
                            Quick Links
                        </h3>

                        <div className="mt-5 space-y-3">

                            <Link
                                href="/"
                                className="block text-sm text-gray-400 transition hover:translate-x-1 hover:text-red-500"
                            >
                                হোম
                            </Link>

                            <Link
                                href="/category"
                                className="block text-sm text-gray-400 transition hover:translate-x-1 hover:text-red-500"
                            >
                                সকল খবর
                            </Link>

                            <Link
                                href="/"
                                className="block text-sm text-gray-400 transition hover:translate-x-1 hover:text-red-500"
                            >
                                সর্বশেষ
                            </Link>

                            <Link
                                href="/about"
                                className="block text-sm text-gray-400 transition hover:translate-x-1 hover:text-red-500"
                            >
                                আমাদের সম্পর্কে
                            </Link>

                        </div>
                    </div>

                    {/* Developer */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider">
                            Developer
                        </h3>

                        <div className="mt-5">

                            <p className="text-sm text-gray-400">
                                Designed & Developed by
                            </p>

                            <h4 className="mt-2 text-2xl font-bold text-white">
                                Limon<span className="text-red-600">codes</span>
                            </h4>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                Web Developer passionate about building
                                modern and responsive web experiences.
                            </p>

                            <Link
                                href="https://github.com/limoncodes"
                                className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-500"
                            >
                                Limoncodes

                                <FiArrowUpRight
                                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Link>

                        </div>

                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} Bangla News 24. All rights reserved.
                    </p>

                    <p className="text-xs text-gray-500">
                        Built with ❤️ by{" "}
                        <span className="font-semibold text-red-500">
                            Limoncodes
                        </span>
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;