"use client";

import { courses } from "@/db/schema";
import Card from "./card";

type Props = {
  courses: (typeof courses.$inferSelect)[]; // wer are getting the type of the courses from the schema
  activeCourseId: number;
};
const List = ({ courses, activeCourseId }: Props) => {
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
            onClick={() => {}}
            active={course.id === activeCourseId}
          />
        );
      })}
    </div>
  );
};

export default List;
