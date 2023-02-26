import React from "react";
import { cookies } from "next/headers";

import { getUserFromCookie } from "@/lib/auth";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SignOutButton from "@/components/SignOutButton";
import { delay } from "@/lib/async";

export * from "./GreetingsSkeleton";

const getData = async () => {
  await delay(5000);
  const user = await getUserFromCookie(cookies());
  return user;
};

const Greetings = async () => {
  const user = await getData();

  return (
    <Card className="w-full py-4 relative">
      <div className="mb-4">
        <div className="flex gap-2">
          <h1 className="text-3xl text-gray-700 font-bold mb-4">
            Hello, {user?.firstName}!
          </h1>
          <SignOutButton />
        </div>
        <h4 className="text-xl text-gray-400">
          Check your daily tasks and schedule
        </h4>
      </div>
      <div>
        <Button size="large">Today&rsquo;s Schedule</Button>
      </div>
    </Card>
  );
};

export default Greetings;
