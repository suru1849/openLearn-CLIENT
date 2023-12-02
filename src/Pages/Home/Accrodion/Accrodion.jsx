import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

const Accrodion = () => {
  return (
    <div className=" my-20">
      <h1 className="text-3xl font-bold text-center my-10">FAQ</h1>
      <Accordion collapseAll>
        <AccordionPanel>
          <AccordionTitle>What is our goal?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Provide you the best knowledge.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>Is oue instructors are qualified?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Yes, our instructors are highly qualified.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>What will we provide you?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Raw materials of any topic
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
};

export default Accrodion;
