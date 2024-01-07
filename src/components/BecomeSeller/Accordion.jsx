"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function BecomeSellerAccordion() {
  const data = [
    {
      id: 1,
      question: "Question 01",
      answer: "Answer 01",
    },
    {
      id: 2,
      question: "Question 01",
      answer: "Answer 01",
    },
    {
      id: 3,
      question: "Question 01",
      answer: "Answer 01",
    },
    {
      id: 4,
      question: "Question 01",
      answer: "Answer 01",
    },
    {
      id: 5,
      question: "Question 01",
      answer: "Answer 01",
    },
  ];

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="p-5 lg:px-60 space-y-5 py-20">
      <h2 className="text-4xl lg:text-5xl text-center text-gray-900 py-5 font-bold">
        Frequently Asked Questions
      </h2>
      {data?.map((item) => (
        <Accordion key={item.id} open={open === item.id}>
          <AccordionHeader
            className="font-normal"
            onClick={() => handleOpen(item.id)}
          >
            {item.question}
          </AccordionHeader>
          <AccordionBody>{item.question}</AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}
