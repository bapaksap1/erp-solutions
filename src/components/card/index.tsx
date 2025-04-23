import React from "react";
import { CardType } from "./cardType.ts";
import styles from "./Card.module.scss";
import Button from "../button";
import Typography from "../typhography";

const Card: React.FC<CardType> = ({
  title,
  price,
  onClick,
  subtitle,
  isDiscount,
  discountPrice,
  discountPercent,
  feature,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.contentContainer}>
        <div className={styles.box}>
          <div className={styles.header}>
            <Typography variant={"h2"} className={styles.title}>
              {title}
            </Typography>
            <Typography variant={"p"} className={styles.subtitle}>
              {subtitle}
            </Typography>
          </div>
          <div className={styles.price}>
            {isDiscount ? (
              <div className={styles.discount}>
                <div className={styles.discountContent}>
                  <Typography variant={"h4"} className={styles.priceBefore}>
                    {`IDR. ${price}`}
                  </Typography>
                  <div
                    className={styles.tagDiscount}
                  >{`${discountPercent}% Discount`}</div>
                </div>
                <Typography variant={"h3"} className={styles.priceDiscount}>
                  {`IDR. ${discountPrice}/Month`}
                </Typography>
              </div>
            ) : (
              <Typography variant={"h3"} className={styles.priceCount}>
                {`IDR. ${price}/Month`}
              </Typography>
            )}
          </div>
          <div className={styles.buttonContainer}>
            <Button label={"Select Package"} onClick={onClick} />
          </div>
          <div className={styles.separator} />
          <div className={styles.feature}>
            <Typography variant={"h4"}>Features :</Typography>
            {feature.map((item) => (
              <div key={item} className={styles.list}>
                <div className={styles.dot} />
                <Typography variant={"p"}>{item}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
