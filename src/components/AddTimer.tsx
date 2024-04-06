// REACT
import { useRef } from "react";

// UI COMPONENTS
import { Button, Input, Form } from "../ui";
import { FormHandle } from "../ui/Form";

// CONTEXTS
import { useTimersContext } from "../contexts";

function AddTimer() {
  const { addTimer } = useTimersContext();

  const form = useRef<FormHandle>(null);

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };

    console.log(extractedData);

    addTimer({
      name: extractedData.name,
      duration: +extractedData.duration,
    });

    form.current?.clear();
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
}

export default AddTimer;
