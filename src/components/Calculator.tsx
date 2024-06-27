import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, SyntheticEvent, ChangeEvent } from "react";
import { cn } from "../lib/utils";

function Calculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");

  function handleHeightChange(event: ChangeEvent<HTMLInputElement>) {
    setHeight(event.target.value);
    setBMI("");
  }

  function handleWeightChange(event: ChangeEvent<HTMLInputElement>) {
    setWeight(event.target.value);
    setBMI("");
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    const heightInMeters = Number(height) / 100;
    setBMI((Number(weight) / (heightInMeters * heightInMeters)).toFixed(1));
  }

  function handleReset() {
    setHeight("");
    setWeight("");
    setBMI("");
  }

  return (
    <Card className="w-80 text-center">
      <CardHeader className="my-2">
        <CardTitle className="tracking-wide">BMI Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="grid items-center gap-4"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <Input
            type="number"
            onChange={handleHeightChange}
            min="1"
            required
            className="text-center"
            placeholder="Height (CM)"
          />
          <Input
            type="number"
            onChange={handleWeightChange}
            min="1"
            required
            className="text-center"
            placeholder="Weight (KG)"
          />
          <div className="flex justify-between">
            <Button
              type="reset"
              className={cn([
                "w-24 uppercase",
                buttonVariants({ variant: "destructive" }),
              ])}
            >
              Reset
            </Button>
            <Button type="submit" className="w-24 uppercase">
              Submit
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <div className="h-10 w-full rounded border-t pt-4">{bmi}</div>
      </CardFooter>
    </Card>
  );
}

export default Calculator;
