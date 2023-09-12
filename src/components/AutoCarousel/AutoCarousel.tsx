import Image from "next/image";
import classes from "./AutoCarousel.module.css";

export interface IData {
  image: string;
}

const AutoCarousel = ({
  data,
  animation = "left",
}: {
  data: IData[];
  animation?: string;
}) => {
  return (
    <div className={classes.body}>
      <div className={classes.marquee}>
        <div
          className={
            animation === "left" ? classes.marqueeLeft : classes.marqueeRight
          }
        >
          <div className={classes.span}>
            {data.map(({ image }, index) => {
              return (
                <div className={`${classes.orb}`} key={index}>
                  <Image
                    src={image}
                    alt="image"
                    objectFit="contain"
                    width="328"
                    height="384"
                  />
                </div>
              );
            })}
          </div>
          <div className={classes.span}>
            {data.map(({ image }, index) => {
              return (
                <div className={`${classes.orb}`} key={index}>
                  <Image
                    src={image}
                    alt="image"
                    objectFit="contain"
                    width="328"
                    height="384"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoCarousel;
