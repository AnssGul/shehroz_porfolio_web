
import { Gavel, Users, Lightbulb, Award, ArrowRight, Phone, Facebook, Mail, MapPin } from 'lucide-react';
import '../home/styles.css';
import React from 'react';


const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-900">
            {/* Hero Section */}
            <header className="hero bg-gradient-to-r from-blue-600 to-blue-400 text-white py-10 sm:py-16 md:py-20">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                    <div className="flex-1 space-y-4 sm:space-y-6 text-center sm:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                            Malik Shehroz Liaquat Nissoana
                        </h1>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-200 font-semibold">
                            Future Political Leader | Human Rights Activist | Legal Expert
                        </h2>
                        <p className="text-sm sm:text-lg md:text-xl text-blue-100">
                            Leading with integrity, knowledge, and dedication to serving justice for all.
                        </p>
                    </div>
                    <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl transform hover:scale-105 transition-transform duration-500">
                        <img
                            src="./images/shehroz.png"
                            alt="Malik Shehroz Liaquat"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </header>

            {/* Mission Statement */}
            <section className="mission py-10 sm:py-12 md:py-16 bg-blue-50">
                <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
                        Vision for Change: A Future of Justice
                    </h2>
                    <p className="text-sm sm:text-lg md:text-xl text-gray-700 italic">
                        "My mission is to create a society where justice is accessible to everyone, and human rights are protected at all levels. Through dedication and leadership, we can build a future of equality and empowerment for all."
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-800">
                        Malik Shehroz Liaquat is driven by a deep-rooted commitment to the law, justice, and human rights. As a future political leader and legal expert, he is determined to use his knowledge and passion to bring positive change, standing up for those who need it the most. His vision goes beyond the courtroom—he is working to build a society based on equality, fairness, and accountability.
                    </p>
                </div>
            </section>

            {/* Key Areas */}
            <section className="key-areas py-10 sm:py-12 md:py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {[
                        {
                            icon: "Gavel",
                            title: "Legal Expertise & Advocacy",
                            description: "A skilled and passionate law student at Islamia University Bahawalpur, Shehroz is developing a deep understanding of legal complexities to fight for justice. He stands firm in the belief that law should serve the people and be the foundation of a just society."
                        },
                        {
                            icon: "Users",
                            title: "Community Leadership & Empowerment",
                            description: "Shehroz is a natural leader who engages with local authorities, police, and courts to ensure justice for every community member. His dedication to human rights drives him to empower and support marginalized individuals through education and advocacy."
                        },
                        {
                            icon: "Lightbulb",
                            title: "Visionary Political Leadership",
                            description: "As a future political leader, Shehroz is committed to creating policy changes that protect human rights, fight corruption, and enhance the welfare of society. His leadership is rooted in integrity, transparency, and a deep sense of duty to his community."
                        }
                    ].map((area, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-500 text-center"
                        >
                            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <area.icon className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{area.title}</h3>
                            <p className="text-sm sm:text-base text-gray-600">{area.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Achievements */}
            <section className="achievements py-16 bg-blue-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Notable Achievements: A Legacy of Impact</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="card p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <div className="flex items-start gap-4">
                                <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2">Community Impact</h3>
                                    <p className="text-gray-600">
                                        Successfully resolved number of community disputes through legal advocacy and mediation, bringing justice to those in need.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <div className="flex items-start gap-4">
                                <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2">Leadership Recognition</h3>
                                    <p className="text-gray-600">
                                        Recognized as an emerging young leader by local authorities for dedication to community service and justice.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials py-16">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Community Voice: His Leadership Speaks Volumes</h2>
                    <blockquote className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-500">
                        <p className="text-lg text-gray-700 italic mb-4">
                            "Malik Shehroz Liaquat represents the future of leadership we need. Despite his young age, his commitment to justice and community welfare has already made a significant impact in our area."
                        </p>
                        <footer className="text-gray-600 font-semibold">
                            - Senior Community Leader
                        </footer>
                    </blockquote>
                    <blockquote className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-500">
                        <p className="text-lg text-gray-700 italic mb-4">
                            "His dedication to human rights and justice is truly inspiring. At just 21, he has shown remarkable maturity in handling complex community issues."
                        </p>
                        <footer className="text-gray-600 font-semibold">
                            - Local Legal Professional
                        </footer>
                    </blockquote>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact py-16 bg-blue-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Get in Touch with the Future Leader</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6 text-center md:text-left">
                            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <a href="tel:+93423330020" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                                    <Phone className="w-5 h-5" />
                                    <span>+92 3423330020</span>
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=100080899908154&mibextid=ZbWKwL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                    <Facebook className="w-5 h-5" />
                                    <span>Malik Shehroz Liaquat</span>
                                </a>
                                <a
                                    href="https://www.tiktok.com/@malikshehrozliaqat103?_t=ZS-8sws2qE8xIV&_r=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                    <span>TikTok: @malikshehrozliaqat103</span>
                                </a>
                                <a
                                    href="mailto:malikshehroz1100@gmail.com"
                                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>Email: malikshehroz1100@gmail.com</span>
                                </a>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <MapPin className="w-5 h-5" />
                                    <span>Bahawalpur, Punjab, Pakistan</span>
                                </div>
                            </div>
                            <div className="pt-6">
                                <p className="text-gray-600">
                                    Available for community service, legal consultation, and speaking engagements.
                                    Feel free to reach out through any of these channels.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-500 text-center">
                            <h3 className="text-2xl font-semibold mb-4">Quick Connect</h3>
                            <div className="space-y-4">
                                <a
                                    href="https://www.facebook.com/profile.php?id=100080899908154&mibextid=ZbWKwL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors w-full justify-center"
                                >
                                    <Facebook className="w-5 h-5" />
                                    Connect on Facebook
                                </a>
                                <a
                                    href="tel:+93423330020"
                                    className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors w-full justify-center"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call Now
                                </a>
                            </div>
                            <p className="mt-4 text-sm text-gray-600 text-center">
                                Available 24/7 for community service
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-blue-600 text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <p>© 2025 Malik Shehroz Liaquat. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;

// const Home = () => {
//     return (
//         <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
//             {/* Hero Section */}
//             <header className="hero">
//                 <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
//                     <div className="flex-1 space-y-6">
//                         <h1 className="text-4xl md:text-5xl font-bold">Malik Shehroz Liaquat</h1>
//                         <h2 className="text-2xl md:text-3xl text-blue-200">Future Political Leader | Human Rights Activist</h2>
//                         <p className="text-lg text-blue-100">
//                             Dedicated to serving the community and ensuring justice for all
//                         </p>
//                     </div>
//                     <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
//                         <img
//                             src="./images/shehroz.png"
//                             alt="Malik Shehroz Liaquat"
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                 </div>
//             </header>

//             {/* Mission Statement */}
//             <section className="mission">
//                 <div className="max-w-4xl mx-auto text-center space-y-6">
//                     <h2 className="text-3xl font-bold text-gray-900">Vision for Change</h2>
//                     <p className="text-xl text-gray-700 italic">
//                         "My mission is to create a society where justice is accessible to everyone,
//                         and human rights are protected at all levels. Through dedication and
//                         leadership, we can build a future of equality and empowerment for all."
//                     </p>
//                 </div>
//             </section>

//             {/* Key Areas */}
//             <section className="key-areas">
//                 <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
//                     <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//                         <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <Gavel className="w-8 h-8 text-blue-600" />
//                         </div>
//                         <h3 className="text-xl font-bold mb-2">Legal Advocacy</h3>
//                         <p className="text-gray-600">
//                             Pursuing law education at Islamia University Bahawalpur to strengthen
//                             legal expertise and community service
//                         </p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//                         <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <Users className="w-8 h-8 text-blue-600" />
//                         </div>
//                         <h3 className="text-xl font-bold mb-2">Community Leadership</h3>
//                         <p className="text-gray-600">
//                             Actively working with police and courts to ensure justice for community members
//                         </p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//                         <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <Lightbulb className="w-8 h-8 text-blue-600" />
//                         </div>
//                         <h3 className="text-xl font-bold mb-2">Youth Empowerment</h3>
//                         <p className="text-gray-600">
//                             Mentoring young individuals in legal awareness and community engagement
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Achievements */}
//             <section className="achievements">
//                 <div className="max-w-6xl mx-auto">
//                     <h2 className="text-3xl font-bold text-center mb-12">Notable Achievements</h2>
//                     <div className="grid md:grid-cols-2 gap-8">
//                         <div className="card">
//                             <div className="flex items-start gap-4">
//                                 <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
//                                 <div>
//                                     <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
//                                     <p className="text-gray-600">
//                                         Successfully resolved over 50 community disputes through legal advocacy
//                                         and mediation, bringing justice to those in need.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="card">
//                             <div className="flex items-start gap-4">
//                                 <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
//                                 <div>
//                                     <h3 className="text-xl font-semibold mb-2">Leadership Recognition</h3>
//                                     <p className="text-gray-600">
//                                         Recognized as an emerging young leader by local authorities for
//                                         dedication to community service and justice.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Testimonials */}
//             <section className="testimonials">
//                 <div className="max-w-4xl mx-auto space-y-8">
//                     <h2 className="text-3xl font-bold text-center mb-12">Community Voice</h2>
//                     <blockquote className="bg-white p-6 rounded-lg shadow-lg">
//                         <p className="text-lg text-gray-700 italic mb-4">
//                             "Malik Shehroz Liaquat represents the future of leadership we need.
//                             Despite his young age, his commitment to justice and community welfare
//                             has already made a significant impact in our area."
//                         </p>
//                         <footer className="text-gray-600 font-semibold">
//                             - Senior Community Leader
//                         </footer>
//                     </blockquote>
//                     <blockquote className="bg-white p-6 rounded-lg shadow-lg">
//                         <p className="text-lg text-gray-700 italic mb-4">
//                             "His dedication to human rights and justice is truly inspiring. At just 21,
//                             he has shown remarkable maturity in handling complex community issues."
//                         </p>
//                         <footer className="text-gray-600 font-semibold">
//                             - Local Legal Professional
//                         </footer>
//                     </blockquote>
//                 </div>
//             </section>

//             {/* Contact Section */}
//             <section className="contact">
//                 <div className="max-w-4xl mx-auto">
//                     <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
//                     <div className="grid md:grid-cols-2 gap-8">
//                         <div className="space-y-6">
//                             <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
//                             <div className="space-y-4">
//                                 <a href="tel:+923126050472" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
//                                     <Phone className="w-5 h-5" />
//                                     <span>+92 312 6050472</span>
//                                 </a>
//                                 <a
//                                     href="https://www.facebook.com/malikshehrozliaqat"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
//                                 >
//                                     <Facebook className="w-5 h-5" />
//                                     <span>Malik Shehroz Liaquat</span>
//                                 </a>
//                                 <div className="flex items-center gap-3 text-gray-700">
//                                     <MapPin className="w-5 h-5" />
//                                     <span>Bahawalpur, Punjab, Pakistan</span>
//                                 </div>
//                             </div>
//                             <div className="pt-6">
//                                 <p className="text-gray-600">
//                                     Available for community service, legal consultation, and speaking engagements.
//                                     Feel free to reach out through any of these channels.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold mb-4">Quick Connect</h3>
//                             <div className="space-y-4">
//                                 <a
//                                     href="https://www.facebook.com/malikshehrozliaqat"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors w-full justify-center"
//                                 >
//                                     <Facebook className="w-5 h-5" />
//                                     Connect on Facebook
//                                 </a>
//                                 <a
//                                     href="tel:+923126050472"
//                                     className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors w-full justify-center"
//                                 >
//                                     <Phone className="w-5 h-5" />
//                                     Call Now
//                                 </a>
//                             </div>
//                             <p className="mt-4 text-sm text-gray-600 text-center">
//                                 Available 24/7 for community service
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer>
//                 <div className="max-w-6xl mx-auto text-center">
//                     <p>© 2025 Malik Shehroz Liaquat. All rights reserved.</p>
//                 </div>
//             </footer>
//         </div>
//     );
// }
// export default Home;


// const Home = () => {
//     return (
//         <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
//             {/* Hero Section */}
//             <header className="bg-blue-900 text-white py-20 px-4">
//                 <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
//                     <div className="flex-1 space-y-6">
//                         <h1 className="text-4xl md:text-5xl font-bold">
//                             Malik Shehroz Liaquat
//                         </h1>
//                         <h2 className="text-2xl md:text-3xl text-blue-200">
//                             Future Political Leader | Human Rights Activist
//                         </h2>
//                         <p className="text-lg text-blue-100">
//                             Dedicated to serving the community and ensuring justice for all
//                         </p>
//                     </div>
//                     <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
//                         <img
//                             src="/api/placeholder/400/400"
//                             alt="Malik Shehroz Liaquat"
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                 </div>
//             </header>

//             {/* Mission Statement */}
//             <section className="py-16 px-4 bg-white">
//                 <div className="max-w-4xl mx-auto text-center space-y-6">
//                     <h2 className="text-3xl font-bold text-gray-900">Vision for Change</h2>
//                     <p className="text-xl text-gray-700 italic">
//                         "My mission is to create a society where justice is accessible to everyone,
//                         and human rights are protected at all levels. Through dedication and
//                         leadership, we can build a future of equality and empowerment for all."
//                     </p>
//                 </div>
//             </section>

//             {/* Key Areas */}
//             <section className="py-16 px-4">
//                 <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
//                     <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//                         <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <Gavel className="w-8 h-8 text-blue-600" />
//                         </div>
//                         <h3 className="text-xl font-bold mb-2">Legal Advocacy</h3>
//                         <p className="text-gray-600">
//                             Pursuing law education at Islamia University Bahawalpur to strengthen
//                             legal expertise and community service
//                         </p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//                         <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <Users className="w-8 h-8 text-blue-600" />
//                         </div>
//                         <h3 className="text-xl font-bold mb-2">Community Leadership</h3>
//                         <p className="text-gray-600">
//                             Actively working with police and courts to ensure justice for community members
//                         </p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//                         <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <Lightbulb className="w-8 h-8 text-blue-600" />
//                         </div>
//                         <h3 className="text-xl font-bold mb-2">Youth Empowerment</h3>
//                         <p className="text-gray-600">
//                             Mentoring young individuals in legal awareness and community engagement
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Achievements */}
//             <section className="py-16 px-4 bg-gray-50">
//                 <div className="max-w-6xl mx-auto">
//                     <h2 className="text-3xl font-bold text-center mb-12">Notable Achievements</h2>
//                     <div className="grid md:grid-cols-2 gap-8">
//                         <div className="bg-white p-6 rounded-lg shadow">
//                             <div className="flex items-start gap-4">
//                                 <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
//                                 <div>
//                                     <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
//                                     <p className="text-gray-600">
//                                         Successfully resolved over 50 community disputes through legal advocacy
//                                         and mediation, bringing justice to those in need.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="bg-white p-6 rounded-lg shadow">
//                             <div className="flex items-start gap-4">
//                                 <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
//                                 <div>
//                                     <h3 className="text-xl font-semibold mb-2">Leadership Recognition</h3>
//                                     <p className="text-gray-600">
//                                         Recognized as an emerging young leader by local authorities for
//                                         dedication to community service and justice.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Testimonials */}
//             <section className="py-16 px-4">
//                 <div className="max-w-4xl mx-auto space-y-8">
//                     <h2 className="text-3xl font-bold text-center mb-12">Community Voice</h2>
//                     <blockquote className="bg-white p-6 rounded-lg shadow-lg">
//                         <p className="text-lg text-gray-700 italic mb-4">
//                             "Malik Shehroz Liaquat represents the future of leadership we need.
//                             Despite his young age, his commitment to justice and community welfare
//                             has already made a significant impact in our area."
//                         </p>
//                         <footer className="text-gray-600 font-semibold">
//                             - Senior Community Leader
//                         </footer>
//                     </blockquote>
//                     <blockquote className="bg-white p-6 rounded-lg shadow-lg">
//                         <p className="text-lg text-gray-700 italic mb-4">
//                             "His dedication to human rights and justice is truly inspiring. At just 21,
//                             he has shown remarkable maturity in handling complex community issues."
//                         </p>
//                         <footer className="text-gray-600 font-semibold">
//                             - Local Legal Professional
//                         </footer>
//                     </blockquote>
//                 </div>
//             </section>

