const Routes = {
    Logo: '/logo',
    Logout: '/logout',
    DashboardMap: '/dashboard-map',
    Login: '/login',
    SignUp: '/signup',
    RegisterVerification: '/signup/verification',
    ForgotPassword: '/forgot-password',
    Verification: '/forgot-password/verification',
    ResetPassword: '/forgot-password/reset-password',
  
    ProfileSettings: '/account/profile-settings',
    ManageSubscription: '/account/manage-subscription',
    Referral: '/account/referral',
    DashboardList: '/dashboard-list',
    StationDetail: (unitId = ':unitId', stationId = ':stationId') =>
      `/dashboard-list/units/${unitId}/stations/${stationId}`,
    ChangePassword: '/change-password',
    Report: '/dashboard-list/report',
    Healthy: '/dashboard-list/healthy',
    Scenario: '/dashboard-list/smart/scenario',
    EditScenario: (scriptId = ':scripId') =>
      `/dashboard-list/smart/scenario/${scriptId}/edit`,
    Automation: '/dashboard-list/smart/automation',
    EditAutomation: (scriptId = ':scripId') =>
      `/dashboard-list/smart/automation/${scriptId}/edit`,
    AllDashboard: '/dev-mode/dashboards',
    HomePage: '/',
    AllGateway: '/dev-mode/gateways',
    ManageUnit: '/dev-mode/manage-unit',
    DeviceDetail: (
      unitId = ':unitId',
      subUnitId = ':subUnitId',
      endDeviceId = ':endDeviceId'
    ) =>
      `/dev-mode/manage-unit/${unitId}/sub-unit/${subUnitId}/device-display/${endDeviceId}`,
    GatewayDetail: (chipId = ':chipId') => `/dev-mode/gateways/${chipId}`,
    ModbusDeviceDetail: (
      chipId = ':chipId',
      modbusDeviceId = ':modbusDeviceId'
    ) => `/dev-mode/gateways/${chipId}/modbus-devices/${modbusDeviceId}`,
    ZigbeeDeviceDetail: (
      chipId = ':chipId',
      zigbeeDeviceId = ':zigbeeDeviceId'
    ) => `/dev-mode/gateways/${chipId}/zigbee-devices/${zigbeeDeviceId}`,
    ArduinoDeviceDetail: (
      chipId = ':chipId',
      arduinoDeviceId = ':arduinoDeviceId'
    ) => `/dev-mode/gateways/${chipId}/io-pins/${arduinoDeviceId}`,
    UnitDetail: (dashboardId = ':dashboardId') =>
      `/dev-mode/dashboards/${dashboardId}`,
    EditUnit: (dashboardId = ':dashboardId') =>
      `/dev-mode/dashboards/${dashboardId}/edit`,
    Pricing: '/subscription',
    Processing: '/processing',
  };
  
  export default Routes;
  