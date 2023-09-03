import { useEffect, useRef, useState, type PropsWithChildren } from "react";
import { easeIn, motion, useScroll, useTransform } from "framer-motion";
import { Grid } from "../ui/components/grid";
import { MetricCard, type Metric } from "./metric-card";

export const MetricCardGrid = ({
  metrics,
  children,
}: PropsWithChildren & { metrics: Metric[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const t = useTransform(scrollY, [0, 350], [0, 35], {
    clamp: true,
    ease: easeIn,
  });
  const o = useTransform(scrollY, [0, 225], [1, 0], {
    clamp: true,
    ease: easeIn,
  });
  const o2 = useTransform(scrollY, [200, 250], [0, 1], {
    clamp: true,
    ease: easeIn,
  });

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    t.on("change", () => {
      setOffset(t.get());
    });
  }, [t, o]);

  return (
    <div ref={ref} className="relative w-full rotate-0 py-[2%]">
      <Grid gap={4} className="lg:hidden rotate-[-2deg]">
        {Array.from(Array(3).keys()).map((_, x) => (
          <motion.div style={{ opacity: o, scale: o }}>
            <MetricCard metric={metrics[x]} />
          </motion.div>
        ))}
      </Grid>
      <Grid
        gap={6}
        cols={{ _: 1, lg: 7 }}
        className="hidden lg:grid w-[120%!important] ml-[-10%] z-5 rotate-[-2deg]"
      >
        {Array.from(Array(4).keys()).map((_, x) => (
          <>
            {Array.from(Array(3).keys()).map((_, y) => (
              <motion.div
                style={{ translateX: `${offset * -1}vw` }}
                className="relative z-1"
              >
                <MetricCard metric={metrics[y]} />
              </motion.div>
            ))}
            <motion.div style={{ opacity: o, scale: o }}>
              <MetricCard metric={metrics[x]} />
            </motion.div>
            {Array.from(Array(3).keys()).map((_, y) => (
              <motion.div
                style={{ translateX: `${offset}vw` }}
                className="relative z-1"
              >
                <MetricCard metric={metrics[y]} />
              </motion.div>
            ))}
          </>
        ))}
      </Grid>
      <motion.div
        style={{ opacity: o2 }}
        className="relative -mt-[250px] lg:-mt-[350px] z-0"
      >
        {children}
      </motion.div>
    </div>
  );
};