//             {/* Call to Action */}
//             <section className="py-16 px-4 bg-blue-900 text-white">
//                 <div className="max-w-4xl mx-auto text-center space-y-6">
//                     <h2 className="text-3xl font-bold">Join the Movement for Change</h2>
//                     <p className="text-xl text-blue-100">
//                         Support Malik Shehroz Liaquat's vision for a just and empowered society.
//                         Together, we can make a difference.
//                     </p>
//                     <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors flex items-center gap-2 mx-auto">
//                         Connect With Us
//                         <ArrowRight className="w-5 h-5" />
//                     </button>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="bg-gray-900 text-gray-400 py-8 px-4">
//                 <div className="max-w-6xl mx-auto text-center">
//                     <p>© 2025 Malik Shehroz Liaquat. All rights reserved.</p>
//                 </div>
//             </footer>
//         </div>
//     );
// }
// export default Home;




// function Contact() {
//     return (
//         <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
//             {/* Previous sections remain the same until before the Call to Action section */}

//             {/* Contact Section - New Addition */}
//             <section className="py-16 px-4 bg-white">
//                 <div className="max-w-4xl mx-auto">
//                     <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
//                     <div className="grid md:grid-cols-2 gap-8">
//                         <div className="space-y-6">
//                             <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
//                             <div className="space-y-4">
//                                 <a href="tel:+923126050472" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
//                                     <Phone className="w-5 h-5" />
//                                     <span>+92 312 6050472</span>
//                                 </a>
//                                 <a
//                                     href="https://www.facebook.com/malikshehrozliaqat"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
//                                 >
//                                     <Facebook className="w-5 h-5" />
//                                     <span>Malik Shehroz Liaquat</span>
//                                 </a>
//                                 <div className="flex items-center gap-3 text-gray-700">
//                                     <MapPin className="w-5 h-5" />
//                                     <span>Bahawalpur, Punjab, Pakistan</span>
//                                 </div>
//                             </div>

