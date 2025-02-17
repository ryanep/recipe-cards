import { AssistantForm } from "#/components/assistant-form";
import { Heading } from "#/components/heading";

const AssistantPage = () => {
  return (
    <div>
      <div className="mb-8">
        <Heading type="h1">Assistant</Heading>

        <p className="text-lg font-medium text-neutral-500 dark:text-neutral-400">
          Generate and find new recipes.
        </p>
      </div>

      <AssistantForm />
    </div>
  );
};

export default AssistantPage;
