const RegisterFiels = ({label, type, name, value, handleChange, icon, required, readOnly = false}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
          readOnly={readOnly}
          placeholder="Ingresa tu nombre completo"
          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-200 hover:border-amber-300"
        />
      </div>
    </div>
  );
};

export default RegisterFiels;
