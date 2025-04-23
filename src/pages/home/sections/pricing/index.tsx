import styles from "./Pricing.module.scss";
import Card from "../../../../components/card";
import { data } from "../../../../constant/data.ts";
import Typography from "../../../../components/typhography";

const Pricing = () => {
  return (
    <div id="pricing" className={styles.pricing}>
      <div className={styles.header}>
        <Typography variant={"h1"}>Choose Your ERP Needs</Typography>
      </div>
      <div className={styles.content}>
        {data.map((item) => (
          <div>
            <Card
              title={item.title}
              subtitle={item.subtitle}
              discountPercent={item.discountPercent}
              price={item.price}
              isDiscount={item.isDiscount}
              feature={item.feature}
              discountPrice={item.discountPrice}
              onClick={() => {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
