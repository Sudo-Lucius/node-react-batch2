import { useEffect, useState } from "react";

export default function Timer({ children }) {
  const [time, setTime] = useState(new Date());
  const [countdown, setCountdown] = useState(100);

  // Update waktu setiap detik
  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(clock);
  }, []);

  // Countdown setiap detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Jika countdown selesai, return null (hilangkan tampilan)
  if (countdown < 0) {
    return null;
  }

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h2>Now At - {formattedTime}</h2>
      <h3>Countdown : {countdown}</h3>

      {/* render children = ToDo component */}
      {children}
    </div>
  );
}
