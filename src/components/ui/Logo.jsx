const RightNowLogoMinimal = ({ className = "", size = "medium" }) => {
    // Tamaños predefinidos
    const sizes = {
      small: { width: 120, height: 40, fontSize: "text-lg", iconSize: 16 },
      medium: { width: 180, height: 60, fontSize: "text-2xl", iconSize: 24 },
      large: { width: 240, height: 80, fontSize: "text-3xl", iconSize: 32 },
    }
  
    const { width, height, fontSize, iconSize } = sizes[size] || sizes.medium
  
    return (
      <div className={`flex items-center ${className}`}>
        <div className="relative" style={{ width, height: height * 0.8 }}>
          {/* Contenido del logo */}
          <div className="flex items-center justify-center h-full">
            {/* Icono de llave */}
            <div className="mr-3 text-amber-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="8" r="4" />
                <path d="M10.5 8 22 8" />
                <path d="m18 4 4 4-4 4" />
                <path d="M15 8v8c0 .6-.4 1-1 1H2" />
                <path d="m2 17 4 4" />
                <path d="m6 17-4 4" />
              </svg>
            </div>
  
            {/* Texto del logo */}
            <div className="border-l-2 border-amber-500 pl-3">
              <h1 className={`font-bold ${fontSize} text-amber-500 leading-none`}>
                RIGHT<span className="font-light">NOW</span>
              </h1>
              <p className="text-xs text-amber-400 tracking-widest">LUXURY HOTEL</p>
            </div>
          </div>
  
          {/* Línea decorativa */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300"></div>
        </div>
      </div>
    )
  }

  export default RightNowLogoMinimal