import styles from "./companyProfile.module.scss";
import { CompanyMainDetails } from "@/components/company/mypage/mainDetails/companyMainDetails";
import { Container } from "@mui/material";
export const CompanyProfile = () => {
  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.section_1}>
          <CompanyMainDetails />
        </div>
        <div className={styles.section_2}>
          <p className={styles.heading}> About Company </p>
          <p>
            Objectively pursue diverse catalysts for change for interoperable
            meta-services. Distinctively re-engineer revolutionary meta-services
            and premium architectures. Intrinsically incubate intuitive
            opportunities and real-time potentialities. Appropriately
            communicate one-to-one technology.
            <br />
            <br /> Intrinsically incubate intuitive opportunities and real-time
            potentialities Appropriately communicate one-to-one technology.
            <br />
            <br />
            Exercitation photo booth stumptown tote bag Banksy, elit small batch
            freegan sed. Craft beer elit seitan exercitation, photo booth et
            8-bit kale chips proident chillwave deep v laborum. Aliquip veniam
            delectus, Marfa eiusmod Pinterest in do umami readymade swag.
          </p>
        </div>
      </div>
    </Container>
  );
};
