import React, { useState, useEffect, useRef } from 'react';
import { 
  Monitor, Server, Database, Code, Users, GraduationCap, 
  Mail, Phone, MapPin, Sun, Moon, Search, Calendar,
  ChevronLeft, ChevronRight, BookOpen, Trophy, Award,
  Briefcase, Globe, BookOpen as Book, GraduationCap as Cap
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  const newsItems = [
    {
      title: "New AI Research Lab Opening",
      date: "March 15, 2024",
      description: "State-of-the-art artificial intelligence research facility opening next month, featuring cutting-edge equipment and collaboration spaces.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Student Wins Global Hackathon",
      date: "March 10, 2024",
      description: "Our student team secured first place in the International Coding Championship, showcasing innovative solutions for sustainable technology.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Industry Partnership Announcement",
      date: "March 5, 2024",
      description: "New collaboration with leading tech companies offering exclusive internship opportunities and mentorship programs for our students.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const courses = [
    { 
      code: "CS101", 
      name: "Introduction to Programming", 
      level: "Beginner",
      duration: "16 weeks",
      credits: 3,
      prerequisites: "None"
    },
    { 
      code: "CS201", 
      name: "Data Structures", 
      level: "Intermediate",
      duration: "16 weeks",
      credits: 4,
      prerequisites: "CS101"
    },
    { 
      code: "CS301", 
      name: "Artificial Intelligence", 
      level: "Advanced",
      duration: "16 weeks",
      credits: 4,
      prerequisites: "CS201, MATH201"
    },
    { 
      code: "NET101", 
      name: "Network Fundamentals", 
      level: "Beginner",
      duration: "16 weeks",
      credits: 3,
      prerequisites: "None"
    },
    { 
      code: "SEC201", 
      name: "Cybersecurity Basics", 
      level: "Intermediate",
      duration: "16 weeks",
      credits: 4,
      prerequisites: "NET101"
    },
    { 
      code: "WEB301", 
      name: "Advanced Web Development", 
      level: "Advanced",
      duration: "16 weeks",
      credits: 4,
      prerequisites: "CS201"
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Research Excellence",
      description: "Over 200 published research papers in top-tier journals"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Ranked among top 50 IT departments globally"
    },
    {
      icon: Briefcase,
      title: "Career Success",
      description: "95% placement rate within 6 months of graduation"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "International collaborations with 50+ universities"
    }
  ];

  const facilities = [
    {
      icon: Monitor,
      title: "Advanced Computing Labs",
      description: "State-of-the-art workstations with latest software"
    },
    {
      icon: Server,
      title: "Data Center",
      description: "Modern data center for hands-on experience"
    },
    {
      icon: Book,
      title: "Digital Library",
      description: "Access to extensive digital resources and journals"
    },
    {
      icon: Cap,
      title: "Research Centers",
      description: "Specialized labs for AI, IoT, and Cybersecurity"
    }
  ];

  const filteredCourses = courses.filter(course => 
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const nextNews = () => {
    setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevNews = () => {
    setCurrentNewsIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200 hover-scale"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-blue-600" />
        )}
      </button>

      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">Department of Information Technology</h1>
          <p className="text-xl max-w-2xl mx-auto">Empowering the next generation of technology leaders through innovation, education, and excellence</p>
        </div>
      </header>

      {/* News Carousel Section */}
      <section id="news" className={`py-16 px-4 bg-white dark:bg-gray-800 transition-colors duration-200 section-fade-in ${visibleSections.has('news') ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Latest News</h2>
          <div className="relative">
            <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 dark:text-white animate-slide-in">{newsItems[currentNewsIndex].title}</h3>
                  <p className="text-gray-500 dark:text-gray-300 mb-4">{newsItems[currentNewsIndex].date}</p>
                  <p className="text-gray-700 dark:text-gray-200">{newsItems[currentNewsIndex].description}</p>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden animate-scale-in">
                  <img 
                    src={newsItems[currentNewsIndex].image} 
                    alt={newsItems[currentNewsIndex].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={prevNews}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover-scale"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={nextNews}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover-scale"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={`py-16 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-200 section-fade-in ${visibleSections.has('achievements') ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover-scale">
                <achievement.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className={`py-20 px-4 section-fade-in ${visibleSections.has('programs') ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Monitor, title: 'Computer Science', desc: 'Comprehensive programming and software development' },
              { icon: Server, title: 'Network Engineering', desc: 'Advanced networking and system administration' },
              { icon: Database, title: 'Data Science', desc: 'Big data analytics and machine learning' },
              { icon: Code, title: 'Web Development', desc: 'Modern web technologies and frameworks' },
              { icon: Users, title: 'IT Management', desc: 'Project management and IT leadership' },
              { icon: GraduationCap, title: 'Cybersecurity', desc: 'Network security and ethical hacking' },
            ].map((program, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover-scale">
                <program.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{program.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className={`py-16 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-200 section-fade-in ${visibleSections.has('facilities') ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover-scale">
                <facility.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{facility.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Search Section */}
      <section id="courses" className={`py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-200 section-fade-in ${visibleSections.has('courses') ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Find Courses</h2>
          <div className="mb-8 relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover-scale">
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold dark:text-white">{course.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">{course.code}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {course.level}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Duration:</span> {course.duration}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Credits:</span> {course.credits}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Prerequisites:</span> {course.prerequisites}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className={`py-16 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-200 section-fade-in ${visibleSections.has('events') ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Tech Innovation Summit",
                date: "April 15, 2024",
                location: "Main Auditorium",
                description: "Annual technology showcase featuring student projects and industry speakers"
              },
              {
                icon: BookOpen,
                title: "Open House",
                date: "April 20, 2024",
                location: "IT Department",
                description: "Explore our facilities and meet faculty members"
              },
              {
                icon: Calendar,
                title: "Career Fair",
                date: "May 5, 2024",
                location: "University Center",
                description: "Connect with leading tech companies for internship and job opportunities"
              }
            ].map((event, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover-scale">
                <event.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{event.date}</p>
                <p className="text-gray-500 dark:text-gray-400 mt-1">{event.location}</p>
                <p className="text-gray-600 dark:text-gray-300 mt-3">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className={`bg-blue-600 dark:bg-blue-800 text-white py-16 transition-colors duration-200 section-fade-in ${visibleSections.has('stats') ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1000+', label: 'Students Enrolled', sublabel: 'From 30+ countries' },
              { number: '50+', label: 'Faculty Members', sublabel: 'Industry experts & researchers' },
              { number: '95%', label: 'Employment Rate', sublabel: 'Within 6 months of graduation' },
              { number: '100+', label: 'Industry Partners', sublabel: 'Global technology leaders' },
            ].map((stat, index) => (
              <div key={index} className="hover-scale">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg mb-1">{stat.label}</div>
                <div className="text-sm text-blue-200">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-200 section-fade-in ${visibleSections.has('contact') ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 hover-scale">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="font-semibold dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">it.department@university.edu</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Response within 24 hours</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 hover-scale">
              <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="font-semibold dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Mon-Fri, 9:00-17:00</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 hover-scale">
              <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="font-semibold dark:text-white">Address</h3>
                <p className="text-gray-600 dark:text-gray-300">123 University Ave, Tech Building</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Campus Map Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Department of Information Technology. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;