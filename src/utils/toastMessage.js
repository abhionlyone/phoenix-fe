import { toast } from "react-semantic-toasts";

const renderMessage = (title, description, type, icon = "checkmark") => {
  console.log(title, description);
  toast({
    type: type,
    icon: icon,
    title: title,
    description: description,
    animation: "bounce",
    time: 25000,
    onClose: () => {},
    onClick: () => {},
    onDismiss: () => {}
  });
};

const successMessage = (title, description) => {
  renderMessage(title, description, 'success')
}

const errorMessage = (title, description) => {
  renderMessage(title, description, 'error', 'stop circle')
}

export{successMessage, errorMessage, renderMessage}