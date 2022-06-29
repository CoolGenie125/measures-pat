import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const ServiceCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "350px",
      minWidth: "350px",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0px 2px 20px rgb(0 0 0 / 10%)",
      borderBottom: "solid 1px #eeeeee",
      padding: "24px",
      margin: "0 auto 24px auto",
      cursor: "pointer",
      "&:hover": {
        boxShadow: "0px 0px 0px rgb(0 0 0 / 10%)",
        transform: "translate(6px, 12px)",
        transitionDuration: "800ms",
      },
      [theme.breakpoints.down(450)]:{
        minWidth: "100%",
        width: "100%",
      },
    },
    imgRoot: {
      position: "relative",
      marginBottom: "20px",
      borderRadius: "20px",
      overflow: "hidden",
      transitionDelay: "300ms",
      transitionDuration: "3000ms",
    },
    slideRoot: {
      background: "#9ab0bc",
      flex: "none",
      height: "100%",
      margin: "0 0 0 0",
      width: "100%",
      maxWidth: "100%",
      zIndex: 2,
      top: "0px",
      bottom: "NaNpx",
      right: "NaNpx",
      left: "0px",
      position: "absolute",
    },
    cardImg: {
      height: "180px",
      width: "100%",
    },
    cardDes: {
      color: "#000000",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "14px",
      fontWeight: 700,
      height: "auto",
      letterSpacing: "0.15em",
      lineHeight: "1.6",
      marginBottom: "12px",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
      zIndex: 1,
    },
    cardFooter: {
      display: "flex",
      alignItems: "center",
      color: "#55727e",
      fontFamily: "Montserrat",
      fontSize: "12px",
      fontWeight: 700,
      height: "auto",
      letterSpacing: "0.05em",
      lineHeight: "1",
      padding: "0 6px",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
      "& i": {
        color: "#55727e",
        marginRight: "6px",
      },
    },
  })
);
