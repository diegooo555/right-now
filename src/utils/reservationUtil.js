import { CheckCircle, AlertCircle, XCircle, Clock } from "lucide-react";

export const getStatusInfo = (status) => {
  switch (status.toUpperCase()) {
    case "CONFIRMED":
      return {
        color: "bg-green-100 text-green-800 border-green-200",
        icon: CheckCircle,
        label: "Confirmada",
      };
    case "UNCONFIRMED":
      return {
        color: "bg-amber-100 text-amber-800 border-amber-200",
        icon: AlertCircle,
        label: "Pendiente",
      };
    case "CANCELLED":
      return {
        color: "bg-red-100 text-red-800 border-red-200",
        icon: XCircle,
        label: "Cancelada",
      };
    default:
      return {
        color: "bg-gray-100 text-gray-800 border-gray-200",
        icon: Clock,
        label: status,
      };
  }
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const formattedDate = date.toLocaleDateString("es-ES", options);
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};

export const calculateDuration = (checkIn, checkOut) => {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};
