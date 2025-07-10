import React from 'react';
import { 
  Calendar, 
  DollarSign, 
  Users, 
  Building2, 
  TrendingUp, 
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const DashboardStats = () => {
  const stats = [
    {
      title: 'Reservas Activas',
      value: '24',
      change: '+12%',
      changeType: 'increase',
      icon: Calendar,
      color: 'bg-blue-50 text-blue-600',
      bgColor: 'bg-blue-500'
    },
    {
      title: 'Ingresos del Mes',
      value: '$2,450,000',
      change: '+8.2%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'bg-green-50 text-green-600',
      bgColor: 'bg-green-500'
    },
    {
      title: 'Huéspedes Totales',
      value: '156',
      change: '+15%',
      changeType: 'increase',
      icon: Users,
      color: 'bg-purple-50 text-purple-600',
      bgColor: 'bg-purple-500'
    },
    {
      title: 'Ocupación',
      value: '78%',
      change: '-3%',
      changeType: 'decrease',
      icon: Building2,
      color: 'bg-amber-50 text-amber-600',
      bgColor: 'bg-amber-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        const isIncrease = stat.changeType === 'increase';
        
        return (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                <IconComponent className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                isIncrease 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-red-100 text-red-600'
              }`}>
                {isIncrease ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {stat.change}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardStats;