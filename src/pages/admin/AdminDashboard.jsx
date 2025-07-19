import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import DashboardStats from '../../components/admin/DashboardStats';
import RecentReservations from '../../components/admin/RecentReservations';
import QuickActions from '../../components/admin/QuickActions';
import { 
  Calendar, 
  TrendingUp, 
  Users, 
  Building2,
  Clock,
  Bell
} from 'lucide-react';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-800">Dashboard Administrativo</h1>
              <p className="text-amber-600 mt-1">Bienvenido al panel de control de Villa Libertad</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                <Clock className="w-4 h-4 text-amber-500" />
                <span className="text-sm text-gray-600">
                  {new Date().toLocaleDateString('es-ES', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              
              <button className="relative p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <DashboardStats />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Reservations - Takes 2 columns */}
          <div className="lg:col-span-2">
            <RecentReservations />
          </div>
          
          {/* Quick Actions - Takes 1 column */}
          <div>
            <QuickActions />
          </div>
        </div>

        {/* Additional Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Occupancy Chart Widget */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Ocupación</h3>
                <p className="text-sm text-gray-600">Esta semana</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Lun</span>
                <span className="font-medium">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>

          {/* Revenue Widget */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Ingresos</h3>
                <p className="text-sm text-gray-600">Hoy</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-800">$450,000</p>
            <p className="text-sm text-green-600">+12% vs ayer</p>
          </div>

          {/* Check-ins Today */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Check-ins</h3>
                <p className="text-sm text-gray-600">Hoy</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-800">8</p>
            <p className="text-sm text-gray-600">huéspedes esperados</p>
          </div>

          {/* Available Rooms */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Disponibles</h3>
                <p className="text-sm text-gray-600">Habitaciones</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-800">12</p>
            <p className="text-sm text-gray-600">de 25 habitaciones</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;