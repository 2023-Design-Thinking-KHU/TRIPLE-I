import HomeHeader from "./HomeHeader";
import HomeList from "./HomeList";
import Home from "../images/Home.jpg";
import Note from "../images/Note.jpg"
import home from "../images/Home1.jpg"

export default function HomePage() {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundImage: `url(${Home})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <div>
            <HomeHeader />
            <div>
              <h1
                style={{
                  color: "white",
                  fontSize: 32,
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 2)",
                }}
              >
                Building a Better Future
              </h1>
              <h1
                style={{
                  color: "white",
                  fontSize: 50,
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 2)",
                }}
              >
                with the Power of
              </h1>
              <h1
                style={{
                  color: "white",
                  fontSize: 50,
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 2)",
                }}
              >
                Financial KnowHow
              </h1>
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            backgroundImage: `url(${Note})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <HomeList />
        </div>
      </div>
    </>
  );
}
