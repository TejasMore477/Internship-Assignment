import React, { useState } from "react";
import Nav from "../navigation/BottomNav";
import ThemeToggle from "../common/ThemeToggle";
import Header from "./Header";
import TripCard from "./TripCard";
import FlightDetails from "./FlightDetails";
import AccommodationList from "./AccommodationList";
import ActivityList from "./ActivityList";

const ResponsiveThemeMain = ({ initialTheme = "light" }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(initialTheme === "light");

  const accommodations = [
    {
      name: "Shinagawa Prince Hotel",
      checkIn: "26.01.2025, 11:15 pm",
      checkOut: "28.01.2025, 11:15 am",
      nights: 2,
      status: "Confirmed",
      rating: 4.0,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Mercure Tokyo Hotel",
      checkIn: "28.01.2025, 11:15 am",
      checkOut: "30.01.2025, 11:15 am",
      nights: 2,
      status: "Pending",
      rating: 4.1,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const activities = [
    {
      title: "Senso-ji Temple & Nakamise Shopping Street Senso-ji",
      timing: "8:15 am Morning",
      duration: "3 hours",
      pickup: "From Hotel",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Tokyo Sky Tree",
      timing: "1:00 pm Afternoon",
      duration: "3 hours",
      pickup: "From Nakamise Street",
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Kimono Wearing",
      timing: "Anytime before 8:00pm",
      duration: "1-2 hours",
      pickup: "From Hotel",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const tripData = {
    destination: "TOKYO",
    dateRange: "27.01.2025 - 02.02.2025",
    duration: "8 Days",
    groupSize: "4 (2M,2F)",
    activities: "14",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  };

  const flightData = {
    date: "26.01.2025, 10:50 am",
    from: { code: "DEL", city: "Delhi, India" },
    to: { code: "NRT", city: "Narita, Tokyo" },
    backgroundImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  };

  return (
    <div className={`min-h-screen w-full flex flex-col ${isDarkTheme ? "bg-gradient-to-r from-gray-900 to-black" : "bg-[#F7F8FA]"} relative`}>
      <ThemeToggle isDarkTheme={isDarkTheme} onToggle={() => setIsDarkTheme(!isDarkTheme)} />

      {/* Main Content Container */}
      <div className="flex-1 overflow-y-auto pb-24 px-4 md:px-8 lg:px-12 pt-6 max-w-7xl mx-auto w-full">
        <Header isDarkTheme={isDarkTheme} />
        
        {/* Upcoming Trip Section */}
        <div className="mt-5">
          <h3 className={`${isDarkTheme ? "text-white" : "text-[#232532]"} text-base md:text-lg font-semibold mb-2`}>
            Your Upcoming Trip
          </h3>
          <TripCard isDarkTheme={isDarkTheme} tripData={tripData} />
        </div>

        {/* Flight Details Section */}
        <FlightDetails isDarkTheme={isDarkTheme} flightData={flightData} />

        {/* Accommodation Section */}
        <AccommodationList isDarkTheme={isDarkTheme} accommodations={accommodations} />

        {/* Activities Section */}
        <ActivityList isDarkTheme={isDarkTheme} activities={activities} />
      </div>

      {/* Bottom Navigation - Fixed */}
      <Nav theme={isDarkTheme ? "dark" : "light"} />
    </div>
  );
};

export default ResponsiveThemeMain; 