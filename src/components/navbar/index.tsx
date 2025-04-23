import React, { useState } from "react";
import classNames from "classnames";
import { NavbarType } from "./navbarType";
import styles from "./Navbar.module.scss";
import Typography from "../typhography";
import Button from "../button";
import LoginModal from "../modal/login";

const Navbar: React.FC<NavbarType> = ({ links }) => {
  const Burger = "/assets/icons/bars.svg";
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const changeState = (hash: string) => {
    window.location.hash = hash;
    document.documentElement.style.scrollBehavior = "smooth";
  };

  return (
    <div className={styles.navbar}>
      <div className={styles["content-container"]}>
        <div className={classNames("container", styles.content)}>
          <div className={styles["profile-container"]}>
            <div className={styles.profile}>
              <Typography variant={"h1"}>LOGO</Typography>
            </div>
          </div>

          <div className={styles.burger}>
            <img
              src={Burger}
              alt="Menu"
              className={styles["burger-icon"]}
              onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
              <div className={styles["burger-container"]}>
                <div className={styles["burger-list"]}>
                  {links.map((link) => (
                    <div
                      onClick={() => {
                        changeState(link.id);
                        setIsOpen(!isOpen);
                      }}
                      className={styles["burger-list-item"]}
                      key={link.name}
                    >
                      <Typography variant="p">{link.name}</Typography>
                    </div>
                  ))}
                  <div className={styles["burger-list-item"]}>
                    <Button
                      label={"Login"}
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles["list-container"]}>
            <div className={styles.list}>
              {links.map((link) => (
                <div
                  className={styles["list-item"]}
                  key={link.id}
                  onClick={() => changeState(link.id)}
                >
                  <Typography>{link.name}</Typography>
                </div>
              ))}
              <div className={styles["list-item"]}>
                <Button
                  label={"Login"}
                  onClick={() => {
                    setOpenModal(!openModal);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Navbar;
