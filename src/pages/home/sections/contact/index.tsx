import styles from "./Contact.module.scss";
import Typography from "../../../../components/typhography";
import MessageInput from "../../../../components/input";
import { contactsData } from "../../../../constant/data.ts";

const Contact = () => {
  return (
    <div id={"contact"} className={styles.contact}>
      <div className={styles.content}>
        <div className={styles.topContent}>
          <div className={styles.title}>
            <Typography variant={"h2"}>Contact Us</Typography>
          </div>
          <div className={styles.description}>
            <Typography>
              Our dedicated experts are ready to discover the ideal inventory
              management solutions for your business. Get in touch with our
              exceptional team today!
            </Typography>
          </div>
          <div className={styles.inputContainer}>
            <MessageInput
              placeholder={"Send your email"}
              buttonLabel={"send"}
              onSend={() => {}}
            />
          </div>
        </div>
        <div className={styles.separator} />
        <div className={styles.middleContent}>
          <div className={styles.contactContainer}>
            <div className={styles.contactContent}>
              {contactsData.map((item) => (
                <div className={styles.contactList}>
                  <div className={styles.contactLogo}>
                    <img src={item.logo} alt="" />
                  </div>
                  <div className={styles.contactDesc}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.separator} />
        <div className={styles.footerContent}>
          <div className={styles.footer}>
            <Typography>PT LOGO</Typography>
            <div className={styles.tnc}>
              <Typography>Privacy & policy</Typography>
              <Typography>Terms & Conditions</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
