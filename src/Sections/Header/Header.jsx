import React from "react";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <p>This code is rendered when the viewport width is less than 800px.</p>
      ) : (
        <p>
          This code is rendered when the viewport width is 800px or greater.
        </p>
      )}
    </div>
  );
}

export default Header;
