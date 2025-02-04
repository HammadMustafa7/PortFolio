import { useEffect, useState } from "react";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import CursorFollower from "./components/Mouse_Cursor/Mousecursor";
import ProjectsPage from "./components/Project/Project";
import ContactForm from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Swal from "sweetalert2";

function App() {
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Function to show alert when internet goes offline
    const handleOffline = () => {
      if (!navigator.onLine) {
        setIsOnline(false);
        Swal.close(); // Close any open alert
        Swal.fire({
          title: "No Internet!",
          text: "Please check your network connection and try again.",
          icon: "warning",
          confirmButtonText: "OK",
          confirmButtonColor: "#f59e0b",
          customClass: { popup: "border-2 border-yellow-500 rounded-lg shadow-lg" },
        });
      }
    };

    // Function to show alert when internet comes back online
    const handleOnline = () => {
      if (navigator.onLine) {
        setIsOnline(true);
        Swal.close(); // Close any open alert
        Swal.fire({
          title: "Back Online!",
          text: "Your internet connection is restored.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#22c55e",
          customClass: { popup: "border-2 border-green-500 rounded-lg shadow-lg" },
        });
      }
    };

    // Add event listeners
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Remove event listeners when component unmounts
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Hide loading after 2 seconds
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-100">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-4 border-white border-dashed rounded-full animate-rotateme delay-300"></div>
          </div>
        </div>
      ) : (
        <div className="w-[100%]">
          <CursorFollower />
          <Header />
          <HomePage />
          <About />
          <ProjectsPage />
          <ContactForm />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
