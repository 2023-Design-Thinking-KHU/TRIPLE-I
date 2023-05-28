import HomeHeader from "./HomeHeader";
import HomeList from "./HomeList";

export default function HomePage() {
  return (
    <div>
      <style>
        {`
        body {
          margin: 0;
          padding: 0;
        }
        `}
      </style>
      <div
        style={{
          backgroundImage: `url(/Home.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "50%",
          height: "100vh",
          marginTop:139,
          margin: 0, // Add margin: 0 to remove any default spacing
          padding: 0, // Add padding: 0 to remove any default spacing
          display: "flex", // Add display: "flex" for flexbox behavior
          alignItems: "center", // Vertically align content to center
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <HomeHeader />
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "10rem", // Adjust the left position as needed
            transform: "translateY(-40%)",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: 32,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
           Building a Better Future
          </h1>
          <h1
            style={{
              color: "white",
              fontSize: 50,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            with the Power of
          </h1>
          <h1
            style={{
              color: "white",
              fontSize: 50,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
             Financial KnowHow
          </h1>
        </div>
        <div
          style={{
            position: "absolute",
            top: "65%",
            right: "4rem",
            transform: "translateY(-60.5%)",
          }}
        >
          <HomeList />
        </div>
      </div>
    </div>
  );
}
