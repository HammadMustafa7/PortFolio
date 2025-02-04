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
  const [isOnline, setIsOnline] = useState(true);

  // Network status monitoring
  useEffect(() => {
    // Function to check internet connection
    const checkInternetConnection = () => {
      if (navigator.onLine !== isOnline) {
        handleNetworkChange(navigator.onLine);
      }
    };

    // Function to handle status changes
    const handleNetworkChange = (status) => {
      setIsOnline(status);
      if (!status) {
        Swal.fire({
          title: "No Internet!",
          text: "Please check your network connection and try again.",
          icon: "warning",
          confirmButtonText: "OK",
          confirmButtonColor: "#f59e0b",
          customClass: {
            popup: "border-2 border-yellow-500 rounded-lg shadow-lg"
          },
          allowOutsideClick: false,
          allowEscapeKey: true,
          allowEnterKey: false,
          showConfirmButton: true
        });
      } else {
        Swal.close();
        Swal.fire({
          title: "Back Online!",
          text: "Your internet connection is restored.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#22c55e",
          customClass: {
            popup: "border-2 border-green-500 rounded-lg shadow-lg"
          },
          allowOutsideClick: false,
          allowEscapeKey: true,
          allowEnterKey: false,
          showConfirmButton: true
        });
      }
    };

    // Handle offline event
    const handleOffline = () => {
      handleNetworkChange(false);
    };

    // Handle online event
    const handleOnline = () => {
      handleNetworkChange(true);
    };

    // Initial check
    checkInternetConnection();

    // Set up event listeners
    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    // Regular status check
    const intervalId = setInterval(checkInternetConnection, 3000);

    // Cleanup
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, [isOnline]);

  // Loading state
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
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