
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, AlertTriangle, Clock, Users, TrendingUp, Download } from 'lucide-react';

interface DashboardContentProps {
  user: any;
}

export const DashboardContent = ({ user }: DashboardContentProps) => {
  const expiringDocuments = [
    {
      id: 1,
      name: 'Business License 2024',
      type: 'License',
      department: 'Legal',
      expiryDate: '2024-07-15',
      daysLeft: 6,
      status: 'critical'
    },
    {
      id: 2,
      name: 'Insurance Policy - General',
      type: 'Insurance',
      department: 'Finance',
      expiryDate: '2024-07-20',
      daysLeft: 11,
      status: 'warning'
    },
    {
      id: 3,
      name: 'Software License - Adobe',
      type: 'License',
      department: 'IT',
      expiryDate: '2024-07-25',
      daysLeft: 16,
      status: 'info'
    },
  ];

  const recentUploads = [
    {
      id: 1,
      name: 'Employee Handbook 2024',
      type: 'Policy',
      uploadedBy: 'Sarah Johnson',
      uploadDate: '2024-07-08',
      department: 'HR'
    },
    {
      id: 2,
      name: 'Tax Certificate Q2',
      type: 'Certificate',
      uploadedBy: 'Mike Chen',
      uploadDate: '2024-07-07',
      department: 'Finance'
    },
    {
      id: 3,
      name: 'Security Audit Report',
      type: 'Report',
      uploadedBy: 'Alex Wilson',
      uploadDate: '2024-07-06',
      department: 'IT'
    },
  ];

  const getStatusBadge = (status: string, daysLeft: number) => {
    if (status === 'critical') {
      return <Badge variant="destructive">Expires in {daysLeft} days</Badge>;
    } else if (status === 'warning') {
      return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">Expires in {daysLeft} days</Badge>;
    } else {
      return <Badge variant="secondary">Expires in {daysLeft} days</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name.split(' ')[0]}!</h1>
          <p className="text-gray-600 mt-1">Here's what's happening with your documents today.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
            <FileText className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Next 30 days
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Uploads</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              This week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">
              Online now
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Expiring Documents */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-orange-600" />
              Documents Expiring Soon
            </CardTitle>
            <CardDescription>
              Documents that require your attention
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {expiringDocuments.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{doc.name}</h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-500">{doc.type}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{doc.department}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">Expires {doc.expiryDate}</span>
                  </div>
                </div>
                <div className="ml-4">
                  {getStatusBadge(doc.status, doc.daysLeft)}
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full">
              View All Expiring Documents
            </Button>
          </CardContent>
        </Card>

        {/* Recent Uploads */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 mr-2 text-blue-600" />
              Recent Uploads
            </CardTitle>
            <CardDescription>
              Latest documents added to the system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentUploads.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{doc.name}</h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-500">{doc.type}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{doc.department}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">by {doc.uploadedBy}</span>
                  </div>
                </div>
                <div className="ml-4">
                  <Badge variant="outline">{doc.uploadDate}</Badge>
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full">
              View All Documents
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
