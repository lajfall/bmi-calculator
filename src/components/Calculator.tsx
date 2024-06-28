import { Input } from "./ui/input";
import { Button, buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
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
    <Card className="w-72 text-center font-mono">
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
            className="text-center focus-visible:ring-0"
            placeholder="Height (CM)"
          />
          <Input
            type="number"
            onChange={handleWeightChange}
            min="1"
            required
            className="text-center focus-visible:ring-0"
            placeholder="Weight (KG)"
          />
          <div className="mt-2 flex justify-between">
            <Button
              type="reset"
              className={cn([
                "w-[108px] font-black",
                buttonVariants({ variant: "destructive" }),
              ])}
            >
              Reset
            </Button>
            <Button type="submit" className="w-[108px] font-bold">
              Calculate
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex h-10 w-full items-center justify-center border-t pt-4">
          <span className="h-8 w-24 border-b font-semibold">{bmi}</span>
        </div>
      </CardFooter>
    </Card>
  );
}

export default Calculator;
