export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Stocku</h3>
                        <p className="text-gray-400">
                            Platform e-commerce terpercaya untuk semua kebutuhan
                            Anda.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Tautan</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/about"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Tentang Kami
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Hubungi Kami
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/faq"
                                    className="text-gray-400 hover:text-white"
                                >
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                Instagram
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                Facebook
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p className="text-gray-400">
                        &copy; 2024 Stocku. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
