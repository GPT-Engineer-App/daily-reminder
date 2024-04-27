import { useState } from "react";
import { Box, Input, Button, List, ListItem, ListIcon, IconButton, Checkbox } from "@chakra-ui/react";
import { FaTrash, FaPlus, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: input,
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
      setInput("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)));
  };

  return (
    <Box p={5}>
      <Box mb={4}>
        <Input placeholder="Add a new task" value={input} onChange={(e) => setInput(e.target.value)} size="lg" />
        <Button leftIcon={<FaPlus />} colorScheme="blue" ml={2} onClick={handleAddTask}>
          Add Task
        </Button>
      </Box>
      <List spacing={3}>
        {tasks.map((task) => (
          <ListItem key={task.id} d="flex" alignItems="center">
            <Checkbox isChecked={task.isCompleted} onChange={() => handleToggleComplete(task.id)} mr={2}>
              {task.text}
            </Checkbox>
            <IconButton aria-label="Delete task" icon={<FaTrash />} onClick={() => handleDeleteTask(task.id)} colorScheme="red" size="sm" ml="auto" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
