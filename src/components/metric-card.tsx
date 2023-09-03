import { Card } from "../ui/components/card";
import { Stack } from "../ui/components/stack";
import { Heading } from "../ui/components/typography/heading";
import classNames from "classnames";

export type Metric = {
  title: string;
  value: string;
  likert: "positive" | "negative" | "neutral";
};

export const MetricCard = ({ metric }: { metric: Metric }) => {
  return (
    <Card
      className={classNames(
        "relative",
        metric.likert === "positive" && "border-green-500",
        metric.likert === "negative" && "border-red-500"
      )}
    >
      <Stack>
        <Heading as="h4" size="medium">
          {metric.title}
        </Heading>
        <Stack align="right">
          <Heading
            as="h4"
            size="medium"
            className={classNames(
              metric.likert === "positive" && "text-green-500",
              metric.likert === "negative" && "text-red-500"
            )}
          >
            {metric.value}
          </Heading>
        </Stack>
      </Stack>
    </Card>
  );
};

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
