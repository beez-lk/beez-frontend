import { useEffect, useState } from "react";
import Button1 from "../../components/button_1/button_1";
import UseMyHistory from "../../utils/use_history";
import useStyles from "./landing_page_styles";

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.background_image}>
        <AppBar />
        <Heading />
      </div>
      <div className={classes.scroll_outer}>
        <div className={classes.scroll_card}>
          <div style={{ height: "500px", position: "relative" }}>
            <div
              id="about_us_section"
              style={{ position: "absolute", top: "-100px" }}
            />
            <h1>About Us</h1>
          </div>
          <div id="contact_us_section" style={{ height: "500px" }}>
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

const AppBar = () => {
  const classes = useStyles();
  const { push } = UseMyHistory();
  return (
    <div className={classes.app_bar}>
      <div>
        <div className={classes.logo_text}>Beeez.lk</div>
      </div>
      <div>
        <Button1
          onClick={() => {
            document.getElementById("about_us_section").scrollIntoView({
              behavior: "smooth",
            });
          }}
          isSelected
          title="About Us"
        />
        <Button1
          onClick={() => {
            document.getElementById("contact_us_section").scrollIntoView({
              behavior: "smooth",
            });
          }}
          isSelected
          title="Contact Us"
        />
        <Button1 onClick={() => push("/login")} isSelected title="Sign In" />
      </div>
    </div>
  );
};

const Heading = () => {
  const classes = useStyles();
  const [color, setColor] = useState("white");

  useEffect(() => {
    const colors = [
      "white",
      "#ff7676",
      "#f7ff76",
      "#76f9ff",
      "#7876ff",
      "#e476ff",
    ];
    const getRandomColor = () => {
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const timer = setInterval(() => {
      setColor(getRandomColor());
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ color: color }} className={classes.heading}>
      Sri Lanka's largest online platform for Freelancers
    </div>
  );
};
