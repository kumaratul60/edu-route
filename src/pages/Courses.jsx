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
      {result.map((courses) => {
        return (
          <section class="text-gray-600 body-font">
            <div class="container px-5 mx-auto">
              <div class="flex flex-wrap m-4">
                {courses.map((course) => {
                  return (
                    <Card
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
