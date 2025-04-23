import styles from "./Landing.module.scss";
import Typography from "../../../../components/typhography";
import Button from "../../../../components/button";

const Landing = () => {
  return (
    <div id={"home"} className={styles.landing}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <img src={"assets/graph.svg"} />
          </div>
          <div className={styles.labelContainer}>
            <div className={styles.title}>
              <Typography variant="h1">
                Streamline Your Business with Our ERP System
              </Typography>
            </div>
            <div className={styles.description}>
              <Typography>
                Boost efficiency, optimize operations, and drive growth with our
                powerful ERP solution tailored to your needs.
              </Typography>
            </div>
            <div className={styles.buttonContainer}>
              <Button
                label="Demo Product"
                onClick={() => alert("Demo Product!")}
                variant="primary"
                size="large"
              />
              <Button
                label="Contact Us"
                onClick={() => alert("Clicked!")}
                variant="outline"
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