//                             <div className="pt-6">
//                                 <p className="text-gray-600">
//                                     Available for community service, legal consultation, and speaking engagements.
//                                     Feel free to reach out through any of these channels.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold mb-4">Quick Connect</h3>
//                             <div className="space-y-4">
//                                 <a
//                                     href="https://www.facebook.com/malikshehrozliaqat"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors w-full justify-center"
//                                 >
//                                     <Facebook className="w-5 h-5" />
//                                     Connect on Facebook
//                                 </a>
//                                 <a
//                                     href="tel:+923126050472"
//                                     className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors w-full justify-center"
//                                 >
//                                     <Phone className="w-5 h-5" />
//                                     Call Now
//                                 </a>
//                             </div>
//                             <p className="mt-4 text-sm text-gray-600 text-center">
//                                 Available 24/7 for community service
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Call to Action - Updated */}
//             <section className="py-16 px-4 bg-blue-900 text-white">
//                 <div className="max-w-4xl mx-auto text-center space-y-6">
//                     <h2 className="text-3xl font-bold">Join the Movement for Change</h2>
//                     <p className="text-xl text-blue-100">
//                         Support Malik Shehroz Liaquat's vision for a just and empowered society.
//                         Connect with him to be part of the change.
//                     </p>
//                     <div className="flex flex-wrap gap-4 justify-center">
//                         <a
//                             href="https://www.facebook.com/malikshehrozliaqat"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
//                         >
//                             <Facebook className="w-5 h-5" />
//                             Follow on Facebook
//                         </a>
//                         <a
//                             href="tel:+923126050472"
//                             className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors flex items-center gap-2"
//                         >
//                             <Phone className="w-5 h-5" />
//                             Call Now
//                         </a>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer - Updated */}
//             <footer className="bg-gray-900 text-gray-400 py-8 px-4">
//                 <div className="max-w-6xl mx-auto text-center space-y-4">
//                     <div className="flex justify-center gap-6">
//                         <a
//                             href="https://www.facebook.com/malikshehrozliaqat"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-gray-400 hover:text-white transition-colors"
//                         >
//                             <Facebook className="w-6 h-6" />
//                         </a>
//                         <a
//                             href="tel:+923126050472"
//                             className="text-gray-400 hover:text-white transition-colors"
//                         >
//                             <Phone className="w-6 h-6" />
//                         </a>
//                     </div>
//                     <p>© 2025 Malik Shehroz Liaquat. All rights reserved.</p>
//                     <p className="text-sm">Dedicated to serving the community in Bahawalpur, Punjab</p>
//                 </div>
//             </footer>
//         </div>
//     );
// }