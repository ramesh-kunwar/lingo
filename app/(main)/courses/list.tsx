"use client";

import { courses, userProgress } from "@/db/schema";
import Card from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type Props = {
  courses: (typeof courses.$inferSelect)[]; // wer are getting the type of the courses from the schema
  activeCourseId?: (typeof userProgress.$inferSelect)["activeCourseId"];
};
const List = ({ courses, activeCourseId }: Props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;

    if (id === activeCourseId) {
      return router.push("/learn");
    }

    startTransition(() => {
      upsertUserProgress(id).catch(() => toast.error("Something went wrong."));
    });
  };
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => {
        return (
          <Card
            key={course.id}
            id={course.id}
            title={course.title ?? ""}
            imageSrc={course.imageSrc ?? ""}
            disabled={false}
            onClick={onClick}
            active={course.id === activeCourseId}
          />
        );
      })}
    </div>
  );
};

export default List;
