interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine v5',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
