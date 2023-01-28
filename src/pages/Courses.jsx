import React from "react";
import Card from "../components/Card";
import Banner from "../components/Banner";

import { coursesList } from "../categories/courses";

const Courses = () => {
  const numPerGroup = Math.ceil(coursesList.length / 3);
  const result = new Array(3)
    .fill("")
    .map((_, i) => coursesList.slice(i * numPerGroup, (i + 1) * numPerGroup));
  return (
    <>
      <Banner />
      {result.map((courses, i) => {
        return (
          <section className="text-gray-600 body-font " key={i}>
            <div className="container px-5 mx-auto">
              <div className="flex flex-wrap m-4 ">
                {courses.map((course) => {
                  return (
                    <Card
                      key={course.id}
                      image={course.img}
                      text={course.text}
                      title={course.name}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Courses;
