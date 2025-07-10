import React from 'react';
import { 
  Plus, 
  Calendar, 
  FileText, 
  Users, 
  Settings, 
  BarChart3,
  ArrowRight
} from 'lucide-react';

const QuickActions = () => {
  const actions = [
    {
      title: 'Nueva Reserva',
      description: 'Crear una reserva manual',
      icon: Plus,
      color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
      iconColor: 'text-blue-600',
      action: () => console.log('Nueva reserva')
    },
    {
      title: 'Ver Calendario',
      description: 'Revisar disponibilidad',
      icon: Calendar,
      color: 'bg-green-50 hover:bg-green-100 border-green-200',
      iconColor: 'text-green-600',
      action: () => console.log('Ver calendario')
    },
    {
      title: 'Generar Reporte',
      description: 'Reportes de ocupación',
      icon: FileText,
      color: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
      iconColor: 'text-purple-600',
      action: () => console.log('Generar reporte')
    },
    {
      title: 'Gestionar Huéspedes',
      description: 'Ver lista de huéspedes',
      icon: Users,
      color: 'bg-amber-50 hover:bg-amber-100 border-amber-200',
      iconColor: 'text-amber-600',
      action: () => console.log('Gestionar huéspedes')
    },
    {
      title: 'Configuración',
      description: 'Ajustes del sistema',
      icon: Settings,
      color: 'bg-gray-50 hover:bg-gray-100 border-gray-200',
      iconColor: 'text-gray-600',
      action: () => console.log('Configuración')
    },
    {
      title: 'Analytics',
      description: 'Ver métricas detalladas',
      icon: BarChart3,
      color: 'bg-red-50 hover:bg-red-100 border-red-200',
      iconColor: 'text-red-600',
      action: () => console.log('Analytics')
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-amber-400 to-yellow-500" />
      
      <div className="p-6">
        <h2 className="text-xl font-serif font-semibold text-gray-800 mb-6">Acciones Rápidas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            
            return (
              <button
                key={index}
                onClick={action.action}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left group ${action.color}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center ${action.iconColor}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-1">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;